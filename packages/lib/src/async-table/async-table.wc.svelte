<svelte:options
  customElement={{
    tag: 'jp-async-table',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { get } from '../utils/json-pointer';
  import type { TableHeader } from '../types/table-header.interface';
  import type { TableSort } from '../types/table-sort.interface';
  import type { TableService } from '../types/table.service';
  import './async-table.wc.pcss';

  export let wording = {
    ARRANGE_COLUMNS: 'Arrange columns',
    EXPORT: 'Export',
    IMPORT: 'Import',
    LOADING: 'Loading',
    LOAD_MORE: 'Load more',
    PAGE_SIZE: 'Page size',
    SAVE: 'Save'
  };
  export let allowArrangeColumns = true;
  export let showArrangingColumns = true;
  export let freezeFirstColumn = false;
  export let freezeLastColumn = false;
  export let showExport = true;
  export let showImport = true;
  export let rowClickable = false;
  export let headers: TableHeader[] = [];
  export let pageSizes: number[] = [10, 25, 50, 100];
  export let pageSize: number = pageSizes[0];
  export let sort: TableSort;
  export let service: TableService;
  export let id: string;
  export let height: string | null = null;
  export let getData = async () => {
    const data = await service.get(sort, pageSize);

    rows = data.rows;
    hasMore = data.hasMore;

    loading = false;
  };
  export let rows: any[] = [];
  export let arrangeColumnDialog = false;
  export let showLoadMore = true;

  let formattedPageSizes = JSON.stringify(pageSizes.map((s) => ({ label: s, value: s })));
  let loading = true;
  let hasMore = false;
  let exportLoading = false;
  let arrangementColumns: Array<TableHeader & { enabled: boolean }> = [];
  let saveArrangementLoading = false;
  let importFileEl: HTMLInputElement;
  let importLoading = false;

  const dispatch = createEventDispatcher();

  export async function removeRow(value: any, key = 'id') {
    rows = rows.filter((it) => it[key] !== value);
  }

  export async function addRow(value: any) {
    rows = [...rows, value];
  }

  export async function updateRow(value: any, index: number) {
    rows = rows.map((it, ind) => (ind === index ? { ...it, ...value } : it));
  }

  async function handleColumn(header: TableHeader, row: any, index: number) {
    const { key, fallback, pipes } = header;

    let value: any;

    try {
      value = get(row, key);
    } catch {
      return fallback || '';
    }

    if (!pipes) {
      return value;
    }

    for (const pipe of pipes) {
      value = await pipe(value, row, index);
    }

    return value;
  }

  async function adjustSort(header: TableHeader) {
    const { sortable } = header;

    if (!sortable) {
      return;
    }

    loading = true;

    sort = {
      key: header.key,
      direction: sort?.key === header.key ? (sort.direction === 'asc' ? 'desc' : 'asc') : 'asc'
    };

    const [data] = await Promise.all([service.get(sort, pageSize), service.adjustSort(sort)]);

    rows = data.rows;
    hasMore = data.hasMore;

    loading = false;
  }

  async function loadMore() {
    loading = true;

    const data = await service.loadMore(sort, pageSize);

    rows = [...rows, ...data.rows];
    hasMore = data.hasMore;

    loading = false;
  }

  function rowClick(row: any, index: number, header: TableHeader, event: any) {
    dispatch('rowClick', {
      row,
      index,
      header,
      originalEvent: event
    });
  }

  async function updatePageSize(event: { detail: number }) {
    pageSize = event.detail;

    await Promise.all([getData(), service.adjustPageSize(pageSize)]);
  }

  async function exportData() {
    if (exportLoading) {
      return;
    }

    exportLoading = true;

    const activeHeaders = headers.filter(header => !header.disabled);
    const data = await service.export!();
    const resolved = await Promise.all(
      data.map(async (row, index) => {
        const columns = await Promise.all(
          activeHeaders
            .map((header) =>
              handleColumn(
                {
                  key: header.key,
                  fallback: header.exportFallback || header.fallback,
                  pipes: header.exportPipes || header.pipes || []
                } as TableHeader,
                row,
                index
              )
            )
        );

        return columns.map((col) => `"${col || ''}"`).join(',');
      })
    );
    const blob = new Blob(
      [
        [
          activeHeaders
            .map((h) => h.label)
            .map((label) => `"${label}"`)
            .join(','),
          ...resolved
        ].join('\n')
      ],
      { type: 'text/csv' }
    );
    const link = document.createElement('a');

    link.href = URL.createObjectURL(blob);
    link.download = 'export.csv';
    link.click();

    exportLoading = false;
  }

  function dragstart(event: DragEvent, header: TableHeader) {
    event.dataTransfer!.setData('text/plain', header.key);
  }

  function dragover(event: DragEvent) {
    event.preventDefault();
  }

  async function drop(event: DragEvent, targetIndex: number) {
    event.preventDefault();

    const draggedColumn = event.dataTransfer!.getData('text/plain');
    const currentIndex = headers.findIndex(header => header.key === draggedColumn);

    if (currentIndex !== -1 && Number.isInteger(targetIndex)) {
      const newHeaders = [...headers];
      newHeaders.splice(currentIndex, 1);
      newHeaders.splice(Number(targetIndex), 0, headers.find(header => header.key === draggedColumn)!);

      headers = headers
        .sort((a, b) => {
          const aIndex = newHeaders.findIndex(header => header.key === a.key);
          const bIndex = newHeaders.findIndex(header => header.key === b.key);
          return aIndex - bIndex;
        });

      if (service.arrangeColumns) {
        await service.arrangeColumns(
          id,
          headers.map(header => ({
            key: header.key,
            disabled: header.disabled
          }))
        );
      }
    }
  }

  function arrangeColumns() {
    arrangementColumns = [...headers]
      .map((item: any) => {
        item.enabled = !item.disabled;
        return item;
      });

    arrangeColumnDialog = true;
  }

  async function importData(event: any) {
    if (importLoading) {
      return;
    }

    if (!event.target.files || !event.target.files[0]) {
      return;
    }

    importLoading = true;

    const r = await service.import!(event.target.files[0]);

    if (r?.length) {
      rows = [...r, ...rows];
    }

    event.target.value = '';
    importLoading = false;
  }

  async function saveColumnArrangement() {
    if (saveArrangementLoading) {
      return;
    }

    saveArrangementLoading = true;
    headers = [...arrangementColumns].map((it) => {
      it.disabled = !it.enabled;
      // @ts-ignore
      delete it.enabled;
      return it;
    });

    if (service.arrangeColumns) {
      await service.arrangeColumns(
        id,
        headers.map(header => ({
          key: header.key,
          disabled: header.disabled
        }))
      );
    }

    saveArrangementLoading = false;
    arrangeColumnDialog = false;
  }

  onMount(async () => {
    if (service.getColumnOrder) {
      const pulledHeaders = await service.getColumnOrder(id);

      if (pulledHeaders) {
        headers = headers
          .map((header) => {
            header.disabled = !pulledHeaders.find(it => it.key === header.key);
            return header;
          })
          .sort((a, b) => {
            const aIndex = pulledHeaders.findIndex(it => it.key === a.key);
            const bIndex = pulledHeaders.findIndex(it => it.key === b.key);
            return aIndex - bIndex;
          });
      }
    }

    await getData();
  });
</script>

<div class="jp-table">
  {#if showArrangingColumns || showImport || showExport}
    <div class="jp-table-header">
      {#if showArrangingColumns}
        &nbsp;
        <button type="button" on:click={arrangeColumns} class="jp-table-button">
          {wording.ARRANGE_COLUMNS}
        </button>
      {/if}

      {#if showImport}
        &nbsp;
        <button
          type="button"
          class="jp-table-button"
          on:click={() => importFileEl.click()}
        >
          {wording.IMPORT}
        </button>
      {/if}
      {#if showExport}
        &nbsp;
        <button
          type="button"
          class="jp-table-button"
          on:click={exportData}
          class:jp-table-loading={exportLoading}
          disabled={exportLoading}
        >
          {#if exportLoading}
            <span class="jp-table-spinner"></span>
            {wording.LOADING}
          {:else}
            {wording.EXPORT}
          {/if}
        </button>
      {/if}
    </div>
  {/if}

  <div class="jp-table-container" style:height={height}>
    <table>
      {#if headers}
        <tr>
          {#each headers as header, index}
            {#if !header.disabled}
              <th
                class:jp-table-sortable={allowArrangeColumns && header.sortable}
                class:jp-table-sticky-first={freezeFirstColumn && index === 0}
                class:jp-table-sticky-last={index === headers.length - 1 && freezeLastColumn}
                on:click={() => adjustSort(header)}
                on:drop={(e) => drop(e, index)}
                on:dragover={dragover}
              >
                <span
                  class:jp-table-draggable-column={allowArrangeColumns}
                  draggable={allowArrangeColumns}
                  tabindex="-1"
                  role="button"
                  aria-label="Drag handle"
                  on:dragstart={(e) => dragstart(e, header)}
                >
                  {@html header.label}
                </span>

                {#if sort?.key === header.key}
                  <span class="jp-table-sortable">{sort.direction === 'asc' ? '↑' : '↓'}</span>
                {/if}
              </th>
            {/if}
          {/each}
        </tr>
      {/if}

      {#if rows}
        {#each rows as row, ind}
          <tr class:jp-table-highlight={rowClickable}>
            {#each headers as header, index}
              {#if !header.disabled}
                <td
                  on:click={(e) => rowClick(row, index, header, e)}
                  class:jp-table-sticky-first={freezeFirstColumn && index === 0}
                  class:jp-table-sticky-last={index === headers.length - 1 && freezeLastColumn}
                >
                  {#await handleColumn(header, row, ind) then val}
                    <span class="jp-table-cell">
                      {@html val}
                    </span>
                  {/await}
                </td>
              {/if}
            {/each}
          </tr>
        {/each}
      {/if}
    </table>
  </div>

  <div class="jp-table-actions">
    {#if showLoadMore}
      <button
        type="button"
        class="jp-table-button"
        class:jp-table-loading={loading}
        disabled={!hasMore}
        on:click={loadMore}
      >
        {#if loading}
          <span class="jp-table-spinner"></span>
          {wording.LOADING}
        {:else}
          {wording.LOAD_MORE}
        {/if}
      </button>
    {/if}
    {#if pageSizes.length > 1}
      <jp-select
        label={wording.PAGE_SIZE}
        options={formattedPageSizes}
        value={pageSize}
        on:value={updatePageSize}
      ></jp-select>
    {/if}
  </div>
</div>

{#if arrangeColumnDialog}
  <div class="jp-table-arrange-columns-dialog">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="jp-table-arrange-columns-dialog-backdrop"
      on:click={() => (arrangeColumnDialog = false)}
    ></div>
    <form class="jp-table-arrange-columns-dialog-inner" on:submit|preventDefault={saveColumnArrangement}>
      <main>
        {#each arrangementColumns as column}
          <label>
            <input type="checkbox" value={true} bind:checked={column.enabled} />
            <span>{@html column.label}</span>
          </label>
        {/each}
      </main>

      <footer>
        <button
          type="submit"
          class="jp-table-button"
          class:jp-table-loading={saveArrangementLoading}
          disabled={saveArrangementLoading}
        >
          {#if loading}
            <span class="spinner"></span>
            {wording.LOADING}
          {:else}
            {wording.SAVE}
          {/if}
        </button>
      </footer>
    </form>
  </div>
{/if}

<input type="file" accept=".csv" bind:this={importFileEl} on:change={importData} hidden />

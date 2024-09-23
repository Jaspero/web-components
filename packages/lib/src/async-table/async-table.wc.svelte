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

  let formattedPageSizes = JSON.stringify(pageSizes.map((s) => ({ label: s, value: s })));
  let loading = true;
  let hasMore = false;
  let exportLoading = false;
  let activeHeaders: TableHeader[];
  let columnOrder: string[] = [];
  let arrangementColumns: Array<TableHeader & { enabled: boolean }> = [];
  let saveArrangementLoading = false;
  let importFileEl: HTMLInputElement;
  let importLoading = false;

  $: activeHeaders = headers.filter((it) => !it.disabled);

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

    const data = await service.export();
    const resolved = await Promise.all(
      data.map(async (row, index) => {
        const columns = await Promise.all(
          activeHeaders.map((header) =>
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
    event.dataTransfer.setData('text/plain', header.key);
  }

  function dragover(event: DragEvent) {
    event.preventDefault();
  }

  async function drop(event: DragEvent, targetIndex: number) {
    event.preventDefault();

    const draggedColumn = event.dataTransfer.getData('text/plain');
    const currentIndex = columnOrder.indexOf(draggedColumn);

    if (currentIndex !== -1 && Number.isInteger(targetIndex)) {
      columnOrder.splice(currentIndex, 1);
      columnOrder.splice(Number(targetIndex), 0, draggedColumn);

      activeHeaders = headers
        .filter((it) => !it.disabled)
        .sort((a, b) => {
          const aIndex = columnOrder.indexOf(a.key);
          const bIndex = columnOrder.indexOf(b.key);
          return aIndex - bIndex;
        });

      if (service.arrangeColumns) {
        await service.arrangeColumns(
          id,
          activeHeaders.map((it) => it.key)
        );
      }
    }
  }

  function arrangeColumns() {
    arrangementColumns = [...headers]
      .map((item: any) => {
        item.enabled = !item.disabled;
        return item;
      })
      .sort((a, b) => {
        const aIndex = columnOrder.indexOf(a.key);
        const bIndex = columnOrder.indexOf(b.key);
        return aIndex - bIndex;
      });

    arrangeColumnDialog = true;
  }

  async function importData(event) {
    if (importLoading) {
      return;
    }

    if (!event.target.files || !event.target.files[0]) {
      return;
    }

    importLoading = true;

    const r = await service.import(event.target.files[0]);

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
      delete it.enabled;
      return it;
    });
    activeHeaders = headers.filter((it) => !it.disabled);
    columnOrder = activeHeaders.map((header) => header.key);

    if (service.arrangeColumns) {
      await service.arrangeColumns(
        id,
        activeHeaders.map((it) => it.key)
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
            header.disabled = !pulledHeaders.includes(header.key);
            return header;
          })
          .sort((a, b) => {
            const aIndex = pulledHeaders.indexOf(a.key);
            const bIndex = pulledHeaders.indexOf(b.key);
            return aIndex - bIndex;
          });
      }
    }

    activeHeaders = headers.filter((it) => !it.disabled);
    columnOrder = activeHeaders.map((header) => header.key);
    await getData();
  });
</script>

<div class="table-card">
  {#if showArrangingColumns || showImport || showExport}
    <div class="table-header">
      {#if showArrangingColumns}
        &nbsp;
        <button type="button" on:click={arrangeColumns} class="table-button settings-button">
          {wording.ARRANGE_COLUMNS}
        </button>
      {/if}

      {#if showImport}
        &nbsp;
        <button
          type="button"
          class="table-button settings-button"
          on:click={() => importFileEl.click()}
        >
          {wording.IMPORT}
        </button>
      {/if}
      {#if showExport}
        &nbsp;
        <button
          type="button"
          class="table-button settings-button"
          on:click={exportData}
          class:loading={exportLoading}
          disabled={exportLoading}
        >
          {#if exportLoading}
            <span class="spinner"></span>
            {wording.LOADING}
          {:else}
            {wording.EXPORT}
          {/if}
        </button>
      {/if}
    </div>
  {/if}

  <div class="table-container" style:height={height}>
    <table>
      {#if activeHeaders}
        <tr>
          {#each activeHeaders as header, index}
            <th
              class:sortable={allowArrangeColumns && header.sortable}
              class:sticky-first={freezeFirstColumn && index === 0}
              class:sticky-last={index === activeHeaders.length - 1 && freezeLastColumn}
              on:click={() => adjustSort(header)}
              on:drop={(e) => drop(e, index)}
              on:dragover={dragover}
            >
              <span
                class:draggable-column={allowArrangeColumns}
                draggable={allowArrangeColumns}
                tabindex="-1"
                role="button"
                aria-label="Drag handle"
                on:dragstart={(e) => dragstart(e, header)}
              >
                {@html header.label}
              </span>

              {#if sort?.key === header.key}
                <span class="sortable">{sort.direction === 'asc' ? '↑' : '↓'}</span>
              {/if}
            </th>
          {/each}
        </tr>
      {/if}

      {#if rows}
        {#each rows as row, ind}
          <tr class:highlight={rowClickable}>
            {#each activeHeaders as header, index}
              <td
                on:click={(e) => rowClick(row, index, header, e)}
                class:sticky-first={freezeFirstColumn && index === 0}
                class:sticky-last={index === activeHeaders.length - 1 && freezeLastColumn}
              >
                {#await handleColumn(header, row, ind) then val}
                  <span class="cell">
                    {@html val}
                  </span>
                {/await}
              </td>
            {/each}
          </tr>
        {/each}
      {/if}
    </table>
  </div>

  <div class="table-actions">
    <button
      type="button"
      class="table-button load-button"
      class:loading
      disabled={!hasMore}
      on:click={loadMore}
    >
      {#if loading}
        <span class="spinner"></span>
        {wording.LOADING}
      {:else}
        {wording.LOAD_MORE}
      {/if}
    </button>
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
  <div class="arrange-columns-dialog">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="arrange-columns-dialog-backdrop"
      on:click={() => (arrangeColumnDialog = false)}
    ></div>
    <form class="arrange-columns-dialog-inner" on:submit|preventDefault={saveColumnArrangement}>
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
          class="table-button load-button"
          class:loading={saveArrangementLoading}
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

<style lang="postcss">
  .table-card {
    background-color: var(--background-primary);
    border-radius: 0.25rem;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16);
  }

  .table-container {
    overflow-x: auto;
    width: 100%;
  }

  table {
    width: 100%;
  }

  th,
  td {
    text-align: left;
    white-space: nowrap;
    font-size: 0.75rem;
    font-weight: normal;
    padding: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  }

  th {
    position: sticky;
    z-index: 2;
    top: 0;
    background-color: var(--background-primary);
    font-weight: bold;
  }

  .sortable {
    cursor: pointer;
  }

  .draggable-column {
    cursor: grab;
  }

  .cell {
    display: block;
    max-width: 64ch;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .table-actions {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .table-header {
    padding: 1rem;
    min-height: 68px;
    display: flex;
    justify-content: flex-end;
  }

  .table-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    min-width: 4rem;
    height: 2.25rem;
    padding: 0 1rem;
    user-select: none;
  }

  .settings-button {
    background-color: var(--background-secondary);
    color: var(--text-on-secondary);
  }

  .load-button {
    background-color: var(--primary-color);
    color: var(--text-on-primary);
  }

  .load-button:disabled {
    opacity: 0.5;
  }

  .load-button.loading {
    pointer-events: none;
  }

  .highlight {
    cursor: pointer;
    transition: 0.3s;
  }

  .highlight:hover {
    background-color: #ddd;
  }

  .spinner {
    display: block;
    border-top: 2px solid var(--text-on-primary);
    border-bottom: 2px solid var(--text-on-primary);
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    animation: spin 1s linear infinite;
  }

  .arrange-columns-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: flex;
    justify-content: center;
  }
  .arrange-columns-dialog-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1001;
  }
  .arrange-columns-dialog-inner {
    width: 500px;
    max-width: 100%;
    z-index: 1002;
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16);
    margin-top: 50px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    height: min-content;
  }
  .arrange-columns-dialog-inner main {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-bottom: 1rem;
    max-height: 400px;
    overflow-y: auto;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .sticky-first {
    position: sticky;
    left: 0;
    background-color: var(--background-primary);
  }

  td.sticky-first,
  td.sticky-last {
    z-index: 1;
  }

  .sticky-first:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 0.5px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.16);
  }

  .sticky-last {
    position: sticky;
    right: 0;
    background-color: var(--background-primary);
  }

  .sticky-last:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 0.5px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.16);
  }
</style>

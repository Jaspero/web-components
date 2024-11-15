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
  import { clickOutside } from '../utils/click-outside';

  export let wording = {
    ARRANGE_COLUMNS: 'Arrange columns',
    EXPORT: 'Export',
    IMPORT: 'Import',
    SELECT: 'Select data type',
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
  export let dropdownMenuExport = false;
  export let pageSize: number = pageSizes[0];
  export let sort: TableSort;
  export let service: TableService;
  export let id: string;
  export let height: string | null = null;

  let additionalExportTypes = [];
  let activeHeaders: TableHeader[] = [];

  let isOpen = false;
  let resolved: string[] = [];

  const options = [
    { value: 'csv', label: 'CSV' },
    { value: 'json', label: 'JSON' },
    { value: 'xml', label: 'XML' }
  ];
  const switchOptions = [
    {
      label: 'CSV',
      type: 'csv',
      method: () => ({
        fileContent: [activeHeaders.map((h) => `"${h.label}"`).join(','), ...resolved].join('\n'),
        mimeType: 'text/csv',
        extension: 'csv'
      })
    },
    {
      label: 'JSON',
      type: 'json',
      method: () => ({
        fileContent: JSON.stringify(
          resolved.map((row) => {
            const values = row.split(',');
            return Object.fromEntries(
              activeHeaders.map((header, i) => [header.label, values[i]?.replace(/"/g, '') || ''])
            );
          }),
          null,
          2
        ),
        mimeType: 'application/json',
        extension: 'json'
      })
    },
    {
      label: 'XML',
      type: 'xml',
      method: () => ({
        fileContent: `<root>\n${resolved
          .map((row) => `  <row>\n${row}</row>`)
          .join('\n')}\n</root>`,
        mimeType: 'application/xml',
        extension: 'xml'
      })
    }
  ];

  export let getData = async () => {
    const data = await service.get(sort, pageSize);

    rows = data.rows;
    hasMore = data.hasMore;

    loading = false;
    scrollToTop();
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

  async function handleHeader(header: TableHeader) {
    const { label, headerPipes } = header;

    let value = label;

    if (!headerPipes) {
      return value;
    }

    for (const pipe of headerPipes) {
      value = await pipe(value);
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
    const promises = [service.get(sort, pageSize)];

    if (service.adjustSort) {
      promises.push(service.adjustSort(sort) as any);
    }

    const [data] = await Promise.all(promises);

    rows = data.rows;
    hasMore = data.hasMore;

    loading = false;
    scrollToTop();
  }

  async function scrollToTop() {
    const tableContainer = document.querySelector('.jp-async-table-container');
    if (tableContainer) {
      tableContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
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

    const promises = [getData()];

    if (service.adjustPageSize) {
      promises.push(service.adjustPageSize(pageSize));
    }

    await Promise.all(promises);
  }

  async function exportData() {
    if (exportLoading) {
      return;
    }

    exportLoading = true;
    activeHeaders = headers.filter((header) => !header.disabled && !header.hideOnExport);

    const data = await service.export!();
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

  let draggingHeaderKey = '';
  let hoveringOverColumnIndex: number | null = null;
  let dialogHoveringOverColumnIndex: number | null = null;

  function dragstart(event: DragEvent, header: TableHeader) {
    if (header.disableOrganize) {
      return;
    }

    draggingHeaderKey = header.key;
    event.dataTransfer!.setData('text/plain', draggingHeaderKey);
  }

  function dragover(event: DragEvent, index: number) {
    event.preventDefault();

    if (headers[index].disableOrganize) {
      return;
    }

    hoveringOverColumnIndex = index;
    dialogHoveringOverColumnIndex = index;
  }

  function dragleave() {
    hoveringOverColumnIndex = null;
    dialogHoveringOverColumnIndex = null;
  }
  async function drop(event: DragEvent, targetIndex: number) {
    event.preventDefault();

    if (headers[targetIndex].disableOrganize) {
      return;
    }

    hoveringOverColumnIndex = null;
    dialogHoveringOverColumnIndex = null;

    const draggedColumnKey = event.dataTransfer!.getData('text/plain');
    const currentIndex = headers.findIndex((header) => header.key === draggedColumnKey);

    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      const newHeaders = [...headers];
      const newArrangementColumns = [...arrangementColumns];

      const [draggedHeader] = newHeaders.splice(currentIndex, 1);
      const [draggedColumn] = newArrangementColumns.splice(currentIndex, 1);

      newHeaders.splice(targetIndex, 0, draggedHeader);
      newArrangementColumns.splice(targetIndex, 0, draggedColumn);

      headers = newHeaders;
      arrangementColumns = newArrangementColumns;

      if (service.arrangeColumns) {
        await service.arrangeColumns(
          id,
          newHeaders.map((header) => ({
            key: header.key,
            disabled: header.disabled
          }))
        );
      }
    }
  }

  function arrangeColumns() {
    arrangementColumns = [...headers].map((item: any) => {
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
        headers.map((header) => ({
          key: header.key,
          disabled: header.disabled
        }))
      );
    }

    saveArrangementLoading = false;
    arrangeColumnDialog = false;
  }

  async function exportDataGeneric(fileType: string) {
    if (exportLoading) {
      return;
    }

    exportLoading = true;

    activeHeaders = headers.filter((header) => !header.disabled && !header.hideOnExport);
    const data = await service.export!();

    resolved = await Promise.all(
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

    const selectedOption = switchOptions.find((option) => option.type === fileType);
    const { fileContent, mimeType, extension } = selectedOption!.method();

    const blob = new Blob([fileContent], { type: mimeType });
    const link = document.createElement('a');

    link.href = URL.createObjectURL(blob);
    link.download = `export.${extension}`;
    link.click();

    exportLoading = false;
  }

  onMount(async () => {
    if (service.additionalExportTypes) {
      additionalExportTypes = await service.additionalExportTypes();
      additionalExportTypes.forEach((type) => {
        options.push(type.label);
        switchOptions.push({
          label: type.label,
          type: type.type,
          method: type.method
        });
      });
    }

    if (service.getColumnOrder) {
      const pulledHeaders = await service.getColumnOrder(id);
      if (pulledHeaders) {
        headers = headers
          .map((header) => {
            header.disabled = !pulledHeaders.find((it) => it.key === header.key);
            return header;
          })
          .sort((a, b) => {
            const aIndex = pulledHeaders.findIndex((it) => it.key === a.key);
            const bIndex = pulledHeaders.findIndex((it) => it.key === b.key);
            return aIndex - bIndex;
          });
      }
    }

    activeHeaders = headers.filter((it) => !it.disabled);
    await getData();
  });

  const handleOptionClick = (option: string) => {
    exportDataGeneric(option);
    isOpen = false;
  };
</script>

<div class="jp-async-table">
  {#if showArrangingColumns || showImport || showExport}
    <div class="jp-async-table-header">
      {#if showArrangingColumns}
        &nbsp;
        <button type="button" on:click={arrangeColumns} class="jp-async-table-button">
          {wording.ARRANGE_COLUMNS}
        </button>
      {/if}

      {#if showImport}
        &nbsp;
        <button type="button" class="jp-async-table-button" on:click={() => importFileEl.click()}>
          {wording.IMPORT}
        </button>
      {/if}
      {#if showExport}
        &nbsp;
        {#if !dropdownMenuExport}
          <button
            type="button"
            class="jp-async-table-button"
            on:click={exportData}
            class:jp-async-table-loading={exportLoading}
            disabled={exportLoading}
          >
            {#if exportLoading}
              <span class="jp-async-table-spinner"></span>
              {wording.LOADING}
            {:else}
              {wording.EXPORT}
            {/if}
          </button>
        {:else}
          <div class="jp-async-table-dropdown">
            <button type="button" class="jp-async-table-button" on:click={() => (isOpen = !isOpen)}
              >Export</button
            >
            {#if isOpen}
              <ul
                class="jp-async-table-dropdown-menu"
                use:clickOutside
                on:click_outside={() => {
                  isOpen = !isOpen;
                }}
              >
                {#each options as option}
                  <button
                    type="button"
                    class="jp-async-table-dropdown-option"
                    on:click={() => handleOptionClick(option.value)}
                  >
                    {option.label}
                  </button>
                {/each}
              </ul>
            {/if}
          </div>
        {/if}
      {/if}
    </div>
  {/if}

  <div class="jp-async-table-container" style:height>
    <table>
      {#if headers}
        <tr>
          {#each headers as header, index}
            {#if !header.disabled}
              <th
                class:jp-async-table-sortable={allowArrangeColumns && header.sortable}
                class:jp-async-table-sticky-first={freezeFirstColumn && index === 0}
                class:jp-async-table-sticky-last={index === headers.length - 1 && freezeLastColumn}
                class:jp-async-table-no-cursor={header.disableOrganize}
                class:jp-async-table-hover-over={hoveringOverColumnIndex === index}
                draggable={allowArrangeColumns && !header.disableOrganize}
                on:click={() => adjustSort(header)}
                on:dragstart={(e) => {
                  if (!header.disableOrganize) dragstart(e, header);
                }}
                on:dragover={(e) => {
                  if (!header.disableOrganize) dragover(e, index);
                }}
                on:dragleave={() => {
                  if (!header.disableOrganize) dragleave();
                }}
                on:drop={(e) => {
                  if (!header.disableOrganize) drop(e, index);
                }}
              >
                <span
                  class:jp-async-table-draggable-column={allowArrangeColumns &&
                    !header.disableOrganize}
                  tabindex="-1"
                  role="button"
                  aria-label="Drag handle"
                >
                  {#await handleHeader(header) then val}
                    {@html val}
                  {/await}
                </span>

                {#if sort?.key === header.key}
                  <span class="jp-async-table-sortable">{sort.direction === 'asc' ? '↑' : '↓'}</span
                  >
                {/if}
              </th>
            {/if}
          {/each}
        </tr>
      {/if}

      {#if rows}
        {#each rows as row, ind}
          <tr class:jp-async-table-highlight={rowClickable}>
            {#each headers as header, index}
              {#if !header.disabled}
                <td
                  class:jp-async-table-sortable={allowArrangeColumns && header.sortable}
                  class:jp-async-table-sticky-first={freezeFirstColumn && index === 0}
                  class:jp-async-table-sticky-last={index === headers.length - 1 &&
                    freezeLastColumn}
                  class:jp-async-table-hover-over={hoveringOverColumnIndex === index}
                  on:click={(e) => rowClick(row, index, header, e)}
                >
                  {#await handleColumn(header, row, ind) then val}
                    <span class="jp-async-table-cell">
                      {@html val}
                    </span>
                  {/await}
                </td>{/if}
            {/each}
          </tr>
        {/each}
      {/if}
    </table>
  </div>

  <div class="jp-async-table-actions">
    {#if showLoadMore}
      <button
        type="button"
        class="jp-async-table-button"
        class:jp-async-table-loading={loading}
        disabled={!hasMore}
        on:click={loadMore}
      >
        {#if loading}
          <span class="jp-async-table-spinner"></span>
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
  <div class="jp-async-table-arrange-columns-dialog">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="jp-async-table-arrange-columns-dialog-backdrop"
      on:click={() => (arrangeColumnDialog = false)}
    ></div>
    <form
      class="jp-async-table-arrange-columns-dialog-inner"
      on:submit|preventDefault={saveColumnArrangement}
    >
      <main>
        {#each arrangementColumns as column, index}
          {#if !column.disableToggle}
            <label
              class="jp-async-table-arrange-column-label"
              class:jp-async-table-hover-over={hoveringOverColumnIndex === index}
            >
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <span
                class="jp-async-table-material-symbols-outlined drag-handle"
                draggable="true"
                class:jp-async-table-no-cursor={column.disableOrganize}
                style="cursor: {column.disableOrganize
                  ? 'default'
                  : 'grab'}; pointer-events: {column.disableOrganize ? 'none' : 'auto'};"
                on:dragstart={(e) => {
                  if (!column.disableOrganize) dragstart(e, column);
                }}
                on:dragover={(e) => {
                  if (!column.disableOrganize) dragover(e, index);
                }}
                on:dragleave={() => {
                  if (!column.disableOrganize) dragleave();
                }}
                on:drop={(e) => {
                  if (!column.disableOrganize) drop(e, index);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5f6368"><path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z" /></svg
                >
              </span><input type="checkbox" value={true} bind:checked={column.enabled} />
              <span>{@html column.label}</span>
            </label>{/if}
        {/each}
      </main>

      <footer>
        <button
          type="submit"
          class="jp-async-table-button"
          class:jp-async-table-loading={saveArrangementLoading}
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

<input accept=".csv" bind:this={importFileEl} hidden on:change={importData} type="file" />

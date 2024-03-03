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

  export let showArrangingColumns = true;
  export let showExport = true;
  export let rowClickable = false;
  export let headers: TableHeader[] = [];
  export let pageSizes: number[];
  export let pageSize: number = pageSizes[0];
  export let sort: TableSort;
  export let service: TableService;
  export let getData = async () => {
    const data = await service.get(sort, pageSize);

    rows = data.rows;
    hasMore = data.hasMore;

    loading = false;
  };

  let formattedPageSizes = JSON.stringify(pageSizes.map((s) => ({ label: s, value: s })));
  let loading = true;
  let hasMore = false;
  let rows: any[] = [];
  let exportLoading = false;
  let activeHeaders: TableHeader[];
  let arrangingColumns = false;
  let isDraging = false;
  let columnOrder: string[] = [];

  $: activeHeaders = headers.filter((it) => !it.disabled);

  const dispatch = createEventDispatcher();

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

    const [data] = await Promise.all([
      service.get(sort, pageSize),
      service.adjustSort(sort)
    ]);

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

  async function updatePageSize(event: {detail: number}) {
    pageSize = event.detail;
    
    await Promise.all([
      getData(),
      service.adjustPageSize(pageSize)
    ]);
  }

  async function exportData() {
    exportLoading = true;

    const data = await service.export();
    const resolved = await Promise.all(
      data.map(async (row, index) => {
        const columns = await Promise.all(
          activeHeaders.map((header) => handleColumn(
            { 
              key: header.key,
              fallback: header.exportFallback,
              pipes: header.exportPipes || []
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

  function arrangeColumns() {
    arrangingColumns = true;
    columnOrder = activeHeaders.map((header) => header.key);
  }

  function finishArrangingColumns() {
    arrangingColumns = false;
  }

  function dragstart(event: DragEvent, header: TableHeader) {
    event.dataTransfer.setData('text/plain', header.key);
    isDraging = true;
  }

  function dragover(event: DragEvent) {
    event.preventDefault();
    isDraging = false;
  }

  function drop(event: DragEvent) {
    event.preventDefault();
    const draggedColumn = event.dataTransfer.getData('text/plain');
    const currentIndex = columnOrder.indexOf(draggedColumn);
    const targetIndex = (event.target as HTMLElement)?.dataset.index;

    if (currentIndex !== -1 && targetIndex) {
      columnOrder.splice(currentIndex, 1);
      columnOrder.splice(Number(targetIndex), 0, draggedColumn);

      activeHeaders = headers
        .filter((it) => !it.disabled)
        .sort((a, b) => {
          const aIndex = columnOrder.indexOf(a.key);
          const bIndex = columnOrder.indexOf(b.key);
          return aIndex - bIndex;
        });
    }
  }

  onMount(async () => {
    await getData();
  });
</script>

<div class="table-card">
  {#if showArrangingColumns || showExport}
    <div class="table-header">
      {#if showArrangingColumns}
        {#if !arrangingColumns}
          <button type="button" on:click={arrangeColumns} class="table-button settings-button">
            Arrange Columns
          </button>
        {:else}
          <button
            type="button"
            on:click={finishArrangingColumns}
            class="table-button settings-button"
          >
            Finish Arranging
          </button>
        {/if}
      {/if}
      {#if showExport}
        &nbsp;
        <button
          type="button"
          class="table-button settings-button"
          on:click={exportData}
          class:loading={exportLoading}>Export</button
        >
      {/if}
    </div>
  {/if}

  <div class="table-container">
    <table>
      {#if activeHeaders}
        <tr>
          {#each activeHeaders as header, index}
            <th
              class:sortable={header.sortable}
              on:click={() => adjustSort(header)}
              on:drop={drop}
              on:dragover={dragover}
              data-index={index}
            >
              <span draggable="true" tabindex="-1" role="button" aria-label="Drag handle" on:dragstart={(e) => dragstart(e, header)}>
                {@html header.label}
              </span>

              {#if sort?.key === header.key}
                <span>{sort.direction === 'asc' ? '↑' : '↓'}</span>
              {/if}
            </th>
          {/each}
        </tr>
      {/if}

      {#if rows}
        {#each rows as row, index}
          <tr class:highlight={rowClickable}>
            {#each activeHeaders as header}
              <td on:click={(e) => rowClick(row, index, header, e)}>
                {#await handleColumn(header, row, index) then val}
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
    <button type="button" class="table-button load-button" class:loading disabled={!hasMore} on:click={loadMore}>
      {#if loading}
        <span class="spinner"></span>
        Loading
      {:else}
        Load More
      {/if}
    </button>
    {#if pageSizes.length > 1}
      <jp-select label="Page Size" options={formattedPageSizes} value={pageSize} on:value={updatePageSize}></jp-select>
    {/if}
  </div>
</div>

<style>
  .table-card {
    background-color: var(--background-primary);
    -webkit-border-radius: 0.25rem;
    -moz-border-radius: 0.25rem;
    border-radius: 0.25rem;
    -webkit-box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16);
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
    opacity: 0.75;
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
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-border-radius: 0.25rem;
    -moz-border-radius: 0.25rem;
    border-radius: 0.25rem;
    min-width: 4rem;
    height: 2.25rem;
    padding: 0 1rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
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
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    -webkit-animation: spin 1s linear infinite;
    -moz-animation: spin 1s linear infinite;
    -o-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-moz-keyframes spin {
    0% {
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -moz-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-o-keyframes spin {
    0% {
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>

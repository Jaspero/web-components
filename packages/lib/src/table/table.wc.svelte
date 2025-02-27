<svelte:options
  customElement={{
    tag: 'jp-table',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { get } from '../utils/json-pointer';
  import type { TableHeader } from '../types/table-header.interface';
  import type { TableSort } from '../types/table-sort.interface';
  import type { TableService } from '../types/table.service';

  export let wording = {
    EXPORT: 'Export',
    ARRANGE_COLUMNS: 'Arrange columns',
    FINISH_ARRANGING: 'Finish Arranging'
  };
  export let headers: TableHeader[] = [];
  export let rows: any[] = [];
  export let sort: TableSort;
  export let service: TableService;
  let exportLoading = false;
  export let showExport = true;
  let columnOrder: string[] = [];

  export let showArrangingColumns = true;
  export let freezeFirstColumn = false;
  export let freezeLastColumn = false;
  let arrangingColumns = false;
  let isDraging = false;

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

  function adjustSort(header: TableHeader) {
    const { sortable, sortMethod } = header;

    if (!sortable) {
      return;
    }

    const direction =
      sort?.key === header.key ? (sort.direction === 'asc' ? 'desc' : 'asc') : 'asc';

    if (sortMethod) {
      rows = [...rows.sort((a, b) => sortMethod(direction, a, b))];
      return;
    }

    rows = [
      ...rows.sort((a, b) => {
        let aValue: any;
        let bValue: any;

        try {
          aValue = get(a, header.key);
        } catch {
          return direction === 'asc' ? 1 : -1;
        }

        try {
          bValue = get(b, header.key);
        } catch {
          return direction === 'asc' ? -1 : 1;
        }

        if (aValue === bValue) {
          return 0;
        }

        switch (typeof aValue) {
          case 'number':
            return direction === 'asc' ? aValue - bValue : bValue - aValue;
          case 'string':
            return direction === 'asc'
              ? aValue.localeCompare(bValue)
              : bValue.localeCompare(aValue);
          default:
            return 0;
        }
      })
    ];

    sort = {
      key: header.key,
      direction
    };
  }

  function rowClick(row: any, index: number, header: TableHeader, event: any) {
    dispatch('rowClick', {
      row,
      index,
      header,
      originalEvent: event
    });
  }

  async function exportData() {
    exportLoading = true;
    if (service.export === undefined) return;

    const data = await service.export();
    const resolved = await Promise.all(
      data.map(async (row, index) => {
        const columns = await Promise.all(
          activeHeaders.map((header) => handleColumn(header, row, index))
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

  let activeHeaders: TableHeader[] = [];

  function arrangeColumns() {
    arrangingColumns = true;
    columnOrder = activeHeaders.map((header) => header.key);
  }

  function finishArrangingColumns() {
    arrangingColumns = false;
  }

  function dragstart(event: DragEvent, header: TableHeader) {
    if (event.dataTransfer === null) return;
    event.dataTransfer.setData('text/plain', header.key);
    isDraging = true;
  }

  function dragover(event: DragEvent) {
    event.preventDefault();
    isDraging = false;
  }

  function drop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer === null) return;
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

  $: activeHeaders = headers.filter((it) => !it.disabled);
</script>

<div class="jp-table-card">
  {#if showArrangingColumns || showExport}
    <div class="jp-table-header">
      {#if showArrangingColumns}
        {#if !arrangingColumns}
          <button
            type="button"
            on:click={arrangeColumns}
            class="jp-table-button jp-table-settings-button"
          >
            {wording.ARRANGE_COLUMNS}
          </button>
        {:else}
          <button
            type="button"
            on:click={finishArrangingColumns}
            class="jp-table-button jp-table-settings-button"
          >
            {wording.FINISH_ARRANGING}
          </button>
        {/if}
      {/if}
      {#if showExport}
        &nbsp;
        <button
          type="button"
          class="jp-table-button jp-table-settings-button"
          on:click={exportData}
          class:loading={exportLoading}
        >
          {wording.EXPORT}
        </button>
      {/if}
    </div>
  {/if}
  <div class="jp-table-container">
    <table class="jp-table-table">
      {#if activeHeaders}
        <tr>
          {#each activeHeaders as header, index}
            <th
              class="jp-table-header-content"
              class:jp-table-sortable={header.sortable}
              class:jp-table-sticky-first={index === 0 && freezeFirstColumn}
              class:jp-table-sticky-last={index === activeHeaders.length - 1 && freezeLastColumn}
              on:click={() => adjustSort(header)}
              on:drop={drop}
              on:dragover={dragover}
              data-index={index}
            >
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <span draggable="true" on:dragstart={(e) => dragstart(e, header)}>
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
          <tr>
            {#each activeHeaders as header, index}
              <td
                on:click={(e) => rowClick(row, index, header, e)}
                class="jp-table-cell-content"
                class:jp-table-sticky-first={index === 0 && freezeFirstColumn}
                class:jp-table-sticky-last={index === activeHeaders.length - 1 && freezeLastColumn}
              >
                {#await handleColumn(header, row, index) then val}
                  <span class="jp-table-cell">
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
</div>

<style lang="postcss">
  .jp-table {
    &-card {
      background-color: var(--background-primary);
      border-radius: 0.25rem;
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16);
    }

    &-container {
      overflow-x: auto;
      width: 100%;
    }

    &-table {
      width: 100%;
    }

    &-header-content,
    &-cell-content {
      text-align: left;
      white-space: nowrap;
      font-size: 0.75rem;
      font-weight: normal;
      padding: 0.5rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.16);
    }

    &-header {
      padding: 1rem;
      min-height: 68px;
      display: flex;
      justify-content: flex-end;

      &-content {
        opacity: 0.75;
      }
    }

    &-cell {
      display: block;
      max-width: 64ch;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &-button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.25rem;
      min-width: 4rem;
      height: 2.25rem;
      padding: 0 1rem;
      user-select: none;
    }

    &-settings-button {
      background-color: var(--background-secondary);
      color: var(--text-on-secondary);
    }

    &-sticky-first {
      position: sticky;
      left: 0;
      opacity: 1;
      background-color: var(--background-primary);
      z-index: 1;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 0.5px;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.16);
      }
    }

    &-sticky-last {
      position: sticky;
      right: 0;
      opacity: 1;
      background-color: var(--background-primary);
      z-index: 1;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 0.5px;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.16);
      }
    }
  }
</style>

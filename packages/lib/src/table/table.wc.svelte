<svelte:options
  customElement={{
    tag: 'jp-table',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import {get} from '../utils/json-pointer';
  import type {TableHeader} from './table-header.interface';
  import type {TableSort} from './table-sort.interface';

  export let headers: TableHeader[] = [];
  export let rows: any[] = [];
  export let sort: TableSort;

  const dispatch = createEventDispatcher();

  async function handleColumn(header: TableHeader, row: any, index: number) {
    const {key, fallback, pipes} = header;
    
    let value: any;

    try {
      value = get(row, key);
    } catch {
      return fallback || '';
    }

    if (!row.pipes) {
      return value;
    }

    for (const pipe of pipes) {
      value = await pipe(value, row, index);
    }

    return value;
  }

  function adjustSort(header: TableHeader) {
    const {sortable, sortMethod} = header;

    if (!sortable) {
      return;
    }

    const direction = sort?.key === header.key ? sort.direction === 'asc' ? 'desc' : 'asc' : 'asc';

    if (sortMethod) {
      rows = [...rows.sort((a, b) => sortMethod(direction, a, b))];
      return;
    }

    rows = [...rows.sort((a, b) => {
      let aValue: any;
      let bValue: any;

      try {
        aValue = get(a, header.key);
      } catch {
        return direction === 'asc' ? 1 : -1
      }

      try {
        bValue = get(b, header.key);
      } catch {
        return direction === 'asc' ? -1 : 1
      }

      if (aValue === bValue) {
        return 0;
      }

      switch (typeof aValue) {
        case 'number':
          return direction === 'asc' ? aValue - bValue : bValue - aValue;
        case 'string':
          return direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        default:
          return 0;
      }
    })];

    sort = {
      key: header.key,
      direction
    };
  }

  function rowClick(row: any, index: number, header: TableHeader) {
    dispatch('rowClick', {
      row,
      index,
      header
    });
  }
</script>

<div class="overflow-x-auto border">
  <table>
    {#if headers}
      <tr class="odd:bg-[#F1F5F3]">
        {#each headers as header}
          <th class:sortable={header.sortable} on:click={() => adjustSort(header)}>
            <span>{@html header.label}</span>
            {#if sort?.key === header.key}
              <span>{sort.direction === 'asc' ? '↑' : '↓'}</span>
            {/if}
          </th>
        {/each}
      </tr>
    {/if}

    {#if rows}
      {#each rows as row, index}
        <tr class="odd:bg-[#F1F5F3]">
          {#each headers as header}
            <td on:click={() => rowClick(row, index, header)}>
              {#await handleColumn(header, row, index) then val}
                {@html val}
              {/await}
            </td>
          {/each}
        </tr>
      {/each}
    {/if}
  </table>
</div>

<style lang="postcss">
  table {
    @apply w-full rounded-lg overflow-hidden;
  }

  tr {
    @apply w-full;
  }

  th {
    @apply text-left px-2 py-1;
  }

  td {
    @apply text-left px-2 py-1;
  }
</style>
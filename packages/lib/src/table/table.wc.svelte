<svelte:options
  customElement={{
    tag: 'jp-table',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import {get} from '../utils/json-pointer';
  import type {TableHeader} from '../types/table-header.interface';
  import type {TableSort} from '../types/table-sort.interface';

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

    if (!pipes) {
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

<div class="table-card">
  <div class="table-container">
    <table>
      {#if headers}
        <tr>
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
          <tr>
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
</div>

<style>
  .table-card {
    background-color: var(--background-primary);
    border-radius: .25rem;
    box-shadow: 0 3px 12px rgba(0,0,0,.16);
  }

  .table-container {
    overflow-x: auto;
    width: 100%;
  }

  table {
    width: 100%;
  }

  th, td {
    text-align: left;
    white-space: nowrap;
    font-size: .75rem;
    font-weight: normal;
    padding: .5rem;
    border-bottom: 1px solid rgba(0,0,0,.16);
  }

  th {
    opacity: .75;
  }
</style>
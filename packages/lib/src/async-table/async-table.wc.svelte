<svelte:options
  customElement={{
    tag: 'jp-async-table',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import {get} from '../utils/json-pointer';
  import type {TableHeader} from '../types/table-header.interface';
  import type {TableSort} from '../types/table-sort.interface';
  import type {TableService} from '../types/table.service';

  export let headers: TableHeader[] = [];
  export let sort: TableSort;
  export let service: TableService;

  let loading = true;
  let hasMore = false;
  let rows: any[] = [];

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

  async function adjustSort(header: TableHeader) {
    const {sortable} = header;

    if (!sortable) {
      return;
    }

    loading = true;

    sort = {
      key: header.key,
      direction: sort?.key === header.key ? sort.direction === 'asc' ? 'desc' : 'asc' : 'asc'
    };

    const data = await service.get(sort);

    rows = data.rows;
    hasMore = data.hasMore;

    loading = false;
  }

  async function loadMore() {
    loading = true;

    const data = await service.loadMore(sort);

    rows = [...rows, ...data.rows];
    hasMore = data.hasMore;
    
    loading = false;
  }

  function rowClick(row: any, index: number, header: TableHeader) {
    dispatch('rowClick', {
      row,
      index,
      header
    });
  }

  onMount(async () => {
    const data = await service.get(sort);

    rows = data.rows;
    hasMore = data.hasMore;
    
    loading = false;
  });
</script>

<div class="overflow-x-auto table-container">
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

  <button class:loading={loading} disabled={!hasMore} on:click={loadMore}>Load More</button>
</div>

<style lang="postcss">
  .table-container {
    @apply rounded-lg;
    border: 1px solid var(--border-primary);
  }

  table {
    @apply w-full;
  }

  tr {
    @apply w-full;
  }

  tr:nth-child(2n - 1) {
    background-color: var(--background-tertiary);
  }

  th {
    @apply text-left px-2 py-1;
  }

  td {
    @apply text-left px-2 py-1;
  }
</style>
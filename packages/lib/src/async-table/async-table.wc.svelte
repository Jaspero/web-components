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

  <button class="load-button" class:loading={loading} disabled={!hasMore} on:click={loadMore}>Load More</button>
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

  .load-button {
    margin: 1rem;
    border-radius: .25rem;
    min-width: 4rem;
    height: 2.25rem;
    padding: 0 1rem;
    background-color: var(--primary-color);
    color: var(--text-on-primary);
  }
</style>
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

  function rowClick(row: any, index: number, header: TableHeader, event: any) {
    dispatch('rowClick', {
      row,
      index,
      header,
      originalEvent: event
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
              <td on:click={(e) => rowClick(row, index, header, e)}>
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

  <div class="table-actions">
    <button class="load-button" class:loading={loading} disabled={!hasMore} on:click={loadMore}>
      {#if loading}
        <span class="spinner"></span>
        Loading
      {:else}
        Load More
      {/if}
    </button>
  </div>
</div>

<style>
  .table-card {
    background-color: var(--background-primary);
    -webkit-border-radius: .25rem;
    -moz-border-radius: .25rem;
    border-radius: .25rem;
    -webkit-box-shadow: 0 3px 12px rgba(0,0,0,.16);
    -moz-box-shadow: 0 3px 12px rgba(0,0,0,.16);
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

  .table-actions {
    padding: 1rem;
  }

  .load-button {
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
    -webkit-border-radius: .25rem;
    -moz-border-radius: .25rem;
    border-radius: .25rem;
    min-width: 4rem;
    height: 2.25rem;
    padding: 0 1rem;
    background-color: var(--primary-color);
    color: var(--text-on-primary);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .load-button:disabled {
    opacity: .5;
  }

  .load-button.loading {
    pointer-events: none;
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
    margin-right: .5rem;
    -webkit-animation: spin 1s linear infinite;
    -moz-animation: spin 1s linear infinite;
    -o-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
  }

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
  }

  @-moz-keyframes spin {
    0% { -moz-transform: rotate(0deg); transform: rotate(0deg); }
    100% { -moz-transform: rotate(360deg); transform: rotate(360deg); }
  }

  @-o-keyframes spin {
    0% { -o-transform: rotate(0deg); transform: rotate(0deg); }
    100% { -o-transform: rotate(360deg); transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); -o-transform: rotate(0deg); transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); -moz-transform: rotate(360deg); -o-transform: rotate(360deg); transform: rotate(360deg); }
  }
</style>
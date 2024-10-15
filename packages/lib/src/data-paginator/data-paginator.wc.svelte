<svelte:options
  customElement={{
    tag: 'jp-data-paginator',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  import firstPageIcon from '../../../lib/src/icons/firstPage.svg?raw';
  import prevPageIcon from '../../../lib/src/icons/prevPage.svg?raw';
  import nextPageIcon from '../../../lib/src/icons/nextPage.svg?raw';
  import lastPageIcon from '../../../lib/src/icons/lastPage.svg?raw';
  export let length: number = 50;
  export let pageIndex: number = 0;
  export let pageSize: number = 10;
  let internalPageSize: number = 1;
  export let pageSizeOptions: number[] = [5, 10, 25];

  export let getRangeLabel: string = 'of';
  export let itemsPerPageLabel: string = 'Items per page';

  const dispatch = createEventDispatcher();

  $: dispatch('change', { pageIndex, pageSize, length });

  export function nextPage() {
    pageIndex += 1;
  }
  export function prevPage() {
    pageIndex -= 1;
  }
  export function lastPage() {
    pageIndex = Math.ceil(length / internalPageSize) - 1;
  }
  export function firstPage() {
    pageIndex = 0;
  }

  onMount(() => {
    if (pageSizeOptions.includes(pageSize)) {
      internalPageSize = pageSize;
    }
  });

  function pageSizeHandler() {
    pageIndex = Math.floor(pageIndex * (internalPageSize / pageSize));
    internalPageSize = pageSize;
  }
</script>

<div class="paginator">
  {itemsPerPageLabel}

  <select bind:value={pageSize} on:change={() => pageSizeHandler()}>
    {#each pageSizeOptions as option (option)}
      <option value={option}>{option}</option>
    {/each}
  </select>
  {pageIndex * internalPageSize + 1} - {(pageIndex + 1) * internalPageSize}
  {getRangeLabel}
  {length}

  <button type="button" on:click={firstPage} disabled={!pageIndex}>
    {@html firstPageIcon}
  </button>
  <button type="button" on:click={prevPage} disabled={!pageIndex}>
    {@html prevPageIcon}
  </button>
  <button type="button" on:click={nextPage} disabled={pageIndex == Math.ceil(length / pageSize) - 1}
    >{@html nextPageIcon}
  </button>
  <button type="button" on:click={lastPage} disabled={pageIndex == Math.ceil(length / pageSize) - 1}>
    {@html lastPageIcon}
  </button>
</div>

<style lang="postcss">
  .paginator {
    font-size: 1rem;
  }

  select {
    height: 32px;
  }

  button {
    width: 32px;
    height: 32px;
    background: none;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: .3s;
  }

  button:disabled {
    opacity: .5;
    pointer-events: none;
  }

  button:not(:disabled):hover {
    background: rgba(0,0,0,.08);
  }
</style>

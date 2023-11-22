<svelte:options
  customElement={{
    tag: 'jp-data-paginator',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

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

  <button on:click={firstPage} disabled={!pageIndex}>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
      ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
        d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"
      /></svg
    >
  </button>
  <button on:click={prevPage} disabled={!pageIndex}>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
      ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
      /></svg
    >
  </button>
  <button on:click={nextPage} disabled={pageIndex == Math.ceil(length / pageSize) - 1}
    ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
      ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
      /></svg
    >
  </button>
  <button on:click={lastPage} disabled={pageIndex == Math.ceil(length / pageSize) - 1}>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
      ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
        d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"
      /></svg
    >
  </button>
</div>

<style>
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

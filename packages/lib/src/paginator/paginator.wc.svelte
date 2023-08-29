<svelte:options
  customElement={{
    tag: 'jp-paginator',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let disabled: boolean = false;
  // export let hidePageSize: boolean = false;
  //export let showFirstLastButtons: boolean = true;
  // export let showPageSizeOptions: boolean = true;

  export let length: number = 50;
  export let pageIndex: number = 0;
  export let pageSize: number = 10;
  export let pageSizeOptions: number[] = [5, 10, 25];

  export let getRangeLabel: string = 'of';
  export let itemsPerPageLabel: string = 'Items per page';
  //export let firstPageLabel: string = 'First';
  //export let lastPageLabel: string = 'Last';
  //export let nextPageLabel: string = 'Next';
  //export let previousPageLabel: string = 'Previous';

  const dispatch = createEventDispatcher();

  $: dispatch('change', {pageIndex, pageSize, length})

  let selectedPageSize = pageSize;
  let currentPage = 1;
  let pageSizeIt = 10; 

  function handlePageSize(event) {
    const newValue = parseInt(event.target.value, 10);
    pageSize = newValue;
    if (!isNaN(newValue)) {
      if (currentPage > newValue) {
        currentPage = Math.floor(currentPage / newValue) * newValue + 1;
        pageSizeIt = Math.ceil(currentPage / newValue) * newValue;
        pageIndex = Math.round(currentPage/selectedPageSize);
      } else {
        currentPage = 1;
        pageSizeIt = newValue;
        pageIndex = Math.round(currentPage/selectedPageSize);
      }
    }
  }

  function handleIncreasing() {
    pageIndex += 1;
    currentPage += selectedPageSize;
    pageSizeIt += selectedPageSize;
  }

  function handleDecreasing() {
    pageIndex -= 1;
    currentPage -= selectedPageSize;
    pageSizeIt -= selectedPageSize;
  }

  function goToLastPage() {
    currentPage = length - selectedPageSize + 1;
    pageIndex = Math.round(currentPage/selectedPageSize);
    pageSizeIt = length;
  }

  function goToFirstPage() {
    pageIndex = 0;
    currentPage = 1;
    pageSizeIt = selectedPageSize;
  }

</script>

<div>
  {itemsPerPageLabel}

  <select bind:value={selectedPageSize} on:change={handlePageSize}>
    {#each pageSizeOptions as option (option)}
      <option value={option}>{option}</option>
    {/each}
  </select>
  {currentPage} - {pageSizeIt} {getRangeLabel} {length}

  {#if currentPage == 1}
    <button {disabled}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
        ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"
        /></svg
      >
    </button>
    <button {disabled}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
        ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
        /></svg
      >
    </button>
  {:else}
    <button on:click={goToFirstPage}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
        ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"
        /></svg
      >
    </button>
    <button on:click={handleDecreasing}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
        ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
        /></svg
      >
    </button>
  {/if}

  {#if pageSizeIt == length && length - currentPage < selectedPageSize}
    <button {disabled}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
        ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
        /></svg
      >
    </button>
  {:else}
    <button on:click={handleIncreasing}
      ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
        ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
        /></svg
      >
    </button>
  {/if}

  {#if pageSizeIt == length && length - currentPage < selectedPageSize}
    <button {disabled}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
        ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"
        /></svg
      >
    </button>
  {:else}
    <button on:click={goToLastPage}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
        ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"
        /></svg
      >
    </button>
  {/if}
</div>
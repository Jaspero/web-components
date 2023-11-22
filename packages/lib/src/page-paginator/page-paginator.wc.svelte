<svelte:options
  customElement={{
    tag: 'jp-page-paginator',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let length: number = 10;
  export let pageIndex: number = 1;
  let center = 4;

  const dispatch = createEventDispatcher();

  $: dispatch('change', { pageIndex, length });

  export function nextPage() {
    if (pageIndex == center) {
      center = Math.min(center + 1, length - 3);
    }
    pageIndex++;
  }
  export function prevPage() {
    if (pageIndex == center) {
      center = Math.max(center - 1, 4);
    }
    pageIndex--;
  }
  export function lastPage() {
    center = length - 3;
    pageIndex = length - 1;
  }
  export function firstPage() {
    center = 3;
    pageIndex = 1;
  }
  export function toPage(index) {
    center = Math.min(Math.max(index, 3), length - 3);
    pageIndex = index;
  }
</script>

<div class="page-paginator">
  <button on:click={() => prevPage()} disabled={pageIndex == 1}>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
      />
    </svg>
  </button>
  <button on:click={() => firstPage()} class:selected={pageIndex == 1}> 1 </button>
  {#if center < 5}
    <button on:click={() => toPage(2)} class:selected={pageIndex == 2}> 2 </button>
  {:else}
    <button disabled>...</button>
  {/if}
  <button class:selected={center - 1 == pageIndex}>{center - 1}</button>
  <button class:selected={center == pageIndex}>{center}</button>
  <button class:selected={center + 1 == pageIndex}>{center + 1}</button>
  {#if center > length - 4}
    <button on:click={() => toPage(length - 1)} class:selected={pageIndex == length - 1}>
      {length - 1}
    </button>
  {:else}
    <button disabled>...</button>
  {/if}
  <button on:click={() => lastPage()} class:selected={pageIndex == length}>
    {length}
  </button>
  <button on:click={() => nextPage()} disabled={pageIndex == length}>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
      />
    </svg>
  </button>
</div>

<style>
  .page-paginator {
    display: flex;
  }

  .page-paginator * {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  .page-paginator *:hover:not([disabled]),
  .selected {
    background-color: gray;
  }
</style>

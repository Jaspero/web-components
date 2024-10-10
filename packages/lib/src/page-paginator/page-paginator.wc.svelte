<svelte:options
  customElement={{
    tag: 'jp-page-paginator',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import prevPageIcon from '../../../lib/src/icons/prevPage.svg?raw';
  import nextPageIcon from '../../../lib/src/icons/nextPage.svg?raw'; 
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
    pageIndex = length;
  }
  export function firstPage() {
    center = 4;
    pageIndex = 1;
  }
  export function toPage(index) {
    center = Math.min(Math.max(index, 4), length - 3);
    pageIndex = index;
  }
</script>

<div class="page-paginator">
  <button type="button" on:click={() => prevPage()} disabled={pageIndex == 1}>
    {@html prevPageIcon}
  </button>
  <button type="button" on:click={() => firstPage()} class:selected={pageIndex == 1}> 1 </button>
  {#if center < 5}
    <button on:click={() => toPage(2)} class:selected={pageIndex == 2}> 2 </button>
  {:else}
    <div>...</div>
  {/if}
  <button type="button" class:selected={center - 1 == pageIndex} on:click={() => toPage(center - 1)}
    >{center - 1}</button
  >
  <button type="button" class:selected={center == pageIndex} on:click={() => toPage(center)}
    >{center}</button
  >
  <button type="button" class:selected={center + 1 == pageIndex} on:click={() => toPage(center + 1)}
    >{center + 1}</button
  >
  {#if center > length - 4}
    <button
      type="button"
      on:click={() => toPage(length - 1)}
      class:selected={pageIndex == length - 1}
    >
      {length - 1}
    </button>
  {:else}
    <div>...</div>
  {/if}
  <button type="button" on:click={() => lastPage()} class:selected={pageIndex == length}>
    {length}
  </button>
  <button type="button" on:click={() => nextPage()} disabled={pageIndex == length}>
    {@html nextPageIcon}
  </button>
</div>

<style lang="postcss">
  .page-paginator {
    display: flex;
    gap: 0.25rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    border: none;
    background: none;
    cursor: pointer;
    transition: 0.3s;
  }

  button:disabled {
    opacity: 0.25;
    pointer-events: none;
  }

  button:not(:disabled, .selected):hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  .selected {
    background-color: var(--secondary-color);
  }

  button:not(.selected):active {
    background-color: var(--active-color);
  }
</style>

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
  export function toPage(index: number) {
    center = Math.min(Math.max(index, 4), length - 3);
    pageIndex = index;
  }
</script>

<div class="jp-page-paginator">
  <button
    type="button"
    on:click={() => prevPage()}
    class="jp-page-paginator-button"
    class:jp-page-paginator-button-disabled={pageIndex == 1}
  >
    {@html prevPageIcon}
  </button>
  <button
    type="button"
    on:click={() => firstPage()}
    class="jp-page-paginator-button"
    class:jp-page-paginator-button-selected={pageIndex == 1}
  >
    1
  </button>
  {#if center < 5}
    <button
      type="button"
      on:click={() => toPage(2)}
      class="jp-page-paginator-button"
      class:jp-page-paginator-button-selected={pageIndex == 2}
    >
      2
    </button>
  {:else}
    <div class="jp-page-paginator-dots">...</div>
  {/if}
  <button
    type="button"
    class="jp-page-paginator-button"
    class:jp-page-paginator-button-selected={center - 1 == pageIndex}
    on:click={() => toPage(center - 1)}>{center - 1}</button
  >
  <button
    type="button"
    class="jp-page-paginator-button"
    class:jp-page-paginator-button-selected={center == pageIndex}
    on:click={() => toPage(center)}>{center}</button
  >
  <button
    type="button"
    class="jp-page-paginator-button"
    class:jp-page-paginator-button-selected={center + 1 == pageIndex}
    on:click={() => toPage(center + 1)}>{center + 1}</button
  >
  {#if center > length - 4}
    <button
      type="button"
      on:click={() => toPage(length - 1)}
      class="jp-page-paginator-button"
      class:jp-page-paginator-button-selected={pageIndex == length - 1}
    >
      {length - 1}
    </button>
  {:else}
    <div class="jp-page-paginator-dots">...</div>
  {/if}
  <button
    type="button"
    class="jp-page-paginator-button"
    on:click={() => lastPage()}
    class:jp-page-paginator-button-selected={pageIndex == length}
  >
    {length}
  </button>
  <button
    type="button"
    on:click={() => nextPage()}
    class="jp-page-paginator-button"
    class:jp-page-paginator-button-disabled={pageIndex == length}
  >
    {@html nextPageIcon}
  </button>
</div>

<style lang="postcss">
  .jp-page-paginator {
    display: flex;
    gap: 0.25rem;

    &-dots {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      line-height: 32px;
      border: none;
      background: none;
    }

    &-button {
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

      &-selected {
        background-color: var(--secondary-color);
      }

      &:not(.jp-page-paginator-button-selected):active {
        background-color: var(--active-color) !important;
      }

      &-disabled {
        opacity: 0.25;
        pointer-events: none;
      }
      &:not(.jp-page-paginator-button-disabled, .jp-page-paginator-button-selected):hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
</style>

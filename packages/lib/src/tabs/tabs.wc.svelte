<svelte:options
  customElement={{
    tag: 'jp-tabs',
    shadow: 'open'
  }}
/>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import previousArrowIcon from '../../../lib/src/icons/previous-arrow.svg?raw';
  import nextArrowIcon from '../../../lib/src/icons/next-arrow.svg?raw';

  export let tab: number = 1;

  let tabs: any[] = [];
  let tabsEl: Element;
  let contentEl: HTMLDivElement;
  let overflownTabs = false;

  const dispatch = createEventDispatcher();

  $: dispatch('change', { tab });

  export function next() {
    if (tab < tabs.length) {
      tab++;
    }
    tabsEl.scrollLeft += 150;
  }
  export function previous() {
    if (tab > 1) {
      tab--;
    }
    tabsEl.scrollLeft -= 150;
  }

  function checkOverflow(e: { contentRect: { width: number } }[]) {
    overflownTabs = e[0].contentRect.width < 150 * tabs.length;
  }

  onMount(() => {
    new ResizeObserver(checkOverflow).observe(tabsEl);
    tabs = Array.from(contentEl.children[0].assignedElements());
    tabs = tabs.filter((el) => el.tagName.toLowerCase() == 'jp-tab');
  });
</script>

<div class="jp-tabs-container">
  <button
    type="button"
    class="jp-tabs-container-arrow"
    on:click|preventDefault={() => previous()}
    hidden={!overflownTabs}
  >
    {@html previousArrowIcon}
  </button>
  <div class="jp-tabs" bind:this={tabsEl}>
    {#each tabs as Tab, index}
      <button
        type="button"
        class="jp-tabs-tab"
        on:click={() => (tab = index + 1)}
        class:jp-tabs-tab-active={tab == index + 1}
      >
        {Tab.getAttribute('title')}
      </button>
    {/each}
  </div>
  <button
    type="button"
    class="jp-tabs-arrow"
    on:click|preventDefault={() => next()}
    hidden={!overflownTabs}
  >
    {@html nextArrowIcon}
  </button>
</div>

<div bind:this={contentEl} hidden>
  <slot />
</div>

<div class="jp-tabs-content">
  {#each tabs as Tab, index}
    {#if tab === index + 1}
      {@html Tab.innerHTML}
    {/if}
  {/each}
</div>

<style lang="postcss">
  .jp-tabs {
    display: flex;
    overflow: hidden;

    &-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    &-tab {
      text-align: center;
      min-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      color: rgb(82, 81, 80);
      background: transparent;
      font-size: 16px;
      font-weight: 400;
      padding: 10px 10px;
      border-color: rgba(244, 252, 252, 0.377);
      border-width: 1px;
      border-left: transparent;
      border-right: transparent;
      border-top: transparent;

      &:hover {
        background-color: rgb(250, 245, 243);
      }

      &-active {
        border-bottom: 2px solid rgb(215, 73, 12);
        color: rgb(199, 64, 15);
      }
    }

    &-content {
      position: relative;
      width: 100%;
    }
  }
</style>

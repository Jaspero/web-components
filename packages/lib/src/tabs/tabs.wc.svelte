<svelte:options
  customElement={{
    tag: 'jp-tabs',
    shadow: 'open'
  }}
/>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  export let tab: number = 1;
  let tabs = [];
  let tabsEl;
  let contentEl;
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

  function checkOverflow(e) {
    overflownTabs = e[0].contentRect.width < 150 * tabs.length;
  }

  onMount(() => {
    new ResizeObserver(checkOverflow).observe(tabsEl);
    tabs = Array.from(contentEl.children[0].assignedElements());
    tabs = tabs.filter((el) => el.tagName.toLowerCase() == 'jp-tab');
  });
</script>

<div class="container">
  <button class="arrow" on:click|preventDefault={() => previous()} hidden={!overflownTabs}>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"
      ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
        d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
      /></svg
    >
  </button>
  <div class="tabs" bind:this={tabsEl}>
    {#each tabs as Tab, index}
      <button class="tab" on:click={() => (tab = index + 1)} class:active={tab == index + 1}>
        {Tab.getAttribute('title')}
      </button>
    {/each}
  </div>
  <button class="arrow" on:click|preventDefault={() => next()} hidden={!overflownTabs}>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"
      ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
        d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
      /></svg
    >
  </button>
</div>

<div bind:this={contentEl} hidden>
  <slot />
</div>

<div class="content">
  {#each tabs as Tab, index}
    {#if tab === index + 1}
      {@html Tab.innerHTML}
    {/if}
  {/each}
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .content {
    position: relative;
    width: 100%;
  }

  .tabs {
    display: flex;
    overflow: hidden;
  }

  .tab {
    text-align: center;
    min-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  button {
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
  }

  button:hover {
    background-color: rgb(250, 245, 243);
  }

  button.active {
    border-bottom: 2px solid rgb(215, 73, 12);
    color: rgb(199, 64, 15);
  }
</style>

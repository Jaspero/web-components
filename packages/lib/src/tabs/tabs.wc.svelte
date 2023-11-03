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
  let content;
  const dispatch = createEventDispatcher();

  $: dispatch('change', { tab });

  function changeTab(index: number) {
    tab = index + 1;
  }

  export function next() {
    if (tab < tabs.length) {
      tab += 1;
    }
    dispatch('next', { tab });
    dispatch('change', { tab });
    content.scrollLeft += 200;
  }
  export function previous() {
    if (tab > 1) {
      tab -= 1;
    }
    dispatch('previous', { tab });
    dispatch('change', { tab });
    console.log(content)
    content.scrollLeft -= 200;
  }

  

  onMount(() => {
    tabs = Array.from(document.querySelectorAll('jp-tabs *')).filter(
      (element) =>
        element.getAttribute('data-label') &&
        (!element.parentNode || element.parentNode.tagName.toLowerCase() === 'jp-tabs')
    );
  });
</script>

<div class="tab-class" bind:this={content}>
  <div class="arrow-container-left">
    <button class="arror-left" id="left-button" on:click={() => previous()}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"
        ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
        /></svg
      >
    </button>
  </div>
  <div class="tabs" id="tabs">
    {#each tabs as Tab, index}
      {#if Tab.getAttribute('data-label')}
        <div class="tab-container">
          <button on:click={() => changeTab(index)} class:active={tab === index + 1}
            >{Tab.getAttribute('data-label')}</button
          >
        </div>
      {/if}
    {/each}
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="arrow-container-right">
    <button class="arrow-right" id="right-button" on:click={() => next()}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"
        ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
        /></svg
      >
    </button>
  </div>
</div>

<div class="content-container">
  {#each tabs as Tab, index}
    {#if tab === index + 1}
      <div class="scrollable-content">
        {@html Tab.innerHTML}
      </div>
    {/if}
  {/each}
</div>

<style>
  .tab-class {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0;
    justify-content: space-between;
    width: 100%;
  }

  .tab-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    width: 100%;
  }

  .tabs {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0;
    justify-content: space-between;
    text-align: center;
    width: 100%;
  }

  .content-container {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    margin-top: 10px;
  }

  .arrow-container-left {
    display: none;
  }

  .arrow-container-right {
    display: none;
  }

  button {
    color: rgb(82, 81, 80);
    background: transparent;
    font-size: 16px;
    font-weight: 400;
    padding: 10px 20px;
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
    width: 100%;
    border-color: rgba(244, 252, 252, 0.377);
    border-width: 1px;
    border-left: transparent;
    border-right: transparent;
    border-top: transparent;
  }

  button:hover {
    background-color: rgb(250, 245, 243);
  }

  button:active {
    background: linear-gradient(
      to right,
      rgb(251, 235, 227),
      rgb(255, 231, 222),
      rgb(255, 244, 239)
    );
    transition: 0s 1s;
  }

  button.active {
    border-bottom: 2px solid rgb(215, 73, 12);
    color: rgb(199, 64, 15);
  }

  .scrollable-content {
    word-wrap: break-word;
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    .arrow-container-left {
      display: flex;
      position: absolute;
    }

    .arrow-container-right {
      display: flex;
      right: 0;
      position: absolute;
    }

    .tab-class {
      overflow-x: auto;
      min-width: 100px;
      display: flex;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      scroll-behavior: smooth;
    }

    .tab-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: center;
      justify-content: space-between;
      min-width: 240px;
    }

    .tabs {
      display: contents;
    }
  }
</style>

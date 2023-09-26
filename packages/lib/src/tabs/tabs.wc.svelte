<svelte:options
  customElement={{
    tag: 'jp-tabs',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  export let tab: number = 1;
  let tabs = [];
  const dispatch = createEventDispatcher();

  $: dispatch('change', { tab });

  function changeTab(index: number) {
    tab = index + 1;
  }

  onMount(() => {
    tabs = Array.from(document.querySelectorAll('jp-tabs *')).filter(element=>element.getAttribute('data-label') &&(!element.parentNode || element.parentNode.tagName.toLowerCase() === 'jp-tabs'));
    console.log(tabs)
  });

</script>

<div class="tab-class">
  {#each tabs as Tab, index}
    {#if Tab.getAttribute('data-label')}
      <div class="tab-container">
        <button on:click={() => changeTab(index)} class:active={tab === index + 1}>{Tab.getAttribute('data-label')}</button>
      </div>
    {/if}
  {/each}
</div>



<div class="content-container">
  {#each tabs as Tab, index}
    {#if tab === index + 1}
      <div class="scrollable-content">
        {@html Tab.innerHTML}
        <slot />
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
    width: 70%;
  }

  .tab-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    width: 100%;
  }

  .content-container {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
  }

  button {
    color: rgb(82, 81, 80);
    font-weight: 400;
    padding: 10px 20px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border: none;
    white-space: nowrap;
    width: 100%;
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
  }

  button.active {
    border-bottom: 2px solid rgb(215, 73, 12);
    color: rgb(199, 64, 15);
  }

  .scrollable-content {
    word-wrap: break-word;
    width: 100%;
  }
</style>
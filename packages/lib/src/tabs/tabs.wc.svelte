<svelte:options
  customElement={{
    tag: 'jp-tabs',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let tabs: string[] = ['tab 1', 'tab 2', 'tab 3'];
  export let content: string[] = ['content 1', 'content 2', 'content 3'];
  export let disabled: boolean = false;
  export let isActive: boolean = false;
  export let id: string = '';
  export let tab: number = 1;

  const dispatch = createEventDispatcher();

  $: dispatch('change', { tab });

  function changeTab(index: number) {
    tab = index + 1;
  }
</script>

<div class="tab-class">
    {#each tabs as Tab, index}
      <div class="tab-container">
        <button on:click={() => changeTab(index)} class:active={tab === index + 1}>{Tab}</button>
      </div>
    {/each}
  </div>
  
  <div class="content-container">
    {#each tabs as Tab, index}
      {#if tab === index + 1}
        <div class="scrollable-content">
          <p>{content[index]}</p>
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
    position: relative; 
  }

  button:hover {
    background-color: rgb(252, 243, 239);
  }

  button:active {
    background: rgba(251, 216, 201, 0.808) ;
    transition: background 0.4s ease; 
  }

  button.active {
    border-bottom: 2px solid rgb(180, 31, 31);
    color: rgb(199, 64, 15);
  }

  .scrollable-content {
    word-wrap: break-word;
    width: 100%;
  }

  button:active::before {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4); 
    transform: scale(0);
    animation: ripple 0.4s linear;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  @keyframes ripple {
    to {
      transform: scale(4); 
      opacity: 0; 
    }
  }
</style>
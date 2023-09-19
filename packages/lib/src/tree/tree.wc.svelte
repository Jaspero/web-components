<svelte:options
  customElement={{
    tag: 'jp-tree',
    shadow: 'open'
  }}
/>

<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  
  let expanded = false;
  export let title = 'Tree Title'; 

  function toggleExpansion() {
    expanded = !expanded;
    dispatch('toggle', { expanded });
  }
  
</script>

<div class="tree-branch">
  <div class="tree-node">
    <button class="tree-header" on:click={toggleExpansion}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" class="toggle-arrow" class:rotate={expanded}>
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
      </svg>
    </button>
    <p class="tree-header-title">{@html title}</p>
  </div>
  <div class="tree-children" class:expanded>
    <slot />
  </div>
</div>

<style>
  .tree-branch {
    display: flex;
    flex-direction: column;
  }

  .tree-node {
    display: flex;
    align-items: center;
  }

  .tree-header {
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 50%;
  }

  .tree-header:hover,
  .tree-header:focus {
    background: var(--background-tertiary);
  }

  .tree-header-title {
    flex-grow: 1;
    margin: 0;
  }

  .toggle-arrow {
    width: 0.9rem;
    height: 0.9rem;
    min-width: 0.5rem;
    min-height: 0.5rem;
    padding: 6px;
    transition: transform 0.3s;
  }

  .toggle-arrow.rotate {
    transform: rotate(90deg);
  }

  .tree-children {
    display: none;
    padding-left: 50px; 
  }

  .tree-children.expanded {
    display: block;
  }
</style>
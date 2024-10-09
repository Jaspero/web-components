<svelte:options
  customElement={{
    tag: 'jp-tree',
    shadow: 'open'
  }}
/>

<script lang="ts">
  import ToggleArrowIcon from '../../../lib/src/icons/toggle-arrow.svelte';
  export let title = 'Tree Title';
  export let collapsable = true;
  let expanded = !collapsable;
</script>

<svelte:document
  on:mouseup|preventDefault={(e) => {
    if (window.jpNodeGrabbed) {
      const node = window.jpNodeGrabbed;
      const treeParent = e.target.closest('jp-tree');
      if (treeParent) {
        if (!treeParent.isSameNode(node.parentNode)) {
          treeParent.appendChild(node);
        }
      }
      window.jpNodeGrabbed = null;
    }
  }}
/>

<div class="jp-tree">
  <div class="tree-header">
    <button
      type="button"
      class="tree-arrow"
      on:click={() => expanded = !expanded}
      disabled={!collapsable}
    >
    <ToggleArrowIcon 
    {expanded} 
  />
    </button>
    <p class="tree-header-title">{@html title}</p>
  </div>
  {#if expanded}
    <div class="tree-children">
      <slot />
    </div>
  {/if}
</div>

<style lang="postcss">
  .jp-tree {
    display: flex;
    flex-direction: column;
  }

  .tree-header {
    display: flex;
    align-items: center;
  }

  .tree-arrow {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 50%;
  }

  .tree-arrow:hover,
  .tree-arrow:focus {
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
    display: flex;
    flex-direction: column;
    padding-left: 50px;
  }
</style>

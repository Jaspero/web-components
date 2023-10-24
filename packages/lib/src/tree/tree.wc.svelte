<svelte:options
  customElement={{
    tag: 'jp-tree',
    shadow: 'open'
  }}
/>

<script lang="ts">
  export let title = 'Tree Title';
  let expanded = false;
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
    <button class="tree-arrow" on:click={() => (expanded = !expanded)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 320 512"
        class="toggle-arrow"
        class:rotate={expanded}
      >
        <path
          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
        />
      </svg>
    </button>
    <p class="tree-header-title">{@html title}</p>
  </div>
  {#if expanded}
    <div class="tree-children">
      <slot />
    </div>
  {/if}
</div>

<style>
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
    padding-left: 50px;
  }
</style>

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
  <div class="jp-tree-header">
    <button
      type="button"
      class="jp-tree-arrow"
      class:jp-tree-arrow-rotate={expanded}
      on:click={() => (expanded = !expanded)}
      disabled={!collapsable}
    >
      <ToggleArrowIcon {expanded} />
    </button>
    <p class="jp-tree-header-title">{@html title}</p>
  </div>
  {#if expanded}
    <div class="jp-tree-children">
      <slot />
    </div>
  {/if}
</div>

<style lang="postcss">
  .jp-tree {
    display: flex;
    flex-direction: column;

    &-header {
      display: flex;
      align-items: center;

      &-title {
        flex-grow: 1;
        margin: 0;
      }
    }

    &-arrow {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      border-radius: 50%;
      transition-duration: 0.3s;

      &-rotate {
        transform: rotate(90deg);
      }

      &:hover,
      &:focus {
        background: var(--background-tertiary);
      }
    }

    &-children {
      display: flex;
      flex-direction: column;
      padding-left: 50px;
    }
  }
</style>

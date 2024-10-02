<svelte:options
  customElement={{
    tag: 'jp-bellow',
    shadow: 'open'
  }}
/>

<script>
  import { createEventDispatcher } from 'svelte';
  import arrowIcon from '../../../lib/src/icons/arrow.svg?raw';
  const dispatch = createEventDispatcher();

  let expanded = false;
  export let title = 'Panel Title'; // Default title
  let contentHeight = 0; // to store the natural height of the content
  let contentElement;

  function toggleExpansion() {
    expanded = !expanded;
    if (expanded) {
      contentHeight = contentElement.scrollHeight;
    } else {
      contentHeight = 0;
    }
    dispatch('toggle', { expanded });
  }

  // Listen for the request-close event
  window.addEventListener('request-close', (event) => {
    if (event.detail !== title) {
      // We'll use the title as a unique identifier
      expanded = false;
    }
  });
</script>

<div class="expansion-panel" class:expanded>
  <button type="button" class="expansion-header" on:click={toggleExpansion}>
    <p class="expansion-header-title">{@html title}</p>
    {@html arrowIcon}
  </button>
  <div
    class="expansion-content"
    bind:this={contentElement}
    style="height: {expanded ? `${contentHeight}px` : '0px'}"
  >
    <slot />
  </div>
</div>

<style lang="postcss">
  .expansion-panel {
    background-color: var(--background-primary);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    transition: 0.3s;
  }

  .expansion-panel:not(.expanded) .expansion-content {
    visibility: hidden;
  }

  .expansion-panel.expanded {
    border-radius: 0.25rem;
    margin: 1rem 0;
  }

  .expansion-panel.expanded .expansion-content {
    padding: 0.75rem 1rem;
  }

  .expansion-header {
    width: 100%;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    text-align: left;
    font-size: 1rem;
    cursor: pointer;
    padding: 0.75rem 1rem;
    transition: background-color 0.3s;
  }

  .expansion-header:hover,
  .expansion-header:focus {
    background: var(--background-tertiary);
  }

  .expansion-header-title {
    flex-grow: 1;
    margin: 0;
  }

  .expansion-content {
    overflow: hidden;
    padding: 0 1rem;
    transition: 0.3s ease-out;
  }

  .toggle-arrow {
    width: 1rem;
    height: 1rem;
    min-width: 1rem;
    min-height: 1rem;
    transition: transform 0.3s;
  }

  .toggle-arrow.rotate {
    transform: rotate(-180deg);
  }
</style>

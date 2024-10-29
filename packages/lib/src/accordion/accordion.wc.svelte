<svelte:options
  customElement={{
    tag: 'jp-accordion',
    shadow: 'open'
  }}
/>

<script lang="ts">
  import { onMount } from 'svelte';

  export let multiple = false;

  let panels: Element[] = [];

  function onToggle(event: Event, index: number) {
    if (!multiple) {
      const panelToKeepOpen = panels[index].title;
      window.dispatchEvent(new CustomEvent('request-close', { detail: panelToKeepOpen }));
    }
  }

  onMount(() => {
    panels = Array.from(document.querySelectorAll('jp-bellow'));
    panels.forEach((panel, index) => {
      panel.addEventListener('toggle', (event) => onToggle(event, index));
    });
  });
</script>

<div class="jp-accordion">
  <slot />
</div>

<style lang="postcss">
  .jp-accordion {
    width: 100%;
    margin: 1rem 0;
    border-radius: 50%;
  }
</style>

<svelte:options
  customElement={{
    tag: 'jp-code-editor',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let content = '';
  export let options = {};

  let containerEl;
  let editor;

  const dispatch = createEventDispatcher();

  
  onMount(() => {
    editor = new window.CodeMirror(containerEl, options);
    editor.setValue(content)
    editor.on('change', (e) => dispatch('change', {event: e, value: editor.getValue()}))
  });
</script>

<div bind:this={containerEl}></div>

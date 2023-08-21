<svelte:options
  customElement={{
    tag: 'jp-json-editor',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let content = {};
  export let options = {};

  let editor;

  let containerEl: HTMLDivElement;

  const dispatch = createEventDispatcher();

  $: dispatch('change', content);

  const changeHandler = async () => {
    try {
      content = editor.get()
    } catch (err) {
      console.log(err)
    }
  }

  onMount(() => {
    if(typeof content == 'string') content = {json: JSON.parse(content)}
    else content = {json: content}
    options.onChange = changeHandler;
    editor = new window.JSONEditor(containerEl, options)
    editor.set(content)
  })
</script>

<div bind:this={containerEl}></div>
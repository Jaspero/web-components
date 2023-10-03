<svelte:options
  customElement={{
    tag: 'jp-json-editor',
    shadow: 'none',
    extend: (customElementConstructor) => {
      return class extends customElementConstructor {
        static formAssociated = true;

        constructor() {
          super();
          this.attachedInternals = this.attachInternals();
        }
      };
    }
  }}
/>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let label = '';
  export let name: string | null = null;
  export let id: string | null = null;
  export let value: any = {};
  export let options = {};

  let editor;
  let stringValue;
  let containerEl: HTMLDivElement;

  const dispatch = createEventDispatcher();

  export const getValue = () => editor.get();

  onMount(() => {
    if (typeof value == 'string') {
      value = JSON.parse(value);
    }
    
    options.onChange = async () => {
      try {
        value = editor.get();

        dispatch('value', {value});

        stringValue = JSON.stringify(value);

      } catch (err) {
        console.log(err);
      }
    };
    
    editor = new window.JSONEditor(containerEl, options);
    editor.set(value);
  });
</script>

{#if label}
  <span>{label}</span>
{/if}
<div bind:this={containerEl}></div>
<textarea {name} {id} value={stringValue} hidden></textarea>

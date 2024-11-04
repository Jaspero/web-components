<svelte:options
  customElement={{
    tag: 'jp-code-editor',
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
  import './code-editor.wc.pcss';

  export let attachedInternals: ElementInternals;
  export let label = '';
  export let name: string | null = null;
  export let id: string | null = null;
  export let value = '';
  export let options = {};

  let containerEl: HTMLDivElement;
  let editor: any;

  export const getValue = () => value;

  const dispatch = createEventDispatcher();

  onMount(() => {
    if (typeof options == 'string') {
      options = JSON.parse(options);
    }

    // @ts-ignore
    editor = new window.CodeMirror(containerEl, options);
    editor.setValue(value);
    editor.on('change', (e: any) => {
      value = editor.getValue();

      attachedInternals.checkValidity();
      attachedInternals.setFormValue(value);

      dispatch('value', { value });
    });
  });
</script>

{#if label}
  <span>{label}</span>
{/if}

<div class="jp-code-editor">
  <div bind:this={containerEl}></div>
</div>

<textarea {name} {id} {value} hidden></textarea>

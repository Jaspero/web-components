<svelte:options
  customElement={{
    tag: 'jp-quill',
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
  import type { Quill } from 'quill';
  import { createEventDispatcher, onMount } from 'svelte';

  export let attachedInternals: ElementInternals;
  export let value: string = '';
  export let id: string | null = null;
  export let name: string | null = null;
  export let options: any = {
    modules: { toolbar: true },
    theme: 'snow'
  };

  export const getValue = () => value;

  const dispatch = createEventDispatcher();

  let containerEl: HTMLDivElement;
  let editor: Quill;

  $: {
    attachedInternals.checkValidity();
    attachedInternals.setFormValue(value);
    dispatch('value', { value });
  }

  onMount(async () => {
    let quill = getQull();

		if (value) {
			containerEl.innerHTML = value;
		}

    editor = new quill(containerEl, options);

    editor.on('text-change', () => {
      value = editor.root.innerHTML;
    });
  });

  function getQull(): Quill {
    // @ts-ignore
    return window.Quill;
  }
</script>

<div bind:this={containerEl}></div>
<textarea {id} {name} {value} hidden></textarea>
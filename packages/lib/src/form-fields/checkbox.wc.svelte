<svelte:options
  customElement={{
    tag: 'jp-checkbox',
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

  export let id: string | null = null;
  export let name: string | null = null;
  export let value: string = '';

  export let attachedInternals: ElementInternals;

  export let options: Array<{ label: string; value: boolean }> = [];
  export let minSelects: number = 0;
  export let maxSelects: number | null = null;

  export const getValue = () => value;

  $: {
    if (options.filter((el) => el.value).length < minSelects) {
      attachedInternals.setValidity({ customError: true }, 'Below limit checks.');
    } else if (options.filter((el) => el.value).length > maxSelects) {
      attachedInternals.setValidity({ customError: true }, 'Above limit checks.');
    } else {
      attachedInternals.setValidity({});
    }
    value = JSON.stringify(options);
    attachedInternals.setFormValue(value);
    console.log(value);
  }

  onMount(() => {
    maxSelects = value.length;
    value = JSON.parse(value)
  });
</script>

<div>
  {#each options as option}
    <label>
      <input type="checkbox" bind:checked={option.value} />
      {@html option.label}
    </label>
  {/each}
  <textarea {id} {name} {value} hidden></textarea>
</div>

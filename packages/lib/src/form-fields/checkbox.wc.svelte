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

  export let attachedInternals: ElementInternals;

  export let options: Array<{ label: string; value: boolean; disabled?: boolean }> = [];
  export let minSelects: number = 0;
  export let maxSelects: number | null = null;

  export const getValue = () => options.filter(el => el.value).map(el => el.label);
  
  const dispatch = createEventDispatcher();
  
  $: {
    if (options.filter((el) => el.value).length < minSelects) {
      attachedInternals.setValidity({ customError: true }, 'Below limit checks.');
    } else if (options.filter((el) => el.value).length > maxSelects) {
      attachedInternals.setValidity({ customError: true }, 'Above limit checks.');
    } else {
      attachedInternals.setValidity({});
    }


    dispatch('value', options.filter(el => el.value).map(el => el.label));
  }

  onMount(() => {
    maxSelects = options.length;
  });
</script>

<div>
  {#each options as option}
    <label >
      <input type="checkbox" name={option.label} bind:checked={option.value} disabled={option.disabled}/>
      {@html option.label}
    </label>
  {/each}
</div>

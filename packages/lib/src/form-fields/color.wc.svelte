<svelte:options
  customElement={{
    tag: 'jp-color',
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
  export let id;
  export let name;
  export let value = 'e65100';
  export let label = ''

  export const getValue = () => value;

  $: {
    attachedInternals.setFormValue(value)
    dispatch('value', {value})
  }

  const dispatch = createEventDispatcher();
</script>

<div>
  <input type="color" {id} {name} bind:value />
  {#if label}
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>{label}</label>
  {/if}
</div>



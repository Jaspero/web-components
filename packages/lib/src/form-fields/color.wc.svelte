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
  export let disabled = false;
  export let required = false;

  export const getValue = () => value;

  $: {
    attachedInternals.setFormValue(value)
    dispatch('value', {value})
  }

  const dispatch = createEventDispatcher();
</script>

<div class="color-picker-container">
  {#if label}
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="color-picker-label">
      {label} {#if required}<span class="required">*</span>{/if}
    </label>
  {/if}
  <input type="color" {id} {name} {disabled} bind:value />
</div>

<style>
  .color-picker-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .color-picker-label {
    font-size: 16px;
  }
  .required {
    font-size: 15px; 
  }

</style>

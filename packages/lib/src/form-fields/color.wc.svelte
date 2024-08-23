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
  $: displayLabel = required ? `${label} *` : label;
</script>
  {#if label}
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <div class="label">
      {@html displayLabel}
    </div>
  {/if}
  <input type="color" {id} {name} {disabled} bind:value />
<style>
  .label{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  </style>

<svelte:options
  customElement={{
    tag: 'jp-textarea',
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
  export let id: string | null = null;
  export let value: string = '';
  export let name: string | null = null;
  export let placeholder: string | null = null;
  export let pattern: string | null = null;

  export let disabled: boolean = false;
  export let required: boolean = false;
  export let readonly: boolean = false;

  export let minlength: number | null = null;
  export let maxlength: number | null = null;

  export const getValue = () => value;

  const dispatch = createEventDispatcher();

  $: {
    attachedInternals.checkValidity();
    attachedInternals.setFormValue(value);
    dispatch('value', { value });
  }
</script>

<textarea
  {placeholder}
  {required}
  {disabled}
  {readonly}
  {id}
  {name}
  {minlength}
  {maxlength}
  {pattern}
  bind:value
></textarea>

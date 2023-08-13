<svelte:options
  customElement={{
    tag: 'jp-input',
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
	import { createEventDispatcher } from 'svelte';

	export let attachedInternals: ElementInternals;
	export let value: string = '';
	export let label: string;
	export let required: boolean | null = null;
	export let disabled: boolean | null = null;
	export let readonly: boolean | null = null;
	export let id: string | null = null;
	export let name: string | null = null;
	export let minlength: number | null = null;
	export let maxlength: number | null = null;
	export let pattern: string | null = null;
	
	export const getValue = () => value;
 
	const dispatch = createEventDispatcher();

	$: {
		attachedInternals.checkValidity();
		attachedInternals.setFormValue(value);
		dispatch('value', { value });
	}

</script>

<label>
	{#if label}
		<span>{label}</span>
	{/if}
	<input
		type="text"
		bind:value
		{required}
		{disabled}
		{readonly}
		{id}
		{name}
		{minlength}
		{maxlength}
		{pattern} />
</label>
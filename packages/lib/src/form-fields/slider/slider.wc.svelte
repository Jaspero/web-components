<svelte:options
  customElement={{
    tag: 'jp-slider',
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
  import './slider.wc.pcss';

  export let disabled: boolean = false;
  export let id: string = '';
  export let max: number = 100;
  export let min: number = 0;
  export let value: number = 0;
  export let step: number = 1;
  export let name: string = '';
  export let discrete: boolean = true; //if true -> ticks, false -> smooth
  export let required = false;
  export let label = '';
  export const getValue = () => value;

  const dispatch = createEventDispatcher();

  $: dispatch('value', { value });
  $: displayLabel = required ? `${label} *` : label;
</script>

{#if label}
  <span class="jp-slider-label">
    {@html displayLabel}
  </span>
{/if}
<div class="jp-slider-container">
  <input
    type="range"
    class="jp-slider-range-input"
    bind:value
    {id}
    {disabled}
    {min}
    {max}
    step={discrete ? step : 'any'}
    {name}
  />
</div>

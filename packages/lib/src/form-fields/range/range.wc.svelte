<svelte:options
  customElement={{
    tag: 'jp-range',
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
  import './range.wc.pcss';

  export let disabled: boolean = false;
  export let id: string = '';
  export let max: number = 100;
  export let min: number = 0;
  export let value: Array<number> | string = '';
  export let step: number = 1;
  export let name: string = '';
  export let discrete: boolean = true; //if true -> ticks, false -> smooth
  export let required = false;
  export let label = '';
  let internalValue = [min, max];
  export const getValue = () => internalValue;

  const dispatch = createEventDispatcher();

  $: low = Math.round(100 * ((internalValue[0] - min) / (max - min)));
  $: high = Math.round(100 * ((internalValue[1] - min) / (max - min)));

  $: if (internalValue[0] > internalValue[1]) {
    internalValue[0] = internalValue[1];
  }

  $: if (internalValue[1] < internalValue[0]) {
    internalValue[1] = internalValue[0];
  }

  $: dispatch('value', { value: internalValue });

  $: {
    if (!value) {
      internalValue = [min, max];
    } else {
      if (typeof value == 'string') {
        value = JSON.parse(value);
      }
      internalValue = value;
    }
  }
  $: displayLabel = required ? `${label} *` : label;
</script>

<div class="jp-range-slider-container">
  {#if label}
    {@html displayLabel}
  {/if}
</div>
<div class="jp-range-slider">
  <div class="jp-range-progress" style={`left: ${low}%; right: ${100 - high}%`}></div>
  <input
    type="range"
    class="jp-range-input"
    class:jp-range-input-disabled={disabled}
    {disabled}
    step={discrete ? 'any' : step}
    {min}
    {max}
    id={id + '_min'}
    name={name + '_min'}
    bind:value={internalValue[0]}
  />
  <input
    type="range"
    class="jp-range-input"
    class:jp-range-input-disabled={disabled}
    {disabled}
    step={discrete ? 'any' : step}
    {min}
    {max}
    id={id + '_max'}
    name={name + '_max'}
    bind:value={internalValue[1]}
  />
</div>

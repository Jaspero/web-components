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
  export let showValue = false;
  let internalValue = [min, max];
  export const getValue = () => internalValue;
  export let startLabel = '';	
  export let endLabel = '';

  const dispatch = createEventDispatcher();

  function handleRangeClick(event: MouseEvent) {
    const slider = event.currentTarget as HTMLElement;
    const rect = slider.getBoundingClientRect();
    const percentage = (event.clientX - rect.left) / rect.width;
    const clickValue = Math.min(
      Math.max(parseInt(min) + percentage * (parseInt(max) - parseInt(min)), min),
      max
    );

    const roundedValue = Math.round(clickValue / step) * step;
    const index =
      Math.abs(clickValue - internalValue[0]) <= Math.abs(clickValue - internalValue[1]) ? 0 : 1;
    internalValue[index] = roundedValue;
  }

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
<div class="jp-range-slider" on:click={handleRangeClick}>
  <div class="jp-range-progress" style={`left: ${low}%; right: ${100 - high}%`}></div>
  <input
    type="range"
    class="jp-range-input"
    class:jp-range-input-disabled={disabled}
    {disabled}
    step={discrete ? step : 'any'}
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
    step={discrete ? step : 'any'}
    {min}
    {max}
    id={id + '_max'}
    name={name + '_max'}
    bind:value={internalValue[1]}
  />
</div>

{#if showValue}
<div class="jp-range-value">
  <div>{startLabel} {internalValue[0]}</div>
  <div>{endLabel} {internalValue[1]}</div>
</div>
{/if}
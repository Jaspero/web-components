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

  export let disabled: boolean = false;
  export let id: string = '';
  export let max: number = 100;
  export let min: number = 0;
  export let value: Array<number> | string = '';
  export let step: number = 1;
  export let name: string = '';
  export let discrete: boolean = true; //if true -> ticks, false -> smooth
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
    if(!value){
      internalValue = [min, max]
    } else {
      if(typeof value == 'string'){
        value = JSON.parse(value)
      }
      internalValue = value
    }
  }
</script>

<div class="slider">
  <div class="progress" style={`left: ${low}%; right: ${100 - high}%`}></div>
  <input
    type="range"
    class="range-input"
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
    class="range-input"
    {disabled}
    step={discrete ? 'any' : step}
    {min}
    {max}
    id={id + '_max'}
    name={name + '_max'}
    bind:value={internalValue[1]}
  />
</div>

<style>
  .slider {
    position: relative;
    min-width: 300px;
    width: 1px;
    height: 4px;
    background-color: #ccc;
    border-radius: 4px;
  }

  .progress {
    position: absolute;
    background-color: var(--primary-color);
    top: 0;
    height: 100%;
  }

  .range-input {
    position: absolute;
    top: 0;
  }

  input[type='range'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
    pointer-events: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border-radius: 4px;
    outline: none;
    border: none;
    background: transparent;
    accent-color: var(--primary-color);
  }

  /*Mozilla thumb*/
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 4px;
  }

  input[type='range']::-moz-range-thumb {
    pointer-events: auto;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--primary-color);
    transition: 0.2s ease-in-out;
  }

  input[type='range']:focus::-moz-range-track {
    background: transparent;
  }

  input[type='range']::-moz-range-progress {
    appearance: none;
    background: transparent;
    height: 100%;
    transition-delay: 50ms;
  }

  .range-input::-moz-range-thumb:hover {
    box-shadow: 0 0 0 10px rgba(255, 85, 0, 0.1);
  }
  .range-input:active::-moz-range-thumb {
    box-shadow: 0 0 0 13px rgba(255, 85, 0, 0.281);
  }

  .range-input:disabled::-moz-range-thumb {
    background: #a19d9b;
  }

  .range-input:disabled::-moz-range-thumb:hover {
    box-shadow: 0 0 0 10px rgba(131, 128, 127, 0.267);
  }
  .range-input:disabled:active::-moz-range-thumb {
    box-shadow: 0 0 0 10px rgba(131, 128, 127, 0.267);
  }

  /* Chrome, safari, opera edge */
  .range-input::-webkit-slider-thumb {
    pointer-events: auto;
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--primary-color);
    transition: 0.2s ease-in-out;
  }

  .range-input::-webkit-slider-thumb:hover {
    box-shadow: 0 0 0 10px rgba(255, 85, 0, 0.1);
  }

  .range-input:active::-webkit-slider-thumb {
    box-shadow: 0 0 0 13px rgba(255, 85, 0, 0.281);
  }

  .range-input:disabled::-webkit-slider-thumb:hover {
    box-shadow: 0 0 0 10px rgba(131, 128, 127, 0.267);
  }

  .range-input:disabled:active::-webkit-slider-thumb {
    box-shadow: 0 0 0 10px rgba(131, 128, 127, 0.267);
  }

  input[type='range']::-webkit-slider-runnable-track {
    box-shadow: none;
    border: none;
    background: transparent;
  }
</style>

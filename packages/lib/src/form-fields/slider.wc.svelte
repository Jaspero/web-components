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

  export let disabled: boolean = false;
  export let discrete: boolean = true; // true -> displays a numeric value
  export let max: number = 100;
  export let min: number = 0;
  export let value: number = 0;
  export let step: number = 1;

  const dispatch = createEventDispatcher();

  $: dispatch('value', { value });
</script>

<div class="slider-container">
  <input type="range" class="range-input" bind:value {disabled} {min} {max} {step} />
  {#if discrete == true}
    <p>{value}</p>
  {/if}
</div>

<style>
  input[type='range'] {
    -moz-appearance: none;
    width: 300px;
    height: 4px;
    padding: 0;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
    border: 2px;
    background: #cccccc;
    accent-color: rgb(248, 72, 18);
  }

  /*Mozilla thumb*/
  input[type='range']::-moz-range-track {
    width: 300px;
    height: 4px;
    border: none;
    border-radius: 4px;
  }

  input[type='range']::-moz-range-thumb {
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #f04e08;
    transition: 0.2s ease-in-out;
  }

  input[type='range']:focus::-moz-range-track {
    background: #ccc;
  }

  input[type='range']::-moz-range-progress {
    appearance: none;
    background: rgb(233, 69, 19);
    height: 4px;
    transition-delay: 30ms;
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
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #f04e08;
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

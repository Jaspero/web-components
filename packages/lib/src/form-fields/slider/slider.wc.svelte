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
  import { createEventDispatcher, onMount } from 'svelte';
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
  export let showValue: boolean = false;
  export const getValue = () => value;

  const dispatch = createEventDispatcher();
  let slider: HTMLInputElement;
  let bubble: HTMLDivElement;

  function updateBubblePosition() {
    if (!bubble || !slider) return;

    const val = parseFloat(slider.value);
    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    const newVal = Number(((val - min) * 100) / (max - min));

    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.165}px))`;
    bubble.style.transform = `translateX(-50%)`;
  }

  onMount(() => {
    updateBubblePosition();
  });

  $: {
    value;
    updateBubblePosition();
  }

  $: low = Math.round(100 * ((value - min) / (max - min)));
  $: dispatch('value', { value });
  $: displayLabel = required ? `${label} *` : label;
</script>

<div class="jp-slider-label">
  {#if label}
    {@html displayLabel}
  {/if}
</div>
{#if showValue}
  <div class="jp-slider-container" style="padding-top: 20px;">
    <div class="jp-slider-bubble" class:jp-slider-bubble-disabled={disabled} bind:this={bubble}>
      {value}
    </div>
    <div class="jp-slider-progress" style={`right: ${100 - low}%;`}></div>
    <input
      type="range"
      class="jp-slider-range-input"
      bind:value
      bind:this={slider}
      {id}
      {disabled}
      {min}
      {max}
      step={discrete ? step : 'any'}
      {name}
    />
  </div>
{:else}
  <div class="jp-slider-container">
    <div class="jp-slider-progress" style={`right: ${100 - low}%;`}></div>
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
{/if}

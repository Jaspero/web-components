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
  import { createEventDispatcher, onMount } from 'svelte';
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
  export let showValue: boolean = false;
  let internalValue = [min, max];
  export const getValue = () => internalValue;

  const dispatch = createEventDispatcher();

  let leftSlider: HTMLInputElement;
  let leftBubble: HTMLDivElement;
  let rightSlider: HTMLInputElement;
  let rightBubble: HTMLDivElement;

  function handleRangeClick(event: MouseEvent) {
    if (disabled) {
      event.preventDefault();
      return;
    }

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

  function updateBubblePosition() {
    if (!leftBubble || !leftSlider || !rightBubble || !rightSlider) return;

    const leftVal = internalValue[0];
    const leftMin = parseFloat(leftSlider.min);
    const leftMax = parseFloat(leftSlider.max);
    const newLeftVal = Number(((leftVal - leftMin) * 100) / (leftMax - leftMin));

    leftBubble.style.left = `calc(${newLeftVal}% + (${8 - newLeftVal * 0.165}px))`;
    leftBubble.style.transform = `translateX(-50%)`;

    const rightVal = internalValue[1];
    const rightMin = parseFloat(rightSlider.min);
    const rightMax = parseFloat(rightSlider.max);
    const newRightVal = Number(((rightVal - rightMin) * 100) / (rightMax - rightMin));

    rightBubble.style.left = `calc(${newRightVal}% + (${8 - newRightVal * 0.165}px))`;
    rightBubble.style.transform = `translateX(-50%)`;
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

  $: {
    internalValue;
    updateBubblePosition();
  }

  $: displayLabel = required ? `${label} *` : label;

  onMount(() => {
    updateBubblePosition();
  });
</script>

<div class="jp-range-slider-container">
  {#if label}
    {@html displayLabel}
  {/if}
</div>
{#if showValue}
  <div class="jp-range-slider" on:click={handleRangeClick} style="margin-top: 45px;">
    <div
      class="jp-range-slider-bubble"
      class:jp-range-slider-bubble-disabled={disabled}
      bind:this={leftBubble}
    >
      {internalValue[0]}
    </div>
    <div
      class="jp-range-progress"
      class:jp-range-progress-disabled={disabled}
      style={`left: ${low}%; right: ${100 - high}%`}
    ></div>
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
      bind:this={leftSlider}
      bind:value={internalValue[0]}
    />
    <div
      class="jp-range-slider-bubble"
      class:jp-range-slider-bubble-disabled={disabled}
      bind:this={rightBubble}
    >
      {internalValue[1]}
    </div>
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
      bind:this={rightSlider}
      bind:value={internalValue[1]}
    />
  </div>
{:else}
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
      bind:this={leftSlider}
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
      bind:this={rightSlider}
      bind:value={internalValue[1]}
    />
  </div>
{/if}

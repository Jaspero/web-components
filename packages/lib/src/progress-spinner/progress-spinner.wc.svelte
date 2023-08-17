<svelte:options
  customElement={{
    tag: 'jp-progress-spinner',
    shadow: 'none'
  }}
/>

<script lang="ts">
  export let determinate: boolean = false;
  export let progress: number = 0;
  export let radius: number = 60;
  export let stroke: number = 8;
  export let color: string = 'blue';

  let strokeDashoffset: number = 0;
  let normalizedRadius: number = 0;
  let circumference: number = 0;

  $: if (determinate) {
    normalizedRadius = radius - stroke * 2;
    circumference = normalizedRadius * 2 * Math.PI;
    strokeDashoffset = circumference - (progress / 100) * circumference;
  }
</script>

{#if determinate}
  <svg height={radius * 2} width={radius * 2}>
    <circle
      class="progress"
      stroke="blue"
      fill="transparent"
      stroke-dasharray="{circumference} {circumference}"
      stroke-dashoffset={strokeDashoffset}
      stroke-width={stroke}
      r={normalizedRadius}
      cx={radius}
      cy={radius}
    />
  </svg>
{:else}
  <svg width={radius * 2} height={radius * 2} stroke={color} viewBox="0 0 24 24"
    ><g class="spinner"
      ><circle cx="12" cy="12" r="9.5" fill="none" stroke-width={(12 / radius) * stroke}
      ></circle></g
    ></svg
  >
{/if}

<style>
  .progress {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
  .spinner {
    transform-origin: center;
    animation: rotateAnim 2s linear infinite;
  }
  .spinner circle {
    animation: strokeAnim 1.5s ease-in-out infinite;
  }
  @keyframes rotateAnim {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes strokeAnim {
    0% {
      stroke-dasharray: 0 150;
      stroke-dashoffset: 0;
    }
    47.5% {
      stroke-dasharray: 42 150;
      stroke-dashoffset: -16;
    }
    95%,
    100% {
      stroke-dasharray: 42 150;
      stroke-dashoffset: -59;
    }
  }
</style>

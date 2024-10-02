<svelte:options
  customElement={{
    tag: 'jp-progress-spinner',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import ProgressSpinnerIcon from '../../../lib/src/icons/progress-spinner-icon.svelte';
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

<ProgressSpinnerIcon
  {determinate}
  {radius}
  {stroke}
  {color}
  {strokeDashoffset}
  {normalizedRadius}
  {circumference}
/>
<style lang="postcss">
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

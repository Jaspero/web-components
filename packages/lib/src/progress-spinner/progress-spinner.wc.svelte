<svelte:options
  customElement={{
    tag: 'jp-progress-spinner',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import ProgressSpinnerIcon from '../icons/progress-spinner.svelte';
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
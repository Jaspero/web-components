<script lang="ts">
  export let determinate: boolean = false;
  export let normalizedRadius: number = 0;
  export let strokeDashoffset: number = 0;
  export let circumference: number = 0;
  export let radius: number = 60;
  export let stroke: number = 8;
  export let color: string = 'blue';
</script>

{#if determinate}
  <svg height={radius * 2} width={radius * 2}
    ><circle
      class="jp-progress-spinner"
      stroke={color}
      fill="transparent"
      stroke-dasharray="{circumference} {circumference}"
      stroke-dashoffset={strokeDashoffset}
      stroke-width={stroke}
      r={normalizedRadius}
      cx={radius}
      cy={radius}
    /></svg
  >
{:else}
  <svg width={radius * 2} height={radius * 2} stroke={color} viewBox="0 0 24 24"
    ><g class="jp-progress-spinner-spinner"
      ><circle cx="12" cy="12" r="9.5" fill="none" stroke-width={(12 / radius) * stroke}
      ></circle></g
    ></svg
  >
{/if}

<style lang="postcss">
  .jp-progress-spinner {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;

    &-spinner {
      transform-origin: center;
      animation: rotateAnim 2s linear infinite;

      & circle {
        animation: strokeAnim 1.5s ease-in-out infinite;
      }
    }
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

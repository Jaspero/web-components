<script lang="ts">
  import { onMount } from 'svelte';
  import '../../../../dist/progress-spinner.wc.js';

  export let progress: number = 0;
  export let determinate: boolean = true;
  const startProgress = () => {
    const interval = setInterval(() => {
      if (progress < 100) {
        progress += 1;
      } else {
        clearInterval(interval);
      }
    }, 50);
  };
  onMount(() => {
    startProgress();
  });
</script>

<jp-progress-spinner {determinate} {progress} />

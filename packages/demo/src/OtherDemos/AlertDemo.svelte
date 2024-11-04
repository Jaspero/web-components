<script lang="ts">
  import '../../../../dist/alert.wc.js';
  import '../../../../dist/render-alert.js';
  let showGood = false;
  let showBad = false;
</script>

{#if showBad}
  <jp-alert
    title="ERROR"
    message="This is error message"
    state="error"
    on:close={() => (showBad = false)}
  ></jp-alert>
{/if}

{#if showGood}
  <jp-alert
    title="SUCCESS"
    message="This is success message"
    state="success"
    on:close={() => (showGood = false)}
  ></jp-alert>
{/if}

<button on:click={() => (showBad = !showBad)}>Toggle Error Alert</button>
<button on:click={() => (showGood = !showGood)}>Toggle success Alert</button>

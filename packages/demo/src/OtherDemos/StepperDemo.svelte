<script lang="ts">
  import '../../../../dist/stepper.wc.js';

  let stepperComponent: { next: () => any; previous: () => any; reset: () => any };
</script>

<button on:click={() => stepperComponent.previous()}>PREVIOUS</button>
<button on:click={() => stepperComponent.next()}>NEXT</button>
<button on:click={() => stepperComponent.reset()}>RESET</button>

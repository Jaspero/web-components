<svelte:options
  customElement={{
    tag: 'jp-stepper',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let steps: string[] = [];
  export let step: number = 0;

  const dispatch = createEventDispatcher();

  export function next() {
    if (step < steps.length - 1) {
      step += 1;
    }
    dispatch('change', { step });
  }

  export function previous() {
    if (step > 0) {
      step -= 1;
    }
    dispatch('change', { step });
  }

  export function reset() {
    step = 0;
    dispatch('change', { step });
  }

  onMount(() => {
    if (typeof steps == 'string') {
      steps = JSON.parse(steps);
    }
  });
</script>

<div class="jp-stepper">
  {#each steps as label, index}
    <div class="jp-stepper-step">
      <div class="jp-stepper-step-circle {index <= step ? 'active' : 'inactive'}">
        {index + 1}
      </div>

      <div class="jp-stepper-step-label">
        {label}
      </div>
    </div>

    {#if index < steps.length - 1}
      <div class="jp-stepper-connector-line"></div>
    {/if}
  {/each}
</div>

<style lang="postcss">
  .jp-stepper {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    gap: 1rem;

    &-step {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;

      &-label {
        position: absolute;
        top: 2.25rem;
        width: 5rem;
        text-align: center;
      }

      &-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;

        &.active {
          color: var(--text-on-primary);
          background-color: var(--primary-color);
        }

        &.inactive {
          background-color: var(--background-secondary);
        }
      }
    }

    &-connector-line {
      margin-top: 1rem;
      flex-grow: 1;
      height: 1px;
      background-color: #ccc;
    }
  }
</style>

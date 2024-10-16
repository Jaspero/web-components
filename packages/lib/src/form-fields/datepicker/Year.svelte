<script lang="ts">
  import { isOutOfMaxBounds } from './is-out-of-max-bounds.js';
  import { isOutOfMinBounds } from './is-out-of-min-bounds.js';
  import { createEventDispatcher } from 'svelte';

  export let internalMinDate: Date | null;
  export let internalMaxDate: Date | null;
  export let yearSelected: number | null;
  export let year: number;

  $: isOutOfMax = isOutOfMaxBounds(internalMaxDate, year, 0, 1);
  $: isOutOfMin = isOutOfMinBounds(internalMinDate, year, 11, 31);

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('yearSelected', {
      year: year
    });
  }
</script>

<button
  type="button"
  on:click|preventDefault={handleClick}
  class:active={yearSelected === year}
  disabled={isOutOfMax || isOutOfMin}
>
  {year}
</button>
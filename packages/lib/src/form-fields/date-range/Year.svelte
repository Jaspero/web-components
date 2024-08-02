<script lang="ts">
  import { isOutOfMaxBounds } from '../datepicker/is-out-of-max-bounds.js';
  import { isOutOfMinBounds } from '../datepicker/is-out-of-min-bounds.js';
  import { createEventDispatcher } from 'svelte';

  export let internalMinDate: Date;
  export let internalMaxDate: Date;
  export let year: number;
  export let firstYearSelected: number;
  export let secondYearSelected: number;
  export let selectingFirst: boolean;
  export let maxSelectibleDays: number;
  export let maxDateSelectible: Date;
  export let minDateSelectible: Date;

  const dispatch = createEventDispatcher();
  function handleClick() {
    dispatch('yearSelected', {
      year: year
    });
  }

  function isYearOutOfSelectableBounds(year: number, selectingFirst: boolean): boolean {
    if (!selectingFirst && maxSelectibleDays) {
      if (year > maxDateSelectible.getFullYear() || year < minDateSelectible.getFullYear()) {
        return true;
      }
    }
    return false;
  }

  $: isOutOfBonuds = isYearOutOfSelectableBounds(year, selectingFirst);
  $: isOutOfMax = isOutOfMaxBounds(internalMaxDate, year, 0, 1);
  $: isOutOfMin = isOutOfMinBounds(internalMinDate, year, 11, 31);
</script>

<button
  type="button"
  class:active={secondYearSelected
    ? firstYearSelected <= year && secondYearSelected >= year
    : firstYearSelected == year}
  on:click|preventDefault={handleClick}
  disabled={isOutOfMax || isOutOfMin || isOutOfBonuds}
>
  {year}
</button>

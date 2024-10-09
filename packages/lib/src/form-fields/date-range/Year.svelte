<script lang="ts">
  import * as calculateLimits from './calculate-limits/min-date.js';
  import { createEventDispatcher } from 'svelte';
  import './date-range.css';

  export let internalMinDate: Date | null;
  export let internalMaxDate: Date | null;
  export let year: number;
  export let firstYearSelected: number | null;
  export let secondYearSelected: number | null;
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
  $: isOutOfMax = calculateLimits.isOutOfMaxBounds(internalMaxDate, year, 0, 1);
  $: isOutOfMin = calculateLimits.isOutOfMinBounds(internalMinDate, year, 11, 31);
</script>

<button
  type="button"
  class:jp-date-range-menu-year-row-cell-active={secondYearSelected
    ? Number(firstYearSelected) <= year && secondYearSelected >= year
    : firstYearSelected == year}
  on:click|preventDefault={handleClick}
  class:jp-date-range-menu-year-row-cell-disabled={isOutOfMax || isOutOfMin || isOutOfBonuds}
  disabled={isOutOfMax || isOutOfMin || isOutOfBonuds}
>
  {year}
</button>

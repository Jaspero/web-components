<script lang="ts">
  import * as calculateLimits from './calculate-limits/min-date.js';
  import { createEventDispatcher } from 'svelte';
  import './date-range.pcss';

  export let internalMinDate: Date | null;
  export let internalMaxDate: Date | null;
  export let year: number;
  export let firstYearSelected: number | null;
  export let secondYearSelected: number | null;
  export let selectingFirst: boolean;
  export let maxSelectableDays: number;
  export let maxDateSelectable: Date;
  export let minDateSelectable: Date;

  const dispatch = createEventDispatcher();
  function handleClick() {
    dispatch('yearSelected', {
      year: year
    });
  }

  function isYearOutOfSelectableBounds(year: number, selectingFirst: boolean): boolean {
    if (!selectingFirst && maxSelectableDays) {
      if (year > maxDateSelectable.getFullYear() || year < minDateSelectable.getFullYear()) {
        return true;
      }
    }
    return false;
  }

  $: isOutOfBounds = isYearOutOfSelectableBounds(year, selectingFirst);
  $: isOutOfMax = calculateLimits.isOutOfMaxBounds(internalMaxDate, year, 0, 1);
  $: isOutOfMin = calculateLimits.isOutOfMinBounds(internalMinDate, year, 11, 31);
</script>

<button
  type="button"
  class:jp-date-range-menu-year-row-cell-active={secondYearSelected
    ? Number(firstYearSelected) <= year && secondYearSelected >= year
    : firstYearSelected == year}
  on:click|preventDefault={handleClick}
  class:jp-date-range-menu-year-row-cell-disabled={isOutOfMax || isOutOfMin || isOutOfBounds}
  disabled={isOutOfMax || isOutOfMin || isOutOfBounds}
>
  {year}
</button>

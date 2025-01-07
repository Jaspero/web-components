<script lang="ts">
  import * as calculateLimits from './calculate-limits/min-date.js';
  import { createEventDispatcher } from 'svelte';

  export let internalMinDate: Date | null;
  export let internalMaxDate: Date | null;
  export let index: number;
  export let month: string;
  export let pickerYear: number;
  export let firstYearSelected: number | null = null;
  export let secondYearSelected: number | null = null;
  export let secondMonthSelected: number | string | null;
  export let firstMonthSelected: number | string | null;
  export let selectingFirst: boolean;
  export let maxSelectableDays: number;
  export let maxDateSelectable: Date;
  export let minDateSelectable: Date;

  const dispatch = createEventDispatcher();
  function handleClick() {
    dispatch('monthSelected', {
      month: index
    });
  }

  function isMonthOutOfSelectableBounds(
    year: number,
    month: number,
    selectingFirst: boolean
  ): boolean {
    if (!selectingFirst && maxSelectableDays) {
      if (
        (year >= maxDateSelectable.getFullYear() && month > maxDateSelectable.getMonth()) ||
        (month < minDateSelectable.getMonth() && year <= minDateSelectable.getFullYear())
      ) {
        return true;
      }
    }
    return false;
  }

  $: isOutOfBonuds = isMonthOutOfSelectableBounds(pickerYear, index, selectingFirst);
  $: isOutOfMax = calculateLimits.isOutOfMaxBounds(internalMaxDate, pickerYear, index, 1);
  $: isOutOfMin = calculateLimits.isOutOfMinBounds(internalMinDate, pickerYear, index, 31);
</script>

<button
  type="button"
  on:click|preventDefault={handleClick}
  class:jp-date-range-menu-month-grid-cell-active={secondMonthSelected != null
    ? parseInt(
        `${firstYearSelected}${Number(firstMonthSelected) + 1 < 10 ? '0' : ''}${Number(firstMonthSelected) + 1}`,
        10
      ) <= parseInt(`${pickerYear}${index + 1 < 10 ? '0' : ''}${index + 1}`, 10) &&
      parseInt(
        `${secondYearSelected}${Number(secondMonthSelected) + 1 < 10 ? '0' : ''}${Number(secondMonthSelected) + 1}`,
        10
      ) >= parseInt(`${pickerYear}${index + 1 < 10 ? '0' : ''}${index + 1}`, 10)
    : firstMonthSelected == (index < 0 ? '11' : index > 11 ? '0' : index) &&
      firstYearSelected == pickerYear + (index < 0 ? -1 : index > 11 ? 1 : 0)}
  class:jp-date-range-menu-month-grid-cell-disabled={isOutOfMax || isOutOfMin || isOutOfBonuds}
  disabled={isOutOfMax || isOutOfMin || isOutOfBonuds}
>
  {month}
</button>

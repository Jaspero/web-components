<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import * as calculateLimits from './calculate-limits/min-date.js';

  export let col: { year: number; month: number; day: number; gray: boolean };
  export let internalMinDate: Date | null;
  export let internalMaxDate: Date | null;
  export let firstDateSelected: number | null;
  export let firstMonthSelected: string | number | null;
  export let firstYearSelected: number | null;
  export let secondYearSelected: number | null;
  export let firstInternalValue = '';
  export let secondInternalValue = '';
  export let selectingFirst: boolean;
  export let maxSelectableDays: number;
  export let minSelectableDays: number;
  export let maxDateSelectable: Date;
  export let minDateSelectable: Date;
  let isOutOfBonuds: boolean;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('dateSelected', {
      day: col.day,
      month: col.month,
      year: col.year
    });
  }

  function formatYear(col: { year: any; month: any; day?: number }) {
    return col.year + (col.month < 0 ? -1 : col.month > 11 ? 1 : 0);
  }

  function formatMonth(month: number) {
    if (month < 0) return '12';
    if (month > 11) return '01';
    return (month + 1 < 10 ? '0' : '') + (month + 1);
  }

  function adjustMonth(month: number) {
    if (month < 0) return 11;
    if (month > 11) return 0;
    return month;
  }

  function formatDay(col: { day: number }) {
    return (col.day < 10 ? '0' : '') + col.day;
  }

  function parseDate(value: string) {
    return parseInt(value.split('-').join(''), 10);
  }

  function generateDateString(col: { year: any; month: any; day: number }) {
    return `${formatYear(col)}${formatMonth(col.month)}${formatDay(col)}`;
  }

  function isDateOutOfSelectableBounds(
    year: number,
    month: number,
    day: number,
    selectingFirst: boolean
  ) {
    if (!selectingFirst && maxSelectableDays) {
      const potentialDate = new Date(year, month, day);
      if (potentialDate > maxDateSelectable || potentialDate < minDateSelectable) {
        return true;
      }
    }
    return false;
  }

  function isDateOutOfMinRequiredBounds(
    year: number,
    month: number,
    day: number,
    selectingFirst: boolean
  ) {
    if (!selectingFirst) {
      const potentialDate = new Date(year, month, day);
      const datePicked = new Date(firstInternalValue);
      if (
        ((potentialDate < minDateAfter && potentialDate > datePicked) ||
          (potentialDate > minDateBefore && potentialDate < datePicked)) &&
        minSelectableDays
      ) {
        return true;
      }
    }
    return false;
  }

  $: minDateBefore = calculateLimits.calculateRequiredBefore(firstInternalValue, minSelectableDays);
  $: minDateAfter = calculateLimits.calculateRequiredAfter(firstInternalValue, minSelectableDays);

  $: isOutOfBonuds =
    isDateOutOfSelectableBounds(col.year, col.month, col.day, selectingFirst) ||
    isDateOutOfMinRequiredBounds(col.year, col.month, col.day, selectingFirst);
  $: isOutOfMax = calculateLimits.isOutOfMaxBounds(internalMaxDate, col.year, col.month, col.day);
  $: isOutOfMin = calculateLimits.isOutOfMinBounds(internalMinDate, col.year, col.month, col.day);
  $: isActive = secondYearSelected
    ? parseDate(firstInternalValue) < parseInt(generateDateString(col), 10) &&
      parseDate(secondInternalValue) > parseInt(generateDateString(col), 10)
    : false;

  $: isFirstValue =
    firstDateSelected == col.day &&
    firstMonthSelected == adjustMonth(col.month) &&
    firstYearSelected == formatYear(col) &&
    secondYearSelected;

  $: isOnlyValue =
    (firstDateSelected == col.day &&
      firstMonthSelected == adjustMonth(col.month) &&
      firstYearSelected == formatYear(col) &&
      !secondYearSelected) ||
    (parseDate(firstInternalValue) === parseDate(secondInternalValue) &&
      firstDateSelected == col.day &&
      firstMonthSelected == adjustMonth(col.month) &&
      firstYearSelected == formatYear(col));

  $: isLastValue =
    secondYearSelected && parseDate(secondInternalValue) == parseInt(generateDateString(col), 10);
</script>

<div class="jp-date-range-table-cell">
  <button
    type="button"
    class:jp-date-range-table-cell-gray={col.gray &&
      !isActive &&
      !isOnlyValue &&
      !isLastValue &&
      !isFirstValue}
    class:jp-date-range-table-cell-active={isActive && !isOnlyValue}
    class:jp-date-range-table-cell-firstValue={isFirstValue && !isOnlyValue}
    class:jp-date-range-table-cell-lastValue={isLastValue && !isOnlyValue}
    class:jp-date-range-table-cell-onlyValue={isOnlyValue}
    on:click|preventDefault={handleClick}
    class:jp-date-range-table-cell-disabled={isOutOfMax || isOutOfMin || isOutOfBonuds}
    disabled={isOutOfMax || isOutOfMin || isOutOfBonuds}
  >
    {col.day}
  </button>
</div>

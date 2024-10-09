<script lang="ts">
  import { isOutOfMaxBounds } from '../datepicker/is-out-of-max-bounds.js';
  import { isOutOfMinBounds } from '../datepicker/is-out-of-min-bounds.js';
  import { createEventDispatcher } from 'svelte';
  import { calculateRequiredAfter, calculateRequiredBefore } from './calculate-limits/min-date.js';

  export let col: { year: number; month: number; day: number; gray: boolean };
  export let internalMinDate: Date;
  export let internalMaxDate: Date;
  export let firstDateSelected: number;
  export let firstMonthSelected: string;
  export let firstYearSelected: number;
  export let secondYearSelected: number;
  export let firstInternalValue = '';
  export let secondInternalValue = '';
  export let selectingFirst: boolean;
  export let maxSelectibleDays: number;
  export let minSelectibleDays: number;
  export let maxDateSelectible: Date;
  export let minDateSelectible: Date;
  let isOutOfBonuds: boolean;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('dateSelected', {
      day: col.day,
      month: col.month,
      year: col.year
    });
  }

  function formatYear(col) {
    return col.year + (col.month < 0 ? -1 : col.month > 11 ? 1 : 0);
  }

  function formatMonth(col) {
    if (col < 0) return '12';
    if (col > 11) return '01';
    return (col + 1 < 10 ? '0' : '') + (col + 1);
  }

  function formatDay(col) {
    return (col.day < 10 ? '0' : '') + col.day;
  }

  function parseDate(value: string) {
    return parseInt(value.split('-').join(''), 10);
  }

  function generateDateString(col) {
    return `${formatYear(col)}${formatMonth(col.month)}${formatDay(col)}`;
  }

  function isDateOutOfSelectableBounds(
    year: number,
    month: number,
    day: number,
    selectingFirst: boolean
  ) {
    if (!selectingFirst && maxSelectibleDays) {
      const potentialDate = new Date(year, month, day);
      if (potentialDate > maxDateSelectible || potentialDate < minDateSelectible) {
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
        minSelectibleDays
      ) {
        return true;
      }
    }
    return false;
  }

  $: minDateBefore = calculateRequiredBefore(firstInternalValue, minSelectibleDays);
  $: minDateAfter = calculateRequiredAfter(firstInternalValue, minSelectibleDays);

  $: isOutOfBonuds =
    isDateOutOfSelectableBounds(col.year, col.month, col.day, selectingFirst) ||
    isDateOutOfMinRequiredBounds(col.year, col.month, col.day, selectingFirst);
  $: isOutOfMax = isOutOfMaxBounds(internalMaxDate, col.year, col.month, col.day);
  $: isOutOfMin = isOutOfMinBounds(internalMinDate, col.year, col.month, col.day);
  $: isActive = secondYearSelected
    ? parseDate(firstInternalValue) < parseInt(generateDateString(col), 10) &&
      parseDate(secondInternalValue) > parseInt(generateDateString(col), 10)
    : false;

  $: isFirstValue =
    firstDateSelected == col.day &&
    firstMonthSelected == formatMonth(col.month - 1) &&
    firstYearSelected == formatYear(col) &&
    secondYearSelected;

  $: isOnlyValue =
    (firstDateSelected == col.day &&
      firstMonthSelected == formatMonth(col.month - 1) &&
      firstYearSelected == formatYear(col) &&
      !secondYearSelected) ||
    (parseDate(firstInternalValue) === parseDate(secondInternalValue) &&
      firstDateSelected == col.day &&
      firstMonthSelected == formatMonth(col.month - 1) &&
      firstYearSelected == formatYear(col));

  $: isLastValue =
    secondYearSelected && parseDate(secondInternalValue) == parseInt(generateDateString(col), 10);
</script>

<div class="table-cell">
  <button
    type="button"
    class:gray={col.gray && !isActive && !isOnlyValue && !isLastValue && !isFirstValue}
    class:active={isActive && !isOnlyValue}
    class:firstValue={isFirstValue && !isOnlyValue}
    class:lastValue={isLastValue && !isOnlyValue}
    class:onlyValue={isOnlyValue}
    on:click|preventDefault={handleClick}
    disabled={isOutOfMax || isOutOfMin || isOutOfBonuds}
  >
    {col.day}
  </button>
</div>

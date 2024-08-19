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
</script>

<div class="table-cell">
<button
  type="button"
  class:gray={col.gray}
  class:active={secondYearSelected
    ? parseInt(firstInternalValue.split('-').join(''), 10) <=
        parseInt(
          `${col.year + (col.month < 0 ? -1 : col.month > 11 ? 1 : 0)}${
            col.month < 0
              ? '12'
              : col.month > 11
              ? '01'
              : (col.month + 1 < 10 ? '0' : '') + (col.month + 1)
          }${col.day < 10 ? '0' : ''}${col.day}`,
          10
        ) &&
      parseInt(secondInternalValue.split('-').join(''), 10) >=
        parseInt(
          `${col.year + (col.month < 0 ? -1 : col.month > 11 ? 1 : 0)}${
            col.month < 0
              ? '12'
              : col.month > 11
              ? '01'
              : (col.month + 1 < 10 ? '0' : '') + (col.month + 1)
          }${col.day < 10 ? '0' : ''}${col.day}`,
          10
        )
    : firstDateSelected == col.day &&
      firstMonthSelected ==
        (col.month < 0 ? '11' : col.month > 11 ? '00' : (col.month < 10 ? '0' : '') + col.month) &&
      firstYearSelected == col.year + (col.month < 0 ? -1 : col.month > 11 ? 1 : 0)}
  on:click|preventDefault={handleClick}
  disabled={isOutOfMax || isOutOfMin || isOutOfBonuds}
>
  {col.day}
</button>
</div>

<style>
  .table-cell button {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .table-cell button:hover {
    background-color: var(--background-secondary);
  }

  .table-cell button.gray {
    opacity: 0.5;
  }

  .table-cell button.active,
  .table-cell button.active:hover
   {
    background-color: var(--primary-color);
    color: var(--text-on-primary);
    opacity: 1;
  }
  
  .table-cell button:disabled:hover {
    background-color: pink;
    color: var(--text-on-primary);
    opacity: 1;
  }
</style>

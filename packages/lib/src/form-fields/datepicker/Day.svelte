<script lang="ts">
  import { isOutOfMaxBounds } from './is-out-of-max-bounds.js';
  import { isOutOfMinBounds } from './is-out-of-min-bounds.js';
  import { createEventDispatcher } from 'svelte';
  export let col: { year: number; month: number; day: number; gray: boolean; selected: boolean };
  export let internalMinDate: Date | null;
  export let internalMaxDate: Date | null;
  export let dateSelected: number;
  export let monthSelected: number;
  export let yearSelected: number | null;
  export let enableMultiple: boolean;
  export let selectedDates: any[] = [];
  export let allowedDateTimestamps: any[] = [];

  let isDatePicked = false;
  let date = null;
  let notAllowed = false;

  $: isOutOfMax = isOutOfMaxBounds(internalMaxDate, col.year, col.month, col.day);
  $: isOutOfMin = isOutOfMinBounds(internalMinDate, col.year, col.month, col.day);
  $: colDate = Date.UTC(col.year, col.month, col.day);
  $: isCurrentDate = (() => {
    const today = new Date();
    return col.year === today.getFullYear() && 
           col.month === today.getMonth() && 
           col.day === today.getDate() && 
           !col.gray;
  })();

  $: {
    if (allowedDateTimestamps.length) {
      notAllowed = !allowedDateTimestamps.includes(colDate);
    }
  }

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('dateSelected', {
      day: col.day,
      month: col.month,
      year: col.year
    });
  }

  function handleMultipleClicks() {
    dispatch('multipleDatesSelected', {
      day: col.day,
      month: col.month,
      year: col.year,
      isDatePicked: isDatePicked
    });
  }
</script>

{#if enableMultiple}
  <button
    type="button"
    class:gray={col.gray}
    class:active={selectedDates.some(
      (e) => e.year === col.year && e.month === col.month && e.day === col.day
    )}
    class:current-date={isCurrentDate}
    on:click|preventDefault={() => {
      dateSelected = col.day;
      yearSelected = col.year;
      monthSelected = col.month;
      date = { year: col.year, month: col.month, day: col.day };
      const index = selectedDates.findIndex(
        (e) => e.year === col.year && e.month === col.month && e.day === col.day
      );
      if (index !== -1) {
        isDatePicked = false;
        selectedDates = [...selectedDates.slice(0, index), ...selectedDates.slice(index + 1)];
      } else {
        isDatePicked = true;
        selectedDates = [...selectedDates, date];
      }
      handleMultipleClicks();
    }}
    disabled={isOutOfMin || isOutOfMax || notAllowed}
  >
    {col.day}
  </button>
{:else}
  <button
    type="button"
    class:gray={col.gray}
    class:active={dateSelected == col.day && monthSelected == col.month && yearSelected == col.year}
    class:current-date={isCurrentDate}
    on:click|preventDefault={handleClick}
    disabled={isOutOfMin || isOutOfMax || notAllowed}
  >
    {col.day}
  </button>
{/if}

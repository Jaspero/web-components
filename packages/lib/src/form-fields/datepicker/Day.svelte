<script lang="ts">
  import { isOutOfMaxBounds } from './is-out-of-max-bounds.js';
  import { isOutOfMinBounds } from './is-out-of-min-bounds.js';
  import { createEventDispatcher } from 'svelte';
  export let col: { year: number; month: number; day: number; gray: boolean };
  export let internalMinDate: Date;
  export let internalMaxDate: Date;
  export let dateSelected: number;
  export let monthSelected: number;
  export let yearSelected: number;
  export let enableMultiple: boolean;

  let isDatePicked = false;
  let selectedDates = [];
  let date = null;

  $: isOutOfMax = isOutOfMaxBounds(internalMaxDate, col.year, col.month, col.day);
  $: isOutOfMin = isOutOfMinBounds(internalMinDate, col.year, col.month, col.day);

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
  <div class="day">
    <button
      type="button"
      class:gray={col.gray}
      class:active={selectedDates.some(
        (e) => e.year === col.year && e.month === col.month && e.day === col.day
      )}
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
      disabled={isOutOfMin || isOutOfMax}
    >
      {col.day}
    </button>
  </div>
{:else}
  <div class="day">
    <button
      type="button"
      class:gray={col.gray}
      class:active={dateSelected == col.day &&
        monthSelected == col.month &&
        yearSelected == col.year}
      on:click|preventDefault={handleClick}
      disabled={isOutOfMin || isOutOfMax}
    >
      {col.day}
    </button>
  </div>
{/if}

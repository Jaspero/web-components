<script lang="ts">
    import { isOutOfMaxBounds } from '../datepicker/is-out-of-max-bounds.js';
    import { isOutOfMinBounds } from '../datepicker/is-out-of-min-bounds.js';
    import { createEventDispatcher } from 'svelte';
    import { calculateMaxDate,calculateMinDate } from './calculate-max/min-date.js';

    export let internalMinDate: Date;
    export let internalMaxDate: Date;
    export let year: number;
    export let firstYearSelected: number;
    export let secondYearSelected: number;
    export let selectingFirst;
    export let maxSelectibleDays;
    export let firstInternalValue;
    let maxDateSelectible;
    let minDateSelectible;

    const dispatch = createEventDispatcher();
    function handleClick() {
      dispatch('yearSelected', {
        year : year
      });
    }

    function isYearOutOfSelectableBounds(year : number, selectingFirst : boolean): boolean{
      if(!selectingFirst){
        const selectedDate = new Date(year);
      if((selectedDate > maxDateSelectible  || selectedDate < minDateSelectible) && maxSelectibleDays){
          return true;
      }
    }
      return false;
    }

    $: {
        maxDateSelectible = calculateMaxDate(firstInternalValue, maxSelectibleDays).getFullYear();
        minDateSelectible = calculateMinDate(firstInternalValue, maxSelectibleDays).getFullYear();
    }

    $: isOutOfBonuds = isYearOutOfSelectableBounds(year, selectingFirst);

    $: isOutOfMax = isOutOfMaxBounds(internalMaxDate, year, 0, 1)
    $: isOutOfMin = isOutOfMinBounds(internalMinDate, year, 11, 31)
</script>

<button
    type="button"
    class:active={secondYearSelected
        ? firstYearSelected <= year && secondYearSelected >= year
        : firstYearSelected == year}
    on:click|preventDefault={handleClick}
    disabled = {isOutOfMax || isOutOfMin || isOutOfBonuds}>
    {year}
</button>
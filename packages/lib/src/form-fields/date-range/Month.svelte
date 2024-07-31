<script lang="ts">
  import { isOutOfMaxBounds } from '../datepicker/is-out-of-max-bounds.js';
  import { isOutOfMinBounds } from '../datepicker/is-out-of-min-bounds.js';
  import { createEventDispatcher } from 'svelte';
  import { calculateMaxDate, calculateMinDate } from './calculate-max/min-date.js';

  export let internalMinDate: Date;
  export let internalMaxDate: Date;
  export let index: number;
  export let month: string;
  export let pickerYear: number;
  export let firstYearSelected: number = null;
  export let secondYearSelected: number = null;
  export let secondMonthSelected: number;
  export let firstMonthSelected: number;
  export let selectingFirst: boolean;
  export let maxSelectibleDays: number;
  export let firstInternalValue: string;
  let maxDateSelectible: Date;
  let minDateSelectible: Date;

  const dispatch = createEventDispatcher();
  function handleClick() {
    dispatch('monthSelected', {
      month : index
    });
  }

  function isMonthOutOfSelectableBounds(year : number, month : number, selectingFirst : boolean): boolean{
    if(!selectingFirst){
      const selectedDate = new Date(year, month);
    if((selectedDate > maxDateSelectible  || selectedDate < minDateSelectible) && maxSelectibleDays){
        return true;
    }
  }
    return false;
  }


  $: maxDateSelectible = calculateMaxDate(firstInternalValue, maxSelectibleDays);
  $: minDateSelectible = calculateMinDate(firstInternalValue, maxSelectibleDays);
  $: isOutOfBonuds = isMonthOutOfSelectableBounds(pickerYear, index, selectingFirst);
  $: isOutOfMax = isOutOfMaxBounds(internalMaxDate, pickerYear, index, 1);
  $: isOutOfMin = isOutOfMinBounds(internalMinDate, pickerYear, index, 31);
</script>

<button
    type="button"
    on:click|preventDefault={handleClick}
    class:active={secondMonthSelected != null
    ? parseInt(
        `${firstYearSelected}${firstMonthSelected + 1 < 10 ? '0' : ''}${
            firstMonthSelected + 1
          }`,
          10
        ) <= parseInt(`${pickerYear}${index + 1 < 10 ? '0' : ''}${index + 1}`, 10) &&
        parseInt(
        `${secondYearSelected}${secondMonthSelected + 1 < 10 ? '0' : ''}${secondMonthSelected + 1}`,
          10
        ) >= parseInt(`${pickerYear}${index + 1 < 10 ? '0' : ''}${index + 1}`, 10)
        : firstMonthSelected == (index < 0 ? '11' : index > 11 ? '0' : index) && 
      firstYearSelected == pickerYear + (index < 0 ? -1 : index > 11 ? 1 : 0)}
    disabled = {isOutOfMax || isOutOfMin || isOutOfBonuds}
>
    {month}
</button>
<script lang="ts">
    import { isOutOfMaxBounds } from '../datepicker/is-out-of-max-bounds.js';
    import { isOutOfMinBounds } from '../datepicker/is-out-of-min-bounds.js';
    import { createEventDispatcher } from 'svelte';
    
    export let col: { year: number; month: number; day: number; gray: boolean };
    export let internalMinDate: Date;
    export let internalMaxDate: Date;
    export let firstDateSelected: number;
    export let firstMonthSelected
    export let firstYearSelected: number;
    export let secondYearSelected: number;
    export let firstInternalValue: string = '';
    export let secondInternalValue: string = '';
    let maxDateSelectible = new Date();

  $: maxDateSelectible = new Date(firstInternalValue);

  
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
</script>
  
<button
  type="button"
  class:gray={col.gray}
  class:active={secondYearSelected
    ? parseInt(firstInternalValue.split('-').join(''), 10) <=
        parseInt(
          `${col.year + (col.month < 0 ? -1 : col.month > 11 ? 1 : 0)}${col.month < 0 ? '12' : col.month > 11 ? '01' : (col.month + 1 < 10 ? '0' : '') + (col.month + 1)}${col.day < 10 ? '0' : ''}${col.day}`,
          10
        ) &&
      parseInt(secondInternalValue.split('-').join(''), 10) >=
        parseInt(
          `${col.year + (col.month < 0 ? -1 : col.month > 11 ? 1 : 0)}${col.month < 0 ? '12' : col.month > 11 ? '01' : (col.month + 1 < 10 ? '0' : '') + (col.month + 1)}${col.day < 10 ? '0' : ''}${col.day}`,
          10
        )
    : firstDateSelected == col.day &&
      firstMonthSelected == (col.month < 0 ? '11' : col.month > 11 ? '00' : (col.month < 10 ? '0' : '') + col.month) &&
      firstYearSelected == (col.year + (col.month < 0 ? -1 : col.month > 11 ? 1 : 0))}
  on:click|preventDefault={handleClick}
  disabled={isOutOfMax || isOutOfMin}
>
    {col.day}</button>

  
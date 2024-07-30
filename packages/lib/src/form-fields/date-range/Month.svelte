<script lang="ts">
  import { isOutOfMaxBounds } from '../datepicker/is-out-of-max-bounds.js';
  import { isOutOfMinBounds } from '../datepicker/is-out-of-min-bounds.js';
  import { createEventDispatcher } from 'svelte';
  
  export let internalMinDate: Date;
  export let internalMaxDate: Date;
  export let index: number;
  export let month: string;
  export let pickerYear: number;
  export let firstYearSelected: number = null;
  export let secondYearSelected: number = null;
  export let secondMonthSelected;
  export let firstMonthSelected;

  $: isOutOfMax = isOutOfMaxBounds(internalMaxDate, pickerYear, index, 1)
  $: isOutOfMin = isOutOfMinBounds(internalMinDate, pickerYear, index, 31)
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('monthSelected', {
      month : index
    });
  }
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
    disabled = {isOutOfMax || isOutOfMin}
>
    {month} 
</button>
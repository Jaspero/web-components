<script lang="ts">
    import { isOutOfMaxBounds } from './is-out-of-max-bounds.js';
    import { isOutOfMinBounds } from './is-out-of-min-bounds.js';
    import { createEventDispatcher } from 'svelte';
    export let col: {year: number; month: number; day: number; gray:boolean};
    export let internalMinDate: Date;
    export let internalMaxDate: Date;
    export let dateSelected: number;
    export let monthSelected: number;
    export let yearSelected: number;
    
    
    $: isOutOfMax = isOutOfMaxBounds(internalMaxDate, col.year, col.month, col.day)
    $: isOutOfMin = isOutOfMinBounds(internalMinDate, col.year, col.month, col.day)


    const dispatch = createEventDispatcher();

    function handleClick() {

      dispatch('dateSelected', {
        day: col.day,
        month: col.month,
        year: col.year
      });
    }
    
</script>

<div class="day">
  <button
    type="button"
    class:gray={col.gray}
    class:active={dateSelected == col.day && monthSelected == col.month && yearSelected == col.year}
    on:click|preventDefault={handleClick}
    disabled={isOutOfMin || isOutOfMax}>
    {col.day} 
  </button>
</div>

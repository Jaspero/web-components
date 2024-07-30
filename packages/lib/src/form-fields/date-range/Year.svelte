<script lang="ts">
    import { isOutOfMaxBounds } from '../datepicker/is-out-of-max-bounds.js';
    import { isOutOfMinBounds } from '../datepicker/is-out-of-min-bounds.js';
    import { createEventDispatcher } from 'svelte';

    export let internalMinDate: Date;
    export let internalMaxDate: Date;
    export let year: number;
    export let firstYearSelected: number;
    export let secondYearSelected: number;

    $: isOutOfMax = isOutOfMaxBounds(internalMaxDate, year, 0, 1)
    $: isOutOfMin = isOutOfMinBounds(internalMinDate, year, 11, 31)
    
    const dispatch = createEventDispatcher();
    function handleClick() {
      dispatch('yearSelected', {
        year : year
      });
    }
</script>

<button
    type="button"
    class="menu-year-row-cell"
    class:active={secondYearSelected
        ? firstYearSelected <= year && secondYearSelected >= year
        : firstYearSelected == year}
    on:click|preventDefault={handleClick}
    disabled = {isOutOfMax || isOutOfMin}>
    {year}
</button>
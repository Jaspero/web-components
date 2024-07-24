<script lang="ts">
    import { isOutOfMaxBounds } from "./is-out-of-max-bounds.js";
    import { isOutOfMinBounds } from "./is-out-of-min-bounds.js";
    import { createEventDispatcher } from 'svelte';
    
    export let internalMinDate: Date;
    export let internalMaxDate: Date;
    export let index: number;
    export let month;
    export let pickerYear: number;
    export let monthSelected: number;
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
    class:active={monthSelected === index}
    disabled={isOutOfMax || isOutOfMin}>
        {month}
</button>
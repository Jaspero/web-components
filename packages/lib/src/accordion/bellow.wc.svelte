<svelte:options
        customElement={{
        tag: 'jp-bellow',
        shadow: 'open'
    }}
/>

<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let expanded = false;
    export let title = 'Panel Title'; // Default title

    function toggleExpansion() {
        expanded = !expanded;
        dispatch('toggle', { expanded });
    }

    // Listen for the request-close event
    window.addEventListener('request-close', (event) => {
        if (event.detail !== title) {  // We'll use the title as a unique identifier
            expanded = false;
        }
    });
</script>


<div class="expansion-panel">
    <div class="expansion-header" on:click={toggleExpansion}>
        {title}
        <span class="toggle-icon">{expanded ? '-' : '+'}</span>
    </div>
    <div class="expansion-content" style="height: {expanded ? 'auto' : '0px' }">
        <slot />
    </div>
</div>

<style>
    .expansion-content {
        overflow: hidden;
    }
    /* Add your styles here since it won't inherit styles from the parent document */
</style>

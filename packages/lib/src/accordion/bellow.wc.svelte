<svelte:options
        customElement={{
        tag: 'jp-bellow',
        shadow: 'open'
    }}
/>

<script>
    import {createEventDispatcher, onMount} from 'svelte';

    const dispatch = createEventDispatcher();

    let expanded = false;
    export let title = 'Panel Title'; // Default title
    let contentHeight = 0; // to store the natural height of the content
    let contentElement;

    function toggleExpansion() {
        expanded = !expanded;
        if (expanded) {
            contentHeight = contentElement.scrollHeight;
        } else {
            contentHeight = 0;
        }
        dispatch('toggle', {expanded});
    }

    // Listen for the request-close event
    window.addEventListener('request-close', (event) => {
        if (event.detail !== title) {  // We'll use the title as a unique identifier
            expanded = false;
        }
    });
</script>

<div class="expansion-panel" class:expanded>
    <button class="expansion-header" on:click={toggleExpansion}>
        <p class="expansion-header-title">{@html title}</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="toggle-arrow" class:rotate={expanded}>
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.-->
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
        </svg>
    </button>
    <div
            class="expansion-content"
            bind:this={contentElement}
            style="height: {expanded ? `${contentHeight}px` : '0px' }">
        <slot/>
    </div>
</div>

<style>
    .expansion-panel {
        background-color: var(--background-primary);
        box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
        transition: .3s;
    }

    .expansion-panel:not(.expanded) .expansion-content {
        visibility: hidden;
    }

    .expansion-panel.expanded {
        border-radius: .25rem;
        margin: 1rem 0;
    }

    .expansion-panel.expanded .expansion-content {
        padding: .75rem 1rem;
    }

    .expansion-header {
        width: 100%;
        display: flex;
        align-items: center;
        background: none;
        border: none;
        text-align: left;
        font-size: 1rem;
        cursor: pointer;
        padding: .75rem 1rem;
        transition: background-color .3s;
    }

    .expansion-header:hover, .expansion-header:focus {
        background: var(--background-tertiary);
    }

    .expansion-header-title {
        flex-grow: 1;
        margin: 0;
    }

    .expansion-content {
        overflow: hidden;
        padding: 0 1rem;
        transition: 0.3s ease-out;
    }

    .toggle-arrow {
        width: 1rem;
        height: 1rem;
        min-width: 1rem;
        min-height: 1rem;
        -webkit-transition: transform .3s;
        -o-transition: transform .3s;
        -moz-transition: transform .3s;
        transition: transform .3s;
    }

    .toggle-arrow.rotate {
        -webkit-transform: rotate(-180deg);
        -moz-transform: rotate(-180deg);
        -ms-transform: rotate(-180deg);
        -o-transform: rotate(-180deg);
        transform: rotate(-180deg);
    }
</style>

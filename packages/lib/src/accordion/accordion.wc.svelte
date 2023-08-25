<svelte:options
        customElement={{
        tag: 'jp-accordion',
        shadow: 'open'
    }}
/>

<script>
    import { onMount } from 'svelte';

    export let multiple = false;
    let panels = [];

    function onToggle(event, index) {
        if (!multiple) {
            const panelToKeepOpen = panels[index].title;
            window.dispatchEvent(new CustomEvent('request-close', { detail: panelToKeepOpen }));
        }
    }

    onMount(() => {
        panels = Array.from(document.querySelectorAll('jp-bellow'));
        panels.forEach((panel, index) => {
            panel.addEventListener('toggle', event => onToggle(event, index));
        });
    });
</script>


<div class="accordion">
    <slot/>
</div>

<style>
    .accordion {
        width: 100%;
        margin: 1rem 0;
        border-radius: 50%;
    }
</style>
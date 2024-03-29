<script lang="ts">
  import { onMount } from 'svelte';
  import '../../../dist/asset-manager.wc.js';
  import {AMService} from './asset-manager.service.js';

  let el: HTMLDivElement;

  onMount(() => {
    const item = document.createElement('jp-asset-manager') as any;
    item.service = new AMService();
    item.rootPath = 'landing-pages';
    el.appendChild(item);
  });
</script>

<div class="binding-element" bind:this={el}></div>

<style>
    .binding-element {
        position: fixed;
        top: 0;
        left: 0;
        width: 90vw;
        max-width: 800px;
        height: 90vh;
        max-height: 400px;
        overflow: hidden;
        border: 1px solid rgba(0,0,0,.12);
        border-radius: 12px;
        background-color: white;
    }

    :global(jp-asset-manager) {
        overflow: hidden;
    }

    :global(jp-asset-manager section) {
        max-width: 100% !important;
        width: 100% !important;
        height: 100% !important;
        overflow: auto;
        border: none !important;
    }

    :global(.folder, .file) {
        border: 1px solid rgba(0,0,0,.12);
        border-radius: 4px;
        overflow: hidden;
    }

    :global(.file > button) {
        position: absolute;
        opacity: 0;
        visibility: hidden;
        background-color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        box-shadow: 0 3px 6px rgba(0,0,0,.12);
        cursor: pointer;
        transition: .35s;
    }

    :global(jp-asset-manager header) {
        z-index: 1;
        position: sticky;
        top: 0;
        background-color: white;
        padding: 1rem !important;
        border-bottom: 1px solid rgba(0,0,0,.06);
    }

    :global(.file) {
        display: flex;
        flex-direction: column;
    }

    :global(.file-name, .file-info) {
        padding: 4px;
    }

    :global(.file:hover > button) {
        opacity: 1;
        visibility: visible;
    }

    :global(.file-icon img) {
        width: 100%;
        object-fit: cover;
    }

    :global(.file-icon) {
        flex: 1 1 0;
    }

    :global(.folder) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem;
        cursor: pointer;
        background-color: rgba(0,0,0,.06);
    }

    :global(jp-asset-manager header div) {
        display: flex;
        gap: .5rem;
    }

    :global(jp-asset-manager header div span) {
        background-color: rgba(0,0,0,.06) !important;
        border-radius: 4px;
    }

    :global(jp-asset-manager header div button) {
        background-color: rgba(0,0,0,.06) !important;
        border-radius: 4px;
    }

    :global(jp-asset-manager header div button:disabled) {
        opacity: .25;
    }

    :global(jp-asset-manager header div button:hover) {
        background-color: rgba(0,0,0,1) !important;
        border-radius: 4px;
    }

    :global(.info) {
        height: unset !important;
    }

    :global(.folder-dialog) {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 90vw;
        max-width: 800px;
        height: 90vh;
        max-height: 400px;
        overflow: hidden;
        border: 1px solid rgba(0,0,0,.12);
        border-radius: 12px;
        background-color: white;
    }

    :global(.folder-dialog label) {

    }

    :global(.folder-dialog input) {
        padding: 1rem;
    }

    :global(.folder-dialog button) {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,.06) !important;
        border: 1px solid rgba(0,0,0,.12) !important;
        border-radius: 4px;
        padding: 0 12px;
        height: 36px;
    }
</style>
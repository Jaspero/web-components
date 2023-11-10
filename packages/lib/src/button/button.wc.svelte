<svelte:options
        customElement={{
            tag: 'jp-button',
            shadow: 'open'
        }}
/>

<script lang="ts">
    export let disabled = false;
    export let loading = false;
    export let variant: 'basic' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab' = 'basic';
    export let color: 'default' | 'primary' | 'accent' | 'warn' = 'default';

    export let type: 'button' | 'submit' = 'button';
</script>

<button {disabled}
        {type}
        class="jp-button jp-{variant}-button {color}"
        class:loading={loading}
        on:click>
    <slot />
</button>

<style>
    :host {
        display: inline-flex;
    }

    .jp-button {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 36px;
        border: none;
        outline: none;
        cursor: pointer;
        user-select: none;
        vertical-align: middle;
        text-decoration: none;
        background: none;
        color: inherit;
        font-family: inherit;
        font-size: .875rem;
        line-height: 1.5;
        text-transform: uppercase;
        overflow: hidden;
    }

    .jp-button:disabled {
        pointer-events: none;
    }

    .jp-button:not(.jp-icon-button):not(.jp-fab-button):not(.jp-mini-fab-button) {
        border-radius: .25rem;
        min-width: 4rem;
        height: 2.25rem;
        padding: 0 1rem;
    }

    .jp-button:not(.jp-basic-button):not(.jp-raised-button):not(.jp-stroked-button):not(.jp-flat-button) {
        overflow: hidden;
        border-radius: 50%;
    }

    .jp-button::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .1;
    }

    .jp-button.default:hover::after {
        background-color: #212121;
    }

    .jp-button.primary:hover::after {
        background-color: #e65100;
    }

    .jp-button.accent:hover::after {
        background-color: #ff9800;
    }

    .jp-button.warn:hover::after {
        background-color: #f44336;
    }

    .jp-basic-button {
        background-color: transparent;
    }

    .jp-basic-button.default {
        color:  #212121;
    }

    .jp-basic-button.primary {
        color: #e65100;
    }

    .jp-basic-button.accent {
        color: #ff9800;
    }

    .jp-basic-button.warn {
        color: #f44336;
    }

    .jp-basic-button:disabled {
        color: #888888
    }

    .jp-raised-button:not(:disabled) {
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .jp-raised-button:not(:disabled):hover {
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    }

    .jp-raised-button:not(:disabled):active {
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    .jp-raised-button.default {
        background-color: #ffffff;
        color:  #212121;
    }

    .jp-raised-button.primary {
        background-color: #e65100;
        color: #ffffff;
    }

    .jp-raised-button.accent {
        background-color: #ff9800;
        color: #212121;
    }

    .jp-raised-button.warn {
        background-color: #f44336;
        color: #ffffff;
    }

    .jp-raised-button:disabled {
        background-color: #dcdcdc;
        color: #888888
    }

    .jp-stroked-button {
        border: 1px solid #e0e0e0;
    }

    .jp-stroked-button.default {
        color:  #212121;
    }

    .jp-stroked-button.primary {
        color: #e65100;
    }

    .jp-stroked-button.accent {
        color: #ff9800;
    }

    .jp-stroked-button.warn {
        color: #f44336;
    }

    .jp-stroked-button:disabled {
        color: #888888
    }

    .jp-flat-button {

    }

    .jp-flat-button.primary:active::after,
    .jp-flat-button.accent:active::after,
    .jp-flat-button.warn:active::after{
        background-color: #ffffff;
    }

    .jp-flat-button.default {
        background-color: #ffffff;
        color:  #212121;
    }

    .jp-flat-button.primary {
        background-color: #e65100;
        color: #ffffff;
    }

    .jp-flat-button.accent {
        background-color: #ff9800;
        color: #212121;
    }

    .jp-flat-button.warn {
        background-color: #f44336;
        color: #ffffff;
    }

    .jp-flat-button:disabled {
        background-color: #dcdcdc;
        color: #888888
    }

    .jp-icon-button {
        width: 3rem;
        height: 3rem;
    }

    .jp-icon-button.default {
        color:  #212121;
        fill:  #212121;
    }

    .jp-icon-button.primary {
        color: #e65100;
        fill: #e65100;
    }

    .jp-icon-button.accent {
        color: #ff9800;
        fill: #ff9800;
    }

    .jp-icon-button.warn {
        color: #f44336;
        fill: #f44336;
    }

    .jp-icon-button:disabled {
        color: #888888;
        fill: #888888;
    }

    .jp-fab-button {
        width: 3.5rem;
        height: 3.5rem;
    }

    .jp-fab-button:not(:disabled) {
        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
    }

    .jp-fab-button:not(:disabled):hover {
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    .jp-fab-button:not(:disabled):active {
        box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
    }

    .jp-fab-button.default {
        background-color: #ffffff;
    }

    .jp-fab-button.primary {
        background-color: #e65100;
        color: #ffffff;
    }

    .jp-fab-button.accent {
        background-color: #ff9800;
        color: #212121;
    }

    .jp-fab-button.warn {
        background-color: #f44336;
        color: #ffffff;
    }

    .jp-fab-button:disabled {
        background-color: #dcdcdc;
        color: #888888
    }

    .jp-mini-fab-button {
        width: 2.5rem;
        height: 2.5rem;

    }

    .jp-mini-fab-button:not(:disabled) {
        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
    }

    .jp-mini-fab-button:not(:disabled):hover {
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    .jp-mini-fab-button:not(:disabled):active {
        box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
    }

    .jp-mini-fab-button.default {
        background-color: #ffffff;
        color:  #212121;
    }

    .jp-mini-fab-button.primary {
        background-color: #e65100;
        color: #ffffff;
    }

    .jp-mini-fab-button.accent {
        background-color: #ff9800;
        color: #212121;
    }

    .jp-mini-fab-button.warn {
        background-color: #f44336;
        color: #ffffff;
    }

    .jp-mini-fab-button:disabled {
        background-color: #dcdcdc;
        color: #888888
    }
</style>

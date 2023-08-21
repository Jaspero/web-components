<svelte:options
        customElement={{
            tag: 'jp-link',
            shadow: 'open'
        }}
/>

<script lang="ts">
    export let disabled = false;
    export let variant: 'basic' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab' = 'basic';
    export let color: 'default' | 'primary' | 'accent' | 'warn' = 'default';

    export let href: string = '';
    export let target: string = '';
</script>

<a {href}
   {target}
   {disabled}
   class="jp-button jp-{variant}-button {color}">
    <slot />
</a>

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
        background-color: var(--text-primary);
    }

    .jp-button.primary:hover::after {
        background-color: var(--primary-color);
    }

    .jp-button.accent:hover::after {
        background-color: var(--secondary-color);
    }

    .jp-button.warn:hover::after {
        background-color: var(--danger-color);
    }

    .jp-basic-button {
        background-color: transparent;
    }

    .jp-basic-button.default {
        color: var(--text-primary);
    }

    .jp-basic-button.primary {
        color: var(--primary-color);
    }

    .jp-basic-button.accent {
        color: var(--secondary-color);
    }

    .jp-basic-button.warn {
        color: var(--danger-color);
    }

    .jp-basic-button:disabled {
        color: var(--disabled-color)
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
        background-color: var(--background-primary);
        color: var(--text-primary);
    }

    .jp-raised-button.primary {
        background-color: var(--primary-color);
        color: var(--text-on-primary);
    }

    .jp-raised-button.accent {
        background-color: var(--secondary-color);
        color: var(--text-on-secondary);
    }

    .jp-raised-button.warn {
        background-color: var(--danger-color);
        color: var(--text-on-danger);
    }

    .jp-raised-button:disabled {
        background-color: var(--background-disabled);
        color: var(--disabled-color)
    }

    .jp-stroked-button {
        border: 1px solid var(--border-primary);
    }

    .jp-stroked-button.default {
        color: var(--text-primary);
    }

    .jp-stroked-button.primary {
        color: var(--primary-color);
    }

    .jp-stroked-button.accent {
        color: var(--secondary-color);
    }

    .jp-stroked-button.warn {
        color: var(--danger-color);
    }

    .jp-stroked-button:disabled {
        color: var(--disabled-color)
    }

    .jp-flat-button {

    }

    .jp-flat-button.primary:active::after,
    .jp-flat-button.accent:active::after,
    .jp-flat-button.warn:active::after{
        background-color: var(--background-primary);
    }

    .jp-flat-button.default {
        background-color: var(--background-primary);
        color: var(--text-primary);
    }

    .jp-flat-button.primary {
        background-color: var(--primary-color);
        color: var(--text-on-primary);
    }

    .jp-flat-button.accent {
        background-color: var(--secondary-color);
        color: var(--text-on-secondary);
    }

    .jp-flat-button.warn {
        background-color: var(--danger-color);
        color: var(--text-on-danger);
    }

    .jp-flat-button:disabled {
        background-color: var(--background-disabled);
        color: var(--disabled-color)
    }

    .jp-icon-button {
        width: 3rem;
        height: 3rem;
    }

    .jp-icon-button.default {
        color: var(--text-primary);
        fill: var(--text-primary);
    }

    .jp-icon-button.primary {
        color: var(--primary-color);
        fill: var(--primary-color);
    }

    .jp-icon-button.accent {
        color: var(--secondary-color);
        fill: var(--secondary-color);
    }

    .jp-icon-button.warn {
        color: var(--danger-color);
        fill: var(--danger-color);
    }

    .jp-icon-button:disabled {
        color: var(--disabled-color);
        fill: var(--disabled-color);
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
        background-color: var(--background-primary);
    }

    .jp-fab-button.primary {
        background-color: var(--primary-color);
        color: var(--text-on-primary);
    }

    .jp-fab-button.accent {
        background-color: var(--secondary-color);
        color: var(--text-on-secondary);
    }

    .jp-fab-button.warn {
        background-color: var(--danger-color);
        color: var(--text-on-danger);
    }

    .jp-fab-button:disabled {
        background-color: var(--background-disabled);
        color: var(--disabled-color)
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
        background-color: var(--background-primary);
        color: var(--text-primary);
    }

    .jp-mini-fab-button.primary {
        background-color: var(--primary-color);
        color: var(--text-on-primary);
    }

    .jp-mini-fab-button.accent {
        background-color: var(--secondary-color);
        color: var(--text-on-secondary);
    }

    .jp-mini-fab-button.warn {
        background-color: var(--danger-color);
        color: var(--text-on-danger);
    }

    .jp-mini-fab-button:disabled {
        background-color: var(--background-disabled);
        color: var(--disabled-color)
    }
</style>

<svelte:options
  customElement={{
    tag: 'jp-button',
    shadow: 'open'
  }}
/>

<script lang="ts">
  export let disabled = false;
  export let loading = false;
  export let variant: 'basic' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab' =
    'basic';
  export let color: 'default' | 'primary' | 'accent' | 'warn' = 'default';

  export let type: 'button' | 'submit' = 'button';
</script>

<button {disabled} {type} class="jp-button jp-button-{variant} {color}" class:loading on:click>
  <slot />
</button>

<style lang="postcss">
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
    font-size: 0.875rem;
    line-height: 1.5;
    text-transform: uppercase;
    overflow: hidden;

    &:disabled {
      pointer-events: none;
    }
    &:not(.jp-button-icon):not(.jp-button-fab):not(.jp-button-mini-fab) {
      border-radius: 0.25rem;
      min-width: 4rem;
      height: 2.25rem;
      padding: 0 1rem;
    }

    &:not(.jp-button-basic):not(.jp-button-raised):not(.jp-button-stroked):not(.jp-button-flat) {
      overflow: hidden;
      border-radius: 50%;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.1;
    }

    &.default:hover::after {
      background-color: var(--text-primary);
    }

    &.primary:hover::after {
      background-color: var(--primary-color);
    }

    &.accent:hover::after {
      background-color: var(--secondary-color);
    }
    &.warn:hover::after {
      background-color: var(--danger-color);
    }

    &-basic {
      background-color: transparent;

      &.default {
        color: var(--text-primary);
      }

      &.primary {
        color: var(--primary-color);
      }

      &.accent {
        color: var(--secondary-color);
      }

      &.warn {
        color: var(--danger-color);
      }

      &:disabled {
        color: var(--disabled-color);
      }
    }

    &-raised {
      &:not(:disabled) {
        box-shadow:
          0 3px 1px -2px rgba(0, 0, 0, 0.2),
          0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12);
        transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      &:hover {
        box-shadow:
          0 2px 4px -1px rgba(0, 0, 0, 0.2),
          0 4px 5px 0 rgba(0, 0, 0, 0.14),
          0 1px 10px 0 rgba(0, 0, 0, 0.12);
      }

      &:active {
        box-shadow:
          0 5px 5px -3px rgba(0, 0, 0, 0.2),
          0 8px 10px 1px rgba(0, 0, 0, 0.14),
          0 3px 14px 2px rgba(0, 0, 0, 0.12);
      }

      &.default {
        background-color: var(--background-primary);
        color: var(--text-primary);
      }

      &.primary {
        background-color: var(--primary-color);
        color: var(--text-on-primary);
      }

      &.accent {
        background-color: var(--secondary-color);
        color: var(--text-on-secondary);
      }

      &.warn {
        background-color: var(--danger-color);
        color: var(--text-on-danger);
      }

      &:disabled {
        background-color: var(--background-disabled);
        color: var(--disabled-color);
      }
    }

    &-stroked {
      border: 1px solid var(--border-primary);

      &.default {
        color: var(--text-primary);
      }

      &.primary {
        color: var(--primary-color);
      }

      &.accent {
        color: var(--secondary-color);
      }

      &.warn {
        color: var(--danger-color);
      }

      &:disabled {
        color: var(--disabled-color);
      }
    }

    &-flat {
      &.primary:active::after,
      &.accent:active::after,
      &.warn:active::after {
        background-color: var(--background-primary);
      }

      &.default {
        background-color: var(--background-primary);
        color: var(--text-primary);
      }

      &.primary {
        background-color: var(--primary-color);
        color: var(--text-on-primary);
      }

      &.accent {
        background-color: var(--secondary-color);
        color: var(--text-on-secondary);
      }

      &.warn {
        background-color: var(--danger-color);
        color: var(--text-on-danger);
      }

      &:disabled {
        background-color: var(--background-disabled);
        color: var(--disabled-color);
      }
    }

    &-icon {
      width: 3rem;
      height: 3rem;

      &.default {
        color: var(--text-primary);
        fill: var(--text-primary);
      }

      &.primary {
        color: var(--primary-color);
        fill: var(--primary-color);
      }

      &.accent {
        color: var(--secondary-color);
        fill: var(--secondary-color);
      }

      &.warn {
        color: var(--danger-color);
        fill: var(--danger-color);
      }

      &:disabled {
        color: var(--disabled-color);
        fill: var(--disabled-color);
      }
    }

    &-fab {
      width: 3.5rem;
      height: 3.5rem;

      &:not(:disabled) {
        box-shadow:
          0 3px 5px -1px rgba(0, 0, 0, 0.2),
          0 6px 10px 0 rgba(0, 0, 0, 0.14),
          0 1px 18px 0 rgba(0, 0, 0, 0.12);
      }

      &:not(:disabled):hover {
        box-shadow:
          0 5px 5px -3px rgba(0, 0, 0, 0.2),
          0 8px 10px 1px rgba(0, 0, 0, 0.14),
          0 3px 14px 2px rgba(0, 0, 0, 0.12);
      }

      &:not(:disabled):active {
        box-shadow:
          0 7px 8px -4px rgba(0, 0, 0, 0.2),
          0 12px 17px 2px rgba(0, 0, 0, 0.14),
          0 5px 22px 4px rgba(0, 0, 0, 0.12);
      }

      &.default {
        background-color: var(--background-primary);
      }

      &.primary {
        background-color: var(--primary-color);
        color: var(--text-on-primary);
      }

      &.accent {
        background-color: var(--secondary-color);
        color: var(--text-on-secondary);
      }

      &.warn {
        background-color: var(--danger-color);
        color: var(--text-on-danger);
      }

      &:disabled {
        background-color: var(--background-disabled);
        color: var(--disabled-color);
      }
    }

    &-mini-fab {
      width: 2.5rem;
      height: 2.5rem;
      &:not(:disabled) {
        box-shadow:
          0 3px 5px -1px rgba(0, 0, 0, 0.2),
          0 6px 10px 0 rgba(0, 0, 0, 0.14),
          0 1px 18px 0 rgba(0, 0, 0, 0.12);
      }

      &:not(:disabled):hover {
        box-shadow:
          0 5px 5px -3px rgba(0, 0, 0, 0.2),
          0 8px 10px 1px rgba(0, 0, 0, 0.14),
          0 3px 14px 2px rgba(0, 0, 0, 0.12);
      }

      &:not(:disabled):active {
        box-shadow:
          0 7px 8px -4px rgba(0, 0, 0, 0.2),
          0 12px 17px 2px rgba(0, 0, 0, 0.14),
          0 5px 22px 4px rgba(0, 0, 0, 0.12);
      }

      &.default {
        background-color: var(--background-primary);
        color: var(--text-primary);
      }

      &.primary {
        background-color: var(--primary-color);
        color: var(--text-on-primary);
      }

      &.accent {
        background-color: var(--secondary-color);
        color: var(--text-on-secondary);
      }

      &.warn {
        background-color: var(--danger-color);
        color: var(--text-on-danger);
      }

      &:disabled {
        background-color: var(--background-disabled);
        color: var(--disabled-color);
      }
    }
  }
</style>

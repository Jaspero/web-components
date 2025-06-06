<svelte:options
  customElement={{
    tag: 'jp-confirm',
    shadow: 'none'
  }}
/>

<script>
  import { createEventDispatcher } from 'svelte';
  import { clickOutside } from '../utils/click-outside';

  export let title = '';
  export let message = '';

  export let reject = '';
  export let accept = '';

  export let closable = false;

  const dispatch = createEventDispatcher();
</script>

<svelte:window
  on:keydown|preventDefault={(e) => e.key === 'Escape' && closable && dispatch('close')}
/>

<div class="jp-confirm-overlay">
  <div
    class="jp-confirm-dialog"
    use:clickOutside
    on:click_outside={() => {
      if (closable) dispatch('close');
    }}
  >
    {#if title}
      <div class="jp-confirm-dialog-header">
        <h1 class="jp-confirm-dialog-header-title">
          {@html title}
        </h1>
      </div>
    {/if}

    {#if message}
      <p class="jp-confirm-dialog-content" class:jp-confirm-dialog-content-border-top={title}>
        {@html message}
      </p>
    {/if}

    <div class="jp-confirm-dialog-actions">
      <button
        type="button"
        class="jp-confirm-reject-button"
        on:click={() => dispatch('confirmation', { confirmed: false })}
      >
        {reject}
      </button>
      <button
        type="button"
        class="jp-confirm-accept-button"
        on:click={() => dispatch('confirmation', { confirmed: true })}
      >
        {accept}
      </button>
    </div>
  </div>
</div>

<style lang="postcss">
  .jp-confirm {
    &-overlay {
      z-index: 10;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      display: flex;

      justify-content: center;

      align-items: center;
      background-color: rgba(0, 0, 0, 0.2);
    }

    &-dialog {
      background-color: var(--background-primary);

      border-radius: 0.25rem;
      max-width: 20rem;

      &-header {
        padding: 1rem;

        &-title {
          font-size: 1.5rem;
        }
      }

      &-content {
        padding: 2rem 1rem;

        &-border-top {
          border-top: 1px solid var(--border-primary);
        }
      }
      &-actions {
        display: flex;

        justify-content: space-between;
        border-top: 1px solid var(--border-primary);
        padding: 1rem;
      }
    }

    &-reject-button,
    &-accept-button {
      position: relative;

      display: inline-flex;

      align-items: center;

      justify-content: center;
      min-width: 4rem;
      padding: 0 1rem;

      border-radius: 0.25rem;
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
    }

    &-reject-button {
      color: var(--danger-color);
      border: 1px solid var(--danger-color);
    }

    &-accept-button {
      background-color: var(--primary-color);
      color: var(--text-on-primary);
    }
  }
</style>

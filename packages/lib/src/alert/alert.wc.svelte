<svelte:options
  customElement={{
    tag: 'jp-alert',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import clearIcon from '../../../lib/src/icons/clear.svg?raw';
  export let title = '';
  export let message = '';
  export let state = 'error';

  const dispatch = createEventDispatcher();
</script>

<div class="jp-alert jp-alert-{state}">
  <div class="jp-alert-container">
    <div class="jp-alert-container-header">
      <div class="jp-alert-container-header-inner">
        <div class="jp-alert-container-header-icon">
          {#if state === 'error'}
            ⚠️
          {:else if state === 'success'}
            ✅
          {/if}
        </div>
        {#if title}
          <h2 class="jp-alert-container-header-title">
            {@html title}
          </h2>
        {/if}
      </div>
      <button
        type="button"
        class="jp-alert-container-header-close"
        on:click|preventDefault={() => dispatch('close')}
      >
        {@html clearIcon}
      </button>
    </div>
    {#if message}
      <p class="jp-alert-container-message">
        {@html message}
      </p>
    {/if}
  </div>
</div>

<style lang="postcss">
  .jp-alert {
    position: fixed;
    bottom: 10px;
    right: 50%;
    transform: translateX(50%);
    margin: 1rem 0;
    background-color: var(--background-primary);
    box-shadow: 0 3px 15px 6px rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    z-index: 100;

    &-error {
      border-left: 4px solid var(--danger-color);
    }

    &-success {
      border-left: 4px solid var(--success-color);
    }

    &-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1rem;
      max-width: 40rem;

      &-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;

        &-inner {
          display: flex;
        }

        &-icon {
          font-size: 1.5rem;
          margin-right: 0.5rem;
        }

        &-title {
          flex: 1 1 0;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0;
        }

        &-close {
          width: 1.5rem;
          height: 1.5rem;

          > svg {
            fill: currentColor;
          }
        }
      }

      &-message {
        font-size: 0.875rem;
        margin: 0;
      }
    }
  }

  @media (max-width: 600px) {
    .jp-alert {
      right: 1rem;
      left: 1rem;
      transform: unset;
    }
  }
</style>

<svelte:options
  customElement={{
    tag: 'jp-alert',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let title = '';
  export let message = '';
  export let state = 'error';

  const dispatch = createEventDispatcher();
</script>

<div class="alert alert-{state}">
  <div class="alert-container">
    <div class="alert-container-header">
      <div class="alert-container-header-inner">
        <div class="alert-container-header-icon">
          {#if state === 'error'}
            ⚠️
          {:else if state === 'success'}
            ✅
          {/if}
        </div>
        {#if title}
          <h2 class="alert-container-header-title">
            {@html title}
          </h2>
        {/if}
      </div>
      <button
        type="button"
        class="alert-container-header-close"
        on:click|preventDefault={() => dispatch('close')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"
          ><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          /></svg
        >
      </button>
    </div>
    {#if message}
      <p class="alert-container-message">
        {@html message}
      </p>
    {/if}
  </div>
</div>

<style>
  .alert {
    position: fixed;
    bottom: 10px;
    right: 50%;
    transform: translateX(50%);
    margin: 1rem 0;
    background-color: white;
    box-shadow: 0 3px 15px 6px rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
  }

  .alert.alert-error {
    border-left: 4px solid var(--danger-color);
  }

  .alert.alert-success {
    border-left: 4px solid var(--success-color);
  }

  .alert-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    max-width: 40rem;
  }

  .alert-container-header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .alert-container-header-inner {
    display: flex;
  }

  .alert-container-header-icon {
    font-size: 1.5rem;
    margin-right: .5rem;
  }

  .alert-container-header-title {
    flex: 1 1 0;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .alert-container-header-close {
    width: 1.5rem;
    height: 1.5rem;
  }

  .alert-container-message {
    font-size: 0.875rem;
  }

  h2,
  p {
    margin: 0;
  }
</style>

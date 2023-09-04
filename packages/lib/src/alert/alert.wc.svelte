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
      <div class="alert-container-header-icon">
        {#if state === 'error'}
          ⚠️
        {:else if state === 'success'}
          ✅
        {/if}
      </div>
      {#if title}
        <h1 class="alert-container-header-title">
          {@html title}
        </h1>
      {/if}
      <button class="alert-container-header-close" on:click={() => dispatch('close')}>
        <span class="material-symbols-outlined"> close </span>
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
    top: 100px;
    right: 0;
    margin: 1rem;
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
    gap: .5rem;
    padding: 1rem;
    max-width: 40rem;
  }

  .alert-container-header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .alert-container-header-icon {
    font-size: 1.5rem;
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
    font-size: .875rem;
  }
</style>

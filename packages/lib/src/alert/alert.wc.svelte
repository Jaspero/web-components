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
  <div class="container flex flex-col gap-2 p-4">
    <div class="flex justify-between items-center gap-4 min-w-[8rem]">
      <div class="flex gap-2 text-2xl">
        {#if state === 'error'}
          ⚠️
        {:else if state === 'success'}
          ✅
        {/if}
        {#if title}
          <h1 class="font-bold">
            {@html title}
          </h1>
        {/if}
      </div>
      <button class="w-6 h-6" on:click={() => dispatch('close')}>
        <span class="material-symbols-outlined"> close </span>
      </button>
    </div>
    {#if message}
      <p class="text-sm">
        {@html message}
      </p>
    {/if}
  </div>
</div>

<style>
  .alert {
    position: fixed;
    top: 100px;
    right: 1rem;
    background-color: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 0.5rem;
  }

  .alert-error {
    border-left: 4px solid var(--error);
  }

  .alert-success {
    border-left: 4px solid var(--success);
  }
</style>

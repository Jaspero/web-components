<svelte:options
  customElement={{
    tag: 'jp-alert',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import './alert.wc.pcss';
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
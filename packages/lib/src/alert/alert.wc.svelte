<svelte:options
  customElement={{
    tag: 'jp-alert',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import './alert.wc.pcss';
  import clearIcon from '../../../lib/src/icons/clear.svg?raw';

  export let title = '';
  export let message = '';
  export let state: 'success' | 'error' | '' = '';
  export let successColor = '#3a8c3d';
  export let warningColor = '#f44336';
  export let basicColor = '#ABABAB';

  const dispatch = createEventDispatcher();

  onMount(() => {
    const timer = setTimeout(() => {
      dispatch('close');
    }, 5000);

    return () => clearTimeout(timer);
  });
</script>


<div class="jp-alert jp-alert-{state}" style="--success-c: {successColor}; --warning-c: {warningColor}; --basic-c: {basicColor}">
  <div class="jp-alert-container">
    <div class="jp-alert-container-header">
      <div class="jp-alert-container-header-inner">
        {#if title}
          <h2 class="jp-alert-container-header-title">
            {@html title}
          </h2>
        {/if}
      </div>
      <button
        type="button"
        class="jp-alert-container-header-close"
        on:click={(event) => {
          event.preventDefault();
          event.stopImmediatePropagation();
          dispatch('close');
        }}
      >
        {@html clearIcon}
      </button>
    </div>
    {#if message}
      <p class="jp-alert-container-message">
        {@html message}
      </p>
    {/if}
    <div class="jp-alert-container-bar"></div>
  </div>
</div>

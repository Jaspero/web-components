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
  <div class="jp-alert-content">
    {#if title}
      <div class="jp-alert-content-title">{@html title}</div>
    {/if}
    {#if message}
      <div class="jp-alert-content-message">{@html message}</div>
    {/if}
  </div>
  <div class="jp-alert-close">
    <button
            type="button"
            class="jp-alert-close-button"
            on:click={(event) => {
          event.preventDefault();
          event.stopImmediatePropagation();
          dispatch('close');
        }}
    >
      {@html clearIcon}
    </button>
  </div>
  <div class="jp-alert-progress">
    <div class="jp-alert-progress-bar"></div>
  </div>
</div>
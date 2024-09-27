<script lang="ts">
    import './icon-button.wc.css';
    import './button.wc.svelte';
    export let disabled = false;
    export let loading = false;
    export let variant = 'icon';
    export let color: 'default' | 'primary' | 'accent' | 'warn' = 'default';
    export let type: 'button' | 'submit' = 'button';
    let part = `main ${variant} ${color} ${loading ? 'loading' : ''}`;
  </script>
  
  <button {part} {disabled} {type} on:click>
    <slot />
    {#if loading}
      <div part="spinner">
        <span part="spinner-inner"></span>
      </div>
    {/if}
  </button>
<script lang="ts">
    import './fab-button.wc.css';
    import './button.wc.svelte';
    export let disabled = false;
    export let loading = true;
    //export let variant = 'fab';
    export let color: 'default' | 'primary' | 'accent' | 'warn';
    export let type: 'button' | 'submit' = 'button';
    export let variant;
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
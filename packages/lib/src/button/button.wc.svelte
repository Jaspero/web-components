<svelte:options
  customElement={{
    tag: 'jp-button'
  }}
/>

<script lang="ts">
  export let disabled = false;
  export let loading = false;
  export let variant: 'basic' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab' =
    'basic';
  export let color: 'default' | 'primary' | 'accent' | 'warn' = 'default';

  export let type: 'button' | 'submit' = 'button';
</script>

<button part="main {variant} {color} {loading ? 'loading' : ''}" {disabled} {type} on:click>
  <slot />
  {#if loading}
    <div part="spinner">
      <span part="spinner-inner"></span>
    </div>
  {/if}
</button>
<script lang="ts">
  export let disabled = false;
  export let loading = false;
  //export let variant = 'basic';
  export let color: 'default' | 'primary' | 'accent' | 'warn' = 'default';
  export let type: 'button' | 'submit' = 'button';
  export let variant;
  let part = `${variant} ${color} ${loading ? 'loading' : ''}`;
</script>

<button {part} {disabled} {type} on:click>
  <slot />
  {#if loading}
    <div part="spinner">
      <span part="spinner-inner"></span>
    </div>
  {/if}
</button>
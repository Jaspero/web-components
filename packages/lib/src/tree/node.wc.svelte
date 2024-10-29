<svelte:options
  customElement={{
    tag: 'jp-node',
    shadow: 'open'
  }}
/>

<script lang="ts">
</script>

<div class="jp-node">
  <slot />
</div>

<style lang="postcss">
  .jp-node {
    width: 100%;
    margin: 1rem 0;
  }
</style>

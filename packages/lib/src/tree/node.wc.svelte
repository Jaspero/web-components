<svelte:options
  customElement={{
    tag: 'jp-node',
    shadow: 'open'
  }}
/>

<script lang="ts">
</script>

<div class="node">
  <slot />
</div>

<style lang="postcss">
  .node {
    width: 100%;
    margin: 1rem 0;
  }
</style>

<script lang="ts">
  export let expanded = false;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  height="1em"
  viewBox="0 0 320 512"
  class="jp-toggle-arrow"
  class:jp-toggle-arrow-rotate={expanded}
  ><path
    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
  /></svg
>

<style>
  .jp-toggle-arrow {
    width: 0.9rem;
    height: 0.9rem;
    min-width: 0.5rem;
    min-height: 0.5rem;
    padding: 6px;
    transition: transform 0.3s;

    &-rotate {
      transform: rotate(90deg);
    }
  }
</style>

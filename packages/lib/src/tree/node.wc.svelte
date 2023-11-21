<svelte:options
  customElement={{
    tag: 'jp-node',
    shadow: 'open'
  }}
/>

<script lang="ts">
  let isGrabbed = false;
  let node;
  let startingX, startingY;
</script>

<svelte:document
  on:mousemove={(e) => {
    if (isGrabbed) {
      e.preventDefault()
      node.style.transform = 'translateY(' + (e.clientY - startingY) + 'px)';
      node.style.transform += 'translateX(' + (e.clientX - startingX) + 'px)';
    }
  }}
  on:mouseup={(e) => {
    if(isGrabbed){
      e.preventDefault()
      isGrabbed = false;
      node.style = '';
    }
  }}
/>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="node"
  on:mousedown={(e) => {
    node.style.pointerEvents = 'none';
    isGrabbed = true;
    startingX = e.clientX;
    startingY = e.clientY;
    window.jpNodeGrabbed = node.parentNode.host;
  }}
  bind:this={node}
>
  <slot />
</div>

<style>
  .node {
    width: 100%;
    margin: 1rem 0;
    border-radius: 50%;
    cursor: grab;
  }
</style>

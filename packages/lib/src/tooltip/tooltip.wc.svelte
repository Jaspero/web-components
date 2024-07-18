<svelte:options
  customElement={{
    tag: 'jp-tooltip',
    shadow: 'open'
  }}
/>

<script lang="ts">
  import { clickOutside } from '../clickOutside';
  export let label: string = 'label';
  export let mode: 'static' | 'dynamic' = 'static';
  let cloud;
  let bindingEl;
  let cloudStyle = '';

  function toggleStaticCloud() {
    cloud.removeAttribute('hidden');
    const rect = bindingEl.getBoundingClientRect();
    const availableSpaceRight = window.innerWidth - rect.right;
    const maxWidth = 250;

    if (availableSpaceRight < maxWidth) {
      cloudStyle = `
        top: 0;
        left: -101%;
      `;
    } else {
      cloudStyle = `
        top: 0;
        left: ${rect.right - rect.x + 5}px; 
      `;
    }
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="tooltip">
  {#if mode == 'dynamic'}
    <span
      on:mouseover={() => cloud.removeAttribute('hidden')}
      on:mouseout={() => cloud.setAttribute('hidden', 'true')}
      on:mousemove={(e) => {
        cloud.style.left = e.pageX + 10 + 'px';
        cloud.style.top = e.pageY + 10 + 'px';
      }}
    >
      {@html label}
    </span>
  {:else}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span on:click={() => toggleStaticCloud()} bind:this={bindingEl} style="cursor: pointer">
      {@html label}
    </span>
  {/if}
  <div
    class="cloud"
    bind:this={cloud}
    use:clickOutside
    on:click_outside={() => {
      if (!cloud.hasAttribute('hidden')) {
        cloud.setAttribute('hidden', 'true');
      }
    }}
    style={`position: ${mode == 'static' ? 'absolute' : 'fixed'};` + cloudStyle}
    hidden
  >
    <slot />
  </div>
</div>

<style>
  .tooltip {
    position: relative;
  }

  .tooltip span {
    text-decoration: underline;
    text-decoration-style: dotted;
  }

  .cloud {
    padding: 5px;
    background-color: var(--tertiary-color);
    color: #000;
    border-radius: 4px;
    max-width: 250px;
  }
</style>

<svelte:options
  customElement={{
    tag: 'jp-tooltip',
    shadow: 'open'
  }}
/>

<script lang="ts">
  export let label: string = 'text';
  export let mode: 'static' | 'dynamic' = 'static';
  let cloud;
  let spanEl;
  let cloudStyle = '';

  function toggleStaticCloud() {
    cloud.removeAttribute('hidden');
    const rect = spanEl.getBoundingClientRect();
    const availableSpaceRight = window.innerWidth - rect.right;
    const maxWidth = 250;

    if (availableSpaceRight < maxWidth) {
      cloudStyle = `
        top: 0;
        left: -100%;
      `;
    } else {
      cloudStyle = `
        top: 0;
        left: ${rect.right - rect.x - 10}px; 
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
    <span 
      bind:this={spanEl}
      on:mouseover={() => toggleStaticCloud()} 
      on:mouseout={() => {
        if(!cloud.matches(':hover')){
          cloud.setAttribute('hidden', true)
        }
      }}
    >
      {@html label}
    </span>
  {/if}
  <div
    class="cloud"
    bind:this={cloud}
    on:mouseout={() => {
      console.log('aa')
      if(spanEl && !spanEl.matches(':hover')){
        cloud.setAttribute('hidden', true)
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

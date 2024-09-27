<svelte:options
  customElement={{
    tag: 'jp-button'
  }}
/>

<script lang="ts">
  import './button.wc.css';
  import './raised-button.wc.css';
  import './basic-button.wc.css';
  import './fab-button.wc.css';
  import './flat-button.wc.css';
  import './icon-button.wc.css';
  import './stroked-button.wc.css';
  export let disabled = false;
  export let loading = false;
  export let variant: 'basic' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab' =
   'basic';
  export let color: 'default' | 'primary' | 'accent' | 'warn' = 'default';
  export let type: 'button' | 'submit' = 'button';
  $: part = `main ${variant} ${color} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''}`;
  function handleClick() {
    console.log(variant);
    loading = true;
    disabled = true;
    setTimeout(() => {
      loading = false;
      disabled = false;
    }, 30000);
  }
</script>
<button {part} {disabled} {type} on:click={handleClick}>
  {#if loading}
      <svg style:position="absolute" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="30" width="30" overflow="visible">
        <g style="transform: translateY(15px) translateX(5px);">
          <path  id="semi-circle" class="circle" stroke="red" d="M 0 0 A 10 10 0 0 1 20 0" stroke-width="2" fill="none">
            <animateTransform attributeName="transform" type="rotate" dur="1.5s" values="0 10 0; 360 10 0;" repeatCount="indefinite" />
          </path>
        </g>
      </svg>
    <div style:z-index=-1 style:opacity=0>
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
</button>
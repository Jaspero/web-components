<svelte:options
  customElement={{
    tag: 'jp-confirm',
    shadow: 'none'
  }}
/>

<script>
  import { clickOutside } from '../clickOutside';
  import { createEventDispatcher } from 'svelte';

  export let title = '';
  export let message = '';

  export let reject = '';
  export let accept = '';

  export let closable = false;

  const dispatch = createEventDispatcher();
</script>

<svelte:window on:keydown|preventDefault={(e) => e.key === 'Escape' && closable && dispatch('close')} />

<div class="overlay">
  <div
    class="dialog"
    use:clickOutside
    on:click_outside={() => {if(closable) dispatch('close')}}
  >
    {#if title}
      <div class="dialog-header">
        <h1 class="dialog-header-title">
          {@html title}
        </h1>
      </div>
    {/if}

    {#if message}
      <p class="dialog-content" class:border-top={title}>
        {@html message}
      </p>
    {/if}

    <div class="dialog-actions">
      <button class="reject-button"
              on:click={() => dispatch('confirmation', { confirmed: false })}>
        {reject}
      </button>
      <button class="accept-button"
              on:click={() => dispatch('confirmation', { confirmed: true })}>
        {accept}
      </button>
    </div>
  </div>
</div>

<style>
  .overlay {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: rgba(0,0,0,.2);
  }

  .dialog {
    background-color: var(--background-primary);
    -webkit-border-radius: .25rem;
    -moz-border-radius: .25rem;
    border-radius: .25rem;
    max-width: 20rem;
  }

  .dialog-header {
    padding: 1rem;
  }

  .dialog-header-title {
    font-size: 1.5rem;
  }

  .dialog-content {
    padding: 2rem 1rem;
  }

  .dialog-content.border-top {
    border-top: 1px solid var(--border-primary);
  }

  .dialog-actions {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border-top: 1px solid var(--border-primary);
    padding: 1rem;
  }

  .reject-button, .accept-button {
    position: relative;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -moz-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    min-width: 4rem;
    padding: 0 1rem;
    -webkit-border-radius: .25rem;
    -moz-border-radius: .25rem;
    border-radius: .25rem;
    height: 36px;
    border: none;
    outline: none;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    text-decoration: none;
    background: none;
    color: inherit;
    font-family: inherit;
    font-size: .875rem;
    line-height: 1.5;
    text-transform: uppercase;
    overflow: hidden;
  }

  .reject-button {
    color: var(--danger-color);
    border: 1px solid var(--danger-color);
  }

  .accept-button {
    background-color: var(--primary-color);
    color: var(--text-on-primary);
  }
</style>
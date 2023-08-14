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

<svelte:window on:keydown|preventDefault={(e) => {
    if(e.key == 'Escape' && closable) dispatch('close')
}} />

<div
  class="fixed z-10 left-0 top-0 flex justify-center items-center w-screen h-screen"
  style="background-color: rgba(0, 0, 0, 0.2)"
>
  <div
    class="bg-slate-50 px-12 py-16 rounded-xl max-w-sm"
    use:clickOutside
    on:click_outside={() => {if(closable) dispatch('close')}}
  >
    {#if title}
      <h1 class="text-3xl mb-6">
        {@html title}
      </h1>
    {/if}
    {#if message}
      <p class="text-lg mb-7">
        {@html message}
      </p>
    {/if}
    <button
      class="bg-blue-800 w-full text-white py-3 rounded-3xl mb-2"
      on:click={() => dispatch('confirmation', { confirmed: false })}
    >
      {reject}
    </button>
    <button
      class="border border-blue-800 w-full py-3 rounded-3xl"
      on:click={() => dispatch('confirmation', { confirmed: true })}
    >
      {accept}
    </button>
  </div>
</div>

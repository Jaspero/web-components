<svelte:options
  customElement={{
    tag: 'jp-select',
    shadow: 'none',
    extend: (customElementConstructor) => {
      return class extends customElementConstructor {
        static formAssociated = true;

        constructor() {
          super();
          this.attachedInternals = this.attachInternals();
        }
      };
    }
  }}
/>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let attachedInternals: ElementInternals;

  export let options: Array<string> = [];

  export let disabled: boolean = false;
  export let required: boolean = false;
  export let value: string = '';
  export let id: string | null = null;
  export let name: string | null = null;
  export let placeholder: string = '';

  export let open: boolean = false;

  export const getValue = () => value;
  
  const dispatch = createEventDispatcher();
  
  $: {
    attachedInternals.checkValidity();
    dispatch('value', value);
  }
</script>

<div class="relative select">
  <button
    class="flex w-full justify-between items-center p-2 rounded-md border"
    class:rounded-b-none={open}
    on:click|preventDefault={() => (open = !open)}
    disabled={disabled}
  >
    {#if disabled}
      <div class="text-slate-400">--disabled--</div>
    {:else if value}
      <div>{value}</div>
    {:else}
      <div class="text-slate-400">{placeholder}</div>
    {/if}
    <div class="transition duration-300 {open ? 'rotate-180' : ''}">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"
        ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
        /></svg
      >
    </div>
  </button>
  {#if open}
    <div class="absolute top-full w-full flex flex-col max-h-56 overflow-auto border-x border-b rounded-b select-menu">
      {#each options as option}
        <button
          class="w-full text-left flex justify-between items-center hover:bg-orange-400 p-2 select-button
                {value === option ? 'selected' : ''}"
          on:click|preventDefault={() => {
            value = option
            open = false
          }}
          {disabled}
        >
          <span>
            {option}
          </span>

          {#if value === option}
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
            </svg>
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>

<input bind:value {id} {name} {required} hidden>

<style>
  .select-menu {
    background-color: var(--background-primary);
  }

  .select-button:not(.selected):hover {
    background-color: var(--background-tertiary);
  }

  .select-button.disabled {
    opacity: 0.4;
    user-select: none;
    pointer-events: none;
  }

  .select-button.selected {
    background-color: var(--primary-color);
    color: var(--text-on-primary);
    fill: var(--text-on-primary);
  }
</style>
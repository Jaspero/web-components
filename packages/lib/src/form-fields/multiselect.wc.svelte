<svelte:options
  customElement={{
    tag: 'jp-multiselect',
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

  export let options: Array<{ label: string; selected: boolean; disabled?: boolean }> = [];

  export let minSelects: number = 0;
  export let maxSelects: number | null = null;
  export let required: boolean = false;
  export let id: string | null = null;
  export let name: string | null = null;
  export let placeholder: string = '';
  export let value: string = '';

  export let open: boolean = false;

  export const getValue = () => options.filter((el) => el.selected).map((el) => el.label);

  const dispatch = createEventDispatcher();

  $: {
    const selects = options.filter((el) => el.selected).length
    if (selects < minSelects) {
      attachedInternals.setValidity({ customError: true }, 'Below limit checks.');
    } else if (selects > maxSelects) {
      attachedInternals.setValidity({ customError: true }, 'Above limit checks.');
    } else {
      attachedInternals.setValidity({});
    }
    attachedInternals.checkValidity();

    value = options
      .filter((el) => el.selected)
      .map((el) => el.label)
      .join(',');

    dispatch(
      'value',
      options.filter((el) => el.selected).map((el) => el.label)
    );
  }

  onMount(() => {
    if (!maxSelects) {
      maxSelects = options.length;
    }
  });
</script>

<div class="relative">
  <button
    class="flex w-full justify-between items-center p-2 rounded-md border select {open ? 'rounded-b-none' : ''}"
    on:click|preventDefault={() => (open = !open)}
  >
    {#if value}
      <div>{value}</div>
    {:else}
      <div class="opacity-40">{placeholder}</div>
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
    <div class="z-10 absolute top-full border-x border-b rounded-b flex flex-col max-h-56 overflow-auto w-full select-menu">
      {#each options as option}
        <button
          class="flex justify-between items-center gap-2 text-left select-button transition-colors duration-300 p-2
                {option.selected ? 'selected' : ''}
                {!option.disabled ? '' : 'disabled'}"
          on:click|preventDefault={() => (option.selected = !option.selected)}
          disabled={option.disabled}
        >
          <span>{option.label}</span>
          {#if option.selected}
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
<input bind:value {id} {name} {required} hidden />

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
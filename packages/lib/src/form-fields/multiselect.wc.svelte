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
    if (options.filter((el) => el.selected).length < minSelects) {
      attachedInternals.setValidity({ customError: true }, 'Below limit checks.');
    } else if (options.filter((el) => el.selected).length > maxSelects) {
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

<div>
  <button
    class="flex w-full justify-between items-center p-2 rounded-md border"
    on:click|preventDefault={() => (open = !open)}
  >
    {#if value}
      <div>{value}</div>
    {:else}
      <div class="text-slate-400">{placeholder}</div>
    {/if}
    <div class={open ? 'rotate-180' : ''}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"
        ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
        /></svg
      >
    </div>
  </button>
  {#if open}
    <div class="flex flex-col max-h-56 overflow-auto">
      {#each options as option}
        <button
          class="w-full {!option.disabled ? 'hover:bg-orange-400' : ''} p-2 {option.selected
            ? 'bg-orange-400'
            : ''}"
          on:click|preventDefault={() => (option.selected = !option.selected)}
          disabled={option.disabled}
        >
          {option.label}
        </button>
      {/each}
    </div>
  {/if}
</div>
<input bind:value {id} {name} {required} hidden />

<svelte:options
  customElement={{
    tag: 'jp-radio',
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

  export const getValue = () => value;

  const dispatch = createEventDispatcher();

  $: {
    attachedInternals.checkValidity();
    dispatch('value', value);
  }
</script>

<div class="flex flex-col">
  {#each options as option}
    <button class="flex items-center" on:click|preventDefault={() => (value = option)} {disabled}>
      <div class="mr-1">
        {#if option == value}
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
            ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
            /></svg
          >
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
            ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
            /></svg
          >
        {/if}
      </div>
      {option}
    </button>
  {/each}
</div>
<input bind:value {id} {name} {required} hidden />

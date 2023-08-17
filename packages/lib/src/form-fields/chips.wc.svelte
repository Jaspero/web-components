<svelte:options
  customElement={{
    tag: 'jp-chips',
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
  export let value: string = '';
  export let id: string | null = null;
  export let name: string | null = null;

  export let label: string | null = null;
  export let placeholder: string | null = null;
  export let minitems: number = 0;
  export let maxitems: number | null = null;

  export let pattern: RegExp | null = null;

  export let required: boolean = false;
  export let unique: boolean = false;

  export let chips: Array<string> = [];

  export let inputFocused: boolean = false;
  export let inputValue: string = '';

  export const getValue = () => chips;

  const dispatch = createEventDispatcher();

  $: {
    value = chips.join(',')
    if(chips.length < minitems){
      attachedInternals.setValidity({ customError: true }, `A minimum of ${minitems} items need to be added.`);
    }
    else if(maxitems && chips.length > maxitems){
      attachedInternals.setValidity({ customError: true }, `A maximum of ${maxitems} items are allowed.`);
    }
    else if (unique && ((new Set(chips)).size !== chips.length)) {
      attachedInternals.setValidity({ customError: true }, 'Chips are not unique.')
    }
    else if(pattern != null && chips.filter(el => pattern.test(el)).length != chips.length){
      attachedInternals.setValidity({ customError: true }, 'Chips dont satisfy pattern.');
    } else {
      attachedInternals.setValidity({});
    }
    attachedInternals.checkValidity();
    attachedInternals.setFormValue(value);
    dispatch('value', chips);
  }

  $: {
    if(!inputFocused && inputValue ) {
      chips = [...chips, inputValue];
      inputValue = '';
    }
  }
</script>

<svelte:window on:keydown={(e) => {
  if(inputFocused){
    if(e.key == 'Enter'){
      e.preventDefault()
      if(inputValue){
        chips = [...chips, inputValue]
        inputValue = ''
      } 
    }
    if(e.key == 'Backspace' && !inputValue) {
      chips = chips.slice(0, -1)
    }
  }
}} />

<div class="max-w-md relative bg-slate-100 hover:bg-slate-200 pt-4 px-2 pb-1">
  {#if label}
    <label 
      class="absolute top-0 left-2
      {chips.length > 0 || inputFocused || inputValue ? 
        "block font-thin" : 
        "flex items-center h-full text-lg font-light"
      }"
      for={name}>
      {@html label}
    </label>
  {/if}
  <div class="flex w-full flex-wrap gap-y-1.5">
    {#each chips as chip}
      <div class="flex items-center py-0.5 px-1 text-xs rounded-3xl bg-slate-300 mr-1">
        <span>{chip}</span>
        <button 
          class="mx-0.5"
          on:click|preventDefault={() => {
            chips.splice(chips.indexOf(chip), 1)
            chips = chips
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
          </svg>
        </button>
      </div>
    {/each}
    <input 
      type="text" 
      class="bg-transparent outline-0 border-0 w-full relative z-10"
      placeholder={chips.length > 0 || inputFocused || inputValue ? placeholder : ''}
      on:focus={() => inputFocused = true} 
      on:blur={() => inputFocused = false}
      bind:value={inputValue}
    >
  </div>
</div>
<textarea {id} {name} {value} {required} hidden></textarea>
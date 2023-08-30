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

  export let label: string = 'Label';
  export let placeholder: string | null = null;
  export let minitems: number = 0;
  export let maxitems: number | null = null;

  export let pattern: RegExp | null = null;

  export let required: boolean = false;
  export let unique: boolean = false;
  export let disabled: boolean = false;

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

<div>
  <label class="field" class:disabled class:required>
    {#if label}
      <span class="field-label" class:move={inputFocused || value}>{@html label}</span>
    {/if}

    <div class="field-container">
      {#each chips as chip}
        <div class="field-container-chip">
          <span class="field-container-chip-label">{chip}</span>
          <button class="field-container-chip-button"
                  on:click|preventDefault={() => {
                                chips.splice(chips.indexOf(chip), 1)
                                chips = chips
                            }}>
            <svg xmlns="http://www.w3.org/2000/svg" height=".875rem" viewBox="0 0 512 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
            </svg>
          </button>
        </div>
      {/each}
      <input
              type="text"
              class="field-container-input"
              {placeholder}
              on:focus={() => inputFocused = true}
              on:blur={() => inputFocused = false}
              bind:value={inputValue}
      >
    </div>
  </label>
</div>

<textarea {id} {name} {value} {required} hidden></textarea>

<style>
  .field {
    position: relative;
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
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: left;
    width: 100%;
    min-height: 3rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0 .75rem;
    gap: .75rem;
    background-color: var(--background-primary);
    border: 1px solid var(--border-primary);
    -webkit-border-radius: .25rem;
    -moz-border-radius: .25rem;
    border-radius: .25rem;
  }

  .field.required .field-label::after {
    content: ' *';
  }

  .field.disabled {
    pointer-events: none;
    opacity: .33;
  }

  .field:focus-within {
    border-color: var(--primary-color);
    -webkit-box-shadow: inset 0 0 0 1px var(--primary-color);
    -moz-box-shadow: inset 0 0 0 1px var(--primary-color);
    box-shadow: inset 0 0 0 1px var(--primary-color);
  }

  .field-label {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 1rem;
    -webkit-transition: transform .3s, top .3s, font-size .3s;
    -o-transition: transform .3s, top .3s, font-size .3s;
    -moz-transition: transform .3s, top .3s, font-size .3s;
    transition: transform .3s, top .3s, font-size .3s;
  }

  .field-label.move {
    top: .125rem;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    font-size: .75rem;
  }

  .field-label.move + .field-container .field-container-input:-moz-placeholder {
    opacity: 1;
  }
  .field-label.move + .field-container .field-container-input::-moz-placeholder {
    opacity: 1;
  }
  .field-label.move + .field-container .field-container-input:-ms-input-placeholder {
    opacity: 1;
  }
  .field-label.move + .field-container .field-container-input::-ms-input-placeholder {
    opacity: 1;
  }
  .field-label.move + .field-container .field-container-input::placeholder {
    opacity: 1;
  }

  .field-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    gap: .5rem;
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    -moz-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    width: 10rem;
    font-size: 1rem;
    overflow: hidden;
    padding: 1.25rem 0 .25rem 0;
    border: none;
    outline: none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }

  .field-container-chip {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: .25rem;
    background-color: var(--background-secondary);
    -webkit-border-radius: .25rem;
    -moz-border-radius: .25rem;
    border-radius: .25rem;
    padding: .25rem;
  }

  .field-container-chip-label {
    font-size: .875rem;
    word-break: break-all;
    white-space: normal;
  }

  .field-container-input {
    border: none;
    outline: none;
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    -moz-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    width: 10rem;
    padding: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    font-size: 1rem;
  }

  .field-container-input:-moz-placeholder {
    opacity: 0;
    -moz-transition: opacity .3s;
    transition: opacity .3s;
  }
  .field-container-input::-moz-placeholder {
    opacity: 0;
    -moz-transition: opacity .3s;
    transition: opacity .3s;
  }
  .field-container-input:-ms-input-placeholder {
    opacity: 0;
    -ms-transition: opacity .3s;
    transition: opacity .3s;
  }
  .field-container-input::-ms-input-placeholder {
    opacity: 0;
    -ms-transition: opacity .3s;
    transition: opacity .3s;
  }
  .field-container-input::placeholder {
    opacity: 0;
    -webkit-transition: opacity .3s;
    -o-transition: opacity .3s;
    -moz-transition: opacity .3s;
    transition: opacity .3s;
  }
</style>
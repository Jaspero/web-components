<svelte:options
  customElement={{
    tag: 'jp-autocomplete',
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

  export let options: string[] | string = [];
  export let value = '';
  export let label = 'autocomplete';
  export let id: string | null = null;
  export let name: string | null = null;
  export let disabled: boolean = false;
  export let attachedInternals: ElementInternals;
  export let required: boolean = false;
  export let placeholder: string = '';
  export let minlength: number | null = null;
  export let maxlength: number | null = null;
  export let pattern: string | null = null;
  export let validationMessages = {};
  export let requiredValidationMessage;
  export let minlengthValidationMessage;
  export let maxlengthValidationMessage;
  export let patternValidationMessage;

  export const reportValidity = () => {
    attachedInternals.reportValidity();
  };

  let bindingElement;
  let filteredOptions = [];
  let inputEl;
  let open = false;

  const dispatch = createEventDispatcher();
  
  $: {
    if(Array.isArray(options)){
      filteredOptions = options.filter((el) => el.toLowerCase().includes(value.toLowerCase()));
    }
    attachedInternals.checkValidity();
    if(inputEl){
      if(inputEl.validity.patternMismatch){
        if(patternValidationMessage || validationMessages.pattern){
          attachedInternals.setValidity({ customError: true }, 
            patternValidationMessage || validationMessages.pattern
          );
        }
      } else if (inputEl.validity.tooShort){
        if(minlengthValidationMessage || validationMessages.minlength){
          attachedInternals.setValidity({ customError: true }, 
            minlengthValidationMessage || validationMessages.minlength
          );
        }
      } else if (inputEl.validity.tooLong){
        if(maxlengthValidationMessage || validationMessages.maxlength){
          attachedInternals.setValidity({ customError: true }, 
            maxlengthValidationMessage || validationMessages.maxlength
          );
        }
      } else if (inputEl.validity.valueMissing){
        if(requiredValidationMessage || validationMessages.required){
          attachedInternals.setValidity({ customError: true }, 
            requiredValidationMessage || validationMessages.required
          );
        }
      }
    }
    dispatch('value', value);
  }

  onMount(() => {
    if (typeof options == 'string') {
      options = JSON.parse(options);
    }
  });
</script>

<div>
  <label class="field">
    <span class="field-label" class:move={open || value}>{@html label}</span>
    <input class="field-input"
           type="text"
           class:disabled
           {id}
           {name}
           {disabled}
           {placeholder}
           {required}
           {minlength}
           {maxlength}
           {pattern}
           bind:this={inputEl}
           bind:value
           on:focus={() => open = true}
           on:blur={() => open = false}
    />

    {#if open}
      <div class="menu">
        {#each filteredOptions as option}
          <button class="menu-button" on:mousedown|preventDefault={() => {value = option; inputEl.blur()}} on:click|preventDefault>{option}</button>
        {/each}
      </div>
    {/if}
  </label>
</div>

<style>
  .field {
    font-size: 0.75rem;
    line-height: 1rem;
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
    height: 3rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0 0.75rem;
    gap: 0.75rem;
    background-color: var(--background-primary);
    border: 1px solid var(--border-primary);
    -webkit-border-radius: 0.25rem;
    -moz-border-radius: 0.25rem;
    border-radius: 0.25rem;
  }

  .field.required .field-label::after {
    content: ' *';
  }

  .field.disabled {
    pointer-events: none;
    opacity: 0.5;
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
    -webkit-transition:
            transform 0.3s,
            top 0.3s,
            font-size 0.3s;
    -o-transition:
            transform 0.3s,
            top 0.3s,
            font-size 0.3s;
    -moz-transition:
            transform 0.3s,
            top 0.3s,
            font-size 0.3s;
    transition:
            transform 0.3s,
            top 0.3s,
            font-size 0.3s;
  }

  .field-label.move {
    top: 0.25rem;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    font-size: 0.75rem;
  }

  .field-label.move + .field-input:-moz-placeholder {
    opacity: 1;
  }
  .field-label.move + .field-input::-moz-placeholder {
    opacity: 1;
  }
  .field-label.move + .field-input:-ms-input-placeholder {
    opacity: 1;
  }
  .field-label.move + .field-input::-ms-input-placeholder {
    opacity: 1;
  }
  .field-label.move + .field-input::placeholder {
    opacity: 1;
  }

  .field-input {
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    -moz-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    width: 10rem;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    padding: 1rem 0 0 0;
    border: none;
    outline: none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }

  .field-input:-moz-placeholder {
    opacity: 0;
    -moz-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }
  .field-input::-moz-placeholder {
    opacity: 0;
    -moz-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }
  .field-input:-ms-input-placeholder {
    opacity: 0;
    -ms-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }
  .field-input::-ms-input-placeholder {
    opacity: 0;
    -ms-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }
  .field-input::placeholder {
    opacity: 0;
    -webkit-transition: opacity 0.3s;
    -o-transition: opacity 0.3s;
    -moz-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }

  /* Menu */
  .menu {
    z-index: 100;
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    max-height: 300px;
    width: 100%;
    overflow-y: auto;
    -webkit-border-bottom-left-radius: .25rem;
    -moz-border-radius-bottomleft: .25rem;
    border-bottom-left-radius: .25rem;
    -webkit-border-bottom-right-radius: .25rem;
    -moz-border-radius-bottomright: .25rem;
    border-bottom-right-radius: .25rem;
    -webkit-box-shadow: 0 6px 9px rgba(0,0,0,.16);
    -moz-box-shadow: 0 6px 9px rgba(0,0,0,.16);
    box-shadow: 0 6px 9px rgba(0,0,0,.16);
    background-color: var(--background-primary);
  }

  .menu-button {
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
    gap: .75rem;
    padding: .75rem;
    text-align: left;
    outline: none;
    -webkit-transition: background-color .3s, color .3s, fill .3s;
    -o-transition: background-color .3s, color .3s, fill .3s;
    -moz-transition: background-color .3s, color .3s, fill .3s;
    transition: background-color .3s, color .3s, fill .3s;
  }

  .menu-button.selected {
    background-color: var(--background-tertiary);
    color: var(--primary-color);
    fill: var(--primary-color);
  }

  .menu-button:disabled {
    opacity: .33;
  }

  .menu-button:not(:disabled):hover, .menu-button:focus {
    background-color: var(--background-secondary);
  }
</style>
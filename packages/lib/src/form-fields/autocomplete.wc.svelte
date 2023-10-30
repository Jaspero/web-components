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

  export let value = '';
  export let name;
  export let attachedInternals: ElementInternals;
  export let options: string[] | string = [];
  export let required: boolean = false;
  export let placeholder: string = '';
  export let minlength: number | null = null;
  export let maxlength: number | null = null;
  export let pattern: string | null = null;
  let filteredOptions = [];
  let inputEl;
  let open = false;

  export let validationMessages = {};
  export let requiredValidationMessage;
  export let minlengthValidationMessage;
  export let maxlengthValidationMessage;
  export let patternValidationMessage;

  const dispatch = createEventDispatcher();

  export const reportValidity = () => {
    attachedInternals.reportValidity();
  };
  
  $: {
    filteredOptions = options.filter((el) => el.toLowerCase().includes(value.toLowerCase()));
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
  <input
    type="text"
    {name}
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
    <div>
      {#each filteredOptions as option}
        <div>
          <button on:mousedown|preventDefault={() => {value = option; inputEl.blur()}} on:click|preventDefault>{option}</button>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>

</style>
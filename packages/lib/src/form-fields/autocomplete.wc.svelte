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
  export let asyncOptions = null;
  export let lag: number = 300;
  let loading = false;
  let lagTimeout;
  export let label = '';
  export let labelType: 'inside' | 'outside' = 'inside';
  export let id: string | null = null;
  export let name: string | null = null;
  export let disabled: boolean = false;
  export let attachedInternals: ElementInternals;
  export let required: boolean = false;
  export let placeholder: string = '';
  export let minlength: number | null = null;
  export let maxlength: number | null = null;
  export let pattern: string | null = null;
  export let validationMessages: {
    required?: string;
    maxlength?: string;
    minlength?: string;
    pattern?: string;
  } = {};
  export let requiredValidationMessage: string;
  export let minlengthValidationMessage: string;
  export let maxlengthValidationMessage: string;
  export let patternValidationMessage: string;

  export const reportValidity = () => attachedInternals.reportValidity();

  let bindingElement;
  let optionElements = []; // Array to store references to option buttons
  let filteredOptions = [];
  let inputEl;
  let open = false;

  const dispatch = createEventDispatcher();

  const getValue = () => value;

  $: {
    if (Array.isArray(options)) {
      filteredOptions = options.filter((el) => el.toLowerCase().includes(value.toLowerCase()));
    }
  }

  $: {
    dispatch('value', value);

    if (asyncOptions) {
      loading = true;
      clearTimeout(lagTimeout);
      lagTimeout = setTimeout(async () => {
        options = await asyncOptions(value);
        loading = false;
      }, lag);
    }

    attachedInternals.checkValidity();

    if (inputEl) {
      if (inputEl.validity.patternMismatch) {
        attachedInternals.setValidity(
          { patternMismatch: true },
          patternValidationMessage || validationMessages.pattern || inputEl.validationMessage,
          inputEl
        );
      } else if (inputEl.validity.tooShort) {
        attachedInternals.setValidity(
          { tooShort: true },
          minlengthValidationMessage || validationMessages.minlength || inputEl.validationMessage,
          inputEl
        );
      } else if (inputEl.validity.tooLong) {
        attachedInternals.setValidity(
          { tooLong: true },
          maxlengthValidationMessage || validationMessages.maxlength || inputEl.validationMessage,
          inputEl
        );
      } else if (inputEl.validity.valueMissing) {
        attachedInternals.setValidity(
          { valueMissing: true },
          requiredValidationMessage || validationMessages.required || inputEl.validationMessage,
          inputEl
        );
      } else {
        attachedInternals.setValidity({});
      }
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    const currentIndex = optionElements.findIndex((el) => el === document.activeElement);

    if (currentIndex == -1) {
      if (event.key == 'ArrowDown' && open && optionElements.length) {
        optionElements[0].focus();
      } else {
        return;
      }
    }

    if (open) {
      if (event.key === 'Escape') {
        inputEl.blur();
        return;
      }

      if (event.key === 'Enter') {
        value = filteredOptions[currentIndex];
        inputEl.focus();
      }

      const isHome = event.key === 'Home' || (event.key === 'ArrowUp' && event.metaKey);
      const isEnd = event.key === 'End' || (event.key === 'ArrowDown' && event.metaKey);

      if (isHome) {
        event.preventDefault();
        optionElements[0].focus();
        return;
      }
      if (isEnd) {
        event.preventDefault();
        optionElements[optionElements.length - 1].focus();
        return;
      }

      if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
        let nextIndex;
        event.preventDefault();
        if (event.key === 'ArrowUp') {
          if (currentIndex == 0) {
            nextIndex = optionElements.length - 1;
          } else {
            nextIndex = currentIndex - 1;
          }
        } else {
          if (currentIndex == optionElements.length - 1) {
            nextIndex = 0;
          } else {
            nextIndex = currentIndex + 1;
          }
        }
        optionElements[nextIndex].focus();
      }
    }
  }

  onMount(() => {
    if (typeof options == 'string') {
      options = JSON.parse(options);
    }
  });
</script>

{#if label && labelType === 'outside'}
  <div class="label">
    {#if required}
      {label} *
    {:else}
      {label}
    {/if}
  </div>
{/if}

<div
  on:focusout={(e) => {
    if (!bindingElement.contains(e.relatedTarget)) open = false;
  }}
  bind:this={bindingElement}
  on:keydown={handleKeydown}
  class="autocomplete-wrapper"
>
  <label class="field">
    {#if label && labelType === 'inside'}
      <span class="field-label" class:move={open || value}>
        {#if required}
          {@html label} *
        {:else}
          {@html label}
        {/if}
      </span>
    {/if}
    <input
      class={`field-input ${labelType === 'outside' || !label ? '' : 'field-input-padding'}`}
      type="text"
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
      on:focus={() => (open = true)}
      on:input={() => {
        if (value === '' && open) {
          open = false;
        }
      }}
    />

    {#if open}
      <div class="menu">
        {#if !loading}
          {#each filteredOptions as option, index}
            <button
              type="button"
              class="menu-button"
              bind:this={optionElements[index]}
              on:mousedown|preventDefault={() => {
                value = option;
                inputEl.blur();
              }}
              on:click|preventDefault>{option}</button
            >
          {/each}
        {:else}
          Loading...
        {/if}
      </div>
    {/if}
  </label>
</div>

<style>
  .field {
    font-size: 0.75rem;
    line-height: 1rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3rem;
    user-select: none;
    padding: 0 0.75rem;
    gap: 0.75rem;
    background-color: transparent;
    border: 1px solid var(--border-primary);
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
    box-shadow: inset 0 0 0 1px var(--primary-color);
  }

  .field-label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1rem;
    transition: transform 0.3s, top 0.3s, font-size 0.3s;
  }

  .field-label.move {
    top: 0.25rem;
    transform: translateY(0);
    font-size: 0.75rem;
  }

  .field-input {
    flex: auto;
    width: 10rem;
    font-size: 1rem;
    border: none;
    outline: none;
    background-color: transparent;
  }

  .field-input-padding {
    padding: 1rem 0 0 0;
  }

  .autocomplete-wrapper {
    position: relative;
    width: 100%;
  }

  .menu {
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    width: 100%;
    max-height: 300px;
    overflow-y: auto;
    background-color: var(--background-primary);
    border: 1px solid var(--border-primary);
    border-radius: 0 0 0.25rem 0.25rem;
    box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
    z-index: 100;
  }

  .menu-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    text-align: left;
    background-color: transparent;
    border: none;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  .menu-button:hover,
  .menu-button:focus {
    background-color: var(--background-secondary);
  }

  .menu-button.selected {
    background-color: var(--background-tertiary);
    color: var(--primary-color);
  }
</style>

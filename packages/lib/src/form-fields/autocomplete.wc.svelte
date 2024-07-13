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

  export let wording: {
    LOADING: string;
  } = {
    LOADING: 'Loading...'
  }
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


{#if label && labelType == 'outside'}
  <div class="label">
    {@html label}
  </div>
{/if}
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:focusout={(e) => {
    if (!bindingElement.contains(e.relatedTarget)) open = false;
  }}
  bind:this={bindingElement}
  on:keydown={handleKeydown}
>
  <label class="field">
    {#if label && labelType == 'inside'}
      <span class="field-label" class:move={open || value}>{@html label}</span>
    {/if}
    <input
      class={`field-input ${labelType == 'outside' || !label ? '' : 'field-input-padding'}`}
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
      on:focus={() => (open = true)}
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
          {wording.LOADING}
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
    background-color: transparent;
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
    border: none;
    outline: none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    background-color: transparent;
  }

  .field-input-padding {
    padding: 1rem 0 0 0;
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
    -webkit-border-bottom-left-radius: 0.25rem;
    -moz-border-radius-bottomleft: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    -webkit-border-bottom-right-radius: 0.25rem;
    -moz-border-radius-bottomright: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    -webkit-box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
    box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
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
    border: none;
    gap: 0.75rem;
    padding: 0.75rem;
    text-align: left;
    outline: none;
    -webkit-transition:
      background-color 0.3s,
      color 0.3s,
      fill 0.3s;
    -o-transition:
      background-color 0.3s,
      color 0.3s,
      fill 0.3s;
    -moz-transition:
      background-color 0.3s,
      color 0.3s,
      fill 0.3s;
    transition:
      background-color 0.3s,
      color 0.3s,
      fill 0.3s;
  }

  .menu-button.selected {
    background-color: var(--background-tertiary);
    color: var(--primary-color);
    fill: var(--primary-color);
  }

  .menu-button:disabled {
    opacity: 0.33;
  }

  .menu-button:not(:disabled):hover,
  .menu-button:focus {
    background-color: var(--background-secondary);
  }
</style>

<svelte:options
  customElement={{
    tag: 'jp-textarea',
    shadow: 'none',
    extend: (customElementConstructor) => {
      return class extends customElementConstructor {
        static formAssociated = true;

        constructor() {
          super();
          this.attachedInternals = this.attachInternals();
          this.attachedInternals.role = 'textbox';
        }
      };
    }
  }}
/>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let attachedInternals: ElementInternals;
  export let id: string | null = null;
  export let value: string = '';
  export let label: string = '';
  export let labelType: 'inside' | 'outside' = 'inside';
  export let hint: string = '';
  export let disabled: boolean = false;
  export let name: string | null = null;
  export let placeholder: string = '';
  export let inputFocused: boolean = false;
  export let rows: number = 4;

  export let required: boolean = false;
  export let readonly: boolean = false;

  export let minlength: number | null = null;
  export let maxlength: number | null = null;

  export const getValue = () => value;

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

  const dispatch = createEventDispatcher();

  let height = 'auto';

  let textareaEl;

  export const reportValidity = () => attachedInternals.reportValidity();

  $: {
    attachedInternals.checkValidity();

    if (textareaEl) {
      if (textareaEl.validity.patternMismatch) {
        attachedInternals.setValidity(
          { patternMismatch: true },
          patternValidationMessage || validationMessages.pattern || textareaEl.validationMessage,
          textareaEl
        );
      } else if (textareaEl.validity.tooShort) {
        attachedInternals.setValidity(
          { tooShort: true },
          minlengthValidationMessage ||
            validationMessages.minlength ||
            textareaEl.validationMessage,
          textareaEl
        );
      } else if (textareaEl.validity.tooLong) {
        attachedInternals.setValidity(
          { tooLong: true },
          maxlengthValidationMessage ||
            validationMessages.maxlength ||
            textareaEl.validationMessage,
          textareaEl
        );
      } else if (textareaEl.validity.valueMissing) {
        attachedInternals.setValidity(
          { valueMissing: true },
          requiredValidationMessage || validationMessages.required || textareaEl.validationMessage,
          textareaEl
        );
      } else {
        attachedInternals.setValidity({});
      }
    }
    attachedInternals.setFormValue(value);
    dispatch('value', { value });
  }

  onMount(() => {
    updateHeight()
  })

  function updateHeight() {
    if (textareaEl) {
      textareaEl.style.height = 'auto';
      textareaEl.style.height = textareaEl.scrollHeight + 'px';
    }
  }
</script>

{#if label && labelType == 'outside'}
  <div class="label">
    {@html label}
  </div>
{/if}
<div class:has-hint={hint}>
  <label class="field" class:disabled={disabled || readonly} class:required>
    {#if label && labelType == 'inside'}
      <span class="field-label" class:move={inputFocused || value}>{@html label}</span>
    {/if}

    <textarea
      class={`field-input ${labelType == 'outside' || !label ? '' : 'field-input-margin'}`}
      style="height: {height}"
      aria-hidden={disabled || readonly}
      tabindex={disabled || readonly ? -1 : 0}
      {disabled}
      {placeholder}
      {required}
      {readonly}
      {id}
      {name}
      {minlength}
      {maxlength}
      {rows}
      bind:value
      bind:this={textareaEl}
      on:focus={() => (inputFocused = true)}
      on:blur={() => (inputFocused = false)}
      on:input={(event) => {
            updateHeight();
            dispatch('input', event);
      }}
    ></textarea>
  </label>

  {#if hint}
    <span class="field-hint">
      {@html hint}
    </span>
  {/if}
</div>

<style>
  .has-hint {
    position: relative;
    margin-bottom: 1.25rem;
  }

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
    min-height: 2rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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

  .label {
    margin-top: 0.5rem;
    margin-bottom: 0.125rem;
    font-size: 0.875rem;
  }

  .field-label {
    position: absolute;
    top: 1.25rem;
    left: 0.75rem;
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
    font-family: inherit;
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    -moz-box-flex: 1;
    -ms-flex: auto;
    white-space: initial;
    flex: auto;
    width: 10rem;
    font-size: 1rem;
    overflow-x: hidden;
    -ms-overflow-x: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    padding: 0.75rem;
    line-height: 1.375rem;
    border: none;
    outline: none;
    -webkit-border-radius: 0.25rem;
    -moz-border-radius: 0.25rem;
    border-radius: 0.25rem;
  }

  .field-input-margin {
    padding: 1.25rem 0.75rem 0.5rem;
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

  .field-hint {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1.25rem;
    line-height: 1.25rem;
    font-size: 0.75rem;
    padding: 0 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    color: var(--text-secondary);
  }

  .field-hint:hover {
    z-index: 255;
    overflow: unset;
  }
</style>

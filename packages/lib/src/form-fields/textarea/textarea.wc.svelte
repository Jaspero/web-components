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
  import './textarea.wc.pcss';

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
  let hadValue = false;
  let userInvalidElement = false;

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
    updateHeight();
  });

  function updateHeight() {
    if (textareaEl) {
      textareaEl.style.height = 'auto';
      textareaEl.style.height = textareaEl.scrollHeight + 'px';
    }
  }

  $: {
    if (value) hadValue = true;
    if (hadValue && !attachedInternals.checkValidity()) {
      userInvalidElement = true;
    } else {
      userInvalidElement = false;
    }
  }
</script>

{#if label && labelType == 'outside'}
  <div class="jp-textarea-label">
    {@html label}
  </div>
{/if}
<div class:jp-textarea-has-hint={hint}>
  <label
    class="jp-textarea-field"
    class:jp-textarea-field-disabled={disabled || readonly}
    class:jp-textarea-field-required={required}
    class:jp-textarea-field-user-invalid={userInvalidElement}
  >
    {#if label && labelType == 'inside'}
      <span
        class="jp-textarea-field-label"
        class:jp-textarea-field-label-move={inputFocused || value}>{@html label}</span
      >
    {/if}

    <textarea
      class={`jp-textarea-field-input ${labelType == 'outside' || !label ? '' : 'jp-textarea-field-input-margin'}`}
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
    <span class="jp-textarea-field-hint">
      {@html hint}
    </span>
  {/if}
</div>

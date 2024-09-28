<svelte:options
  customElement={{
    tag: 'jp-input',
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
  import './input.wc.pcss';

  export let attachedInternals: ElementInternals;
  export let value: string | number = '';
  export let label = '';
  export let name = '';
  export let placeholder = '';
  export let autocomplete: 'on' | 'off' = 'off';
  export let labelType: 'inside' | 'outside' = 'inside';
  export let required = false;
  export let disabled = false;
  export let readonly = false;
  export let type: 'text' | 'password' | 'email' | 'tel' | 'url' | 'number' | 'color' | 'time' = 'text';
  export let id: string | null = null;
  export let hint: string | null = null;
  export let minlength: number | null = null;
  export let maxlength: number | null = null;
  export let pattern: string | null = null;
  export let inputFocused = false;
  export let list: string | null = null;
  export let min: number | null = null;
  export let max: number | null = null;
  export let step: number | null | 'any' = null;
  export let suffix: string | null = null;
  export let prefix: string | null = null;
  export let validationMessages: {
    required?: string;
    maxlength?: string;
    minlength?: string;
    pattern?: string;
    type?: string;
  } = {};
  export let requiredValidationMessage: string;
  export let minlengthValidationMessage: string;
  export let maxlengthValidationMessage: string;
  export let patternValidationMessage: string;
  export let typeValidationMessage: string;

  export const getValue = () => value;

  export const validity = attachedInternals.validity;
  export const validationMessage = attachedInternals.validationMessage;
  export const reportValidity = () => attachedInternals.reportValidity();
  export const checkValidity = () => attachedInternals.checkValidity();

  let inputEl: HTMLInputElement;
  let focused = inputFocused;

  const dispatch = createEventDispatcher();

  if (type === 'color' && !value) {
    value = '#000000';
  }

  $: {
    attachedInternals.checkValidity();

    if (inputEl) {
      if (inputEl.validity.typeMismatch) {
        attachedInternals.setValidity(
          { typeMismatch: true },
          typeValidationMessage || validationMessages.type || inputEl.validationMessage,
          inputEl
        );
      } else if (inputEl.validity.patternMismatch) {
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

    attachedInternals.setFormValue(value);
    dispatch('value', { value });
  }
  $: fieldPadding = labelType !== 'outside' && !label;
  $: displayLabel = required ? `${label} *` : label;

  onMount(()=> {
    if(inputFocused){
      inputEl.focus();
    }
  });
</script>

{#if label && labelType === 'outside'}
  <div class="jp-input-label">
    {@html displayLabel}
  </div>
{/if}
<div class="jp-input" class:jp-input-has-hint={!!hint}>
  <label class="jp-input-field" class:jp-input-field-disabled={disabled || readonly}>
    {#if label && labelType === 'inside'}
      <span class="jp-input-field-label" class:jp-input-field-move={focused || value || type === 'time' || value === 0}>{@html displayLabel}</span>
    {/if}
    {#if prefix && (value || focused)}
      <div class="jp-input-field-prefix">{@html prefix}</div>
    {/if}
    {#if type === 'text'}
      <input
        type="text"
        bind:this={inputEl}
        class:jp-input-field-padding={fieldPadding}
        aria-hidden={disabled || readonly}
        tabindex={disabled || readonly ? -1 : 0}
        {placeholder}
        {required}
        {autocomplete}
        {disabled}
        {readonly}
        {id}
        {name}
        {minlength}
        {maxlength}
        {pattern}
        bind:value
        on:focus={() => (focused = true)}
        on:blur={() => (focused = false)}
      />
    {:else if type === 'password'}
      <input
        type="password"
        bind:this={inputEl}
        class:jp-input-field-padding={fieldPadding}
        aria-hidden={disabled || readonly}
        tabindex={disabled || readonly ? -1 : 0}
        {placeholder}
        {required}
        {autocomplete}
        {disabled}
        {readonly}
        {id}
        {name}
        {minlength}
        {maxlength}
        {pattern}
        bind:value
        on:focus={() => (focused = true)}
        on:blur={() => (focused = false)}
      />
    {:else if type === 'email'}
      <input
        type="email"
        bind:this={inputEl}
        class:jp-input-field-padding={fieldPadding}
        aria-hidden={disabled || readonly}
        tabindex={disabled || readonly ? -1 : 0}
        {placeholder}
        {required}
        {autocomplete}
        {disabled}
        {readonly}
        {id}
        {name}
        {minlength}
        {maxlength}
        {pattern}
        bind:value
        on:focus={() => (focused = true)}
        on:blur={() => (focused = false)}
      />
    {:else if type === 'tel'}
      <input
        type="tel"
        bind:this={inputEl}
        class:jp-input-field-padding={fieldPadding}
        aria-hidden={disabled || readonly}
        tabindex={disabled || readonly ? -1 : 0}
        {placeholder}
        {required}
        {autocomplete}
        {disabled}
        {readonly}
        {id}
        {name}
        {minlength}
        {maxlength}
        {pattern}
        bind:value
        on:focus={() => (focused = true)}
        on:blur={() => (focused = false)}
      />
    {:else if type === 'url'}
      <input
        type="url"
        bind:this={inputEl}
        class:jp-input-field-padding={fieldPadding}
        aria-hidden={disabled || readonly}
        tabindex={disabled || readonly ? -1 : 0}
        {placeholder}
        {required}
        {autocomplete}
        {disabled}
        {readonly}
        {id}
        {name}
        {minlength}
        {maxlength}
        {pattern}
        bind:value
        on:focus={() => (focused = true)}
        on:blur={() => (focused = false)}
      />
    {:else if type === 'number'}
      <input
        type="number"
        bind:this={inputEl}
        class:jp-input-field-padding={fieldPadding}
        aria-hidden={disabled || readonly}
        tabindex={disabled || readonly ? -1 : 0}
        {required}
        {autocomplete}
        {disabled}
        {minlength}
        {maxlength}
        {name}
        {id}
        {list}
        {min}
        {max}
        {placeholder}
        {step}
        {readonly}
        {pattern}
        bind:value
        on:focus={() => (focused = true)}
        on:blur={() => (focused = false)}
      />
    {:else if type === 'time'}
      <input
        type="time"
        bind:this={inputEl}
        class:jp-input-field-padding={fieldPadding}
        aria-hidden={disabled || readonly}
        tabindex={disabled || readonly ? -1 : 0}
        {required}
        {autocomplete}
        {disabled}
        {name}
        {id}
        {placeholder}
        {readonly}
        bind:value
        on:focus={() => (focused = true)}
        on:blur={() => (focused = false)}
      />
    {:else if type === 'color'}
      <span class="jp-input-field-color-picker" style="background-color: {value}"></span>
      <input
        type="color"
        bind:this={inputEl}
        class:jp-input-field-padding={fieldPadding}
        aria-hidden={disabled || readonly}
        tabindex={disabled || readonly ? -1 : 0}
        {required}
        {autocomplete}
        {disabled}
        {name}
        {id}
        {placeholder}
        {readonly}
        bind:value
        on:focus={() => (focused = true)}
        on:blur={() => (focused = false)}
      />
      <span>{value}</span>
    {/if}
    {#if suffix}
      <div class="jp-input-field-suffix">{@html suffix}</div>
    {/if}
  </label>

  {#if hint}
    <div class="jp-input-field-hint">{@html hint}</div>
  {/if}
</div>
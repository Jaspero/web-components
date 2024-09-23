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

  onMount(()=> {
    if(inputFocused){
      inputEl.focus();
    }
  });
</script>

{#if label && labelType === 'outside'}
  <div class="label">
    {@html label}
  </div>
{/if}
<div class:has-hint={!!hint}>
  <label class="field" class:disabled={disabled || readonly} class:required>
    {#if label && labelType === 'inside'}
      <span class="field-label" class:move={focused || value || type === 'time' || value === 0}>{@html label}</span>
    {/if}
    {#if $$slots.prefix && (value || focused)}
      <div class="prefix">
        <slot name="prefix" />
      </div>
    {/if}
    {#if type === 'text'}
      <input
        type="text"
        bind:this={inputEl}
        class={`field-input ${labelType === 'outside' || !label ? '' : 'field-input-padding'}`}
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
        class={`field-input ${labelType === 'outside' || !label ? '' : 'field-input-padding'}`}
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
        class={`field-input ${labelType === 'outside' || !label ? '' : 'field-input-padding'}`}
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
        class={`field-input ${labelType === 'outside' || !label ? '' : 'field-input-padding'}`}
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
        class={`field-input ${labelType === 'outside' || !label ? '' : 'field-input-padding'}`}
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
        class={`field-input ${labelType === 'outside' || !label ? '' : 'field-input-padding'}`}
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
        class={`field-input ${labelType === 'outside' || !label ? '' : 'field-input-padding'}`}
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
      <span class="color-picker" style="background-color: {value}"></span>
      <input
        type="color"
        bind:this={inputEl}
        class={`field-input ${labelType === 'outside' || !label ? '' : 'field-input-padding'}`}
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
    {#if $$slots.suffix}
      <div class="suffix">
        <slot name="suffix" />
      </div>
    {/if}
  </label>

  {#if hint}
    <div class="field-hint">{@html hint}</div>
  {/if}
</div>

<style lang="postcss">
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
    justify-content: space-between;
    align-items: center;
    text-align: left;
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    user-select: none;
    gap: 0.75rem;
    color: var(--text-primary);
    background-color: var(--background-primary);
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

  .label {
    margin-top: 0.5rem;
    margin-bottom: 0.125rem;
    font-size: 0.875rem;
  }

  .field-label {
    position: absolute;
    top: 50%;
    left: 0.75rem;
    transform: translateY(-50%);
    font-size: 1rem;
    transition:
      transform 0.3s,
      top 0.3s,
      font-size 0.3s;
  }

  .field-label.move {
    top: 0.25rem;
    transform: translateY(0);
    font-size: 0.75rem;
  }

  .prefix {
    padding: 1rem 0 0 0;
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
    flex: auto;
    width: 10rem;
    height: 1rem;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    padding: 0.75rem;
    border: none;
    outline: none;
    border-radius: 0.25rem;
    background-color: transparent;
  }

  .field-input-padding {
    padding: 1.5rem 0.75rem calc(0.5rem - 2px);
  }

  .field-input:-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }
  .field-input::-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }
  .field-input:-ms-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }
  .field-input::-ms-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }
  .field-input::placeholder {
    opacity: 0;
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
    text-overflow: ellipsis;
    color: var(--text-secondary);
  }

  .field-hint:hover {
    z-index: 255;
    overflow: unset;
  }

  .field:has(input[type='color']) {
    padding: 1.5rem 0.5rem 0.5rem;
    justify-content: flex-start;
  }

  .field-input[type='color'] {
    position: absolute;
    visibility: hidden;
    opacity: 0;
  }

  .color-picker {
    display: block;
    width: 24px;
    height: 12px;
    border-radius: 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
</style>
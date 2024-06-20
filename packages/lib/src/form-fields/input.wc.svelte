<svelte:options
  customElement={{
    tag: 'jp-input',
    shadow: 'open',
    delegatesFocus: true,
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
  import { createEventDispatcher } from 'svelte';

  export let attachedInternals: ElementInternals;
  export let value: string = '';
  export let label: string = '';
  export let labelType: 'inside' | 'outside' = 'inside';
  export let required = false;
  export let disabled = false;
  export let readonly = false;
  export let type: 'text' | 'password' | 'email' | 'tel' | 'url' | 'number' | 'color' = 'text';
  export let id: string | null = null;
  export let hint: string | null = null;
  export let name: string = '';
  export let autocomplete: string = 'off';
  export let minlength: number | null = null;
  export let maxlength: number | null = null;
  export let pattern: string | null = null;
  export let placeholder: string = '';
  export let inputFocused: boolean = false;
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

  const dispatch = createEventDispatcher();

  if (type === 'color') {
    value = "#000000"
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
</script>

{#if label && labelType === 'outside'}
  <div class="label">
    {@html label}
  </div>
{/if}
<div class:has-hint={!!hint}>
  <label class="field" class:disabled={disabled || readonly} class:required>
    {#if (label && labelType === 'inside')}
      <span class="field-label" class:move={inputFocused || value}>{@html label}</span>
    {/if}
    {#if $$slots.prefix && (value || inputFocused)}
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
        on:focus={() => (inputFocused = true)}
        on:blur={() => (inputFocused = false)}
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
        on:focus={() => (inputFocused = true)}
        on:blur={() => (inputFocused = false)}
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
        on:focus={() => (inputFocused = true)}
        on:blur={() => (inputFocused = false)}
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
        on:focus={() => (inputFocused = true)}
        on:blur={() => (inputFocused = false)}
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
        on:focus={() => (inputFocused = true)}
        on:blur={() => (inputFocused = false)}
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
        on:focus={() => (inputFocused = true)}
        on:blur={() => (inputFocused = false)}
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
        on:focus={() => (inputFocused = true)}
        on:blur={() => (inputFocused = false)}
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
    box-sizing: border-box;
    width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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

  .label {
    margin-top: 0.5rem;
    margin-bottom: 0.125rem;
    font-size: 0.875rem;
  }

  .field-label {
    position: absolute;
    top: 50%;
    left: 0.75rem;
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
    padding: 0.75rem;
    border: none;
    outline: none;
    -webkit-border-radius: 0.25rem;
    -moz-border-radius: 0.25rem;
    border-radius: 0.25rem;
  }

  .field-input-padding {
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

  .field:has(input[type="color"]) {
    padding: 1.5rem .5rem .5rem;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -moz-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .field-input[type="color"] {
    position: absolute;
    visibility: hidden;
    opacity: 0;
  }

  .color-picker {
    display: block;
    width: 24px;
    height: 12px;
    -webkit-border-radius: .25rem;
    -moz-border-radius: .25rem;
    border-radius: .25rem;
    border: 1px solid rgba(0,0,0,.12);
  }
</style>

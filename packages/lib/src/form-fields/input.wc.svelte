<svelte:options
  customElement={{
    tag: 'jp-input',
    shadow: 'open',
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
  import { createEventDispatcher } from 'svelte';

  export let attachedInternals: ElementInternals;
  export let value: string = '';
  export let label: string = '';
  export let required: boolean = false;
  export let disabled: boolean = false;
  export let readonly: boolean = false;
  export let type: 'text' | 'password' | 'email' | 'tel' | 'url' = 'text';
  export let id: string = '';
  export let name: string = '';
  export let minlength: number | null = null;
  export let maxlength: number | null = null;
  export let pattern: string | null = null;
  export let placeholder: string = '';
  export let inputFocused: boolean = false;
  export let list: string | null = null;
  export let min: number | null = null;
  export let max: number | null = null;
  export let step: number | null | 'any' = null;
  export let validationMessages = {};
  export let requiredValidationMessage;
  export let minlengthValidationMessage;
  export let maxlengthValidationMessage;
  export let patternValidationMessage;

  let inputEl;

  export const getValue = () => value;

  const dispatch = createEventDispatcher();

  export const reportValidity = () => {
    attachedInternals.reportValidity();
  };

  $: {
    attachedInternals.checkValidity();
    if (inputEl) {
      if (inputEl.validity.patternMismatch) {
        if (patternValidationMessage || validationMessages.pattern) {
          attachedInternals.setValidity(
            { customError: true },
            patternValidationMessage || validationMessages.pattern
          );
        }
      } else if (inputEl.validity.tooShort) {
        if (minlengthValidationMessage || validationMessages.minlength) {
          attachedInternals.setValidity(
            { customError: true },
            minlengthValidationMessage || validationMessages.minlength
          );
        }
      } else if (inputEl.validity.tooLong) {
        if (maxlengthValidationMessage || validationMessages.maxlength) {
          attachedInternals.setValidity(
            { customError: true },
            maxlengthValidationMessage || validationMessages.maxlength
          );
        }
      } else if (inputEl.validity.valueMissing) {
        if (requiredValidationMessage || validationMessages.required) {
          attachedInternals.setValidity(
            { customError: true },
            requiredValidationMessage || validationMessages.required
          );
        }
      }
    }
    attachedInternals.setFormValue(value);
    dispatch('value', { value });
  }
</script>

<div class:has-hint={$$slots.hint}>
  <label class="field" class:disabled={disabled || readonly} class:required>
    {#if label}
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
        class="field-input"
        aria-hidden={disabled || readonly}
        tabindex={disabled || readonly ? -1 : 0}
        {placeholder}
        {required}
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
        class="field-input"
        aria-hidden={disabled || readonly}
        tabindex={disabled || readonly ? -1 : 0}
        {placeholder}
        {required}
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
        class="field-input"
        aria-hidden={disabled || readonly}
        tabindex={disabled || readonly ? -1 : 0}
        {placeholder}
        {required}
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
        class="field-input"
        aria-hidden={disabled || readonly}
        tabindex={disabled || readonly ? -1 : 0}
        {placeholder}
        {required}
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
        class="field-input"
        aria-hidden={disabled || readonly}
        tabindex={disabled || readonly ? -1 : 0}
        {placeholder}
        {required}
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
        class="field-input"
        aria-hidden={disabled || readonly}
        tabindex={disabled || readonly ? -1 : 0}
        {required}
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
    {/if}
    {#if $$slots.suffix}
      <div class="suffix">
        <slot name="suffix" />
      </div>
    {/if}
  </label>

  {#if $$slots.hint}
    <div class="field-hint">
      <slot name="hint" />
    </div>
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

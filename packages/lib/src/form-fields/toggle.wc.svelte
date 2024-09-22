<svelte:options
  customElement={{
    tag: 'jp-toggle',
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
  import { createEventDispatcher } from 'svelte';

  export let attachedInternals: ElementInternals;

  export let name = '';
  export let value = false;
  export let label = '';
  export let required = false;
  export let requiredValidationMessage = '';
  export let size: 'small' | 'large' = 'small';
  export let disabled = false;

  let checkboxEl: HTMLInputElement;

  export const getValue = () => value;

  export const reportValidity = () => {
    attachedInternals.reportValidity();
  };

  const dispatch = createEventDispatcher();
  $: {
    attachedInternals.checkValidity();

    if (checkboxEl) {
      if (checkboxEl.validity.valueMissing) {
        attachedInternals.setValidity(
          { valueMissing: true },
          requiredValidationMessage || checkboxEl.validationMessage,
          checkboxEl
        );
      }
    }
    dispatch('value', value);
  }
  $: displayLabel = required ? `${label} *` : label;
</script>

{#if label}
  <span class="label" style={`font-size: ${size == 'small' ? '16px' : '20px'}`}
    >{@html displayLabel}</span
  >
{/if}
<label class={'switch ' + size}>
  <input
    type="checkbox"
    {name}
    {disabled}
    {required}
    bind:checked={value}
    value={true}
    hidden
    bind:this={checkboxEl}
  />
  <span class="slider round" class:pointer={!disabled}></span>
</label>

<style>
  .switch {
    position: relative;
    display: inline-block;
  }

  .pointer {
    cursor: pointer;
  }

  .label {
    display: block;
    margin-bottom: 4px;
  }

  .large {
    width: 60px;
    height: 34px;
  }

  .small {
    width: 40px;
    height: 22px;
  }

  .switch {
    position: relative;
    display: inline-block;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .large .slider {
    border-radius: 34px;
  }

  .small .slider {
    border-radius: 22px;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .large .slider:before {
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
  }

  .small .slider:before {
    height: 18px;
    width: 18px;
    left: 2px;
    bottom: 2px;
  }

  .slider:before {
    position: absolute;
    content: '';
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: var(--primary-color);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--primary-color);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
  }
</style>

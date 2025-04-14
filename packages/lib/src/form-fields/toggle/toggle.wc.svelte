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
  import './toggle.wc.pcss';

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
      } else attachedInternals.setValidity({});
    }
    dispatch('value', value);
  }
  $: displayLabel = required ? `${label} *` : label;
</script>

<div class="jp-toggle-container">
  <label class="jp-toggle-label-container">
    <div class={'jp-toggle-switch-' + size}>
      <input
        class="jp-toggle-switch-input"
        type="checkbox"
        {name}
        {disabled}
        {required}
        bind:checked={value}
        value={true}
        hidden
        bind:this={checkboxEl}
      />
      <span class="jp-toggle-slider round" class:jp-toggle-slider-pointer={!disabled}></span>
    </div>
    {#if label}
      <span class="jp-toggle-label" class:jp-toggle-label-small={size === 'small'}
        >{@html displayLabel}</span
      >
    {/if}
  </label>
</div>

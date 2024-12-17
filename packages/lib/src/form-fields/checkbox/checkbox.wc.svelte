<svelte:options
  customElement={{
    tag: 'jp-checkbox',
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
  import './checkbox.wc.pcss';

  export let attachedInternals: ElementInternals;
  export let value;
  export let options: Array<{
    label?: string;
    value: string;
    checked: boolean;
    disabled?: boolean;
  }> = [];
  export let minSelects: number = 0;
  export let maxSelects: number | null = null;
  export let minselectsValidationMessage: string;
  export let maxselectsValidationMessage: string;
  export let requiredValidationMessage: string;
  export let validationMessages: {
    minselects?: string;
    maxselects?: string;
    required?: string;
  } = {};
  export let label = '';
  export let required = false;

  export const getValue = () => options.filter((el) => el.checked).map((el) => el.value);
  export const reportValidity = () => attachedInternals.reportValidity();

  const dispatch = createEventDispatcher();
  let checkedAmount: number = 0;
  let wasValid = false;
  let userInvalidElement = false;

  $: {
    if (value && Array.isArray(options)) {
      options = options.map((o) => ({ ...o, checked: false }));
      if (typeof value == 'string') {
        value.split(',').forEach((el) => {
          options[options.findIndex((o) => o.value == el)].checked = true;
        });
      } else {
        value.forEach((el: string) => {
          options[options.findIndex((o) => o.value == el)].checked = true;
        });
      }
    }
  }
  $: displayLabel = required ? `${label} *` : label;

  $: {
    checkedAmount > 0  && attachedInternals.checkValidity() ? (wasValid = true) : '';

    if (required && checkedAmount === 0) {
      attachedInternals.setValidity(
        { customError: true },
        requiredValidationMessage || validationMessages.required || 'Checkbox is required.'
      );
    }
  }

  function updateState() {
    checkedAmount = options.filter((el) => el.checked).length;

    if (checkedAmount < minSelects) {
      attachedInternals.setValidity(
        { customError: true },
        minselectsValidationMessage || validationMessages.minselects || 'Below limit checks.'
      );
    } else if (maxSelects && checkedAmount > maxSelects) {
      attachedInternals.setValidity(
        { customError: true },
        maxselectsValidationMessage || validationMessages.maxselects || 'Above limit checks.'
      );
    } else if (required && checkedAmount === 0) {
      attachedInternals.setValidity(
        { customError: true },
        requiredValidationMessage || validationMessages.required || 'Checkbox is required.'
      );
    } else {
      attachedInternals.setValidity({});
    }

    if (wasValid && !attachedInternals.checkValidity()) {
      userInvalidElement = true;
    } else {
      userInvalidElement = false;
    }

    dispatch(
      'value',
      options.filter((el) => el.checked).map((el) => el.value)
    );
  }

  onMount(() => {
    if (typeof options == 'string') {
      options = JSON.parse(options);
    }
  });
</script>

<div class="jp-checkbox">
  {#if label}
    <div class="jp-checkbox-label" class:jp-checkbox-label-user-invalid={userInvalidElement}>
      {@html displayLabel}
    </div>
  {/if}
  {#each options as option}
    <label class="jp-checkbox-label">
      <input
        type="checkbox"
        name={option.value}
        bind:checked={option.checked}
        on:change={updateState}
        disabled={option.disabled}
      />
      <span class="jp-checkbox-checkbox">
        <span class="jp-checkbox-checkmark">
          <span class="jp-checkbox-checkmark_stem"></span>
          <span class="jp-checkbox-checkmark_kick"></span>
        </span>
      </span>
      {#if option.label}
        {@html option.label}
      {/if}
    </label>
  {/each}
</div>

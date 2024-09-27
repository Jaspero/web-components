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
  export let validationMessages: {
    minselects?: string;
    maxselects?: string;
  } = {};
  export let label = '';
  export let required = false;

  export const getValue = () => options.filter((el) => el.checked).map((el) => el.value);
  export const reportValidity = () => attachedInternals.reportValidity();

  const dispatch = createEventDispatcher();

  $: {
    if (value && Array.isArray(options)) {
      options = options.map((o) => ({ ...o, checked: false }));
      if (typeof value == 'string') {
        value.split(',').forEach((el) => {
          options[options.findIndex((o) => o.value == el)].checked = true;
        });
      } else {
        value.forEach((el) => {
          options[options.findIndex((o) => o.value == el)].checked = true;
        });
      }
    }
  }

  $: if (Array.isArray(options)) {
    const checkedAmount = options.filter((el) => el.checked).length;
    if (checkedAmount < minSelects) {
      attachedInternals.setValidity(
        { customError: true },
        minselectsValidationMessage || validationMessages.minselects || 'Below limit checks.'
      );
    } else if (checkedAmount > maxSelects) {
      attachedInternals.setValidity(
        { customError: true },
        maxselectsValidationMessage || validationMessages.maxselects || 'Above limit checks.'
      );
    } else {
      attachedInternals.setValidity({});
    }

    dispatch(
      'value',
      options.filter((el) => el.checked).map((el) => el.value)
    );
  }

  onMount(() => {
    if (typeof options == 'string') options = JSON.parse(options);
    maxSelects = options.length;
  });
  $: displayLabel = required ? `${label} *` : label;
</script>

<div class="checkbox-container">
  {#if label}
    <div class="checkbox-label">
      {@html displayLabel}
    </div>
  {/if}
  {#each options as option}
    <label class="checkbox-label">
      <input
              class="checkbox-label"
              type="checkbox"
              name={option.value}
              bind:checked={option.checked}
              disabled={option.disabled}
      />
      <span class="checkbox-checkbox">
        <span class="checkbox-checkmark">
            <span class="checkbox-checkmark_stem"></span>
            <span class="checkbox-checkmark_kick"></span>
        </span>
      </span>
      {#if option.label}
        {@html option.label}
      {:else}
        {option.value}
      {/if}
    </label>
  {/each}
</div>

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

<div>
  {#if label}
    <div class="label">
      {@html displayLabel}
    </div>
  {/if}
  {#each options as option}
    <label>
      <input
              type="checkbox"
              name={option.value}
              bind:checked={option.checked}
              disabled={option.disabled}
      />
      <span class="checkbox">
        <span class="checkmark">
            <span class="checkmark_stem"></span>
            <span class="checkmark_kick"></span>
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

<style lang="postcss">
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    line-height: 1rem;
  }

  label input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
  }

  input:checked ~ .checkbox {
    background-color: var(--primary-color);
  }

  .checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid rgba(0,0,0,.16);
    border-radius: 4px;
  }

  .checkmark {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);
  }

  .checkmark_stem {
    position: absolute;
    width: 3px;
    height: 11px;
    background-color: var(--text-on-primary);
    left: 8px;
    top: 4px;
  }

  .checkmark_kick {
    position: absolute;
    width: 3px;
    height: 3px;
    background-color: var(--text-on-primary);
    left: 5px;
    top: 12px;
  }
</style>

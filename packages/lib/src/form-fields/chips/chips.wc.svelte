<svelte:options
  customElement={{
    tag: 'jp-chips',
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
  import {createEventDispatcher} from 'svelte';
  import deleteIcon from "../../icons/delete.svg?raw";

  export let attachedInternals: ElementInternals;
  export let value: string = '';
  export let id: string | null = null;
  export let name: string | null = null;

  export let label: string = '';
  export let labelType: 'inside' | 'outside' = 'inside';
  export let placeholder: string | null = null;
  export let minitems: number = 0;
  export let maxitems: number | null = null;

  export let pattern: RegExp | null = null;

  export let required: boolean = false;
  export let unique: boolean = false;
  export let disabled: boolean = false;

  export let chips: Array<string> = [];

  export let inputFocused: boolean = false;
  export let inputValue: string = '';

  export let validationMessages: {
    required?: string;
    minitems?: string;
    maxitems?: string;
    unique?: string;
    pattern?: string;
  } = {};
  export let requiredValidationMessage: string;
  export let minitemsValidationMessage: string;
  export let maxitemsValidationMessage: string;
  export let uniqueValidationMessage: string;
  export let patternValidationMessage: string;

  let inputEl;

  export const getValue = () => chips;

  const dispatch = createEventDispatcher();

  export const reportValidity = () => {
    attachedInternals.reportValidity();
  };

  $: {
    if (value) {
      chips = Array.isArray(value) ? value : value.split(',')
    };
  }

  $: {
    if (!value) {
      attachedInternals.setValidity(
        { valueMissing: true },
        requiredValidationMessage || validationMessages.required || `Chips should be non-empty.`,
        inputEl
      );
    } else if (chips.length < minitems) {
      attachedInternals.setValidity(
        { customError: true },
        minitemsValidationMessage ||
          validationMessages.minitems ||
          `A minimum of ${minitems} items need to be added.`,
        inputEl
      );
    } else if (maxitems && chips.length > maxitems) {
      attachedInternals.setValidity(
        { customError: true },
        maxitemsValidationMessage ||
          validationMessages.maxitems ||
          `A maximum of ${maxitems} items are allowed.`,
        inputEl
      );
    } else if (unique && new Set(chips).size !== chips.length) {
      attachedInternals.setValidity(
        { customError: true },
        uniqueValidationMessage || validationMessages.unique || 'Chips are not unique.',
        inputEl
      );
    } else if (pattern != null && chips.filter((el) => pattern.test(el)).length != chips.length) {
      attachedInternals.setValidity(
        { patternMismatch: true },
        patternValidationMessage || validationMessages.pattern || 'Chips dont satisfy pattern.',
        inputEl
      );
    } else {
      attachedInternals.setValidity({});
    }
    attachedInternals.checkValidity();
    attachedInternals.setFormValue(value);
    dispatch('value', chips);
  }
</script>

<svelte:window
  on:keydown={(e) => {
    if (inputFocused) {
      if (e.key == 'Enter') {
        e.preventDefault();
        if (inputValue) {
          chips = [...chips, inputValue];
          value = chips.join(',');
          inputValue = '';
        }
      }
      if (e.key == 'Backspace' && !inputValue) {
        chips = chips.slice(0, -1);
        value = chips.join(',');
      }
    }
  }}
/>

{#if label && labelType == 'outside'}
<div class="jp-chips-label">
    {@html label}
  </div>
{/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click|preventDefault={() => inputEl.focus()}>
  <label class="jp-chips-field" class:jp-chips-field-disabled={disabled} class:jp-chips-field-required={required}>
    {#if label && labelType == 'inside'}
      <span class="jp-chips-field-label" class:jp-chips-field-label-move={inputFocused || value}>{@html label}</span>
    {/if}

    <div
      class={`jp-chips-field-container ${labelType == 'outside' || !label ? '' : 'jp-chips-field-container-padding'}`}
    >
      {#each chips as chip}
        <div class="jp-chips-field-container-chip">
          <span class="jp-chips-field-container-chip-label">{chip}</span>
          <button
            type="button"
            class="jp-chips-field-container-chip-button"
            on:click|preventDefault={() => {
              chips.splice(chips.indexOf(chip), 1);
              chips = chips;
              value = chips.join(',');
            }}
          >
           {@html deleteIcon}
          </button>
        </div>
      {/each}
      <input
        type="text"
        class="jp-chips-field-container-input"
        class:jp-chips-field-disabled={disabled}
        {placeholder}
        on:focus={() => (inputFocused = true)}
        on:blur={() => {
          inputFocused = false;
          if (inputValue) {
            chips = [...chips, inputValue];
            value = chips.join(',');
            inputValue = '';
          }
        }}
        bind:value={inputValue}
        bind:this={inputEl}
      />
    </div>
  </label>
</div>
<textarea {id} {name} {value} hidden></textarea>

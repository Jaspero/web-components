<svelte:options
  customElement={{
    tag: 'jp-autocomplete',
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
  import './autocomplete.wc.pcss';

  export let wording = {
    LOADING: 'Loading...'
  };
  export let options: string[] | string = [];

  export let value = '';
  export let asyncOptions = null;
  export let lag: number = 300;
  export let label = '';
  export let labelType: 'inside' | 'outside' = 'inside';
  export let id: string | null = null;
  export let name: string | null = null;
  export let disabled: boolean = false;
  export let attachedInternals: ElementInternals;
  export let required: boolean = false;
  export let placeholder: string = '';
  export let minlength: number | null = null;
  export let maxlength: number | null = null;
  export let pattern: string | null = null;
  export let validationMessages: {
    required?: string;
    maxlength?: string;
    minlength?: string;
    pattern?: string;
  } = {};
  export let requiredValidationMessage: string;
  export let minlengthValidationMessage: string;
  export let maxlengthValidationMessage: string;
  export let patternValidationMessage: string;

  export const reportValidity = () => attachedInternals.reportValidity();

  let loading = false;
  let lagTimeout: any;
  let bindingElement: HTMLDivElement;
  let optionElements: any[] = []; // Array to store references to option buttons
  let menuStyle: string;
  let filteredOptions: string[] = [];
  let inputEl: HTMLInputElement;
  let open = false;
  let hadValue = false;
  let userInvalidElement = false;

  const dispatch = createEventDispatcher();

  const getValue = () => value;

  $: {
    if (open) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = '';
    }
  }

  $: {
    if (Array.isArray(options)) {
      let filteredStart = options.filter((el) => el.toLowerCase().startsWith(value.toLowerCase()));

      let filteredContains = options.filter(
        (el) =>
          el.toLowerCase().includes(value.toLowerCase()) &&
          !el.toLowerCase().startsWith(value.toLowerCase())
      );

      filteredOptions = [...filteredStart, ...filteredContains];
    }
  }

  $: {
    dispatch('value', value);

    if (asyncOptions) {
      loading = true;
      clearTimeout(lagTimeout);
      lagTimeout = setTimeout(async () => {
        options = await asyncOptions(value);
        loading = false;
      }, lag);
    }

    attachedInternals.checkValidity();

    if (inputEl) {
      if (inputEl.validity.patternMismatch) {
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
  }

  function toggleMenu(event?: any) {
    if (event && event.target && event.target.closest('.menu')) {
      return;
    }

    const rect = bindingElement.getBoundingClientRect();
    const availableSpaceBelow = window.innerHeight - rect.bottom;
    const dropdownHeight = 300;

    let style: string = '';

    if (availableSpaceBelow < dropdownHeight) {
      style = `
        width: ${rect.width}px;
        bottom: ${window.innerHeight - rect.top}px;
        left: ${rect.left}px;
      `;
    } else {
      style = `
        width: ${rect.width}px;
        top: ${rect.bottom}px;
        left: ${rect.left}px;
      `;
    }

    menuStyle = style;
    open = !open;
  }

  function handleKeydown(event: KeyboardEvent) {
    const currentIndex = optionElements.findIndex((el) => el === document.activeElement);

    if (currentIndex == -1) {
      if (event.key == 'ArrowDown' && open && optionElements.length) {
        optionElements[0].focus();
      } else {
        return;
      }
    }

    if (open) {
      if (event.key === 'Escape') {
        inputEl.blur();
        return;
      }

      if (event.key === 'Enter') {
        value = filteredOptions[currentIndex];
        inputEl.focus();
      }

      const isHome = event.key === 'Home' || (event.key === 'ArrowUp' && event.metaKey);
      const isEnd = event.key === 'End' || (event.key === 'ArrowDown' && event.metaKey);

      if (isHome) {
        event.preventDefault();
        optionElements[0].focus();
        return;
      }
      if (isEnd) {
        event.preventDefault();
        optionElements[optionElements.length - 1].focus();
        return;
      }

      if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
        let nextIndex;
        event.preventDefault();
        if (event.key === 'ArrowUp') {
          if (currentIndex == 0) {
            nextIndex = optionElements.length - 1;
          } else {
            nextIndex = currentIndex - 1;
          }
        } else {
          if (currentIndex == optionElements.length - 1) {
            nextIndex = 0;
          } else {
            nextIndex = currentIndex + 1;
          }
        }
        optionElements[nextIndex].focus();
      }
    }
  }

  $: {
    if (value) hadValue = true;
    if (hadValue && !attachedInternals.checkValidity()) {
      userInvalidElement = true;
    } else {
      userInvalidElement = false;
    }
  }

  onMount(() => {
    if (typeof options == 'string') {
      options = JSON.parse(options);
    }
  });
  $: displayLabel = required ? `${label} *` : label;
</script>

{#if label && labelType == 'outside'}
  <div class="jp-autocomplete-label">
    {@html displayLabel}
  </div>
{/if}
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:focusout={(e) => {
    if (open) toggleMenu();
  }}
  bind:this={bindingElement}
  on:keydown={handleKeydown}
>
  <label
    class="jp-autocomplete-field"
    class:jp-autocomplete-field-disabled={disabled}
    class:jp-autocomplete-field-user-invalid={userInvalidElement}
  >
    {#if label && labelType === 'inside'}
      <span
        class="jp-autocomplete-field-label"
        class:jp-autocomplete-field-label-move={open || value}
      >
        {@html displayLabel}
      </span>
    {/if}
    <input
      class={`jp-autocomplete-field-input ${labelType == 'outside' || !label ? '' : 'jp-autocomplete-field-input-padding'}`}
      type="text"
      {id}
      {name}
      {disabled}
      {placeholder}
      {required}
      {minlength}
      {maxlength}
      {pattern}
      bind:this={inputEl}
      bind:value
      on:focus={toggleMenu}
    />

    {#if open}
      <div class="jp-autocomplete-overlay">
        <div class="jp-autocomplete-menu" style={menuStyle}>
          {#if !loading}
            {#each filteredOptions as option, index}
              <button
                type="button"
                class="jp-autocomplete-menu-button"
                bind:this={optionElements[index]}
                on:mousedown|preventDefault={() => {
                  value = option;
                  inputEl.value = value;
                  inputEl.blur();
                }}
                on:click|preventDefault>{option}</button
              >
            {/each}
          {:else}
            {wording.LOADING}
          {/if}
        </div>
      </div>
    {/if}
  </label>
</div>

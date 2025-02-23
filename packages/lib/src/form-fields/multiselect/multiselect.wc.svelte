<svelte:options
  customElement={{
    tag: 'jp-multiselect',
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
  import { clickOutside } from '../../utils/click-outside';
  import { createEventDispatcher, onMount } from 'svelte';
  import './multiselect.wc.pcss';
  import clearIcon from '../../icons/clear.svg?raw';
  import ArrowRotate from '../../icons/arrow-rotate.svelte';
  import checkmarkIcon from '../../icons/checkmark.svg?raw';

  export let attachedInternals: ElementInternals;
  export let minSelects = 0;
  export let maxSelects: number | null = null;
  export let options: Array<{
    label?: string;
    value: string;
    selected?: boolean;
    selectedOrder?: number | null;
    disabled?: boolean;
  }> = [];
  export let disabled = false;
  export let required = false;
  export let hint = '';
  export let value: string | string[];
  export let internalValue = '';
  export let id = '';
  export let name = '';
  export let autocomplete = '';
  export let label = '';
  export let labelType: 'inside' | 'outside' = 'inside';
  export let showClear = false;
  export const getValue = () =>
    options
      .filter((el) => el.selected)
      .sort((a, b) => (a.selectedOrder ?? 0) - (b.selectedOrder ?? 0))
      .map((el) => el.value);

  export let validationMessages: {
    required?: string;
    minselects?: string;
    maxselects?: string;
  } = {};
  export let requiredValidationMessage: string;
  export let minselectsValidationMessage: string;
  export let maxselectsValidationMessage: string;

  let isTabbing = false; // Variable to track if the user is tabbing
  let open = false;
  let bindingElement: HTMLButtonElement;
  let menuStyle: string;
  let optionElements: any[] = []; // Array to store references to option buttons
  let searchTerm = '';
  let searchTimeout: any;
  let displayValue: string[] | null | string;
  let selectedItems = 0;
  let hadValue = false;
  let userInvalidElement = false;

  const dispatch = createEventDispatcher();

  export const reportValidity = () => {
    attachedInternals.reportValidity();
  };

  $: {
    if (open) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = '';
    }
  }

  $: if (Array.isArray(options)) {
    const selects = options.filter((el) => el.selected).length;

    if (selects == 0 && required) {
      attachedInternals.setValidity(
        { customError: true },
        requiredValidationMessage ||
          validationMessages.required ||
          `At least one item needs to be checked.`,
        bindingElement
      );
    } else if (selects < minSelects) {
      attachedInternals.setValidity(
        { customError: true },
        minselectsValidationMessage || validationMessages.minselects || 'Below limit checks.',
        bindingElement
      );
    } else if (maxSelects != null && selects > maxSelects) {
      attachedInternals.setValidity(
        { customError: true },
        maxselectsValidationMessage || validationMessages.maxselects || 'Above limit checks.',
        bindingElement
      );
    } else {
      attachedInternals.setValidity({});
    }

    attachedInternals.checkValidity();

    const sortedValue = options
      .filter((el) => el.selected)
      .sort((a, b) => (a.selectedOrder ?? 0) - (b.selectedOrder ?? 0));

    internalValue = sortedValue.map((el) => el.value).join(',');

    displayValue = sortedValue.map((el) => (el.label ? el.label : el.value)).join(', ');

    dispatch(
      'value',
      sortedValue.map((el) => el.value)
    );
  }

  function clearSelection() {
    displayValue = null;

    if (Array.isArray(options)) {
      options = options.map((option) => ({
        ...option,
        selected: false,
        selectedOrder: null
      }));
    }
  }

  $: hasSelectedOption = Array.isArray(options) && options.some((option) => option.selected);

  $: {
    if (value) {
      populateOptions();
    }
  }

  function populateOptions() {
    options = options.map((o) => ({ ...o, selected: false, selectedOrder: null }));

    if (typeof value == 'string') {
      const values = value.split(',');

      values.forEach((el, index) => {
        const ref = options[options.findIndex((o) => o.value == el)];

        ref.selected = true;
        ref.selectedOrder = index;
      });

      selectedItems = values.length;
    } else {
      value.forEach((el, index) => {
        const ref = options[options.findIndex((o) => o.value == el)];
        if (ref == undefined) {
          return;
        }
        ref.selected = true;
        ref.selectedOrder = index;
      });

      selectedItems = value.length;
    }
  }

  function toggleMenu(event?: any) {
    if (event && event.target && event.target.closest('.menu')) {
      return;
    }

    const rect = bindingElement.getBoundingClientRect();
    const availableSpaceBelow = window.innerHeight - rect.bottom;
    const dropdownHeight = 300;

    let style = '';

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

    if (open) {
      setTimeout(() => {
        // Find the first non-disabled option
        const firstEnabledOptionIndex = options.findIndex((option) => !option.disabled);
        if (firstEnabledOptionIndex !== -1) {
          optionElements[firstEnabledOptionIndex]?.focus();
        }
      }, 10); // A short delay, 10ms
    } else {
      setTimeout(() => {
        if (isTabbing) {
          (bindingElement.nextElementSibling as HTMLButtonElement)?.focus();
        } else {
          bindingElement?.focus();
        }
      }, 10);
    }
  }

  function getAdjacentFocusableIndex(currentIndex: number, direction: 'next' | 'previous'): number {
    if (direction === 'next') {
      for (let i = currentIndex + 1; i < options.length; i++) {
        if (!options[i].disabled) {
          return i;
        }
      }
    } else if (direction === 'previous') {
      for (let i = currentIndex - 1; i >= 0; i--) {
        if (!options[i].disabled) {
          return i;
        }
      }
    }
    return currentIndex;
  }

  function handleKeydown(event: KeyboardEvent) {
    const currentIndex = optionElements.findIndex((el) => el === document.activeElement);

    let nextIndex: number;

    if (open) {
      if (event.key === 'Escape') {
        toggleMenu();
        bindingElement.focus();
        return;
      }

      const isHome = event.key === 'Home' || (event.key === 'ArrowUp' && event.metaKey);
      const isEnd = event.key === 'End' || (event.key === 'ArrowDown' && event.metaKey);

      if (isHome) {
        event.preventDefault();

        const firstEnabledOptionIndex = options.findIndex((option) => !option.disabled);

        if (firstEnabledOptionIndex !== -1) {
          optionElements[firstEnabledOptionIndex]?.focus();
        }

        return;
      }

      if (isEnd) {
        event.preventDefault();

        const lastEnabledOptionIndex = options
          .slice()
          .reverse()
          .findIndex((option) => !option.disabled);

        const actualIndex =
          lastEnabledOptionIndex !== -1 ? options.length - 1 - lastEnabledOptionIndex : -1;

        if (actualIndex !== -1) {
          optionElements[actualIndex]?.focus();
        }

        return;
      }

      if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
        event.preventDefault();

        if (event.key === 'ArrowUp') {
          nextIndex = getAdjacentFocusableIndex(currentIndex, 'previous');
        } else {
          nextIndex = getAdjacentFocusableIndex(currentIndex, 'next');
        }

        optionElements[nextIndex]?.focus();
      }

      if (event.key === 'Tab') {
        event.preventDefault();
        isTabbing = true;

        if (event.shiftKey) {
          nextIndex = getAdjacentFocusableIndex(currentIndex, 'previous');
          if (currentIndex === nextIndex) {
            toggleMenu();
            bindingElement?.focus();
            return;
          }
        } else {
          nextIndex = getAdjacentFocusableIndex(currentIndex, 'next');
          if (currentIndex === nextIndex) {
            toggleMenu();
            bindingElement?.focus();
            return;
          }
        }

        optionElements[nextIndex]?.focus();
      }

      if (/^[a-z\d]$/i.test(event.key)) {
        clearTimeout(searchTimeout);

        searchTerm += event.key;

        const matchingIndex = options
          .map((el) => (el.label ? el.label : el.value))
          .findIndex((option) => option.toLowerCase().startsWith(searchTerm.toLowerCase()));

        if (matchingIndex !== -1) {
          optionElements[matchingIndex].focus();
        }

        searchTimeout = setTimeout(() => {
          searchTerm = '';
        }, 500);
      }
    }
  }

  $: {
    if (internalValue) hadValue = true;
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

    if (!maxSelects) {
      maxSelects = options.length;
    }

    options = options.map((el) => {
      if (el.selected == undefined) {
        el.selected = false;
      }

      el.selectedOrder = null;

      return el;
    });
  });
</script>

{#if label && labelType == 'outside'}
  <div class="label">
    {@html label}
  </div>
{/if}
<div class="jp-multiselect-wrapper" class:jp-multiselect-has-hint={hint}>
  {#if showClear && hasSelectedOption}
    <button class="jp-multiselect-clear" on:click={clearSelection}>
      {@html clearIcon}
    </button>
  {/if}

  <input
    class="jp-multiselect-input"
    tabindex="-1"
    bind:value={internalValue}
    {required}
    {id}
    {name}
    autocomplete={autocomplete || name}
  />

  <button
    type="button"
    class="jp-multiselect-select"
    class:jp-multiselect-select-user-invalid={userInvalidElement}
    class:jp-multiselect-select-toggled={open}
    class:jp-multiselect-select-disabled={disabled}
    {disabled}
    bind:this={bindingElement}
    on:click|preventDefault={toggleMenu}
    on:keydown={handleKeydown}
  >
    {#if label && labelType == 'inside'}
      <span
        class="jp-multiselect-select-label"
        class:jp-multiselect-select-label-move={internalValue || open}
      >
        {@html label}
      </span>
    {/if}

    <span
      class={`jp-multiselect-select-option ${labelType == 'outside' || !label ? '' : 'jp-multiselect-select-option-padding'}`}
      class:has-clear={showClear}
    >
      {displayValue || ''}
    </span>

    <ArrowRotate {open} />
  </button>

  {#if hint}
    <span class="jp-multiselect-select-hint">
      {@html hint}
    </span>
  {/if}

  {#if open}
    <div class="jp-multiselect-overlay">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="jp-multiselect-menu"
        use:clickOutside
        on:click_outside={() => (open = false)}
        style={menuStyle}
        on:keydown={handleKeydown}
      >
        {#each options as option, index (option)}
          <button
            type="button"
            class="jp-multiselect-menu-button"
            class:jp-multiselect-menu-button-selected={option.selected}
            class:jp-multiselect-menu-button-disabled={option.disabled}
            disabled={option.disabled}
            bind:this={optionElements[index]}
            on:click|preventDefault={() => {
              option.selected = !option.selected;

              if (option.selected) {
                option.selectedOrder = selectedItems++;
              } else {
                option.selectedOrder = null;
              }
            }}
          >
            <span>{option.label ? option.label : option.value}</span>

            {#if option.selected}
              {@html checkmarkIcon}
            {/if}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>

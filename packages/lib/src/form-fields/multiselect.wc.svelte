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
  import { clickOutside } from '../clickOutside';
  import { createEventDispatcher, onMount } from 'svelte';

  export let attachedInternals: ElementInternals;
  export let minSelects = 0;
  export let maxSelects: number | null = null;
  export let options: Array<{ label?: string; value: string; selected?: boolean; selectedOrder?: number; disabled?: boolean }> = [];
  export let disabled = false;
  export let required = false;
  export let hint = '';
  export let value: string | string[];
  export let internalValue = '';
  export let id = '';
  export let name = '';
  export let label = '';
  export let labelType: 'inside' | 'outside' = 'inside';
  export let showClear = false;
  export const getValue = () => options
    .filter((el) => el.selected)
    .sort((a, b) => a.selectedOrder - b.selectedOrder)
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
  let optionElements = []; // Array to store references to option buttons
  let searchTerm = '';
  let searchTimeout: any;
  let displayValue: string[] | null;
  let selectedItems = 0;

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
    } else if (selects > maxSelects) {
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
      .sort((a, b) => a.selectedOrder - b.selectedOrder);

    internalValue = sortedValue
      .map((el) => el.value)
      .join(',');

    displayValue = sortedValue
      .map((el) => (el.label ? el.label : el.value));

    dispatch('value', sortedValue.map((el) => el.value));
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
          .findIndex((option) => option.toLowerCase().includes(searchTerm.toLowerCase()));

        if (matchingIndex !== -1) {
          optionElements[matchingIndex].focus();
        }

        searchTimeout = setTimeout(() => {
          searchTerm = '';
        }, 500);
      }
    }
  }

  onMount(() => {
    if (typeof options == 'string') {
      options = JSON.parse(options);
    };

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
<div class="wrapper" class:has-hint={hint}>
  {#if showClear && hasSelectedOption}
    <button class="clear" on:click={clearSelection}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>
    </button>
  {/if}

  <input tabindex="-1" bind:value={internalValue} {id} {name} {required} />

  <button
    type="button"
    class="select"
    class:toggled={open}
    bind:this={bindingElement}
    {disabled}
    on:click|preventDefault={toggleMenu}
    on:keydown={handleKeydown}
  >
    {#if label && labelType == 'inside'}
      <span class="select-label" class:move={internalValue || open}>
        {@html label}
      </span>
    {/if}

    <span
      class={`select-option ${labelType == 'outside' || !label ? '' : 'select-option-padding'}`}
      class:has-clear={showClear}
    >
      {displayValue || ''}
    </span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      class="select-arrow"
      class:rotate={open}
    >
      <path
        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
      />
    </svg>
  </button>

  {#if hint}
    <span class="select-hint">
      {@html hint}
    </span>
  {/if}

  {#if open}
    <div class="overlay">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="menu"
        use:clickOutside
        on:click_outside={() => (open = false)}
        style={menuStyle}
        on:keydown={handleKeydown}
      >
        {#each options as option, index (option)}
          <button
            type="button"
            class="menu-button"
            class:selected={option.selected}
            bind:this={optionElements[index]}
            disabled={option.disabled}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 448 512"
              >
                <path
                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                />
              </svg>
            {/if}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .wrapper {
    position: relative;
  }

  .has-hint {
    position: relative;
    margin-bottom: 1.25rem;
  }

  /* Select */
  .select {
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
    width: 100%;
    height: 3rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0 0.75rem;
    gap: 0.75rem;
    background-color: transparent;
    border: 1px solid var(--border-primary);
    -webkit-border-radius: 0.25rem;
    -moz-border-radius: 0.25rem;
    border-radius: 0.25rem;
  }

  .select:focus {
    outline: none;
    border-color: var(--primary-color);
    -webkit-box-shadow: inset 0 0 0 1px var(--primary-color);
    -moz-box-shadow: inset 0 0 0 1px var(--primary-color);
    box-shadow: inset 0 0 0 1px var(--primary-color);
  }

  .select.toggled {
    -webkit-border-bottom-left-radius: 0;
    -moz-border-radius-bottomleft: 0;
    border-bottom-left-radius: 0;
    -webkit-border-bottom-right-radius: 0;
    -moz-border-radius-bottomright: 0;
    border-bottom-right-radius: 0;
    border-bottom-color: var(--primary-color);
    -webkit-box-shadow: inset 0 -2px 1px -1px var(--primary-color);
    -moz-box-shadow: inset 0 -2px 1px -1px var(--primary-color);
    box-shadow: inset 0 -2px 1px -1px var(--primary-color);
  }

  .select:disabled {
    opacity: 0.5;
  }

  .select-label {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    -moz-transition: 0.3s;
    transition: 0.3s;
    font-size: 1rem;
  }

  .select-label.move {
    top: 0.25rem;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    font-size: 0.75rem;
  }

  input:required + .select .select-label::after {
    content: ' *';
  }

  input:required:invalid + .select {
    border-color: var(--danger-color);
  }

  input {
    top: 0;
    height: 100%;
    opacity: 0;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  .select-option {
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    -moz-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    width: 10rem;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }

  .select-option-padding {
    padding: 1rem 0 0 0;
  }

  .select-arrow {
    width: 1rem;
    height: 1rem;
    min-width: 1rem;
    min-height: 1rem;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    -moz-transition: 0.3s;
    transition: 0.3s;
  }

  .select-arrow.rotate {
    -webkit-transform: rotate(-180deg);
    -moz-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
    -o-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }

  .select-hint {
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

  .select-hint:hover {
    z-index: 255;
    overflow: unset;
  }

  /* Menu */
  .menu {
    z-index: 100;
    position: absolute;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    max-height: 300px;
    overflow-y: auto;
    -webkit-border-bottom-left-radius: 0.25rem;
    -moz-border-radius-bottomleft: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    -webkit-border-bottom-right-radius: 0.25rem;
    -moz-border-radius-bottomright: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    -webkit-box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
    box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
    background-color: var(--background-primary);
  }

  .menu-button {
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
    border: none;
    gap: 0.75rem;
    padding: 0.75rem;
    text-align: left;
    outline: none;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    -moz-transition: 0.3s;
    transition: 0.3s;
  }

  .menu-button.selected {
    background-color: var(--background-tertiary);
    color: var(--primary-color);
    fill: var(--primary-color);
  }

  .menu-button:disabled {
    opacity: 0.33;
  }

  .menu-button:not(:disabled):hover,
  .menu-button:focus {
    background-color: var(--background-secondary);
  }

  .clear {
    z-index: 1;
    position: absolute;
    top: 50%;
    right: 2rem;
    width: 24px;
    height: 24px;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-transition: background-color 0.25s;
    -o-transition: background-color 0.25s;
    -moz-transition: background-color 0.25s;
    transition: background-color 0.25s;
  }

  .clear:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  .overlay {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
</style>

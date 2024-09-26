<svelte:options
  customElement={{
    tag: 'jp-select',
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
  import { clickOutside } from '../../click-outside';
  import clearIcon from '../../icons/clear.svg?raw';
  import { wait } from '../../utils/wait';
  import './select.wc.pcss';

  export let attachedInternals: ElementInternals;
  export let options: Array<{ label?: string; value: string; disabled?: boolean }> | string = [];
  export let disabled = false;
  export let required = false;
  export let hint = '';
  export let value = '';
  export let id = '';
  export let name = '';
  export let label = '';
  export let labelType: 'inside' | 'outside' = 'inside';
  export let showClear = false;
  export const getValue = () => value;

  export let requiredValidationMessage: string;

  let inputEl: HTMLInputElement;

  let isTabbing = false;
  let open = false;
  let bindingElement: HTMLButtonElement;
  let menuStyle: string;
  let optionElements: HTMLOptionElement[] = [];
  let searchTerm = '';
  let searchTimeout: any;
  let selected: string;

  const dispatch = createEventDispatcher();

  export const reportValidity = () => attachedInternals.reportValidity();

  $: {
    if (open) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = '';
    }
  }

  $: {
    if (Array.isArray(options)) {
      const option = options.filter((el) => el.value === value);
      if (option.length) {
        selected = option[0].label ? option[0].label : option[0].value;
      }
    }
  }

  $: {
    checkValidity();
    dispatch('value', value);
  }

  async function checkValidity() {
    await wait();

    attachedInternals.checkValidity();

    if (inputEl) {
      if (inputEl.validity.valueMissing) {
        attachedInternals.setValidity(
          { valueMissing: true },
          requiredValidationMessage || inputEl.validationMessage,
          inputEl
        );
      } else {
        attachedInternals.setValidity({});
      }
    }
  }

  function toggleMenu() {
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

    if (open) {
      setTimeout(() => {
        // Find the first non-disabled option
        const firstEnabledOptionIndex = (options as any).findIndex((option) => !option.disabled);
        if (firstEnabledOptionIndex !== -1) {
          optionElements[firstEnabledOptionIndex].focus();
        }
      }, 10); // A short delay, 10ms
    } else {
      // If the menu is being closed
      setTimeout(() => {
        bindingElement.focus();
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

    let nextIndex;

    // Check if menu is open
    if (open) {
      // Close menu on Escape
      if (event.key === 'Escape') {
        toggleMenu();
        bindingElement.focus();
        return;
      }

      // Check for Home (Windows/Linux) or Cmd+UpArrow (Mac)
      const isHome = event.key === 'Home' || (event.key === 'ArrowUp' && event.metaKey);
      // Check for End (Windows/Linux) or Cmd+DownArrow (Mac)
      const isEnd = event.key === 'End' || (event.key === 'ArrowDown' && event.metaKey);

      // Check for Home (Windows/Linux) or Cmd+UpArrow (Mac)
      if (isHome) {
        event.preventDefault();

        // Find the first non-disabled option's index
        const firstEnabledOptionIndex = options.findIndex((option) => !option.disabled);

        // If there's a non-disabled option, focus on it
        if (firstEnabledOptionIndex !== -1) {
          optionElements[firstEnabledOptionIndex].focus();
        }

        return;
      }

      // Check for End (Windows/Linux) or Cmd+DownArrow (Mac)
      if (isEnd) {
        event.preventDefault();

        // Find the last non-disabled option's index by starting from the end of the list
        const lastEnabledOptionIndex = options
          .slice()
          .reverse()
          .findIndex((option) => !option.disabled);

        // Convert the reversed index back to the original array's indexing
        const actualIndex =
          lastEnabledOptionIndex !== -1 ? options.length - 1 - lastEnabledOptionIndex : -1;

        // If there's a non-disabled option, focus on it
        if (actualIndex !== -1) {
          optionElements[actualIndex].focus();
        }

        return;
      }

      // Original ArrowUp and ArrowDown handling
      if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
        event.preventDefault(); // Prevent default scroll behavior

        if (event.key === 'ArrowUp') {
          nextIndex = getAdjacentFocusableIndex(currentIndex, 'previous');
        } else {
          nextIndex = getAdjacentFocusableIndex(currentIndex, 'next');
        }

        optionElements[nextIndex].focus();
      }

      if (event.key === 'Tab') {
        event.preventDefault(); // Prevent default tabbing behavior
        isTabbing = true;

        if (event.shiftKey) {
          // Shift + Tab pressed
          nextIndex = getAdjacentFocusableIndex(currentIndex, 'previous');
          if (currentIndex === nextIndex) {
            // Close the menu and focus the bindingElement if we're at the first non-disabled option
            toggleMenu();
            bindingElement.focus();
            return; // Early exit
          }
        } else {
          nextIndex = getAdjacentFocusableIndex(currentIndex, 'next');
          if (currentIndex === nextIndex) {
            // Close the menu and focus the bindingElement if we're at the last non-disabled option
            toggleMenu();
            bindingElement.focus();
            return; // Early exit
          }
        }

        optionElements[nextIndex].focus();
      }

      // Handle alphanumeric keys
      if (/^[a-z\d]$/i.test(event.key)) {
        clearTimeout(searchTimeout);

        searchTerm += event.key;

        const matchingIndex = options.findIndex((option) =>
          option.value.toLowerCase().startsWith(searchTerm.toLowerCase())
        );

        if (matchingIndex !== -1) {
          optionElements[matchingIndex].focus();
        }

        searchTimeout = setTimeout(() => {
          searchTerm = '';
        }, 500);
      }
    }
  }

  function clearSelection() {
    selected = '';
    value = '';
  }

  onMount(() => {
    if (typeof options == 'string') {
      options = JSON.parse(options);
    }
  });
  $: displayLabel = required ? `${label} *` : label;
</script>

{#if label && labelType == 'outside'}
  <div class="label">
    {@html displayLabel}
  </div>
{/if}
<div class="wrapper" class:has-hint={hint}>
  {#if showClear && value}
    <button class="clear" on:click={clearSelection}>
      {@html clearIcon}
    </button>
  {/if}
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
      <span class="select-label" class:move={selected || open}>
        {@html displayLabel}
      </span>
    {/if}

    <span
      class={`select-option ${labelType == 'outside' || !label ? '' : 'select-option-padding'} `}
      class:has-clear={showClear}
    >
      {selected || ''}
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

  <input tabindex="-1" bind:this={inputEl} bind:value {id} {name} {required} />
</div>

{#if open}
  <div class="overlay">
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div
      class="menu"
      style={menuStyle}
      use:clickOutside
      on:click_outside={() => (open = false)}
      on:keydown={handleKeydown}
      role="dialog"
    >
      {#each options as option, index (option)}
        <button
          type="button"
          class="menu-button"
          class:selected={value == option.value}
          bind:this={optionElements[index]}
          disabled={option.disabled}
          on:click|preventDefault={() => {
            value = option.value;
            toggleMenu();
          }}
        >
          <span>{option.label ? option.label : option.value}</span>

          {#if value == option.value}
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

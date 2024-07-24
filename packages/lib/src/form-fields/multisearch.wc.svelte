<svelte:options
  customElement={{
    tag: 'jp-multisearch',
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
  import type SearchService from '../types/search.service';

  let options: Array<{
    label?: string;
    value: string;
    selected?: boolean;
    disabled?: boolean;
  }> = [];
  let valueLoad = false;
  let loadingMore = false;
  let loadingSearch = false;
  let searchValue = '';

  export let attachedInternals: ElementInternals;
  export let minSelects = 0;
  export let maxSelects: number | null = null;
  export let disabled = false;
  export let required = false;
  export let hint = '';
  export let value = '';
  export let internalValue = '';
  export let id = '';
  export let name = '';
  export let label = '';
  export let labelType: 'inside' | 'outside' = 'inside';
  export const getValue = () => options.filter((el) => el.selected).map((el) => el.value);
  export let service: SearchService;
  export let validationMessages = {};
  export let requiredValidationMessage: string;
  export let minselectsValidationMessage: string;
  export let maxselectsValidationMessage: string;

  let isTabbing = false; // Variable to track if the user is tabbing
  let open = false;
  let bindingElement;
  let menuStyle;
  let optionElements = []; // Array to store references to option buttons
  let searchTerm = ''; // focus search term
  let searchTimeout; // focus search timeout
  let displayValue;
  let searchFocused = false;

  const dispatch = createEventDispatcher();

  export const reportValidity = () => {
    attachedInternals.reportValidity();
  };

  $: {
    options = options.filter((el) => el.selected).concat(options.filter((el) => !el.selected));
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
    } else if (maxSelects !== null && selects > maxSelects) {
      attachedInternals.setValidity(
        { customError: true },
        maxselectsValidationMessage || validationMessages.maxselects || 'Above limit checks.',
        bindingElement
      );
    } else {
      attachedInternals.setValidity({});
    }
    attachedInternals.checkValidity();

    internalValue = options
      .filter((el) => el.selected)
      .map((el) => el.value)
      .join(',');

    displayValue = options
      .filter((el) => el.selected)
      .map((el) => (el.label ? el.label : el.value));

    dispatch(
      'value',
      options.filter((el) => el.selected).map((el) => el.value)
    );
  }

  async function handleSearch() {
    options = options.filter((el) => el.selected);
    loadingSearch = true;
    const searchResults = await service.search(searchValue);
    options = [
      ...options,
      ...searchResults.map((el) => {
        el.selected = false;
        return el;
      })
    ] as any;
    loadingSearch = false;
  }

  function toggleMenu(event) {
    if (event && event.target && event.target.closest('.menu')) {
      return;
    }

    const rect = bindingElement.getBoundingClientRect();
    const availableSpaceBelow = window.innerHeight - rect.bottom;
    const dropdownHeight = 300;

    let style: string = '';
    if (availableSpaceBelow < dropdownHeight) {
      style = `bottom:100%;`;
    } else {
      style = `top:100%;`;
    }

    menuStyle = style;
    open = !open;

    if (open) {
      setTimeout(() => {
        // Find the first non-disabled option
        const firstEnabledOptionIndex = options.findIndex((option) => !option.disabled);
        if (firstEnabledOptionIndex !== -1) {
          optionElements[firstEnabledOptionIndex].focus();
        }
      }, 10); // A short delay, 10ms
    } else {
      setTimeout(() => {
        if (isTabbing) {
          bindingElement.nextElementSibling.focus(); // Focus the next sibling element (if any)
        } else {
          bindingElement.focus();
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
    return currentIndex; // Return current index if no focusable option is found in the desired direction
  }

  function handleKeydown(event: KeyboardEvent) {
    if (searchFocused) return;
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

      // Handle tabbing through options
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

  async function loadValues(value) {
    valueLoad = true;
    const values = value.split(',');
    await Promise.all(
      values.map(async (el) => {
        let single;
        if (service.getSingle) {
          single = await service.getSingle(el);
          single.selected = true;
        } else {
          single = { value: el, selected: true };
        }
        options = [...options, single];
      })
    );
    valueLoad = false;
  }

  $: {
    if (value) {
      loadValues(value);
    } else {
      options = [];
    }
  }

  onMount(() => {
    if (!maxSelects) {
      maxSelects = options.length;
    }
  });
</script>

{#if label && labelType == 'outside'}
  <div class="label">
    {@html label}
  </div>
{/if}
<div class="wrapper" use:clickOutside on:click_outside={() => (open = false)} class:has-hint={hint}>
  <input class="hidden-input" tabindex="-1" bind:value={internalValue} {id} {name} {required} />

  <button
    type="button"
    class="select"
    class:toggled={open}
    bind:this={bindingElement}
    disabled={disabled || valueLoad}
    on:click|preventDefault={toggleMenu}
    on:keydown={handleKeydown}
  >
    {#if valueLoad}
      <span class="select-label"> Loading... </span>
    {:else if label && labelType == 'inside'}
      <span class="select-label" class:move={internalValue || open}>
        {@html label}
      </span>
    {/if}

    <span
      class={`select-option ${labelType == 'outside' || !label ? '' : 'select-option-padding'}`}
    >
      {displayValue || ''}
    </span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      class="select-arrow"
      class:rotate={open}
    >
      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.-->
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
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="menu" on:keydown={handleKeydown} style={menuStyle} role="dialog">
      {#if service.search}
        <div class="search-field">
          <span class="search-label" class:move={searchFocused || searchValue}>Search</span>
          <input
            name="search"
            type="text"
            class="search-input"
            on:input={() => {
              if (!loadingSearch) handleSearch();
            }}
            bind:value={searchValue}
            on:focus={() => (searchFocused = true)}
            on:blur={() => (searchFocused = false)}
          />
        </div>
      {/if}
      <div class="menu-buttons">
        {#each options as option, index (option)}
          <button
            type="button"
            class="menu-button"
            class:selected={option.selected}
            bind:this={optionElements[index]}
            disabled={option.disabled}
            on:click|preventDefault={() => (option.selected = !option.selected)}
          >
            <span>{option.label ? option.label : option.value}</span>

            {#if option.selected}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                />
              </svg>
            {/if}
          </button>
        {/each}
        {#if loadingSearch}
          <span style="display: block; padding: 0.75rem; text-align: center;">Loading...</span>
        {/if}
      </div>
      {#if service.loadMore && !loadingSearch}
        <div class="loadmore">
          {#if !loadingMore}
            <button
              type="button"
              on:click|preventDefault|stopPropagation={async () => {
                loadingMore = true;
                options = options.concat(await service.loadMore(searchValue));
                loadingMore = false;
              }}
            >
              Load more
            </button>
          {:else}
            <button type="button" disabled>Loading...</button>
          {/if}
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .has-hint {
    position: relative;
    margin-bottom: 1.25rem;
  }

  .wrapper {
    position: relative;
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

  .hidden-input {
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
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
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

  .menu-buttons {
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
    max-height: 300px;
    overflow-y: auto;
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
    border-bottom: 1px solid var(--border-secondary);
    gap: 0.75rem;
    padding: 0.75rem;
    text-align: left;
    outline: none;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    -moz-transition: 0.3s;
    transition: 0.3s;
  }

  .loadmore {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  .loadmore button {
    padding: 5px;
    border-radius: 4px;
    background: var(--primary-color);
    color: var(--text-on-primary);
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

  .search-field {
    font-size: 0.75rem;
    line-height: 1rem;
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
    box-sizing: border-box;
    width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    gap: 0.75rem;
    padding: .75rem;
    background-color: transparent;
    border-bottom: 1px solid var(--border-secondary);
  }

  .search-input {
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    -moz-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    width: 10rem;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    padding: 1.5rem 0.75rem calc(0.5rem - 2px);
    outline: none;
    border: 1px solid var(--border-primary);
    -webkit-border-radius: 0.25rem;
    -moz-border-radius: 0.25rem;
    border-radius: 0.25rem;
  }

  .search-label {
    position: absolute;
    top: 50%;
    left: 1.5rem;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 1rem;
    -webkit-transition:
            transform 0.3s,
            top 0.3s,
            font-size 0.3s;
    -o-transition:
            transform 0.3s,
            top 0.3s,
            font-size 0.3s;
    -moz-transition:
            transform 0.3s,
            top 0.3s,
            font-size 0.3s;
    transition:
            transform 0.3s,
            top 0.3s,
            font-size 0.3s;
  }

  .search-label.move {
    top: 1rem;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    font-size: 0.75rem;
  }
</style>

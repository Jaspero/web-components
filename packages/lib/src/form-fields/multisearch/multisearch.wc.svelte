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
  import { clickOutside } from '../../utils/click-outside';
  import { createEventDispatcher } from 'svelte';
  import type SearchService from '../../types/search.service';
  import './multisearch.wc.pcss';
  import ArrowRotate from '../../icons/arrow-rotate.svelte';
  import checkmarkIcon from '../../icons/checkmark.svg?raw';

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

  export let wording = {
    LOADING: 'Loading...'
  };
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
  export const getValue = () =>
    singleSelect
      ? options.find((el) => el.selected)?.value
      : options.filter((el) => el.selected).map((el) => el.value);
  export let service: SearchService;
  export let validationMessages: {
    required?: string;
    minselects?: string;
    maxselects?: string;
  } = {};
  export let requiredValidationMessage: string;
  export let minselectsValidationMessage: string;
  export let maxselectsValidationMessage: string;
  export let singleSelect = false;
  export let defaultSearch = false;
  export let defaultShow = 5;
  let numberOfSelected: number = 0;

  let isTabbing = false; // Variable to track if the user is tabbing
  let open = false;
  let bindingElement: HTMLButtonElement;
  let menuStyle: string;
  let optionElements: HTMLButtonElement[] = []; // Array to store references to option buttons
  let searchTerm = ''; // focus search term
  let searchTimeout: any; // focus search timeout
  let displayValue: string[];
  let searchFocused = false;

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
      singleSelect
        ? options.find((el) => el.selected)?.value
        : options.filter((el) => el.selected).map((el) => el.value)
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

  async function handleDefaultSearch() {
    options = options.filter((el) => el.selected);
    numberOfSelected = options.length;
    loadingSearch = true;
    const searchResults = await service.search('');
    options = [
      ...options,
      ...searchResults.map((el) => {
        el.selected = false;
        return el;
      })
    ] as any;

    options = options.slice(0, numberOfSelected + Math.max(0, defaultShow - numberOfSelected));
    loadingSearch = false;
  }

  function toggleMenu(event?: MouseEvent) {
    if (event?.target?.closest('.menu')) {
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
        if (isTabbing && bindingElement.nextElementSibling instanceof HTMLButtonElement) {
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
    if (searchFocused) {
      return;
    }

    const currentIndex = optionElements.findIndex((el) => el === document.activeElement);

    let nextIndex: number;

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

  async function loadValues(value: string) {
    valueLoad = true;
    const values = Array.isArray(value) ? value : value.split(',');
    await Promise.all(
      values.map(async (el) => {
        let single;

        if (service.getSingle) {
          const res = await service.getSingle(el);

          if (res) {
            single = await service.getSingle(el);
            single.selected = true;
          } else {
            single = { value: el, selected: true };
          }
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
</script>

{#if label && labelType == 'outside'}
  <div class="jp-multisearch-label">
    {@html label}
  </div>
{/if}
<div class="jp-multisearch-wrapper" class:jp-multisearch-has-hint={hint}>
  <input
    class="jp-multisearch-hidden-input"
    tabindex="-1"
    bind:value={internalValue}
    {id}
    {name}
    {required}
  />

  <button
    type="button"
    class="jp-multisearch-select"
    class:jp-multisearch-select-toggled={open}
    bind:this={bindingElement}
    disabled={disabled || valueLoad}
    on:click|preventDefault={toggleMenu}
    on:click={() => {
      if (defaultSearch && !loadingSearch) handleDefaultSearch();
    }}
    on:keydown={handleKeydown}
  >
    {#if valueLoad}
      <span class="jp-multisearch-select-label"> {wording.LOADING} </span>
    {:else if label && labelType == 'inside'}
      <span
        class="jp-multisearch-select-label"
        class:jp-multisearch-select-label-move={internalValue || open}
      >
        {@html label}
      </span>
    {/if}

    <span
      class={`jp-multisearch-select-option ${labelType == 'outside' || !label ? '' : 'jp-multisearch-select-option-padding'}`}
    >
      {displayValue || ''}
    </span>

    <span
      class={`jp-multisearch-select-option ${labelType == 'outside' || !label ? '' : 'jp-multisearch-select-option-padding'}`}
    >
      {displayValue || ''}
    </span>

    <ArrowRotate {open} />
  </button>

  {#if hint}
    <span class="jp-multisearch-select-hint">
      {@html hint}
    </span>
  {/if}

  {#if open}
    <div class="jp-multisearch-overlay">
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <div
        class="jp-multisearch-menu"
        use:clickOutside
        on:click_outside={() => (open = false)}
        on:keydown={handleKeydown}
        style={menuStyle}
        role="dialog"
      >
        {#if service.search}
          <div class="jp-multisearch-search-field">
            <span
              class="jp-multisearch-search-label"
              class:jp-multisearch-search-label-move={searchFocused || searchValue}>Search</span
            >
            <input
              name="search"
              type="text"
              class="jp-multisearch-search-input"
              bind:value={searchValue}
              on:input={() => {
                if (!loadingSearch && (searchValue != '' || !defaultSearch)) handleSearch();
                if (!loadingSearch && searchValue == '' && defaultSearch) handleDefaultSearch();
              }}
              on:focus={() => (searchFocused = true)}
              on:blur={() => (searchFocused = false)}
            />
          </div>
        {/if}
        <div class="jp-multisearch-menu-buttons">
          {#each options as option, index (option)}
            <button
              type="button"
              class="jp-multisearch-menu-button"
              class:jp-multisearch-menu-button-selected={option.selected}
              bind:this={optionElements[index]}
              disabled={option.disabled}
              on:click|preventDefault={() => {
                if (singleSelect) {
                  options = options.map((opt) => {
                    opt.selected = opt === option;
                    return opt;
                  });
                  open = false;
                } else {
                  option.selected = !option.selected;
                }
              }}
            >
              <span>{option.label || option.value}</span>

              {#if option.selected}
                {@html checkmarkIcon}
              {/if}
            </button>
          {/each}
          {#if loadingSearch}
            <span style="display: block; padding: 0.75rem; text-align: center;">Loading...</span>
          {/if}
        </div>
        {#if service.loadMore && !loadingSearch}
          <div class="jp-multisearch-loadmore">
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
              <button type="button" disabled>{wording.LOADING}</button>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>

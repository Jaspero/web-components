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

  export let attachedInternals: ElementInternals;
  export let options: Array<{label?: string, value: string, disabled?: boolean}> | string = [];
  export let disabled: boolean = false;
  export let required: boolean = false;
  export let hint: string = '';
  export let value: string = '';
  export let id: string = '';
  export let name: string = '';
  export let label = 'Label';
  export const getValue = () => value;

  let isTabbing = false;  // Variable to track if the user is tabbing
  let open = false;
  let bindingElement;
  let menuStyle;
  let optionElements = [];  // Array to store references to option buttons
  let searchTerm = '';
  let searchTimeout;
  let selected;

  const dispatch = createEventDispatcher();

  $: {
    attachedInternals.checkValidity();
    dispatch('value', value);
  }

  function toggleMenu() {
    const rect = bindingElement.getBoundingClientRect();
    const availableSpaceBelow = window.innerHeight - rect.bottom;
    const dropdownHeight = 300;

    let style: string = '';
    if (availableSpaceBelow < dropdownHeight) {
      style = `
            min-width: ${rect.width}px;
            bottom: ${window.innerHeight - rect.top}px;
            left: ${rect.left}px;
        `;
    } else {
      style = `
            min-width: ${rect.width}px;
            top: ${rect.bottom}px;
            left: ${rect.left}px;
        `;
    }

    menuStyle = style;
    open = !open;

    if (open) {
      setTimeout(() => {
        // Find the first non-disabled option
        const firstEnabledOptionIndex = options.findIndex(option => !option.disabled);
        if (firstEnabledOptionIndex !== -1) {
          optionElements[firstEnabledOptionIndex].focus();
        }
      }, 10); // A short delay, 10ms
    }

    if (!open) { // If the menu is being closed
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
    return currentIndex;  // Return current index if no focusable option is found in the desired direction
  }

  function handleKeydown(event: KeyboardEvent) {
    const currentIndex = optionElements.findIndex(el => el === document.activeElement);
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
        const firstEnabledOptionIndex = options.findIndex(option => !option.disabled);

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
        const lastEnabledOptionIndex = options.slice().reverse().findIndex(option => !option.disabled);

        // Convert the reversed index back to the original array's indexing
        const actualIndex = lastEnabledOptionIndex !== -1 ? options.length - 1 - lastEnabledOptionIndex : -1;

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
        event.preventDefault();  // Prevent default tabbing behavior
        isTabbing = true;

        if (event.shiftKey) {  // Shift + Tab pressed
          nextIndex = getAdjacentFocusableIndex(currentIndex, 'previous');
          if (currentIndex === nextIndex) {
            // Close the menu and focus the bindingElement if we're at the first non-disabled option
            toggleMenu();
            bindingElement.focus();
            return;  // Early exit
          }
        } else {
          nextIndex = getAdjacentFocusableIndex(currentIndex, 'next');
          if (currentIndex === nextIndex) {
            // Close the menu and focus the bindingElement if we're at the last non-disabled option
            toggleMenu();
            bindingElement.focus();
            return;  // Early exit
          }
        }

        optionElements[nextIndex].focus();
      }

      // Handle alphanumeric keys
      if (/^[a-z\d]$/i.test(event.key)) {
        clearTimeout(searchTimeout);

        searchTerm += event.key;

        const matchingIndex = options.findIndex(option =>
                option.toLowerCase().includes(searchTerm.toLowerCase())
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

  $: if (open) {
    document.documentElement.style.overflowY = 'hidden';
  } else {
    document.documentElement.style.overflowY = '';
  }

  onMount(() => {
    if(typeof options == 'string') options = JSON.parse(options)
    if(value){
      options.forEach(el => {
        if(el.value == value){
          selected = el.label ? el.label : el.value
        }
      })
    }
  })
</script>

<div class:has-hint={hint}>
  <input bind:value={value} {id} {name} {required} hidden>

  <button class="select"
          class:toggled={open}
          bind:this={bindingElement}
          {disabled}
          on:click|preventDefault={toggleMenu}
          on:keydown={handleKeydown}>
    <span class="select-label" class:move={value || open}>
      { label || 'Select an option'}
    </span>

    <span class="select-option">
      {selected || ''}
    </span>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="select-arrow" class:rotate={open}>
      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.-->
      <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
    </svg>
  </button>

  {#if hint}
        <span class="select-hint">
            {@html hint}
        </span>
  {/if}
</div>

{#if open}
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div class="overlay" on:click={toggleMenu} on:keydown={handleKeydown} tabindex="-1" role="dialog">
    <div class="menu" style={menuStyle}>
      {#each options as option, index (option)}
        <button class="menu-button"
                class:selected={value == option.value}
                bind:this={optionElements[index]}
                disabled={option.disabled}
                on:click|preventDefault={() => {value = option.value; selected = option.label ? option.label : option.value}}>
          <span>{option.label ? option.label : option.value}</span>

          {#if value == option.value}
            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 448 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
            </svg>
          {/if}
        </button>
      {/each}
    </div>
  </div>
{/if}

<style>
  .has-hint {
    position: relative;
    margin-bottom: 1.25rem;
  }



  /* Overlay */
  .overlay {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
    padding: 0 .75rem;
    gap: .75rem;
    background-color: var(--background-primary);
    border: 1px solid var(--border-primary);
    -webkit-border-radius: .25rem;
    -moz-border-radius: .25rem;
    border-radius: .25rem;
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
    opacity: .5;
  }

  .select-label {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: transform .3s, top .3s, font-size .3s;
    -o-transition: transform .3s, top .3s, font-size .3s;
    -moz-transition: transform .3s, top .3s, font-size .3s;
    -webkit-transition: top .3s, font-size .3s, -webkit-transform .3s;
    transition: top .3s, font-size .3s, -webkit-transform .3s;
    -o-transition: top .3s, font-size .3s, -o-transform .3s;
    -moz-transition: transform .3s, top .3s, font-size .3s, -moz-transform .3s;
    transition: transform .3s, top .3s, font-size .3s;
    transition: transform .3s, top .3s, font-size .3s, -webkit-transform .3s, -moz-transform .3s, -o-transform .3s;
  }

  .select-label.move {
    top: .25rem;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    font-size: .75rem;
  }

  input:required + .select .select-label::after {
    content: ' *';
  }

  input:required:invalid + .select {
    border-color: var(--danger-color);
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
    padding-top: 1rem;
  }

  .select-arrow {
    width: 1rem;
    height: 1rem;
    min-width: 1rem;
    min-height: 1rem;
    -webkit-transition: transform .3s;
    -o-transition: transform .3s;
    -moz-transition: transform .3s;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    -o-transition: -o-transform .3s;
    -moz-transition: transform .3s, -moz-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s, -moz-transform .3s, -o-transform .3s;
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
    font-size: .75rem;
    padding: 0 .75rem;
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
    max-height: 300px;
    overflow-y: auto;
    -webkit-border-bottom-left-radius: .25rem;
    -moz-border-radius-bottomleft: .25rem;
    border-bottom-left-radius: .25rem;
    -webkit-border-bottom-right-radius: .25rem;
    -moz-border-radius-bottomright: .25rem;
    border-bottom-right-radius: .25rem;
    -webkit-box-shadow: 0 6px 9px rgba(0,0,0,.16);
    -moz-box-shadow: 0 6px 9px rgba(0,0,0,.16);
    box-shadow: 0 6px 9px rgba(0,0,0,.16);
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
    gap: .75rem;
    padding: .75rem;
    text-align: left;
    outline: none;
    -webkit-transition: background-color .3s, color .3s, fill .3s;
    -o-transition: background-color .3s, color .3s, fill .3s;
    -moz-transition: background-color .3s, color .3s, fill .3s;
    transition: background-color .3s, color .3s, fill .3s;
  }

  .menu-button.selected {
    background-color: var(--background-tertiary);
    color: var(--primary-color);
    fill: var(--primary-color);
  }

  .menu-button:disabled {
    opacity: .33;
  }

  .menu-button:not(:disabled):hover, .menu-button:focus {
    background-color: var(--background-secondary);
  }
</style>
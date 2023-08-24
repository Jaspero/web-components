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
  import { createEventDispatcher, onMount } from 'svelte';

  export let attachedInternals: ElementInternals;
  export let minSelects: number = 0;
  export let maxSelects: number | null = null;
  export let options: Array<{ label: string; selected: boolean; disabled?: boolean }> | string = [];
  export let disabled: boolean = false;
  export let required: boolean = false;
  export let value: string = '';
  export let id: string | null = null;
  export let name: string | null = null;
  export let label = 'Label';
  export const getValue = () => options.filter((el) => el.selected).map((el) => el.label);

  let open = false;
  let bindingElement;
  let menuStyle;
  let optionElements = [];  // Array to store references to option buttons
  let searchTerm = '';
  let searchTimeout;
  const dispatch = createEventDispatcher();

  $: if(Array.isArray(options)) {
    const selects = options.filter((el) => el.selected).length
    if (selects < minSelects) {
      attachedInternals.setValidity({ customError: true }, 'Below limit checks.');
    } else if (selects > maxSelects) {
      attachedInternals.setValidity({ customError: true }, 'Above limit checks.');
    } else {
      attachedInternals.setValidity({});
    }
    attachedInternals.checkValidity();

    value = options
      .filter((el) => el.selected)
      .map((el) => el.label)
      .join(',');

    dispatch(
      'value',
      options.filter((el) => el.selected).map((el) => el.label)
    );
  }

  function toggleMenu(event) {
    if (event && event.target && event.target.closest('.menu')) {
      return;
    }

    const rect = bindingElement.getBoundingClientRect();
    const availableSpaceBelow = window.innerHeight - rect.bottom;
    const dropdownHeight = 160;

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
        const indexToFocus = value ? options.indexOf(value) : 0;
        optionElements[indexToFocus].focus();
      }, 1); // A short delay, 10ms
    }

    if (!open) { // If the menu is being closed
      setTimeout(() => {
        bindingElement.focus();
      }, 10);
    }
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

      if (isHome) {
        event.preventDefault();
        optionElements[0].focus();
        return;
      }

      if (isEnd) {
        event.preventDefault();
        optionElements[options.length - 1].focus();
        return;
      }

      // Original ArrowUp and ArrowDown handling
      if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
        event.preventDefault(); // Prevent default scroll behavior

        if (event.key === 'ArrowDown') {
          if (currentIndex < options.length - 1) {
            nextIndex = currentIndex + 1;
          } else {
            nextIndex = currentIndex;
          }
        } else {
          if (currentIndex > 0) {
            nextIndex = currentIndex - 1;
          } else {
            nextIndex = currentIndex;
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

  onMount(() => {
    if(typeof options == 'string') options = JSON.parse(options) 
    if (!maxSelects) {
      maxSelects = options.length;
    }
  });
</script>

<div>
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
      {value || ''}
    </span>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="select-arrow" class:rotate={open}>
      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.-->
      <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
    </svg>
  </button>
</div>

{#if open}
  <div class="overlay" on:click|stopPropagation={toggleMenu} on:keydown={handleKeydown} tabindex="-1" role="dialog">
    <div class="menu" style={menuStyle}>
      {#each options as option, index (option)}
        <button class="menu-button"
                class:selected={option.selected}
                bind:this={optionElements[index]}
                on:click|preventDefault={() => option.selected = !option.selected}>
          <span>{option.label}</span>

          {#if option.selected}
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

  .select:disabled .select-label, .select:disabled .select-arrow {
    opacity: .33;
  }

  .select-label {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: .3s;
    -o-transition: .3s;
    -moz-transition: .3s;
    transition: .3s;
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
    -webkit-transition: .3s;
    -o-transition: .3s;
    -moz-transition: .3s;
    transition: .3s;
  }

  .select-arrow.rotate {
    -webkit-transform: rotate(-180deg);
    -moz-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
    -o-transform: rotate(-180deg);
    transform: rotate(-180deg);
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
    max-height: 20rem;
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
    -webkit-transition: .3s;
    -o-transition: .3s;
    -moz-transition: .3s;
    transition: .3s;
  }

  .menu-button.selected  {
    background-color: var(--background-tertiary);
    color: var(--primary-color);
    fill: var(--primary-color);
  }

  .menu-button:hover, .menu-button:focus {
    background-color: var(--background-secondary);
  }
</style>
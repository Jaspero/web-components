<svelte:options
        customElement={{
    tag: 'jp-testing',
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
    export let attachedInternals: ElementInternals;
    export let options

    let open = false;
    let bindingElement;
    let menuStyle;
    let selectedOption;
    let optionElements = [];  // Array to store references to option buttons
    let searchTerm = '';
    let searchTimeout;

    function toggleMenu() {
        open = !open;

        if (open) {
            setTimeout(() => {
                const indexToFocus = selectedOption ? options.indexOf(selectedOption) : 0;
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
                    nextIndex = (currentIndex + 1) % options.length;
                } else {  // ArrowUp
                    nextIndex = (currentIndex - 1 + options.length) % options.length;
                }

                optionElements[nextIndex].focus();
            }

            // Handle alphanumeric keys
            if (/^[a-z\d]$/i.test(event.key)) {
                clearTimeout(searchTimeout);

                searchTerm += event.key;

                const matchingIndex = options.findIndex(option =>
                    option.toLowerCase().startsWith(searchTerm.toLowerCase())
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
</script>

<div>
    <button class=""
            bind:this={bindingElement}
            on:click={toggleMenu}
            on:keydown={handleKeydown}>
        {selectedOption || 'Select an option'}

        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.-->
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
        </svg>
    </button>
</div>

{#if open}
    <div class="overlay" on:click={toggleMenu} on:keydown={handleKeydown} tabindex="-1">
        <div class="menu" style={menuStyle}>
            {#each options as option, index (option)}
                <button bind:this={optionElements[index]} on:click={() => selectedOption = option}>
                    {option}
                </button>
            {/each}
        </div>
    </div>
{/if}

<style>
    .overlay {
        z-index: 100;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .menu {
        display: flex;
        flex-direction: column;
    }
</style>
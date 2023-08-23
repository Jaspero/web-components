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
    let selectedOption;
    let optionElements = [];  // Array to store references to option buttons

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
    }
</script>

<div>
    <button class=""
            bind:this={bindingElement}
            on:click={toggleMenu}
            on:keydown={handleKeydown}>
        {selectedOption || 'Select an option'}
        &darr;
    </button>
</div>

{#if open}
    <div class="overlay" on:click={toggleMenu} on:keydown={handleKeydown} tabindex="-1">
        <div class="menu">
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

    .menu button:focus {
        background-color: red;
    }
</style>
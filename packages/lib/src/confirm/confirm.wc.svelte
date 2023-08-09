<script>
    import { clickOutside } from '../clickOutside';

    export let open = false;
</script>

{#if open}
    <div class="overlay">
        <div class="dialog" use:clickOutside on:click_outside={() => open = false}>
            <div class="flex justify-between items-center gap-4 border-b p-4">
                <h1>Confirm</h1>

                <button on:click={() => open = false} class="w-6 h-6">
                <span class="material-symbols-outlined">
                close
                </span>
                </button>
            </div>

            <p class="p-4" style="max-width: 32ch;">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>

            <div class="flex border-t divide-x">
                <button class="flex-1 p-4 font-bold text-blue-500" on:click={() => open = false}>Cancel</button>
                <button class="flex-1 p-4 font-bold text-red-500">Delete it</button>
            </div>
        </div>
    </div>
{/if}

<style>
    .overlay {
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,.2);
    }

    .dialog {
        min-width: 300px;
        background-color: var(--fg);
        box-shadow: 0 3px 6px rgba(0,0,0,.16);
        border-radius: .5rem;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: bold;
    }
</style>
<script>
    export let alert = false;
    export let title = '';
    export let message = '';
    export let state = 'error';
</script>

{#if alert}
    <div class="alert alert-{state}">
        <div class="container flex flex-col gap-2 p-4">
            <div class="flex justify-between items-center gap-4 min-w-[8rem]">
                <div class="flex gap-2 text-2xl">
                    {#if state === 'error'}
                        ⚠️
                    {:else if state === 'success'}
                        ✅
                    {/if}
                    {#if title}
                        <h1 class="font-bold">
                            {@html title}
                        </h1>
                    {/if}
                </div>
                <button class="w-6 h-6" on:click={() => alert = false}>
                    <span class="material-symbols-outlined">
                    close
                    </span>
                </button>
            </div>
            {#if message}
                <p class="text-sm">
                    {@html message}
                </p>
            {/if}
        </div>
    </div>
{/if}

<style>
    .alert {
        position: fixed;
        top: 100px;
        right: 1rem;
        background-color: white;
        box-shadow: 0 3px 6px rgba(0,0,0,.16);
        border-radius: .5rem;
    }

    .alert-error {
        border-left: 4px solid var(--error);
    }

    .alert-success {
        border-left: 4px solid var(--success);
    }
</style>
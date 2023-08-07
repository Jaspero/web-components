<script>
    import { clickOutside } from '../clickOutside';

    export let label = '';

    let file = '';
    let filePreview = false;

    function handleFileChange(event) {
        if (event.target.files && event.target.files.length > 0) {
            file = event.target.files[0];
            file.preview = URL.createObjectURL(file);
        }
    }
</script>

<div class="flex flex-col gap-1 font-bold">
    {#if label}
        {label}
    {/if}

    <span class="flex items-center justify-between relative border h-10 rounded px-2 font-normal hover:border-black/50 focus:border-orange focus:outline-2 focus:outline-orange focus:outline-offset-4 focus:outline-dashed">
        <span class="-z-10 absolute h-full flex items-center">
        {#if file}
            {file.name}
        {:else}
            Click to upload an image
        {/if}
        </span>

        <input type="file" accept="image/*" on:change={handleFileChange} class="flex-1 h-full opacity-0 cursor-pointer" />

        {#if file}
            <span class="flex h-full">
                {#if filePreview}
                    <button class="w-10 h-full flex justify-center items-center hover:bg-black/10 transition-colors" on:click={() => filePreview = false}>
                        <span class="material-symbols-outlined">
                        visibility_off
                        </span>
                    </button>
                    {:else}
                    <button class="w-10 h-full flex justify-center items-center hover:bg-black/10 transition-colors" on:click={() => filePreview = true}>
                        <span class="material-symbols-outlined">
                        visibility
                        </span>
                    </button>
                {/if}

                <button class="w-10 h-full flex justify-center items-center hover:bg-black/10 transition-colors" on:click={() => file = ''}>
                    <span class="material-symbols-outlined">
                    cancel
                    </span>
                </button>
            </span>
        {/if}

        {#if file && filePreview}
            <img src={file.preview} alt="Image Preview"
                 class="absolute top-full right-0 max-w-xs shadow-xl rounded"
                 use:clickOutside on:click_outside={() => filePreview = false} />
        {/if}
    </span>
</div>

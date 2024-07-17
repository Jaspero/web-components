
<svelte:options
  customElement={{
    tag: 'jp-image-gallery',
    shadow: 'none'
  }}
/>

<script lang="ts">
    import { onMount, onDestroy, tick } from 'svelte';

    export let images = [];
    export let enablePagination = false;
    export let sliderBar = false;
    export let imageCount = false;
    export let autoSlide = false;
    export let interval = 3000;

    let container;
    let columns = [];
    let sizes = [];
    let focused = false;
    let currentIndex = 0;
    let canNavigate = true;
    let intervalFunction;
    let scrollPosition;

    let gapX = 10;
    let gapY = 10;

    onMount(() => {
        if (typeof images === 'string') {
            images = JSON.parse(images);
        }
        checkImagesLoaded();
        if (autoSlide) {
            intervalFunction = setInterval(nextImage, interval);
        }
        window.addEventListener('keydown', keydownFunction);
    });

    onDestroy(() => {
        clearInterval(intervalFunction);
    });

    async function checkImagesLoaded() {
        const imageElements = Array.from(container.getElementsByTagName('img'));
        const imageLoadPromises = imageElements.map(img => {
            if (img.complete) {
                return Promise.resolve();
            } else {
                return new Promise(resolve => {
                    img.onload = resolve;
                    img.onerror = resolve;
                });
            }
        });

        await Promise.all(imageLoadPromises);
        layout();
    }

    function layout() {
        if (!container || !container.offsetParent) return;

        sizes = [];
        columns = [];
        const containerWidth = container.clientWidth;

        const colCount = 3;
        const colWidth = (containerWidth - (colCount - 1) * gapX) / colCount;

        for (let i = 0; i < colCount; i++) {
            columns[i] = 0;
        }

        Array.from(container.children).forEach((child, index) => {
            child.style.width = `${colWidth}px`;
            sizes[index] = child.clientHeight;

            const col = columns.indexOf(Math.min(...columns));
            const x = col * (colWidth + gapX);
            const y = columns[col];

            child.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            columns[col] += sizes[index] + gapY;
        });

        container.style.height = `${Math.max(...columns)}px`;
    }

    function nextImage() {
        if (!canNavigate) return;
        canNavigate = false;

        currentIndex = (currentIndex + 1) % images.length;

        setTimeout(() => {
            canNavigate = true;
        }, 300);
    }

    function prevImage() {
        if (!canNavigate) return;
        canNavigate = false;

        currentIndex = (currentIndex - 1 + images.length) % images.length;

        setTimeout(() => {
            canNavigate = true;
        }, 300);
    }

    async function openCarousel(index) {
        scrollPosition = window.scrollY;
        currentIndex = index;
        focused = true;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
    }

    async function closeCarousel() {
        focused = false;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollPosition);
        await tick();
        layout();
    }

    async function keydownFunction(e){
        if(e.key === "Escape"){
            closeCarousel();
        }
        else if(e.key === "ArrowLeft"){
            prevImage();
        }
        else if(e.key === "ArrowRight"){
            nextImage();
        }
    }
</script>


{#if !focused}
    <div class="gallery" bind:this={container}>
        {#each images as image, index}
            <div class="image-container">
                <img class="image" src={image.src} alt={image.alt} on:click={() => openCarousel(index)} />
            </div>
        {/each}
    </div>
{:else}
    <div class="slider" on:keydown={(e) => keydownFunction(e)}>
        <div class="slider-container" on:click|stopPropagation>
            <div class="slider-images" style="transform: translateX(-{currentIndex * 100}%);">
                {#each images as image}
                    <img class="slider-image" src={image.src} alt={image.alt} />
                {/each}
            </div>
            <button type="button" class="prev" on:click={prevImage}>
                &larr;
            </button>
            <button type="button" class="next" on:click={nextImage}>
                &rarr;
            </button>
            <button type="button" class="close" on:click={closeCarousel}>
                &times;
            </button>
        </div>
        {#if sliderBar}
            <div class="slider-bar">
                <div class="slider-bar-bg" style="width: {(currentIndex + 1) / images.length * 100}%;"></div>
            </div>
        {/if}
        {#if enablePagination}
            <div class="pagination">
                {#each images as _, index}
                    <button
                        type="button"
                        on:click={() => currentIndex = index}
                        class="pagination-button"
                        class:active={currentIndex === index}
                    ></button>
                {/each}
            </div>
        {/if}
        {#if imageCount}
        <div class="imageCount">
            <p>{currentIndex + 1} / {images.length}</p>
        </div>
    {/if}
    </div>
{/if}


<style>
    .gallery {
        max-width: 80%;
        margin: 0 auto;
        position: relative;
    }

    .image-container {
        position: absolute;
    }

    .image {
        width: 100%;
        height: auto;
        cursor: pointer;
        display: block;
    }

    .image:hover {
        transform: scale(1.002);
    }

    .slider {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        overflow: auto;
    }

    .slider-container {
        position: relative;
        width: 100%;
        max-height: 100%;
        overflow: hidden;
    }

    .slider-images {
        display: flex;
        transition: transform 0.3s;
        width: 100%;
    }

    .slider-image {
        flex-shrink: 0;
        width: 100%;
        max-height: 90vh;
        object-fit: contain;
    }

    .prev,
    .next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        cursor: pointer;
        transition: 0.3s;
    }

    .prev:hover,
    .next:hover {
        background-color: rgba(0, 0, 0, 0.75);
    }

    .prev {
        left: 10px;
    }

    .next {
        right: 10px;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
    }

    .slider-bar {
        position: relative;
        width: 100%;
        height: 4px;
        background-color: gray;
        margin-top: 1rem;
    }

    .slider-bar-bg {
        position: absolute;
        top: 0;
        left: 0;
        height: 4px;
        background-color: white;
    }

    .pagination {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 2rem;
  }

  .pagination-button {
    position: relative;
    width: 0.875rem;
    height: 0.875rem;
    border: 2px solid var(--border-primary);
    border-radius: 50%;
    transition: 0.3s;
  }

  .pagination-button:hover {
    background-color: var(--background-secondary);
  }

  .pagination-button.active {
    border-color: var(--primary-color);
    background-color: var(--primary-color);
  }

  .imageCount p{
    color: rgba(227, 214, 214, 0.887);
    margin-top: 100%;
    margin-bottom: 100%;
}

</style>
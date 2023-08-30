<svelte:options
        customElement={{
            tag: 'jp-image-gallery',
            shadow: 'none'
        }}
/>

<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    export let images = [];
    export let imagesPerSlide = 1;
    export let enablePagination = false;
    export let sliderBar = false;
    export let autoSlide = false;
    export let interval = 3000;

    let currentIndex = 0;
    let canNavigate = true;
    let intervalFunction;

    function nextImage() {
        if (!canNavigate) return;
        canNavigate = false;

        let potentialNextIndex = currentIndex + imagesPerSlide;

        // Check how many images will be left if we advance by imagesPerSlide
        let remainingImages = images.length - potentialNextIndex;

        if (remainingImages < imagesPerSlide && remainingImages !== 0) {
            // Adjust the currentIndex to show the last set of images
            currentIndex = images.length - imagesPerSlide;
        } else if (remainingImages === 0) {
            currentIndex = 0;  // Loop back to the start
        } else if (imagesPerSlide % 1 !== 0) {
            currentIndex = potentialNextIndex - (imagesPerSlide - 1);
        } else {
            currentIndex = potentialNextIndex;
        }

        setTimeout(() => {
            canNavigate = true;
        }, 300);
    }

    function prevImage() {
        if (!canNavigate) return;
        canNavigate = false;

        if (currentIndex === imagesPerSlide) {
            currentIndex = 0; // Show the first two images
        } else if (currentIndex <= 0) {
            currentIndex = images.length - imagesPerSlide; // Show the last two images
        } else {
            currentIndex -= imagesPerSlide; // Normal behavior
        }

        setTimeout(() => {
            canNavigate = true;
        }, 300);
    }

    onMount(() => {
        if (autoSlide) {
            intervalFunction = setInterval(nextImage, interval);
        }
    });

    onDestroy(() => {
        clearInterval(intervalFunction);
    });

    $: if (!autoSlide) {
        clearInterval(intervalFunction);
    } else {
        intervalFunction = setInterval(nextImage, interval);
    }
</script>

<div class="flex flex-col slider">
    <div class="slider-container" style="--images-per-slide: {imagesPerSlide};">
        <div class="slider-images" style={`transform: translateX(-${currentIndex * (100 / imagesPerSlide)}%);`}>
            {#each images as image}
                <img class="slider-image" src={image.src} alt={image.alt} />
            {/each}
        </div>
        <button class="prev" on:click={prevImage}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
        </button>
        <button class="next" on:click={nextImage}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
        </button>
    </div>

    {#if sliderBar}
        <div class="slider-bar">
            <div class="slider-bar-bg" style={`width: calc(calc(${currentIndex} + ${imagesPerSlide}) / ${images.length} * 100%);`}></div>
        </div>
    {/if}

    {#if enablePagination}
        <div class="pagination">
            {#each images as item, index}
                <button on:click={() => currentIndex = index}
                        class="pagination-button"
                        class:active={currentIndex === index}>
                </button>
            {/each}
        </div>
    {/if}
</div>

<style>
    @import 'packages/demo/src/app.postcss';

    .slider {
        --slider-max-width: 600px
    }

    .slider-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        max-width: var(--slider-max-width);
        margin: 0 auto;
    }

    .slider-images {
        display: flex;
        transition: transform 0.3s;
    }

    .slider-image {
        width: calc(100% / var(--images-per-slide));
        flex-shrink: 0;
        object-fit: cover;
    }

    .prev, .next {
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
        fill: white;
        border: none;
        cursor: pointer;
        transition: .3s;
    }

    .prev:hover, .next:hover {
        background-color: rgba(0,0,0,.75);
    }

    .prev {
        left: 10px;
    }

    .next {
        right: 10px;
    }

    .slider-bar {
        position: relative;
        max-width: var(--slider-max-width);
        margin: 0 auto;
        width: 100%;
        height: 4px;
        background-color: var(--border-primary);
    }

    .slider-bar-bg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--primary-color);
        height: 8px;
        transition: .3s;
    }

    .pagination {
        display: flex;
        justify-content: center;
        gap: .75rem;
        margin-top: 2rem;
    }

    .pagination-button {
        position: relative;
        width: .875rem;
        height: .875rem;
        border: 2px solid var(--border-primary);
        border-radius: 50%;
        transition: .3s;
    }

    .pagination-button:hover {
        background-color: var(--background-secondary);
    }

    .pagination-button.active {
        border-color: var(--primary-color);
        background-color: var(--primary-color);
    }
</style>
<svelte:options
        customElement={{
            tag: 'jp-slider',
            shadow: 'none'
        }}
/>

<script lang="ts">
    export let images = [];
    export let imagesPerSlide = 1;
    let currentIndex = 0;
    let canNavigate = true;

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
</script>

<style>
    .slider-container {
        position: relative;
        overflow: hidden;
        max-width: 600px;
        margin: 0 auto;
    }

    .slider-images {
        display: flex;
        transition: transform 0.3s;
    }

    .slider-image {
        width: calc(100% / var(--images-per-slide));
        flex-shrink: 0;
    }

    .prev, .next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        cursor: pointer;
    }

    .prev {
        left: 10px;
    }

    .next {
        right: 10px;
    }
</style>

<div class="slider-container" style="--images-per-slide: {imagesPerSlide};">
    <div class="slider-images" style={`transform: translateX(-${currentIndex * (100 / imagesPerSlide)}%);`}>
        {#each images as image}
            <img class="slider-image" src={image} alt="Slider Image" />
        {/each}
    </div>
    <button class="prev" on:click={prevImage}>&lt;</button>
    <button class="next" on:click={nextImage}>&gt;</button>
</div>
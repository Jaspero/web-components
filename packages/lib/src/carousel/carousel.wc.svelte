<svelte:options
  customElement={{
    tag: 'jp-carousel',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import prevPageIcon from '../../../lib/src/icons/prevPage.svg?raw';
  import nextPageIcon from '../../../lib/src/icons/nextPage.svg?raw';

  export let images: string | any[] = [];
  export let imagesPerSlide = 1;
  export let enablePagination = false;
  export let sliderBar = false;
  export let autoSlide = false;
  export let interval = 3000;

  let currentIndex = 0;
  let canNavigate = true;
  let intervalFunction: string | number | NodeJS.Timeout | undefined;

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
      currentIndex = 0; // Loop back to the start
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
    if (typeof images == 'string') {
      images = JSON.parse(images);
    }
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

<div class="jp-carousel-flex jp-carousel-flex-col jp-carousel-slider">
  <div class="jp-carousel-slider-container" style="--images-per-slide: {imagesPerSlide};">
    <div
      class="jp-carousel-slider-images"
      style={`transform: translateX(-${currentIndex * (100 / imagesPerSlide)}%);`}
    >
      {#each images as image}
        <img class="jp-carousel-slider-image" src={image.src} alt={image.alt} />
      {/each}
    </div>
    <button type="button" class="jp-carousel-prev" on:click={prevImage}>
      {@html prevPageIcon}
    </button>
    <button type="button" class="jp-carousel-next" on:click={nextImage}>
      {@html nextPageIcon}
    </button>
  </div>

  {#if sliderBar}
    <div class="jp-carousel-slider-bar">
      <div
        class="jp-carousel-slider-bar-bg"
        style={`width: calc(calc(${currentIndex} + ${imagesPerSlide}) / ${images.length} * 100%);`}
      ></div>
    </div>
  {/if}

  {#if enablePagination}
    <div class="jp-carousel-pagination">
      {#each images as item, index}
        <button
          type="button"
          on:click={() => (currentIndex = index)}
          class="jp-carousel-pagination-button"
          class:jp-carousel-pagination-button-active={currentIndex === index}
        >
        </button>
      {/each}
    </div>
  {/if}
</div>

<style lang="postcss">
  .jp-carousel {
    &-slider {
      --slider-max-width: 600px;

      &-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        max-width: var(--slider-max-width);
        margin: 0 auto;
      }

      &-images {
        display: flex;
        transition: transform 0.3s;
      }

      &-image {
        width: calc(100% / var(--images-per-slide));
        flex-shrink: 0;
        object-fit: cover;
      }

      &-bar {
        position: relative;
        max-width: var(--slider-max-width);
        margin: 0 auto;
        width: 100%;
        height: 4px;
        background-color: var(--border-primary);

        &-bg {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: var(--primary-color);
          height: 8px;
          transition: 0.3s;
        }
      }
    }

    &-prev,
    &-next {
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
      transition: 0.3s;

      &:hover {
        background-color: rgba(0, 0, 0, 0.75);
      }
    }

    &-prev {
      left: 10px;
    }

    &-next {
      right: 10px;
    }

    &-pagination {
      display: flex;
      justify-content: center;
      gap: 0.75rem;
      margin-top: 2rem;

      &-button {
        position: relative;
        width: 0.875rem;
        height: 0.875rem;
        border: 2px solid var(--border-primary);
        border-radius: 50%;
        transition: 0.3s;

        &:hover {
          background-color: var(--background-secondary);
        }

        &-active {
          border-color: var(--primary-color);
          background-color: var(--primary-color);
        }
      }
    }
  }
</style>

<svelte:options
  customElement={{
    tag: 'jp-image-gallery',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { onDestroy, onMount, tick } from 'svelte';

  export let images: Array<{ src: string; alt: string }> = [];
  export let enablePagination = false;
  export let sliderBar = false;
  export let autoSlide = false;
  export let interval = 3000;
  export let columnCount = 3;
  export let columnCountTable = 2;
  export let columnCountMobile = 1;
  export let gapX = 10;
  export let gapY = 10;
  export let enableGallery = true;

  let container: HTMLDivElement;
  let columns: number[] = [];
  let sizes: number[] = [];
  let focused = false;
  let currentIndex = 0;
  let canNavigate = true;
  let intervalFunction: any;
  let scrollPosition: number;

  $: if (focused) {
    if (autoSlide) {
      intervalFunction = setInterval(nextImage, interval);
    }
  } else {
    if (intervalFunction) {
      clearInterval(intervalFunction);
      intervalFunction = null;
    }
  }

  onMount(() => {
    if (typeof images === 'string') {
      images = JSON.parse(images);
    }

    checkImagesLoaded();
  });

  onDestroy(() => {
    if (intervalFunction) {
      clearInterval(intervalFunction);
    }
  });

  async function keydownFunction(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      closeCarousel();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    }
  }

  async function checkImagesLoaded() {
    const imageElements = Array.from(container.getElementsByTagName('img'));

    await Promise.all(
      imageElements.map((img) => {
        if (img.complete) {
          return Promise.resolve();
        } else {
          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        }
      })
    );

    layout();
  }

  function layout() {
    if (!container || !container.offsetParent) {
      return;
    }

    sizes = [];
    columns = [];
    const containerWidth = container.clientWidth;

    const colCount =
      window.innerWidth < 600
        ? columnCountMobile
        : window.innerWidth < 1024
          ? columnCountTable
          : columnCount;
    const colWidth = (containerWidth - (colCount - 1) * gapX) / colCount;

    for (let i = 0; i < colCount; i++) {
      columns[i] = 0;
    }

    Array.from(container.children).forEach((child: Element, index: number) => {
      (child as HTMLElement).style.width = `${colWidth}px`;
      sizes[index] = child.clientHeight;

      const col = columns.indexOf(Math.min(...columns));
      const x = col * (colWidth + gapX);
      const y = columns[col];

      (child as HTMLElement).style.transform = `translate3d(${x}px, ${y}px, 0)`;
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

  async function openCarousel(index: number) {
    if (!enableGallery) {
      return;
    }

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
</script>

<div class="jp-image-gallery" bind:this={container}>
  {#each images as image, index}
    <div class="jp-image-gallery-container">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <img
        class="jp-image-gallery-image"
        src={image.src}
        alt={image.alt}
        on:click={() => openCarousel(index)}
      />
    </div>
  {/each}
</div>

{#if focused}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="jp-image-gallery-slider" on:click={closeCarousel}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="jp-image-gallery-slider-container" on:click|stopPropagation>
      <div
        class="jp-image-gallery-slider-images"
        style="transform: translateX(-{currentIndex * 100}%);"
      >
        {#each images as image}
          <img class="jp-image-gallery-slider-image" src={image.src} alt={image.alt} />
        {/each}
      </div>
      <button type="button" class="jp-image-gallery-prev" on:click={prevImage}> &larr; </button>
      <button type="button" class="jp-image-gallery-next" on:click={nextImage}> &rarr; </button>
      <button type="button" class="jp-image-gallery-close" on:click={closeCarousel}>
        &times;
      </button>
    </div>
    {#if sliderBar}
      <div class="jp-image-gallery-slider-bar">
        <div
          class="jp-image-gallery-slider-bar-bg"
          style="width: {((currentIndex + 1) / images.length) * 100}%;"
        ></div>
      </div>
    {/if}
    {#if enablePagination}
      <div class="jp-image-gallery-pagination">
        {#each images as _, index}
          <button
            type="button"
            on:click={() => (currentIndex = index)}
            class="jp-image-gallery-pagination-button"
            class:jp-image-gallery-pagination-button-active={currentIndex === index}
          ></button>
        {/each}
      </div>
    {/if}
  </div>
{/if}

<svelte:window on:keydown={keydownFunction} on:resize={layout} />

<style lang="postcss">
  .jp-image-gallery {
    position: relative;

    &-container {
      position: absolute;
    }
    &-image {
      width: 100%;
      height: auto;
      cursor: pointer;
      display: block;

      &:hover {
        transform: scale(1.002);
      }
    }

    &-slider {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      overflow: auto;

      &-container {
        position: relative;
        width: 100%;
        max-height: 100%;
        overflow: hidden;
      }

      &-container {
        position: relative;
        width: 100%;
        max-height: 100%;
        overflow: hidden;
      }

      &-images {
        display: flex;
        transition: transform 0.3s;
        width: 100%;
      }

      &-image {
        flex-shrink: 0;
        width: 100%;
        max-height: 90vh;
        object-fit: contain;
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

    &-close {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      color: white;
      font-size: 2rem;
      cursor: pointer;
    }

    &-slider-bar {
      position: relative;
      width: 100%;
      height: 4px;
      background-color: gray;
      margin-top: 1rem;

      &-bg {
        position: absolute;
        top: 0;
        left: 0;
        height: 4px;
        background-color: white;
      }
    }

    &-pagination {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;

      &-button {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: gray;
        border: none;
        cursor: pointer;
      }
    }
  }
</style>

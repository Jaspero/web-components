<script lang="ts">
  import { onMount } from 'svelte';
  import 'cropperjs/dist/cropper.css';
  import { createEventDispatcher } from 'svelte';
  import { clickOutside } from '../clickOutside';

  export let src, alt;
  export let mandatory = false;
  export let aspectRatio = null;
  export let minCanvasHeight = null;
  export let minContainerHeight = null;
  export let minCanvasWidth = null;
  export let minCropBoxWidth = null;
  export let minContainerWidth = null;
  export let movable = true;
  export let scalable = true;
  export let zoomable = true;
  export let cropBoxMovable = true;
  export let cropBoxResizable = true;

  let croppedCanvas;
  let img, cropper;

  onMount(() => {
    img.addEventListener('load', initCropper);
  });

  const dispatch = createEventDispatcher();

  const returnFileSize = (size) => {
    if (size < 1024) {
      return `${size} bytes`;
    } else if (size >= 1024 && size < 1048576) {
      return `${(size / 1024).toFixed(1)} KB`;
    } else if (size >= 1048576) {
      return `${(size / 1048576).toFixed(1)} MB`;
    }
  };

  function fileToObj(file) {
    return {
      name: file.name,
      size: returnFileSize(file.size),
      file: file,
      saved: false,
      src: croppedCanvas.toDataURL(),
      type: 'image'
    };
  }

  function initCropper() {
    cropper = new Cropper(img, {
      aspectRatio: aspectRatio,
      minCanvasHeight: minCanvasHeight,
      minCropBoxWidth: minCropBoxWidth,
      minContainerHeight: minContainerHeight,
      minCanvasWidth: minCanvasWidth,
      minContainerWidth: minContainerWidth,
      movable: movable,
      scalable: scalable,
      zoomable: zoomable,
      cropBoxMovable: cropBoxMovable,
      cropBoxResizable: cropBoxResizable

    });
  }

  function handleCrop() {
    croppedCanvas = cropper.getCroppedCanvas();
    croppedCanvas.toBlob((blob) => {
      const file = new File([blob], alt, { type: 'image' });
      const objs = fileToObj(file);
      dispatch('croppedImage', { objs });
    });
  }

  function handleCropToFile() {
    croppedCanvas = cropper.getCroppedCanvas();
    croppedCanvas.toBlob((blob) => {
      const file = new File([blob], alt, { type: 'image' });
      dispatch('croppedImageFile', { file });
    });
  }

  function handleExit() {
    dispatch('exitCropper', {});
  }
  export let maxContainerHeight = '',
    maxContainerWidth = '',
    maxImgHeight = '',
    maxImgWidth = '',
    position = '';
</script>

<div
  class="container"
  use:clickOutside
  style={`max-height: ${maxImgHeight}; max-width: ${maxImgWidth}; position: ${position}`}
  on:click_outside={() => {
    handleExit();
  }}
>
  <img
    bind:this={img}
    {src}
    {alt}
    style={`max-height: ${maxContainerHeight}; max-width: ${maxContainerWidth};`}
  />
  <button class="backButton" on:click|preventDefault={handleExit} class:hidden={mandatory}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.5em"
      fill="currentColor"
      class="bi bi-arrow-left-circle"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
      />
    </svg>
  </button>
  <button class="checkButton" class:mandatory on:click={handleCrop} on:click={handleCropToFile}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="bi bi-check-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
      <path
        d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"
      />
    </svg>
  </button>
</div>

<style>
  svg {
    height: 3em;
    width: 3em;
  }

  .backButton {
    position: relative;
    left: 20%;
    max-width: 15%;
  }

  .backButton.hidden {
    display: none;
    visibility: hidden;
  }

  .checkButton {
    position: absolute;
    right: 20%;
    max-width: 15%;
  }

  .checkButton.mandatory {
    position: relative;
    right: 0%;
    display: flex;
    margin-inline: auto;
  }

  img {
    max-width: 500px;
    margin-inline: auto;
    max-height: 300px;
  }

  .container {
    position: relative;
    display: inline-block;
    background-color: #f4f4f4;
    max-width: 500px;
    margin-inline: auto;
    max-height: 300px;
    align-items: center;
    right: 0px;
    left: 0px;
    z-index: 1;
  }
</style>

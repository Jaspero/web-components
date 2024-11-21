<svelte:options
  customElement={{
    tag: 'jp-cropper',
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
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';

  import checkIcon from '../icons/check.svg?raw';
  import backArrowIcon from '../icons/back-arrow.svg?raw';

  export let src, alt: string;
  export let mandatory = false;
  export let aspectRatio: null | number = null;
  export let minCanvasHeight: null | number = null;
  export let minContainerHeight: null | number = null;
  export let minCanvasWidth: null | number = null;
  export let minCropBoxWidth: null | number = null;
  export let minContainerWidth: null = null;
  export let movable = true;
  export let scalable = true;
  export let zoomable = true;
  export let cropBoxMovable = true;
  export let cropBoxResizable = true;
  export let maxContainerHeight = '';
  export let maxContainerWidth = '';
  export let maxImgHeight = '';
  export let maxImgWidth = '';
  export let position = '';

  let modifiedBackArrowIcon = backArrowIcon
    .replace(/width="[^"]*"/, `max-width="1rem"`)
    .replace(/height="[^"]*"/, `max-height="1rem"`)
    .replace(/svg /, `svg transform="scale(1.3)" `);

  let croppedCanvas: {
    toDataURL: () => any;
    toBlob: (arg0: { (blob: any): void; (blob: any): void }) => void;
  };
  let img: HTMLImageElement,
    cropper: { getCroppedCanvas: () => any; element: { cropper: { getCroppedCanvas: () => any } } };

  onMount(() => {
    img.addEventListener('load', initCropper);
  });

  const dispatch = createEventDispatcher();

  const returnFileSize = (size: number) => {
    if (size < 1024) {
      return `${size} bytes`;
    } else if (size >= 1024 && size < 1048576) {
      return `${(size / 1024).toFixed(1)} KB`;
    } else if (size >= 1048576) {
      return `${(size / 1048576).toFixed(1)} MB`;
    }
  };

  function fileToObj(file: File) {
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
    croppedCanvas = cropper.getCroppedCanvas() || cropper.element.cropper.getCroppedCanvas();

    if (croppedCanvas) {
      croppedCanvas.toBlob((blob: BlobPart) => {
        const file = new File([blob], alt, { type: 'image' });
        const objs = fileToObj(file);
        dispatch('croppedImage', { objs });
      });
    } else {
      console.error('Unable to get cropped canvas');
    }
  }
  function handleCropToFile() {
    croppedCanvas = cropper.getCroppedCanvas();
    croppedCanvas.toBlob((blob: BlobPart) => {
      const file = new File([blob], alt, { type: 'image' });
      dispatch('croppedImageFile', { file });
    });
  }

  function handleExit() {
    dispatch('exitCropper', {});
  }
</script>

<div
  class="container"
  style={`max-height: ${maxImgHeight}; max-width: ${maxImgWidth}; position: ${position}`}
>
  <img
    bind:this={img}
    {src}
    {alt}
    style={`max-height: ${maxContainerHeight}; max-width: ${maxContainerWidth};`}
  />
  <button
    class="backButton"
    on:mousedown|preventDefault={handleExit}
    class:hidden={mandatory}
    style="background-color: var(--primary-color); "
  >
    <div class="icon-conteiner">
      {@html modifiedBackArrowIcon}
    </div>
  </button>
  <button
    class="checkButton"
    class:mandatory
    on:mousedown={handleCrop}
    style="background-color: var(--primary-color); color: white;"
  >
    <div class="icon-conteiner">
      {@html checkIcon}
    </div>
  </button>
</div>

<style>
  .icon-conteiner{
    max-width: 16px;
    max-height: 16px;
  }
  .backButton {
    position: relative;
    left: 20%;
    width: 2rem;
    height: 2rem;
    border-color: transparent;
    border-radius: 50%;
    align-items: center;
  }

  .backButton.hidden {
    display: none;
    visibility: hidden;
  }

  .checkButton {
    position: absolute;
    align-items: center;
    border-color: transparent;
    border-radius: 50%;
    right: 20%;
    width: 2rem;
    height: 2rem;
  }

  .checkButton.mandatory {
    position: relative;
    right: 0%;
    color: white;
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
    background-color: var(--file-list-background-color);
    max-width: 100%;
    margin-inline: auto;
    max-height: 100%;
    height: 100%;
    width: 100%;
    align-items: center;
    right: 0px;
    left: 0px;
    z-index: 1;
  }
</style>

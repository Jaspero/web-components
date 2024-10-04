<svelte:options
  customElement={{
    tag: 'jp-file-upload',
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
  import { clickOutside } from '../click-outside';
  import type FileService from '../types/file.service';
  import { createEventDispatcher } from 'svelte';
  import { formatDisplayFileName } from '../utils/fileNameFormatter';
  import folderIcon from '../../../lib/src/icons/folder.svg?raw';
  import eyeIcon from '../../../lib/src/icons/eye.svg?raw';
  import deleteIcon from '../../../lib/src/icons/delete.svg?raw';
  

  export let label = '';
  export let labelType: 'inside' | 'outside' = 'inside';
  export let attachedInternals: ElementInternals;
  export let value = '';
  export let id = '';
  export let name = '';
  export let required = false;
  export let displayFormat = 'snake';
  export let displayFormatFunction: (name: string) => string;


  let previewStyle: string;
  let bindingElement: HTMLDivElement;
  let inputFocused: boolean = false;
  let isLocal = false;
  let img = '';
  let file: any = null;
  let preview = false;
  let hoveringFile = false;
  let internalValue: string;
  let fileEl: HTMLInputElement;
  let displayedFileNameString = (value && formatDisplayFileName(value, displayFormat, displayFormatFunction)) || '';

  const dispatch = createEventDispatcher();

  export let service: FileService;

  export const getValue = () => internalValue;

  $: {
    internalValue = value;
    if (value) {
      checkImage();
    } else {
      img = '';
    }
  }

  $: {
    attachedInternals.checkValidity();
    attachedInternals.setFormValue(internalValue);
    dispatch('value', { internalValue });
  }

  export async function save(id?: string) {
    if (isLocal) {
      try {
        internalValue = await service.uploadFile(file, id);
      } catch (err) {
        console.error(err);
      }
    }
    return internalValue;
  }

  async function handleLocalChange(f) {
    if (service && service.maxSize) {
      if (f.size > service.maxSize) {
        dispatch('rejected', { file: f.name, code: 'maxSize' });
        return;
      }
    }
    isLocal = true;
    file = f;
    internalValue = f.name;
    displayedFileNameString = formatDisplayFileName(internalValue,displayFormat, displayFormatFunction) as string;
    
    if (file['type'].split('/')[0] === 'image') {
      const base64 = (await convertBase64(file)) as string;
      img = base64;
    } else {
      img = '';
    }
  }

  async function handleDrop(e: any) {
    if (e.dataTransfer.files.length) {
      handleLocalChange(e.dataTransfer.files[0]);
    }
    hoveringFile = false;
  }

  async function filePicked(event: any) {
    handleLocalChange(event.target.files[0]);
  }

  async function checkImage() {
    if (!isLocal) {
      const res = await fetch(internalValue);
      const buff = await res.blob();
      if (buff.type.startsWith('image/')) {
        img = internalValue;
      } else {
        img = '';
      }
    }
  }

  function showPreview() {
    const rect = bindingElement.getBoundingClientRect();
    const availableSpaceBelow = window.innerHeight - rect.bottom;
    const dropdownHeight = 300;

    if (availableSpaceBelow < dropdownHeight) {
      previewStyle = `
        width: ${rect.width}px;
        bottom: ${window.innerHeight - rect.top}px;
        left: ${rect.width - 300}px;
      `;
    } else {
      previewStyle = `
        width: ${rect.width}px;
        top: ${rect.bottom}px;
        left: ${rect.width - 300}px;
      `;
    }
    preview = !preview;
  }

  function convertBase64(file: File) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (err) => reject(err);
    });
  }
  $: displayLabel = required ? `${label} *` : label;
</script>

{#if label && labelType == 'outside'}
  <div class="label">
    {@html displayLabel}
  </div>
{/if}
<div>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="field"
    bind:this={bindingElement}
    on:dragover|preventDefault={() => (hoveringFile = true)}
  >
    {#if hoveringFile}
      <div
        class="drop"
        on:dragleave={() => (hoveringFile = false)}
        on:dragend={() => (hoveringFile = false)}
        on:drop|preventDefault={(e) => handleDrop(e)}
      ></div>
    {:else}
      {#if label && labelType == 'inside'}
        <span class="field-label" class:move={inputFocused || internalValue}
          >{@html displayLabel}</span
        >
      {/if}

      <div class="field-icons">
        <label for={name} class="field-icon field-icon-upload">
          <input
            type="file"
            id={name}
            class="field-upload"
            accept={service && service.acceptedFiles}
            bind:this={fileEl}
            on:change={filePicked}
            on:focus={() => (inputFocused = true)}
            on:blur={() => (inputFocused = false)}
          />
          {@html folderIcon}
        </label>

        <div class="field-icon preview-button" class:hidden={!img}>

          <button type="button" on:click|preventDefault={() => showPreview()}>
            {@html eyeIcon}
          </button>
        </div>
        {#if internalValue}
          <div class="field-icon">
            <button
              type="button"
              on:click|preventDefault={() => {
                isLocal = false;
                img = '';
                internalValue = '';
                fileEl.value = '';
              }}
            >
              {@html deleteIcon}
            </button>
          </div>
        {/if}
      </div>

      <span class="field-upload-container">
        <input
          class={`field-input ${labelType == 'outside' || !label ? '' : 'field-input-padding'}`}
          type="text"
          {name}
          {id}
          on:focus={() => (inputFocused = true)}
          on:blur={() => (inputFocused = false)}
          on:change={() => checkImage()}
          bind:value={displayedFileNameString}
          disabled={isLocal}
        />
      </span>
    {/if}
  </div>
</div>

{#if preview}
  <div class="overlay">
    <img
      class="preview"
      style={previewStyle}
      src={img}
      alt="preview"
      use:clickOutside
      on:click_outside={() => (preview = false)}
    />
  </div>
{/if}

<style lang="postcss">
  .field {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
    -moz-box-orient: horizontal;
    -moz-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: left;
    width: 100%;
    height: 3rem;
    padding-right: 0.75rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    gap: 0.75rem;
    background-color: transparent;
    border: 1px solid var(--border-primary);
    -webkit-border-radius: 0.25rem;
    -moz-border-radius: 0.25rem;
    border-radius: 0.25rem;
  }

  .drop {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 2px dashed var(--primary-color);
  }

  .field:focus-within {
    border-color: var(--primary-color);
    -webkit-box-shadow: inset 0 0 0 1px var(--primary-color);
    -moz-box-shadow: inset 0 0 0 1px var(--primary-color);
    box-shadow: inset 0 0 0 1px var(--primary-color);
  }

  .field-label {
    position: absolute;
    top: 50%;
    left: 0.75rem;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 1rem;
    -webkit-transition:
      transform 0.3s,
      top 0.3s,
      font-size 0.3s;
    -o-transition:
      transform 0.3s,
      top 0.3s,
      font-size 0.3s;
    -moz-transition:
      transform 0.3s,
      top 0.3s,
      font-size 0.3s;
    -webkit-transition:
      top 0.3s,
      font-size 0.3s,
      -webkit-transform 0.3s;
    transition:
      top 0.3s,
      font-size 0.3s,
      -webkit-transform 0.3s;
    -o-transition:
      top 0.3s,
      font-size 0.3s,
      -o-transform 0.3s;
    -moz-transition:
      transform 0.3s,
      top 0.3s,
      font-size 0.3s,
      -moz-transform 0.3s;
    transition:
      transform 0.3s,
      top 0.3s,
      font-size 0.3s;
    transition:
      transform 0.3s,
      top 0.3s,
      font-size 0.3s,
      -webkit-transform 0.3s,
      -moz-transform 0.3s,
      -o-transform 0.3s;
  }

  .field-label.move {
    top: 0.25rem;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    font-size: 0.75rem;
  }

  .field-input {
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    -moz-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    width: 10rem;
    height: 100%;
    font-size: 1rem;
    white-space: nowrap;
    background: transparent;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    border: none;
    outline: none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }

  .field-input-padding {
    padding: 1rem 0 0 0;
  }

  .field-upload {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    opacity: 0;
    cursor: pointer;
  }

  .field-upload-container {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 0.75rem;
    height: 100%;
    overflow: hidden;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .field-icons {
    z-index: 1;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 0.375rem;
  }

  .field-icon {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    cursor: pointer;
  }

  .field-icon:hover {
    background: var(--background-tertiary);
  }

  .field-icon.hidden {
    display: none;
  }

  .field-icon-upload {
    position: relative;
    cursor: pointer;
  }

  .field-icon button {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .preview-button {
    position: relative;
  }

  .preview {
    z-index: 1;
    position: absolute;
    max-width: 300px;
    max-height: 300px;
    width: auto;
    height: auto;
    background-color: var(--background-primary);
    -webkit-border-radius: 0.5rem;
    -moz-border-radius: 0.5rem;
    border-radius: 0.5rem;
    -webkit-box-shadow: 0 3px 12px 3px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 3px 12px 3px rgba(0, 0, 0, 0.16);
    box-shadow: 0 3px 12px 3px rgba(0, 0, 0, 0.16);
  }

  .overlay {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
</style>

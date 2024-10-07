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
  let displayedFileNameString =
    (value && formatDisplayFileName(value, displayFormat, displayFormatFunction)) || '';

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
    displayedFileNameString = formatDisplayFileName(
      internalValue,
      displayFormat,
      displayFormatFunction
    ) as string;

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
        top: ${window.scrollY + rect.top}px;
        transform: translateY(-100%);
      `;
    } else {
      previewStyle = `
        width: ${rect.width}px;
        top: ${window.scrollY + rect.bottom}px;
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
        <span class="field-label" class:move={inputFocused || displayedFileNameString}
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
          <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 512 512">
            <path
              d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"
            />
          </svg>
        </label>

        <div class="field-icon preview-button" class:hidden={!img}>
          <button type="button" on:click|preventDefault={() => showPreview()}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 576 512">
              <path
                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
              />
            </svg>
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
                displayedFileNameString = '';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 512 512">
                <path
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                />
              </svg>
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
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    text-align: left;
    width: 100%;
    height: 3rem;
    user-select: none;
    gap: 0.75rem;
    background-color: transparent;
    border: 1px solid var(--border-primary);
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
    box-shadow: inset 0 0 0 1px var(--primary-color);
  }

  .field-label {
    position: absolute;
    top: 50%;
    left: 0.75rem;
    transform: translateY(-50%);
    font-size: 1rem;
    transition:
      transform 0.3s,
      top 0.3s,
      font-size 0.3s;
  }

  .field-label.move {
    top: 0.25rem;
    transform: translateY(0);
    font-size: 0.75rem;
  }

  .field-input {
    flex: auto;
    height: 1rem;
    font-size: 1rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    font-family: serif;
    transform: translateY(0.8rem);
    text-overflow: ellipsis;
    border: none;
    outline: none;
    border-radius: 0.25rem;
    background: transparent;
  }

  .field-input-padding {
    padding: 1.3rem 0.75rem 0.5rem 0;
    transform: translateY(0);
  }

  .field-upload {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
    opacity: 0;
    cursor: pointer;
  }

  .field-upload-container {
    position: relative;
    display: flex;
    padding: 0 0.75rem;
    height: 100%;
    overflow: hidden;
    flex: 1;
  }

  .field-icons {
    z-index: 1;
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.375rem;
  }

  .field-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
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
    display: flex;
    justify-content: center;
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
    left:calc(100vw - 330px);
    width: auto;
    height: auto;
    background-color: var(--background-primary);
    border-radius: 0.5rem;
    box-shadow: 0 3px 12px 3px rgba(0, 0, 0, 0.16);
  }

  .overlay {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
</style>

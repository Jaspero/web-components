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
  import { clickOutside } from '../../click-outside';
  import type FileService from '../../types/file.service';
  import { createEventDispatcher } from 'svelte';
  import { formatDisplayFileName } from '../../utils/fileNameFormatter';
  import './file-upload.wc.pcss';

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
    class="jp-file-upload-field"
    bind:this={bindingElement}
    on:dragover|preventDefault={() => (hoveringFile = true)}
  >
    {#if hoveringFile}
      <div
        class="jp-file-upload-drop"
        on:dragleave={() => (hoveringFile = false)}
        on:dragend={() => (hoveringFile = false)}
        on:drop|preventDefault={(e) => handleDrop(e)}
      ></div>
    {:else}
      {#if label && labelType == 'inside'}
        <span class="jp-file-upload-label" class:jp-file-upload-label-move={inputFocused || displayedFileNameString}
          >{@html displayLabel}</span
        >
      {/if}

      <div class="jp-file-upload-field-icons">
        <label for={name} class="jp-file-upload-field-icon jp-file-upload-field-icon-upload">
          <input
            type="file"
            id={name}
            class="jp-file-upload-field-upload"
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

        <div class="jp-file-upload-field-icon jp-file-upload-field-icon-preview-button" class:jp-file-upload-field-icon-hidden={!img}>
          <button type="button" on:click|preventDefault={() => showPreview()}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 576 512">
              <path
                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
              />
            </svg>
          </button>
        </div>
        {#if internalValue}
          <div class="jp-file-upload-field-icon">
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

      <span class="jp-file-upload-field-upload-container">
        <input
          class={`jp-file-upload-field-input ${labelType == 'outside' || !label ? '' : 'jp-file-upload-field-input-padding'}`}
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
  <div class="jp-file-upload-overlay">
    <img
      class="jp-file-upload-preview"
      style={previewStyle}
      src={img}
      alt="preview"
      use:clickOutside
      on:click_outside={() => (preview = false)}
    />
  </div>
{/if}

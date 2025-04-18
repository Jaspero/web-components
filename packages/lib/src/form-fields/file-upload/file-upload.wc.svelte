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
  import { clickOutside } from '../../utils/click-outside';
  import type FileService from '../../types/file.service';
  import { createEventDispatcher } from 'svelte';
  import { formatDisplayFileName } from '../../utils/fileNameFormatter';
  import './file-upload.wc.pcss';
  import folderIcon from '../../icons/folder.svg?raw';
  import eyeIcon from '../../icons/eye.svg?raw';
  import deleteIcon from '../../icons/delete.svg?raw';

  export let label = '';
  export let labelType: 'inside' | 'outside' = 'inside';
  export let attachedInternals: ElementInternals;
  export let value = '';
  export let id = '';
  export let name = '';
  export let required = false;
  export let displayFormat:
    | ''
    | 'custom'
    | 'camel'
    | 'snake'
    | 'kebab'
    | 'pascal'
    | 'title'
    | 'upper'
    | 'lower'
    | 'dot'
    | 'sentence' = '';
  export let displayFormatFunction: (name: string) => string;

  let previewStyle: string;
  let bindingElement: HTMLDivElement;
  let inputFocused: boolean = false;
  let isLocal = false;
  let img = '';
  let file: any = null;
  let preview = false;
  let hoveringFile = false;
  let internalValue: File | string;
  let fileEl: HTMLInputElement;
  let displayedFileNameString =
    (value && formatDisplayFileName(value, displayFormat, displayFormatFunction)) || '';
  let hadValue = false;
  let userInvalidElement = false;
  let fileInputFocused = false;

  const dispatch = createEventDispatcher();

  export let service: FileService;

  export const getValue = () => internalValue;

  $: {
    internalValue = value;
    if (!value) {
      img = '';
    }
  }

  $: {
    if (required && internalValue.length === 0) {
      attachedInternals.setValidity({ customError: true }, 'Required.');
    } else {
      attachedInternals.setValidity({});
    }
    attachedInternals.checkValidity();
    attachedInternals.setFormValue(internalValue);
    dispatch('value', { value: internalValue });
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

  async function handleLocalChange(f: File) {
    if (service && service.maxSize) {
      if (f.size > service.maxSize) {
        dispatch('rejected', { file: f.name, code: 'maxSize' });
        return;
      }
    }
    isLocal = true;
    file = f;
    internalValue = f;
    displayedFileNameString = formatDisplayFileName(
      f.name,
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

  async function checkImage(event: InputEvent) {
    if (!event?.target) {
      return;
    }

    internalValue = (event.target as HTMLInputElement).value;
    isLocal = false;
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
        right: ${window.innerWidth - rect.right}px;
      `;
    } else {
      previewStyle = `
        width: ${rect.width}px;
        top: ${window.scrollY + rect.bottom}px;
        right: ${window.innerWidth - rect.right}px;
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

  $: {
    if (internalValue) hadValue = true;
    if (hadValue && !attachedInternals.checkValidity()) {
      userInvalidElement = true;
    } else {
      userInvalidElement = false;
    }
  }
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
    class:jp-file-upload-field-user-invalid={userInvalidElement}
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
        <span
          class="jp-file-upload-label"
          class:jp-file-upload-label-move={inputFocused || displayedFileNameString}
          >{@html displayLabel}</span
        >
      {/if}

      <div class="jp-file-upload-field-icons">
        <label
          for={name}
          class="jp-file-upload-field-icon jp-file-upload-field-icon-upload"
          class:jp-file-upload-field-icon-focused={fileInputFocused}
        >
          <input
            type="file"
            id={name}
            class="jp-file-upload-field-upload"
            accept={service && service.acceptedFiles}
            bind:this={fileEl}
            on:change={filePicked}
            on:focus={() => (fileInputFocused = true)}
            on:blur={() => (fileInputFocused = false)}
            tabindex="0"
          />
          {@html folderIcon}
        </label>

        <div
          class="jp-file-upload-field-icon jp-file-upload-field-icon-preview-button"
          class:jp-file-upload-field-icon-hidden={!img}
        >
          <button type="button" on:click|preventDefault={() => showPreview()}>
            {@html eyeIcon}
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
              {@html deleteIcon}
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
          {required}
          on:focus={() => (inputFocused = true)}
          on:blur={() => (inputFocused = false)}
          on:change={checkImage}
          bind:value={displayedFileNameString}
          disabled={isLocal}
        />
      </span>

      {#if preview}
        <div class="jp-file-upload-preview-container">
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
    {/if}
  </div>
</div>

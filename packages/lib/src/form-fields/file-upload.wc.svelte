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
  import { clickOutside } from '../clickOutside';
  import type FileService from '../types/file.service';
  import { createEventDispatcher } from 'svelte';

  export let label: string = 'Upload a file';
  export let labelType: 'inside' | 'outside' = 'inside';
  export let attachedInternals: ElementInternals;
  export let value: string = '';
  export let id: string = '';
  export let name: string = '';

  let previewStyle;
  let bindingElement;
  let inputFocused: boolean = false;
  let isLocal = false;
  let img = '';
  let file = null;
  let preview = false;
  let hoveringFile = false;

  export let service: FileService;

  export const getValue = () => value;

  const dispatch = createEventDispatcher();
  $: {
    attachedInternals.checkValidity();
    attachedInternals.setFormValue(value);
    dispatch('value', { value });
  }

  export async function save(id?: string) {
    if (isLocal) {
      try {
        value = await service.uploadFile(file, id);
      } catch (err) {
        console.log(err);
      }
    }
    return value;
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
    value = f.name;
    if (file['type'].split('/')[0] === 'image') {
      const base64 = (await convertBase64(file)) as string;
      img = base64;
    } else {
      img = '';
    }
  }

  async function handleDrop(e) {
    if (e.dataTransfer.files.length) {
      handleLocalChange(e.dataTransfer.files[0]);
    }
    hoveringFile = false;
  }

  async function filePicked(event) {
    handleLocalChange(event.target.files[0]);
  }

  async function checkImage() {
    if (!isLocal) {
      const res = await fetch(value);
      const buff = await res.blob();
      if (buff.type.startsWith('image/')) {
        img = value;
      } else {
        img = '';
      }
    }
  }

  function showPreview() {
    const rect = bindingElement.getBoundingClientRect();
    const availableSpaceBelow = window.innerHeight - rect.bottom;
    const dropdownHeight = 300;

    let style: string = '';
    if (availableSpaceBelow < dropdownHeight) {
      style = `bottom: ${window.innerHeight - rect.top}px;right: ${rect.left}px;`;
    } else {
      style = `top:${rect.bottom}px;right: ${rect.left}px;`;
    }

    previewStyle = style;
    preview = !preview;
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (err) => reject(err);
    });
  };
</script>

{#if label && labelType == 'outside'}
  <div class="label">
    {@html label}
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
        <span class="field-label" class:move={inputFocused || value}>{@html label}</span>
      {/if}

      <div class="field-icons">
        <label for={name} class="field-icon field-icon-upload">
          <input
            type="file"
            id={name}
            class="field-upload"
            accept={service && service.acceptedFiles}
            on:change={filePicked}
            on:focus={() => (inputFocused = true)}
            on:blur={() => (inputFocused = false)}
          />
          <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 512 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"
            />
          </svg>
        </label>

        <div class="field-icon preview-button" class:hidden={!img}>
          <button on:click|preventDefault={() => showPreview()}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
              />
            </svg>
          </button>

          {#if preview}
            <img
              class="preview"
              style={previewStyle}
              src={img}
              alt="preview"
              use:clickOutside
              on:click_outside={() => (preview = false)}
            />
          {/if}
        </div>
        {#if value}
          <div class="field-icon">
            <button
              on:click|preventDefault={() => {
                isLocal = false;
                img = '';
                value = '';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
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
          class={`field-input ${labelType == 'outside' ? '' : 'field-input-padding'}`}
          type="text"
          {name}
          {id}
          on:focus={() => (inputFocused = true)}
          on:blur={() => (inputFocused = false)}
          on:change={() => checkImage()}
          bind:value
          disabled={isLocal}
        />
      </span>
    {/if}
  </div>
</div>

<style>
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

  .field.required .field-label::after {
    content: ' *';
  }

  .field.disabled .field-label,
  .field.disabled .field-input {
    opacity: 0.33;
    background: none;
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
    bottom: 100%;
    right: 0;
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
</style>

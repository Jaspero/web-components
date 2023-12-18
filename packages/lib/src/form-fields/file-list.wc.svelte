<svelte:options
  customElement={{
    tag: 'jp-file-list',
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
  import { createEventDispatcher, onMount } from 'svelte';
  import type FileService from '../types/file.service';

  export let attachedInternals: ElementInternals;
  export let value: string = '';
  export let id: string = '';
  export let name: string = '';
  export let service: FileService;
  export let maxfiles = null;
  export let minfiles = null;
  export let maxfilesValidationMessage;
  export let minfilesValidationMessage;
  export let validationMessages = {};
  let internalFiles = [];
  let browseFilesEl;
  let loading = true;
  let hoveringFile = false;

  export const getValue = () => value;

  export const reportValidity = () => attachedInternals.reportValidity();

  const dispatch = createEventDispatcher();

  $: {
    if (minfiles && internalFiles.length < minfiles) {
      attachedInternals.setValidity(
        { customError: true },
        minfilesValidationMessage || validationMessages.minfiles || 'Not enough files.'
      );
    } else if (maxfiles && internalFiles.length > maxfiles) {
      attachedInternals.setValidity(
        { customError: true },
        maxfilesValidationMessage || validationMessages.maxfiles || 'Too many files.'
      );
    } else {
      attachedInternals.setValidity({});
    }
    attachedInternals.checkValidity();
    attachedInternals.setFormValue(value);
    dispatch('value', { value });
  }

  export async function save() {
    loading = true;
    try {
      await Promise.allSettled(
        internalFiles.map(async (el) => {
          if (!el.saved) {
            const url = await service.uploadFile(el.file);
            el.saved = true;
            el.url = url;
          }
        })
      );
      internalFiles = internalFiles;
      value = internalFiles
        .filter((el) => el.saved)
        .map((el) => el.url)
        .join(',');
    } catch (err) {
      console.log(err);
    } finally {
      loading = false;
    }
  }

  function removeFile(index) {
    if (internalFiles[index].saved) {
      dispatch('removed', { url: internalFiles[index].url });
    }
    internalFiles.splice(index, 1);
    internalFiles = internalFiles;
    value = internalFiles
      .filter((el) => el.saved)
      .map((el) => el.url)
      .join(',');
  }

  function handleFileInput(e) {
    if (e.target.files.length) {
      internalFiles = internalFiles.concat(filesToObjs(Array.from(e.target.files)));
      dispatch('change', { unsaved: internalFiles.filter((el) => !el.saved).length });
    }
  }

  function handleDrop(e) {
    if (e.dataTransfer.files.length) {
      internalFiles = internalFiles.concat(filesToObjs(Array.from(e.dataTransfer.files)));
      hoveringFile = false;
      dispatch('change', { unsaved: internalFiles.filter((el) => !el.saved).length });
    }
  }

  const returnFileSize = (size) => {
    if (size < 1024) {
      return `${size} bytes`;
    } else if (size >= 1024 && size < 1048576) {
      return `${(size / 1024).toFixed(1)} KB`;
    } else if (size >= 1048576) {
      return `${(size / 1048576).toFixed(1)} MB`;
    }
  };

  const filesToObjs = (files) => {
    return files
      .filter((el) => {
        if (service && service.maxSize) {
          dispatch('rejected', { file: el.name, code: 'maxSize' });
          return el.size < service.maxSize;
        } else return true;
      })
      .map((el) => {
        let obj = {
          name: el.name,
          size: returnFileSize(el.size),
          file: el,
          saved: false
        };
        if (el['type'].split('/')[0] === 'image') {
          obj['src'] = URL.createObjectURL(el);
        }
        return obj;
      });
  };

  const blobToFile = (blob, filename) => {
    return new File([blob], filename);
  };

  onMount(async () => {
    if (value) {
      const urls = value.split(',');
      await Promise.allSettled(
        urls.map(async (url) => {
          const res = await fetch(url);
          const urlFile = blobToFile(res.blob(), url);
          let obj = {
            name: urlFile.name,
            size: '',
            file: urlFile,
            saved: true,
            url: url,
            external: true
          };
          internalFiles.push(obj);
        })
      );
      internalFiles = internalFiles;
    }
    loading = false;
  });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="dropzone"
  class:fullBorder={hoveringFile}
  on:dragover|preventDefault={() => (hoveringFile = true)}
>
  {#if loading}
    <div class="loader">
      <div class="spinner"></div>
    </div>
  {:else if hoveringFile}
    <div
      class="info"
      on:dragleave={() => (hoveringFile = false)}
      on:dragend={() => (hoveringFile = false)}
      on:drop|preventDefault={(e) => handleDrop(e)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"
        ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        /></svg
      >
      <div>Drop your files here</div>
    </div>
  {:else if internalFiles.length == 0}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="info" hidden={internalFiles.length != 0}>
      <!-- svelte-ignore a11y-missing-attribute -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div>
        Drop files here or <a on:click={() => browseFilesEl.click()}>browse files</a>
      </div>
    </div>
  {:else}
    <div class="files">
      {#each internalFiles as file, index}
        <div class="file">
          <button class="file-remove" on:click|preventDefault={() => removeFile(index)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
              ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
              /></svg
            >
          </button>
          <div class="file-icon">
            {#if file.src}
              <img src={file.src} alt={file.name} />
            {:else if file.external}
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"
                ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                  d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                /></svg
              >
            {:else}
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"
                ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                  d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
                /></svg
              >
            {/if}
          </div>
          <div class="file-name">
            {file.name}
          </div>
          <div class="file-info">
            <span>
              {file.size || ''}
            </span>
            <span style="color: rgb(26 151 26)">
              {file.saved ? 'saved' : ''}
            </span>
          </div>
        </div>
      {/each}
    </div>
    <button class="add-more" on:click|preventDefault={() => browseFilesEl.click()}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
        ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
        /></svg
      >
    </button>
  {/if}
</div>

<input
  type="file"
  multiple
  accept={service && service.acceptedFiles}
  bind:this={browseFilesEl}
  on:change={(e) => handleFileInput(e)}
  hidden
/>
<input type="text" {id} {name} bind:value hidden />

<style>
  .dropzone {
    position: relative;
    background-color: #f4f4f4;
    width: 750px;
    height: 500px;
    border: 1px dashed #e6510030;
  }

  .fullBorder {
    border: 1px dashed var(--primary-color);
  }

  .info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .info a {
    color: var(--primary-color);
    cursor: pointer;
  }

  .info a:hover {
    text-decoration: underline;
  }

  .files {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
  }

  .add-more {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 40px;
    height: 40px;
    right: -20px;
    bottom: -20px;
    border-radius: 50%;
    background-color: var(--primary-color);
    fill: var(--text-on-primary);
  }

  .add-more svg {
    height: 60%;
  }

  .file {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23%;
    margin: 0 1%;
  }

  .file-name {
    width: 100%;
    text-align: left;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .file-info {
    width: 100%;
    padding: 0 5% 0 0;
    display: flex;
    justify-content: space-between;
    color: #757575;
    font-size: 11px;
    font-weight: 400;
  }

  .file-remove {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
  }

  .file-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    width: 150px;
    height: 150px;
    overflow: hidden;
    background-color: var(--primary-color);
    fill: var(--text-on-primary);
  }

  .file-icon img {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
  }

  .file-icon svg {
    height: 50%;
  }

  .loader {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 9px solid var(--primary-color);
    animation:
      spinner-bulqg1 0.8s infinite linear alternate,
      spinner-oaa3wk 1.6s infinite linear;
  }

  @keyframes spinner-bulqg1 {
    0% {
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
    }

    12.5% {
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);
    }

    25% {
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);
    }

    50% {
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
    }

    62.5% {
      clip-path: polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
    }

    75% {
      clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%);
    }

    100% {
      clip-path: polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%);
    }
  }

  @keyframes spinner-oaa3wk {
    0% {
      transform: scaleY(1) rotate(0deg);
    }

    49.99% {
      transform: scaleY(1) rotate(135deg);
    }

    50% {
      transform: scaleY(-1) rotate(0deg);
    }

    100% {
      transform: scaleY(-1) rotate(-135deg);
    }
  }
</style>

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
  import { createEventDispatcher } from 'svelte';
  import type FileService from '../../types/file.service';

  export let wording = {
    DROP_YOUR_FILES_HERE: 'Drop your files here',
    BROWSE_FILES: 'Browse files',
    DROP_FILES_HERE_OR: 'Drop files here or'
  };
  export let attachedInternals: ElementInternals;
  export let value = '';
  export let label = '';
  export let id = '';
  export let name = '';
  export let service: FileService;
  export let maxfiles = null;
  export let minfiles = null;
  export let maxfilesValidationMessage: string;
  export let minfilesValidationMessage: string;
  export let validationMessages: { [key: string]: string } = {};
  export let sortable = true;

  let grabbedEl = null;
  let grabbedIndex = -1;
  let startingY: number;
  let startingX: number;
  let internalFiles = [];
  let browseFilesEl: HTMLInputElement;
  let loading = false;
  let hoveringFile = false;
  let fileElements = [];
  let internalValue = '';

  export const getValue = () => internalValue.split(',').filter(Boolean);

  export const reportValidity = () => attachedInternals.reportValidity();

  const dispatch = createEventDispatcher();

  $: {
    internalValue = internalFiles
      .filter((el) => el.saved)
      .map((el) => el.url)
      .join(',');
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
    attachedInternals.setFormValue(internalValue);
    dispatch('value', { value: internalValue });
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
      internalFiles = [...internalFiles];
    } catch (err) {
      console.error(err);
    } finally {
      loading = false;
    }
  }

  function removeFile(index) {
    if (internalFiles[index].saved) {
      dispatch('removed', { url: internalFiles[index].url });
    }
    internalFiles = internalFiles.filter((i, ind) => index !== ind);
  }

  function handleFileInput(e) {
    if (e.target.files.length) {
      internalFiles = internalFiles.concat(filesToObjs(Array.from(e.target.files)));
      dispatch('change', { unsaved: internalFiles.filter((el) => !el.saved).length });
      browseFilesEl.value = null;
    }
  }

  function handleDrop(e) {
    if (e.dataTransfer.files.length) {
      internalFiles = internalFiles.concat(filesToObjs(Array.from(e.dataTransfer.files)));
      dispatch('change', { unsaved: internalFiles.filter((el) => !el.saved).length });
    }
    hoveringFile = false;
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

  const filesToObjs = (files) =>
    files
      .filter((el) => {
        if (service && service.maxSize) {
          dispatch('rejected', { file: el.name, code: 'maxSize' });
          return el.size < service.maxSize;
        } else return true;
      })
      .map((el) => {
        let obj: any = {
          name: el.name,
          size: returnFileSize(el.size),
          file: el,
          saved: false
        };

        const type = el['type'].split('/')[0];

        if (type === 'image' || type === 'video' || type === 'audio') {
          obj.src = URL.createObjectURL(el);
          obj.type = type;
        }

        return obj;
      });

  const blobToFile = (blob, filename) => {
    return new File([blob], filename);
  };

  const loadFiles = async (value) => {
    if (Array.isArray(value)) {
      value = value.join(',');
    }

    const urls = value.split(',');

    await Promise.allSettled(
      urls.map(async (url) => {
        const res = await fetch(url);
        const urlFile = blobToFile(res.blob(), url);
        let obj: any = {
          name: urlFile.name,
          size: '',
          file: urlFile,
          saved: true,
          url: url,
          external: true
        };

        if (/\.jpg|\.png|\.jpeg|\.webp|\.svg|\.gif/.test(url)) {
          obj.src = url;
          obj.type = 'image';
        } else if (/\.mp4|\.mov/.test(url)) {
          obj.src = url;
          obj.type = 'video';
        } else if (/\.mp3|\.wav/.test(url)) {
          obj.src = url;
          obj.type = 'audio';
        }

        internalFiles.push(obj);
      })
    );

    internalFiles = [...internalFiles];
  };

  function mousemove(e) {
    if (grabbedEl) {
      e.preventDefault();
      grabbedEl.style.transform = 'translateY(' + (e.clientY - startingY) + 'px)';
      grabbedEl.style.transform += 'translateX(' + (e.clientX - startingX) + 'px)';
    }
  }

  function mouseup(e: any) {
    if (grabbedEl) {
      e.preventDefault();
      const fileEl = e.target.closest('.file');
      if (fileEl) {
        const i = [...fileEl.parentNode.children].indexOf(fileEl);
        const tmp = internalFiles[i];
        internalFiles[i] = internalFiles[grabbedIndex];
        internalFiles[grabbedIndex] = tmp;
      }
      grabbedEl.style = '';
      grabbedEl = null;
    }
  }

  function mousedown(index: number, e: MouseEvent) {
    if (!sortable) {
      return;
    }

    grabbedEl = fileElements[index];
    grabbedIndex = index;
    grabbedEl.style.zIndex = '2';
    grabbedEl.style.pointerEvents = 'none';
    startingX = e.clientX;
    startingY = e.clientY;
  }

  $: {
    internalFiles = [];
    if (value) {
      loading = true;
      loadFiles(value);
      loading = false;
    }
  }
</script>

<svelte:document on:mousemove={mousemove} on:mouseup={mouseup} />

{#if label}
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>
    {@html label}
  </label>
{/if}

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
      <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512">
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        />
      </svg>
      <div>{wording.DROP_YOUR_FILES_HERE}</div>
    </div>
  {:else if internalFiles.length === 0}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="info" hidden={internalFiles.length !== 0}>
      <!-- svelte-ignore a11y-missing-attribute -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div>
        {wording.DROP_FILES_HERE_OR}
        <a on:click={() => browseFilesEl.click()}>{wording.BROWSE_FILES}</a>
      </div>
    </div>
  {:else}
    <div class="files">
      {#each internalFiles as file, index}
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <div
          class="file"
          class:grab={sortable}
          on:mousedown={(e) => mousedown(index, e)}
          bind:this={fileElements[index]}
        >
          <button
            type="button"
            class="file-remove"
            on:mousedown|preventDefault={() => removeFile(index)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
              ><path
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
              /></svg
            >
          </button>
          <div class="file-icon">
            {#if file.src}
              {#if file.type === 'image'}
                <img src={file.src} alt={file.name} />
              {:else if file.type === 'video'}
                <video controls>
                  <source src={file.src} />
                </video>
              {:else if file.type === 'audio'}
                <div class="audio-wrapper">
                  <audio controls>
                    <source src={file.src} />
                  </audio>
                </div>
              {/if}
            {:else if file.external}
              <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 640 512"
                ><path
                  d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                /></svg
              >
            {:else}
              <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 384 512"
                ><path
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
    <button type="button" class="add-more" on:click|preventDefault={() => browseFilesEl.click()}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
        ><path
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
<input type="text" {id} {name} bind:value={internalValue} hidden />

<style>
  .grab {
    cursor: grab;
  }
  .grab:active {
    cursor: grabbing;
  }
  .dropzone {
    position: relative;
    background-color: #f4f4f4;
    height: var(--file-list-height, auto);
    min-height: var(--file-list-min-height, 500px);
    width: 100%;
    border-radius: 0.25rem;
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
    min-height: inherit;
  }

  .info a {
    color: var(--primary-color);
    cursor: pointer;
  }

  .info a:hover {
    text-decoration: underline;
  }

  .files {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    height: 100%;
    padding: 1rem;
    gap: 1rem;
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
    right: 20px;
    bottom: 20px;
    border-radius: 50%;
    background-color: var(--primary-color);
    fill: var(--text-on-primary);
  }

  .add-more svg {
    height: 60%;
  }

  .file {
    position: relative;
    grid-column: span 1 / span 1;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    direction: rtl;
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
    top: 0;
    right: 0;
    padding: 0;
    transform: translate(50%, -50%);
  }

  .file-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: var(--file-list-background-color, #e5e5e5);
    fill: var(--text-on-primary);
    width: 100%;
    height: 100%;
  }

  .file-icon img,
  .file-icon video {
    aspect-ratio: 1 / 1;
    object-fit: contain;
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .audio-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .audio-wrapper audio {
    height: 100px;
    width: 250px;
  }

  .file-icon svg {
    height: 50%;
  }

  .loader {
    margin-top: 50px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 5px solid var(--primary-color);
    animation:
      spinner-bulqg1 0.8s infinite linear alternate,
      spinner-oaa3wk 1.6s infinite linear;
  }

  @media (max-width: 900px) {
    .files {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 600px) {
    .files {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
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

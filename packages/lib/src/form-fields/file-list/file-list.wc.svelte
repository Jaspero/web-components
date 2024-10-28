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
  import { formatDisplayFileName } from '../../utils/fileNameFormatter';

  import uploadIcon from '../../icons/upload.svg?raw';
  import externalLinkIcon from '../../icons/external-link.svg?raw';
  import unknownFileIcon from '../../icons/unknown-file.svg?raw';
  import deleteIcon from '../../icons/delete.svg?raw';
  import plusIcon from '../../icons/add-more.svg?raw';
  export let wording = {
    DROP_YOUR_FILES_HERE: 'Drop your files here',
    BROWSE_FILES: 'Browse files',
    DROP_FILES_HERE_OR: 'Drop files here or',
    SAVED: 'saved'
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
  export let required = false;
  export let displayFormat = 'snake';
  export let displayFormatFunction;

  let displayedFileNameString = '';
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
        displayedFileNameString = formatDisplayFileName(
          el.name,
          displayFormat,
          displayFormatFunction
        );
        let obj: any = {
          name: el.name,
          size: returnFileSize(el.size),
          file: el,
          saved: false,
          displayedName: displayedFileNameString
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

    internalFiles = (
      await Promise.all(
        urls.map(async (url) => {
          try {
            const res = await fetch(url);
            const urlFile = blobToFile(res.blob(), url);
            let obj: any = {
              name: urlFile.name,
              displayedName: urlFile.name,
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

            return obj;
          } catch (err) {
            console.error(err);
          }
        })
      )
    ).filter(Boolean);
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
    if (value && (!Array.isArray(value) || value.length)) {
      loading = true;
      loadFiles(value);
      loading = false;
    }
  }
  $: displayLabel = required ? `${label} *` : label;
</script>

<svelte:document on:mousemove={mousemove} on:mouseup={mouseup} />

{#if label}
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>
    {@html displayLabel}
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
      {@html uploadIcon}
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
            {@html deleteIcon}
          </button>
          <div class="file-icon">
            {#if file.src}
              {#if file.type === 'image'}
                <img src={file.src} alt={file.name} />
              {:else if file.type === 'video'}
                <!-- svelte-ignore a11y-media-has-caption -->
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
              {@html externalLinkIcon}
            {:else}
              {@html unknownFileIcon}
            {/if}
          </div>
          <div class="file-name">
            {file.displayedName}
          </div>
          <div class="file-info">
            <span>
              {file.size || ''}
            </span>
            <span style="color: rgb(26 151 26)">
              {file.saved ? wording.SAVED : ''}
            </span>
          </div>
        </div>
      {/each}
    </div>
    <button type="button" class="add-more" on:click|preventDefault={() => browseFilesEl.click()}>
      {@html plusIcon}
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

<style lang="postcss">
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
    user-select: none;
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

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
  import './file-list.wc.pcss';

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
  export let requiredValidationMessage: string;
  export let displayFormat = 'snake';
  export let displayFormatFunction: (name: string) => string;
  export let innerContent: string;
  export let itemWidth = '300px';
  export let itemHeight = '150px';
  export let assetWidth = '300px';
  export let assetHeight = '150px';
  export let assetObjectFit = 'contain';
  export let showName = false;
  export let showSize = false;
  export let forceFileType = '';
  export let openbrowse = () => browseFilesEl!.click();
  export const getValue = () => internalValue.split(',').filter(Boolean);
  export const reportValidity = () => attachedInternals.reportValidity();

  let grabbedEl: HTMLElement | null = null;
  let grabbedIndex = -1;
  let startingY: number;
  let startingX: number;
  let internalFiles: any[] = [];
  let browseFilesEl: HTMLInputElement | null = null;
  let loading = false;
  let hoveringFile = false;
  let fileElements: HTMLDivElement[] = [];
  let internalValue = '';
  let hadValue = false;
  let userInvalidElement = false;

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
    } else if (required && internalFiles.length === 0) {
      attachedInternals.setValidity(
        { customError: true },
        requiredValidationMessage || validationMessages.required || 'Required.'
      );
    } else {
      attachedInternals.setValidity({});
    }
    attachedInternals.checkValidity();
    attachedInternals.setFormValue(internalValue);
    dispatch('value', { value: internalValue });
  }

  export async function save(id?: string) {
    loading = true;
    try {
      await Promise.allSettled(
        internalFiles.map(async (el) => {
          if (!el.saved) {
            const url = await service.uploadFile(el.file, id);
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

  function removeFile(index: number) {
    if (internalFiles[index].saved) {
      dispatch('removed', { url: internalFiles[index].url });
    }
    internalFiles = internalFiles.filter((i, ind) => index !== ind);
    dispatch('change', { unsaved: internalFiles.filter((el) => !el.saved).length });
  }

  function handleFileInput(e: any) {
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

  const returnFileSize = (size: number) => {
    if (size < 1024) {
      return `${size} bytes`;
    } else if (size >= 1024 && size < 1048576) {
      return `${(size / 1024).toFixed(1)} KB`;
    } else if (size >= 1048576) {
      return `${(size / 1048576).toFixed(1)} MB`;
    }
  };

  const filesToObjs = (files: any[]) =>
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
          saved: false,
          displayedName: formatDisplayFileName(
            el.name,
            displayFormat,
            displayFormatFunction
          )
        };

        const type = el['type'].split('/')[0];

        if (type === 'image' || type === 'video' || type === 'audio') {
          obj.src = URL.createObjectURL(el);
          obj.type = type;
        }

        return obj;
      });

  const blobToFile = (blob: Blob, filename: string) => {
    return new File([blob], filename);
  };

  const loadFiles = async (value: string) => {
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
              url,
              external: true
            };

            if (forceFileType) {
              obj.src = url;
              obj.type = forceFileType;
            } else if (/\.jpg|\.png|\.jpeg|\.webp|\.svg|\.gif/.test(url)) {
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

  function mousemove(e: { preventDefault: () => void; clientY: number; clientX: number }) {
    if (grabbedEl) {
      e.preventDefault();
      grabbedEl.style.transform = 'translateY(' + (e.clientY - startingY) + 'px)';
      grabbedEl.style.transform += 'translateX(' + (e.clientX - startingX) + 'px)';
    }
  }

  function mouseup(e: any) {
    if (grabbedEl) {
      e.preventDefault();
      const fileEl = e.target.closest('.jp-file-list-file');
      if (fileEl) {
        const i = [...fileEl.parentNode.children].indexOf(fileEl);
        const tmp = internalFiles[i];
        internalFiles[i] = internalFiles[grabbedIndex];
        internalFiles[grabbedIndex] = tmp;
      }
      grabbedEl.style = `width:${itemWidth};height:${itemHeight};`;
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

  $: {
    if (internalFiles) hadValue = true;
    if (hadValue && !attachedInternals.checkValidity()) {
      userInvalidElement = true;
    } else {
      userInvalidElement = false;
    }
  }
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
  class="jp-file-list-dropzone"
  class:jp-file-list-dropzone-user-invalid={userInvalidElement}
  class:jp-file-list-dropzone-fullBorder={hoveringFile}
  on:dragover|preventDefault={() => (hoveringFile = true)}
>
  {#if loading}
    <div class="jp-file-list-loader">
      <div class="jp-file-list-spinner"></div>
    </div>
  {:else if hoveringFile}
    <div
      class="jp-file-list-info"
      on:dragleave={() => (hoveringFile = false)}
      on:dragend={() => (hoveringFile = false)}
      on:drop|preventDefault={(e) => handleDrop(e)}
    >
      {@html uploadIcon}
      <div>{wording.DROP_YOUR_FILES_HERE}</div>
    </div>
  {:else if internalFiles.length === 0}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="jp-file-list-info" hidden={internalFiles.length !== 0}>
      <!-- svelte-ignore a11y-missing-attribute -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      {#if innerContent}
        {@html innerContent}
      {:else}
        <div>
          {wording.DROP_FILES_HERE_OR}
          <a on:click={openbrowse}>{wording.BROWSE_FILES}</a>
        </div>
      {/if}
    </div>
  {:else}
    <div class="jp-file-list-files">
      {#each internalFiles as file, index}
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <div 
          class="jp-file-list-file"
          class:jp-file-list-file-grab={sortable}
          style:width={itemWidth}
          style:height={itemHeight} 
          on:mousedown={(e) => mousedown(index, e)}
          bind:this={fileElements[index]}
        >
          <button
            type="button"
            class="jp-file-list-file-remove"
            on:mousedown|preventDefault={() => removeFile(index)}
          >
            {@html deleteIcon}
          </button>
          <div class="jp-file-list-file-icon">
            {#if file.src}
              {#if file.type === 'image'}
                <img style:width={assetWidth} style:height={assetHeight} style:object-fit={assetObjectFit} src={file.src} alt={file.name} />
              {:else if file.type === 'video'}
                <!-- svelte-ignore a11y-media-has-caption -->
                <video style:width={assetWidth} style:height={assetHeight} style:object-fit={assetObjectFit} controls>
                  <source src={file.src} />
                </video>
              {:else if file.type === 'audio'}
                <div class="jp-file-list-audio-wrapper">
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
          {#if showName}
            <div class="jp-file-list-file-name">
              {file.displayedName}
            </div>
          {/if}
          {#if showSize}
            <div class="jp-file-list-file-info">
              <span>
                {file.size || ''}
              </span>
              <span style="color: rgb(26 151 26)">
                {file.saved ? wording.SAVED : ''}
              </span>
            </div>
          {/if}
        </div>
      {/each}
    </div>
    <button type="button" class="jp-file-list-add-more" on:click|preventDefault={openbrowse}>
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

<svelte:options
  customElement={{
    tag: 'jp-asset-manager',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import type { AssetManagerService, Item } from '../types/asset-manager.service';
  import Folder from './Folder.svelte';
  import Asset from './Asset.svelte';
  import { createEventDispatcher } from 'svelte';

  export let wording = {
    DROP_FILES_HERE: 'Drop your files here',
    FOLDER_NAME: 'Folder name',
    SUBMIT: 'Submit',
    FOLDER_IS_EMPTY: 'Folder is empty',
    CONFIRM_SELECTION: 'Confirm selection',
    PAUSE: 'Pause',
    RESUME: 'Resume',
    CANCEL: 'Cancel'
  };
  export let rootPath = '/';
  export let maxSize = 10 * 1048576;
  export let acceptedFiles = '*';
  export let shownFiles: string[];
  export let service: AssetManagerService;
  export let selectable: '' | 'single' | 'multiple' = '';

  const dispatch = createEventDispatcher();

  let path = rootPath;
  let items: Item[] = [];
  let selectedItems: { [key: string]: Asset } = {};
  let browseFilesEl: HTMLInputElement;
  let loading = false;
  let hoveringFile = false;
  let folderName = '';
  let folderDialog = false;
  let folderNamePattern = '[a-z_\\-]{3,}';

  export function clearSelection() {
    selectedItems = {};
  }

  async function removeFile(index: number, id: string) {
    items = items.filter((item) => item.id !== id);
  }

  async function handleFileInput(e) {
    if (e.target.files.length) {
      items = [...items, ...(await filesToItems(e.target.files))];
    }

    browseFilesEl.value = null;
  }

  async function handleDrop(e) {
    if (e.dataTransfer.files.length) {
      items = [...items, ...(await filesToItems(e.dataTransfer.files))];
    }

    hoveringFile = false;
  }

  function filesToItems(files: FileList) {
    return Promise.all(
      Array.from(files)
        .filter((file) => {
          // TODO: Show alert for each file violating file size
          if (!maxSize || maxSize < file.size) {
            return false;
          }

          return true;
        })
        .map((file) => service.upload(path, file))
    );
  }

  function back() {
    path = path.split('/').slice(0, -1).join('/');
  }

  function addFolder() {
    folderName = '';
    folderDialog = true;
  }

  async function createFolder() {
    path += `/${folderName}`;
    folderDialog = false;
  }

  function cancelUpload(id: string) {
    items = items.filter((item) => item.id !== id);
  }

  function select(item: Asset) {
    if (selectedItems[item.id]) {
      delete selectedItems[item.id];
    } else {
      if (selectable === 'single') {
        selectedItems = {
          [item.id]: item
        };
      } else {
        selectedItems[item.id] = item;
      }
    }
  }

  function confirmSelection() {
    const selection = Object.values(selectedItems);
    dispatch('selected', selectable === 'single' ? selection[0] : selection);
  }

  function loadData() {
    loading = true;
    service
      .fetch(path)
      .then((data) => {
        items = data;

        if (shownFiles?.length) {
          // @ts-ignore
          items = items.filter(item => item.type === 'folder' || shownFiles.some(file => (item as Asset).contentType.startsWith(file)));
        }
      })
      .finally(() => {
        loading = false;
      });
  }

  $: if (path) {
    loadData();
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section
  class="card"
  class:full-border={hoveringFile}
  on:dragover|preventDefault={() => (hoveringFile = true)}
  on:dragleave={() => (hoveringFile = false)}
  on:dragend={() => (hoveringFile = false)}
  on:drop|preventDefault={(e) => handleDrop(e)}
>
  {#if hoveringFile}
    <div class="drop-here">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512">
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        />
      </svg>
      <div>{wording.DROP_FILES_HERE}</div>
    </div>
  {:else if folderDialog}
    <header>
      <div class="header-actions">
        <button type="button" on:click={() => (folderDialog = false)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
        </button>
      </div>
    </header>

    <form class="add-folder-form" on:submit|preventDefault={createFolder}>
      <label class="add-folder-input">
        <span>{wording.FOLDER_NAME}</span>
        <input bind:value={folderName} pattern={folderNamePattern} required />
      </label>
      <button class="add-folder-submit" type="submit">{wording.SUBMIT}</button>
    </form>
  {:else}
    <header>
      <nav>
        <button type="button" title="Back" disabled={path === rootPath} on:click={back}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -960 960 960">
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>
        </button>

        <span class="route">{path.replace(rootPath, '') || '/'}</span>
      </nav>

      <div class="header-actions">
        <button type="button" title="Add Folder" on:click|preventDefault={addFolder}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -960 960 960">
            <path
              d="M560-320h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"
            />
          </svg>
        </button>

        <button
          type="button"
          title="Add Files"
          on:click|preventDefault={() => browseFilesEl.click()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -960 960 960">
            <path
              d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"
            />
          </svg>
        </button>
      </div>
    </header>

    {#if loading}
      <div class="loader">
        <div class="spinner"></div>
      </div>
    {:else if items.length == 0}
      <div class="info">
        <p>{wording.FOLDER_IS_EMPTY}</p>
      </div>
    {:else}
      <div class="files">
        {#each items as item, index}
          {#if item.type === 'folder'}
            <Folder folder={item} bind:path />
          {:else}
            <div
              class="asset-button"
              role="button"
              tabindex="1"
              class:selected={selectedItems[item.id]}
              on:click={() => select(item)}
            >
              <Asset
                asset={item}
                {service}
                on:remove={() => removeFile(index, item.id)}
                on:cancel={() => cancelUpload(item.id)}
              />
            </div>
          {/if}
        {/each}
      </div>
    {/if}

    {#if selectable}
      <footer>
        <button type="button" on:click={confirmSelection}>{wording.CONFIRM_SELECTION}</button>
      </footer>
    {/if}
  {/if}
</section>

<input
  type="file"
  multiple
  accept={acceptedFiles}
  bind:this={browseFilesEl}
  on:change={(e) => handleFileInput(e)}
  hidden
/>

<style>

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .card {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    max-width: 802px;
    width: 100%;
    height: 500px;
    overflow: auto;
    background-color: white;
    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
    font-family: sans-serif;
  }

  header {
    z-index: 1;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background-color: white;
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }

  header .route {
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
    height: 100%;
    font-size: 20px;
  }

  header nav {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    gap: 12px;
  }

  .header-actions {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    gap: 12px;
  }

  header button {
    width: 40px;
    height: 40px;
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
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.12);
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
    cursor: pointer;
    -webkit-transition: 0.25s;
    -o-transition: 0.25s;
    -moz-transition: 0.25s;
    transition: 0.25s;
  }

  header button:disabled {
    opacity: 0.5;
    background-color: rgba(0, 0, 0, 0.1);
    pointer-events: none;
  }

  header button:hover {
    background-color: rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.2);
  }

  footer {
    z-index: 1;
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    background-color: white;
    padding: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }

  footer button {
    height: 40px;
    padding: 0 16px;
    font-weight: bold;
    background-color: #E66439;
    color: white;
    border: none;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
    cursor: pointer;
    -webkit-transition: 0.25s;
    -o-transition: 0.25s;
    -moz-transition: 0.25s;
    transition: 0.25s;
  }

  footer button:disabled {
    opacity: .5;
    pointer-events: none;
  }

  footer button:active {
    -webkit-transform: scale(.95);
    -moz-transform: scale(.95);
    -ms-transform: scale(.95);
    -o-transform: scale(.95);
    transform: scale(.95);
  }

  .add-folder-submit {
    height: 32px;
    padding: 0 12px;
    font-weight: bold;
    background-color: #E66439;
    color: white;
    border: none;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 12px;
    -webkit-transition: 0.25s;
    -o-transition: 0.25s;
    -moz-transition: 0.25s;
    transition: 0.25s;
  }

  .add-folder-submit:disabled {
    opacity: .5;
    pointer-events: none;
  }

  .add-folder-submit:active {
    -webkit-transform: scale(.95);
    -moz-transform: scale(.95);
    -ms-transform: scale(.95);
    -o-transform: scale(.95);
    transform: scale(.95);
  }

  .drop-here {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 12px;
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
    background-color: white;
  }

  .add-folder-form {
    padding: 20px
  }

  .add-folder-input {
    display: block;
  }

  .add-folder-input span {
    display: block;
    font-size: 14px;
  }

  .add-folder-input input {
    border: 1px solid rgba(0,0,0,.08);
    height: 40px;
    padding: 0 12px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    font-size: 14px;
    margin-top: 4px;
  }

  :global(.file) {
    position: relative;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.12);
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
    background-color: white;
    overflow: hidden;
  }

  :global(.file-name) {
    padding: 6px 12px 0;
  }

  :global(.file-info) {
    padding: 4px 12px 6px;
  }

  :global(.file-icon .icon-only) {
    padding: 12px;
  }

  :global(.file .file-remove) {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 32px;
    height: 32px;
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
    background-color: white;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  :global(.file .file-remove:hover) {
    border-color: rgba(0, 0, 0, 0.4);
  }

  :global(.file .file-icon-image) {
    width: 100%;
    height: 150px;
    -o-object-fit: contain;
    object-fit: contain;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.02);
  }

  .files {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-align-content: flex-start;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 12px;
  }

  .info {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-align-content: flex-start;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 20px;
  }

  .asset-button {
    width: 25%;
    padding: 8px;
    -webkit-transition: 0.25s;
    -o-transition: 0.25s;
    -moz-transition: 0.25s;
    transition: 0.25s;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
    cursor: pointer;
  }

  .asset-button.selected {
    border: 1px solid #E66439;
  }

  :global(.asset-button:hover .file) {
    background-color: rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.2);
  }

  :global(.folder) {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 25%;
    padding: 8px;
  }

  :global(.folder button) {
    width: 100%;
    padding: 12px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -moz-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.12);
    gap: 6px;
    background-color: transparent;
    font-size: 14px;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
    cursor: pointer;
    -webkit-transition: 0.25s;
    -o-transition: 0.25s;
    -moz-transition: 0.25s;
    transition: 0.25s;
  }

  :global(.folder button:hover) {
    background-color: rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.2);
  }

  .loader {
    width: 100%;
    height: 100%;
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
  }

  .spinner {
    width: 150px;
    height: 150px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 9px solid var(--primary-color);
    -webkit-animation:
            spinner-bulqg1 0.8s infinite linear alternate,
            spinner-oaa3wk 1.6s infinite linear;
    -moz-animation:
            spinner-bulqg1 0.8s infinite linear alternate,
            spinner-oaa3wk 1.6s infinite linear;
    -o-animation:
            spinner-bulqg1 0.8s infinite linear alternate,
            spinner-oaa3wk 1.6s infinite linear;
    animation:
            spinner-bulqg1 0.8s infinite linear alternate,
            spinner-oaa3wk 1.6s infinite linear;
  }

  @-webkit-keyframes spinner-bulqg1 {
    0% {
      -webkit-clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
    }

    12.5% {
      -webkit-clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);
    }

    25% {
      -webkit-clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);
    }

    50% {
      -webkit-clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
    }

    62.5% {
      -webkit-clip-path: polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
      clip-path: polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
    }

    75% {
      -webkit-clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%);
      clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%);
    }

    100% {
      -webkit-clip-path: polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%);
      clip-path: polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%);
    }
  }

  @-moz-keyframes spinner-bulqg1 {
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

  @-o-keyframes spinner-bulqg1 {
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

  @keyframes spinner-bulqg1 {
    0% {
      -webkit-clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
    }

    12.5% {
      -webkit-clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);
    }

    25% {
      -webkit-clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);
    }

    50% {
      -webkit-clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
    }

    62.5% {
      -webkit-clip-path: polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
      clip-path: polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
    }

    75% {
      -webkit-clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%);
      clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%);
    }

    100% {
      -webkit-clip-path: polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%);
      clip-path: polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%);
    }
  }

  @-webkit-keyframes spinner-oaa3wk {
    0% {
      -webkit-transform: scaleY(1) rotate(0deg);
      transform: scaleY(1) rotate(0deg);
    }

    49.99% {
      -webkit-transform: scaleY(1) rotate(135deg);
      transform: scaleY(1) rotate(135deg);
    }

    50% {
      -webkit-transform: scaleY(-1) rotate(0deg);
      transform: scaleY(-1) rotate(0deg);
    }

    100% {
      -webkit-transform: scaleY(-1) rotate(-135deg);
      transform: scaleY(-1) rotate(-135deg);
    }
  }

  @-moz-keyframes spinner-oaa3wk {
    0% {
      -moz-transform: scaleY(1) rotate(0deg);
      transform: scaleY(1) rotate(0deg);
    }

    49.99% {
      -moz-transform: scaleY(1) rotate(135deg);
      transform: scaleY(1) rotate(135deg);
    }

    50% {
      -moz-transform: scaleY(-1) rotate(0deg);
      transform: scaleY(-1) rotate(0deg);
    }

    100% {
      -moz-transform: scaleY(-1) rotate(-135deg);
      transform: scaleY(-1) rotate(-135deg);
    }
  }

  @-o-keyframes spinner-oaa3wk {
    0% {
      -o-transform: scaleY(1) rotate(0deg);
      transform: scaleY(1) rotate(0deg);
    }

    49.99% {
      -o-transform: scaleY(1) rotate(135deg);
      transform: scaleY(1) rotate(135deg);
    }

    50% {
      -o-transform: scaleY(-1) rotate(0deg);
      transform: scaleY(-1) rotate(0deg);
    }

    100% {
      -o-transform: scaleY(-1) rotate(-135deg);
      transform: scaleY(-1) rotate(-135deg);
    }
  }

  @keyframes spinner-oaa3wk {
    0% {
      -webkit-transform: scaleY(1) rotate(0deg);
      -moz-transform: scaleY(1) rotate(0deg);
      -o-transform: scaleY(1) rotate(0deg);
      transform: scaleY(1) rotate(0deg);
    }

    49.99% {
      -webkit-transform: scaleY(1) rotate(135deg);
      -moz-transform: scaleY(1) rotate(135deg);
      -o-transform: scaleY(1) rotate(135deg);
      transform: scaleY(1) rotate(135deg);
    }

    50% {
      -webkit-transform: scaleY(-1) rotate(0deg);
      -moz-transform: scaleY(-1) rotate(0deg);
      -o-transform: scaleY(-1) rotate(0deg);
      transform: scaleY(-1) rotate(0deg);
    }

    100% {
      -webkit-transform: scaleY(-1) rotate(-135deg);
      -moz-transform: scaleY(-1) rotate(-135deg);
      -o-transform: scaleY(-1) rotate(-135deg);
      transform: scaleY(-1) rotate(-135deg);
    }
  }
</style>

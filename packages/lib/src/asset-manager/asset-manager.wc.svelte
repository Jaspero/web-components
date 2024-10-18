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
  import uploadIcon from '../../../lib/src/icons/upload.svg?raw';
  import closeCrossIcon from '../../../lib/src/icons/close-cross.svg?raw';
  import backArrowIcon from '../../../lib/src/icons/back-arrow.svg?raw';
  import addFolderIcon from '../../../lib/src/icons/add-folder.svg?raw';
  import addFilesIcon from '../../../lib/src/icons/add-files.svg?raw';

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
  export let minSelected: number;
  export let maxSelected: number;

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
    if (selectedItems[id]) {
      delete selectedItems[id];
      selectedItems = { ...selectedItems };
    }
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
          const fileExists = items.some((item) => item.name === file.name && item.size === file.size);
          if (fileExists) {
            console.log(`File ${file.name} already exists.`);
            return false; 
          }
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
      selectedItems = { ...selectedItems };
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
    if (Object.keys(selectedItems).length < minSelected){
      console.log("Please select a file first.");
      return;
    }
    if (Object.keys(selectedItems).length >= maxSelected) {
      console.log(`Too many files have been selected. The maximum allowed is ${maxSelected}.`);
      return;
    }
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
          items = items.filter(
            (item) =>
              item.type === 'folder' ||
              shownFiles.some((file) => (item as Asset).contentType.startsWith(file))
          );
        }
      })
      .finally(() => {
        loading = false;
      });
  }
  function handleClickOutside(event: MouseEvent) {
  const clickedElement = event.target as HTMLElement;
  const clickedOnAsset = clickedElement.closest('.asset-button');
  const clickedOnConfirm = clickedElement.closest('button');

  if(clickedOnConfirm && Object.keys(selectedItems).length >= maxSelected){
    return;
  }

  if (!clickedOnAsset) {
    clearSelection();
  }
}
  async function removeSelectedFiles(index: number, id: string) {
    const selectedIds = Object.keys(selectedItems);
    console.log(selectedIds);
    const indexes: any[] = [];
    for (const id of selectedIds) {
      indexes.push(items.findIndex(item => item.id === id));
    }
    console.log(indexes);

    const paired = selectedIds.map((value, index) => ({
      value,
      index: indexes[index]
    }));
    paired.sort((a, b) => b.index - a.index);

    const sortedValues = paired.map(item => item.value);
    const sortedIndices = paired.map(item => item.index);

    console.log(sortedValues); 
    console.log(sortedIndices); 
    for (let i = 0; i < sortedIndices.length; i++) {
      removeFile(sortedIndices[i], sortedValues[i]);
      cancelUpload(sortedValues[i].toString());
      service.remove(sortedValues[i].toString());
    }
}

  $: if (path) {
    loadData();
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore missing-declaration -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<section
  class="card"
  class:full-border={hoveringFile}
  on:dragover|preventDefault={() => (hoveringFile = true)}
  on:dragleave={() => (hoveringFile = false)}
  on:dragend={() => (hoveringFile = false)}
  on:drop|preventDefault={(e) => handleDrop(e)}
  on:click={(e) => handleClickOutside(e)}
>
  {#if hoveringFile}
    <div class="drop-here">
      {@html uploadIcon}
      <div>{wording.DROP_FILES_HERE}</div>
    </div>
  {:else if folderDialog}
    <header>
      <div class="header-actions">
        <button type="button" on:click={() => (folderDialog = false)}>
          {@html closeCrossIcon}
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
          {@html backArrowIcon}
        </button>

        <span class="route">{path.replace(rootPath, '') || '/'}</span>
      </nav>

      <div class="header-actions">
        <button type="button" title="Add Folder" on:click|preventDefault={addFolder}>
          {@html addFolderIcon}
        </button>

        <button
          type="button"
          title="Add Files"
          on:click|preventDefault={() => browseFilesEl.click()}
        >
          {@html addFilesIcon}
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
            <!-- svelte-ignore a11y-positive-tabindex -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
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
        {#if Object.keys(selectedItems).length > 1}
          <button type="button" on:click={removeSelectedFiles}>Delete files: ({Object.keys(selectedItems).length})</button>  
        {/if}
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

<style lang="postcss">
  * {
    box-sizing: border-box;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 802px;
    width: 100%;
    height: 500px;
    overflow: auto;
    background-color: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
    font-family: sans-serif;
  }

  header {
    z-index: 1;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }

  header .route {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 20px;
  }

  header nav {
    display: flex;
    gap: 12px;
  }

  .header-actions {
    display: flex;
    gap: 12px;
  }

  header button {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    cursor: pointer;
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
    position: sticky;
    bottom: 0;
    display: flex;
    background-color: white;
    padding: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    gap: 10px;
  }

  footer button {
    height: 40px;
    padding: 0 16px;
    font-weight: bold;
    background-color: #e66439;
    color: white;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.25s;
  }

  footer button:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  footer button:active {
    transform: scale(0.95);
  }

  .add-folder-submit {
    height: 32px;
    padding: 0 12px;
    font-weight: bold;
    background-color: #e66439;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 12px;
    transition: 0.25s;
  }

  .add-folder-submit:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .add-folder-submit:active {
    transform: scale(0.95);
  }

  .drop-here {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;

    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  .add-folder-form {
    padding: 20px;
  }

  .add-folder-input {
    display: block;
  }

  .add-folder-input span {
    display: block;
    font-size: 14px;
  }

  .add-folder-input input {
    border: 1px solid rgba(0, 0, 0, 0.08);
    height: 40px;
    padding: 0 12px;
    border-radius: 8px;
    font-size: 14px;
    margin-top: 4px;
  }

  :global(.file) {
    position: relative;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.12);
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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
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
    object-fit: contain;
    user-select: none;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.02);
  }

  .files {
    display: flex;
    flex: 1;
    align-content: flex-start;
    flex-wrap: wrap;
    padding: 12px;
    gap:7px;
  }

  .info {
    display: flex;
    flex: 1;
    align-content: flex-start;
    flex-wrap: wrap;
    padding: 20px;
  }

  .asset-button {
    width: 24%;
    padding: 8px;
    transition: 0.25s;
    border-radius: 12px;
    cursor: pointer;
  }

  .asset-button.selected {
    border: 1px solid #e66439;
  }

  :global(.asset-button:hover .file) {
    background-color: rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.2);
  }

  :global(.folder) {
    box-sizing: border-box;
    width: 25%;
    padding: 8px;
  }

  :global(.folder button) {
    width: 100%;
    padding: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.12);
    gap: 6px;
    background-color: transparent;
    font-size: 14px;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.25s;
  }

  :global(.folder button:hover) {
    background-color: rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.2);
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
  footer button {
  height: 40px;
  padding: 0 16px;
  font-weight: bold;
  background-color: #e66439;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.25s;
}
</style>

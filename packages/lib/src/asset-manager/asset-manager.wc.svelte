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
  import './asset-manager.wc.pcss';
  
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";
  import {notifications} from './notifications'
  import FileList from '../form-fields/file-list/file-list.wc.svelte';
  
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
  export let minSelected: number | null = null;
  export let maxSelected: number | null = null;

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
  
  let showSelectionNotification = false;
  let showSelectionNotification2 = false;
  let addedSuccessfully = false;
  let alreadyExists = false;
  let fileName = '';
  let existingFile = '';
  
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
  async function sleep(ms: number | undefined) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  function delay(ms: number | undefined) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function filesToItems(files: FileList) {
  const existingFiles: unknown[] = [];
  const addedFiles: unknown[] = [];
  const validFiles = Array.from(files).filter((file) => {
    const fileExists = items.some((item) => item.name === file.name && item.size === file.size);
    
    if (fileExists) {
      existingFiles.push(file);
      console.log(`File ${file.name} already exists!`);
      return false;
    }
    else{
      addedFiles.push(file);
    }
  
    // TODO: Show alert for each file violating file size
    if (maxSize && file.size > maxSize) {
      notifications.danger(`File ${file.name} is too big!`, 2000);
      return false; 
    }

    return true;
  });

  for(let i = 0; i<addedFiles.length; i++){
      fileName = addedFiles[i].name;
      addedSuccessfully = true;
      await sleep(800);
      addedSuccessfully = false;
      await sleep (800);
    } 
    addedSuccessfully = false;
    for(let i = 0; i<existingFiles.length; i++){
      existingFile = existingFiles[i].name;
      alreadyExists = true;
      await sleep(800);
      alreadyExists = false;
      await sleep(800);
    } 
  return Promise.all(
    validFiles.map((file) => service.upload(path, file))
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
    if (Object.keys(selectedItems).length > 0) {
      showSelectionNotification = false;
    }
    if (maxSelected && Object.keys(selectedItems).length === maxSelected){
      showSelectionNotification2 = false;
    }
  }

  async function confirmSelection() {
    if (minSelected){
      if (Object.keys(selectedItems).length < minSelected){
        showSelectionNotification = true;
        console.log("Please select a file first.");
        return;
      }
    }
    if (maxSelected){
      if (Object.keys(selectedItems).length > maxSelected) {
        showSelectionNotification2 = true;
        console.log(`Too many files have been selected. The maximum allowed is ${maxSelected}.`);
        return;
      }
    }
    const selection = Object.values(selectedItems);
    dispatch('selected', selectable === 'single' ? selection[0] : selection);
    showSelectionNotification = false;
    showSelectionNotification2 = false;
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
              shownFiles.some((file) => (item as unknown as Asset).contentType.startsWith(file))
          );
        }
      })
      .finally(() => {
        loading = false;
      });
  }
  function handleClickOutside(event: MouseEvent) {
  const clickedElement = event.target as HTMLElement;
  const clickedOnAsset = clickedElement.closest('.jp-asset-manager-asset-button');
  const clickedOnConfirm = clickedElement.closest('button');

  if(maxSelected){
    if(clickedOnConfirm && Object.keys(selectedItems).length > maxSelected){
      return;
    }
  }
  if (!clickedOnConfirm && !clickedOnAsset){
    showSelectionNotification = false;
  }
  if (!clickedOnAsset) {
    clearSelection();
    showSelectionNotification2 = false;
  }
}
  async function removeSelectedFiles(index: number, id: string) {
    const selectedIds = Object.keys(selectedItems);
    const indexes: any[] = [];
    for (const id of selectedIds) {
      indexes.push(items.findIndex(item => item.id === id));
    }
    const paired = selectedIds.map((value, index) => ({
      value,
      index: indexes[index]
    }));
    paired.sort((a, b) => b.index - a.index);

    const sortedValues = paired.map(item => item.value);
    const sortedIndices = paired.map(item => item.index);

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
  class="jp-asset-manager-card"
  class:full-border={hoveringFile}
  on:dragover|preventDefault={() => (hoveringFile = true)}
  on:dragleave={() => (hoveringFile = false)}
  on:dragend={() => (hoveringFile = false)}
  on:drop|preventDefault={(e) => handleDrop(e)}
  on:click={(e) => handleClickOutside(e)}
>
  {#if hoveringFile}
    <div class="jp-asset-manager-drop-here">
      {@html uploadIcon}
      <div>{wording.DROP_FILES_HERE}</div>
    </div>
  {:else if folderDialog}
    <div class = "jp-asset-manager-header">
      <div class="jp-asset-manager-header-actions">
        <button type="button" on:click={() => (folderDialog = false)}>
          {@html closeCrossIcon}
        </button>
      </div>
    </div>

    <form class="jp-asset-manager-add-folder-form" on:submit|preventDefault={createFolder}>
      <label class="jp-asset-manager-add-folder-input">
        <span>{wording.FOLDER_NAME}</span>
        <input bind:value={folderName} pattern={folderNamePattern} required />
      </label>
      <button class="jp-asset-manager-add-folder-submit" type="submit">{wording.SUBMIT}</button>
    </form>
  {:else}
    <div class = "jp-asset-manager-header">
      <nav>
        <button type="button" title="Back" disabled={path === rootPath} on:click={back}>
          {@html backArrowIcon}
        </button>

        <span class="route">{path.replace(rootPath, '') || '/'}</span>
      </nav>

      <div class="jp-asset-manager-header-actions">
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
    </div>

    {#if loading}
      <div class="jp-asset-manager-loader">
        <div class="jp-asset-manager-spinner"></div>
      </div>
    {:else if items.length == 0}
      <div class="jp-asset-manager-info">
        <p>{wording.FOLDER_IS_EMPTY}</p>
      </div>
    {:else}
      <div class="jp-asset-manager-files">
        {#each items as item, index}
          {#if item.type === 'folder'}
            <Folder folder={item} bind:path />
          {:else}
            <!-- svelte-ignore a11y-positive-tabindex -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
              class="jp-asset-manager-asset-button"
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
      <div class = "jp-asset-manager-footer">
        <button type="button" on:click={confirmSelection}>{wording.CONFIRM_SELECTION}</button>
        {#if Object.keys(selectedItems).length > 1}
          <button type="button" on:click={removeSelectedFiles}>Delete files: ({Object.keys(selectedItems).length})</button>  
        {/if}
        <div class="jp-asset-manager-notifications">
          {#each $notifications as notification (notification.id)}
              <div
                  animate:flip
                  class="jp-asset-manager-toast"
                  
                  transition:fly={{ y: 30 }}
              >
                  <div class="jp-asset-manager-content">{notification.message}</div>
                  {#if notification.icon}<i class={notification.icon} />{/if}
              </div>
          {/each}
          {#if showSelectionNotification}
            <div class="jp-asset-manager-toast"  transition:fly={{ y: 30 }}>
              <div class="jp-asset-manager-content">Please select a file first.</div>
            </div>
          {/if}
          {#if showSelectionNotification2}
            <div class="jp-asset-manager-toast"  transition:fly={{ y: 30 }}>
              <div class="jp-asset-manager-content">Too many files have been selected. The maximum allowed is {maxSelected}.</div>
            </div>
          {/if}
          {#if addedSuccessfully}
            <div class = "jp-asset-manager-toast-added" transition:fly={{ y: 30 }}>
              <div class="jp-asset-manager-content">File {fileName} added successfully!</div>
            </div>
          {/if}
          {#if alreadyExists}
            <div class = "jp-asset-manager-toast-exist" transition:fly={{ y: 30 }}>
              <div class="jp-asset-manager-content">File {existingFile} already exists!</div>
            </div>
          {/if} 
      </div>
    </div>
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
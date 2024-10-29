<svelte:options
  customElement={{
    tag: 'jp-asset-manager',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import type { AssetManagerService, Item } from '../types/asset-manager.service';
  import './asset-manager.wc.pcss';
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

  $: if (path) {
    loadData();
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section
  class="jp-asset-manager-card"
  class:jp-asset-manager-card-full-border={hoveringFile}
  on:dragover|preventDefault={() => (hoveringFile = true)}
  on:dragleave={() => (hoveringFile = false)}
  on:dragend={() => (hoveringFile = false)}
  on:drop|preventDefault={(e) => handleDrop(e)}
>
  {#if hoveringFile}
    <div class="jp-asset-manager-drop-here">
      {@html uploadIcon}
      <div>{wording.DROP_FILES_HERE}</div>
    </div>
  {:else if folderDialog}
    <header class="jp-asset-manager-header">
      <div class="jp-asset-manager-header-actions">
        <button
          class="jp-asset-manager-header-actions-button"
          type="button"
          on:click={() => (folderDialog = false)}
        >
          {@html closeCrossIcon}
        </button>
      </div>
    </header>

    <form class="jp-asset-manager-add-folder-form" on:submit|preventDefault={createFolder}>
      <label class="jp-asset-manager-add-folder-form-input">
        <span class="jp-asset-manager-add-folder-form-input-span">{wording.FOLDER_NAME}</span>
        <input
          class="jp-asset-manager-add-folder-form-input-input"
          bind:value={folderName}
          pattern={folderNamePattern}
          required
        />
      </label>
      <button class="jp-asset-manager-add-folder-form-submit" type="submit">{wording.SUBMIT}</button
      >
    </form>
  {:else}
    <header class="jp-asset-manager-header">
      <nav class="jp-asset-manager-header-nav">
        <button
          class="jp-asset-manager-header-actions-button"
          type="button"
          title="Back"
          disabled={path === rootPath}
          on:click={back}
        >
          {@html backArrowIcon}
        </button>

        <span class="jp-asset-manager-route">{path.replace(rootPath, '') || '/'}</span>
      </nav>

      <div class="jp-asset-manager-header-actions">
        <button
          class="jp-asset-manager-header-actions-button"
          type="button"
          title="Add Folder"
          on:click|preventDefault={addFolder}
        >
          {@html addFolderIcon}
        </button>

        <button
          class="jp-asset-manager-header-actions-button"
          type="button"
          title="Add Files"
          on:click|preventDefault={() => browseFilesEl.click()}
        >
          {@html addFilesIcon}
        </button>
      </div>
    </header>

    {#if loading}
      <div class="jp-asset-manager-loader">
        <div class="jp-asset-manager-loader-spinner"></div>
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
              class:jp-asset-manager-asset-button-selected={selectedItems[item.id]}
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
      <footer class="jp-asset-manager-footer">
        <button class="jp-asset-manager-footer-button" type="button" on:click={confirmSelection}
          >{wording.CONFIRM_SELECTION}</button
        >
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

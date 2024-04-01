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

  export let rootPath = '/';
  export let maxSize = 10 * 1048576;
  export let acceptedFiles = '*';
  export let shownFiles = '*';
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

  $: if (path) {
    loading = true;
    service
      .fetch(path)
      .then((data) => {
        items = data;

        if (shownFiles && shownFiles !== '*') {
          // @ts-ignore
          items = items.filter(item => item.type === 'folder' || (item as Asset).contentType.startsWith(shownFiles));
        }
      })
      .finally(() => {
        loading = false;
      });
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
      <div>Drop your files here</div>
    </div>
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
        <p>Folder is empty</p>
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
        <button type="button" on:click={confirmSelection}>Confirm Selection</button>
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

{#if folderDialog}
  <button type="button" on:click={() => (folderDialog = false)}>Close</button>

  <form on:submit|preventDefault={createFolder}>
    <label for="name">Folder Name</label>
    <input name="name" bind:value={folderName} pattern={folderNamePattern} required />
    <button type="submit">Submit</button>
  </form>
{/if}

<style>
  * {
    box-sizing: border-box;
  }

  .card {
    position: relative;
    max-width: 802px;
    width: 100%;
    height: 500px;
    overflow: auto;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
    font-family: sans-serif;
  }

  header {
    z-index: 1;
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

  .drop-here {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
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
    flex-wrap: wrap;
    padding: 12px;
  }

  .asset-button {
    width: 25%;
    padding: 8px;
    transition: 0.25s;
    border-radius: 12px;
    cursor: pointer;
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
    gap: 6px;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.12);
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
</style>

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

  export let rootPath = '/';
  export let maxSize = 10 * 1048576;
  export let acceptedFiles = '*';
  export let service: AssetManagerService;

  let path = rootPath;
  let items: Item[] = [];
  let browseFilesEl: HTMLInputElement;
  let loading = false;
  let hoveringFile = false;
  let folderName = '';
  let foloderDialog = false;
  let folderNamePattern = '[a-z_\\-]{3,}';

  async function removeFile(index: number, id: string) {
    items = items.filter((item) => item.id !== id);
  }

  async function handleFileInput(e) {
    if (e.target.files.length) {
      items = [
        ...items,
        ...await filesToItems(e.target.files)
      ]
    }

    browseFilesEl.value = null;
  }

  async function handleDrop(e) {
    if (e.dataTransfer.files.length) {
      items = [
        ...items,
        ...await filesToItems(e.dataTransfer.files)
      ]
    }

    hoveringFile = false;
  }

  function fileSize(size: number) {
    if (size < 1024) {
      return `${size} bytes`;
    } else if (size >= 1024 && size < 1048576) {
      return `${(size / 1024).toFixed(1)} KB`;
    } else if (size >= 1048576) {
      return `${(size / 1048576).toFixed(1)} MB`;
    }
  };

  function filesToItems(files: FileList) {
    return Promise.all(
      Array.from(files)
        .filter(file => { 

          // TODO: Show alert for each file violating file size
          if (!maxSize || maxSize < file.size) {
            return false;
          }

          return true;
        })
        .map(file => service.upload(path, file))
    );
  };

  function back() {
    path = path.split('/').slice(0, -1).join('/');
  }

  function addFolder() {
    folderName = '';
    foloderDialog = true;
  }

  async function createFolder() {
    path += `/${folderName}`;
    foloderDialog = false;
  }

  function cancelUpload(id: string) {
    items = items.filter((item) => item.id !== id);
  }

  $: if (path) {
    loading = true;
    service
      .fetch(path)
      .then((data) => {
        items = data;
      })
      .finally(() => {
        loading = false;
      });
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section
  class:full-border={hoveringFile}
  on:dragover|preventDefault={() => (hoveringFile = true)}
  on:dragleave={() => (hoveringFile = false)}
  on:dragend={() => (hoveringFile = false)}
  on:drop|preventDefault={(e) => handleDrop(e)}
>
  <header>
    <div>
      <button type="button" title="Back" disabled={path === rootPath} on:click={back}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
          ><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg
        >
      </button>
      <span>{path.replace(rootPath, '') || '/'}</span>
    </div>
    <div>
      <button type="button" title="Add Folder" on:click|preventDefault={addFolder}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
          ><path
            d="M560-320h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"
          /></svg
        >
      </button>
      <button type="button" title="Add Files" on:click|preventDefault={() => browseFilesEl.click()}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
          ><path
            d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"
          /></svg
        >
      </button>
    </div>
  </header>

  {#if hoveringFile}
    <div class="info">
      <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"
        ><path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        /></svg
      >
      <div>Drop your files here</div>
    </div>
  {/if}

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
          <Folder folder={item} bind:path={path} />
        {:else}
          <Asset asset={item} service={service} on:remove={() => removeFile(index, item.id)} on:cancel={() => cancelUpload(item.id)} />
        {/if}
      {/each}
    </div>
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

{#if foloderDialog}
  <button type="button" on:click={() => (foloderDialog = false)}>Close</button>
  <form class="folder-dialog" on:submit|preventDefault={createFolder}>
    <label for="name">Folder Name</label>
    <input name="name" bind:value={folderName} pattern={folderNamePattern} required />
    <button type="submit">Submit</button>
  </form>
{/if}

<style>
  section {
    position: relative;
    max-width: 750px;
    height: 500px;
    width: 100%;
    border-radius: 0.25rem;
    border: 1px dashed #e6510030;
  }

  button {
    cursor: pointer;
  }

  .full-border {
    border: 1px dashed var(--primary-color);
  }

  header {
    display: flex;
    padding: 0.5rem;
    justify-content: space-between;
  }

  header > div {
    display: flex;
  }

  header span {
    padding: 0.5rem;
    background-color: #ccc;
    max-width: 200px;
    min-width: 50px;
    line-height: 24px;
    overflow: hidden;
    border-left: 1px dotted #efefef;
  }

  header button {
    border: none;
    display: flex;
    padding: 0.5rem;
    background-color: #ccc;
    transition: 0.2s;
  }

  header button:hover {
    background-color: #212121;
  }

  header button:disabled {
    user-select: none;
    pointer-events: none;
    cursor: unset;
    background-color: #efefef;
  }

  header button:hover svg {
    fill: #fff;
  }

  .info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .files {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    height: 100%;
    padding: 1rem;
    gap: 1rem;
    overflow: auto;
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

  .folder-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
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

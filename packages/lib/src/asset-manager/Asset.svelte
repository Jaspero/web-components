<script lang="ts">
  import type { Asset, AssetManagerService } from '../types/asset-manager.service';
  import { createEventDispatcher } from 'svelte';
  import Progress from './Progress.svelte';
  import { fileSize } from './file-size';
  import fileRemoveIcon from '../../../lib/src/icons/file-remove.svg?raw';
  import folderOutlineIcon from '../../../lib/src/icons/folder-outline.svg?raw';
  import documentListIcon from '../../../lib/src/icons/document-list.svg?raw';

  export let wording: {
    PAUSE: string;
    RESUME: string;
    CANCEL: string;
  };
  export let asset: Asset;
  export let service: AssetManagerService;

  let removing = false;

  const dispatch = createEventDispatcher();

  async function remove() {
    removing = true;
    await service.remove(asset.id);
    removing = false;
    dispatch('remove');
  }
</script>

<div class="jp-asset-manager-file" class:removing>
  <button class="jp-asset-manager-file-remove" type="button" on:click|preventDefault={remove}>
    {@html fileRemoveIcon}
  </button>
  <div class="jp-asset-manager-file-icon">
    {#if asset.contentType.startsWith('image')}
      <img class="jp-asset-manager-file-icon-image" src={asset.url} alt={asset.name} />
    {:else if asset.contentType.startsWith('video')}
      <div class="jp-asset-manager-icon-only">
        {@html folderOutlineIcon}
      </div>
    {:else}
      <div class="jp-asset-manager-icon-only">
        {@html documentListIcon}
      </div>
    {/if}
  </div>
  <div class="jp-asset-manager-file-name">
    {asset.name}
    <Progress
      {wording}
      {asset}
      status={asset.status}
      progress={asset.progress}
      on:cancel={() => dispatch('cancel')}
    />
  </div>
  <div class="jp-asset-manager-file-info">
    <span>{fileSize(asset.size)}</span>
  </div>
</div>

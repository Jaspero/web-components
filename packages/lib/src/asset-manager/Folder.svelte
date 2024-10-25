<script lang="ts">
  import type { Folder } from '../types/asset-manager.service';
  import folderOutlineIcon from '../../../lib/src/icons/folder-outline.svg?raw';
  export let folder: Folder;
  export let path: string;
</script>

<div class="jp-asset-manager-folder">
  <button type="button" on:click={() => (path = folder.id)}>
    {@html folderOutlineIcon}
    <span>{folder.name}</span>
  </button>
</div>

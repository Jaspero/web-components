<script lang="ts">
  import type {Asset, AssetManagerService} from '../types/asset-manager.service';
	import { createEventDispatcher } from 'svelte';
	import Progress from './Progress.svelte';
  import {fileSize} from './file-size';

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

<div class="file" class:removing={removing}>
	<button type="button" on:click|preventDefault={remove}>
		<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
	</button>
	<Progress asset={asset} status={asset.status} progress={asset.progress} on:cancel={() => dispatch('cancel')} />
	<div class="file-icon">
		{#if asset.contentType.startsWith('image')}
			<img src={asset.url} alt={asset.name} />
		{:else if asset.contentType.startsWith('video')}
			<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z"/></svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
		{/if}
	</div>
	<div class="file-name">
		{asset.name}
	</div>
	<div class="file-info">
		<span>{fileSize(asset.size)}</span>
	</div>
</div>

<style>
	  .add-more {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 40px;
    height: 40px;
    right: -20px;
    bottom: -20px;
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
    background-color: var(--primary-color);
    fill: var(--text-on-primary);
  }

  .file-icon img {
    aspect-ratio: 1 / 1;
    object-fit: contain;
    user-drag: none;
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .file-icon svg {
    height: 50%;
  }
</style>
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
	<button class="file-remove" type="button" on:click|preventDefault={remove}>
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -960 960 960">
			<path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/>
		</svg>
	</button>
	<Progress asset={asset} status={asset.status} progress={asset.progress} on:cancel={() => dispatch('cancel')} />
	<div class="file-icon">
		{#if asset.contentType.startsWith('image')}
			<img class="file-icon-image" src={asset.url} alt={asset.name} />
		{:else if asset.contentType.startsWith('video')}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960">
				<path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z"/>
			</svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960">
				<path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
			</svg>
		{/if}
	</div>
	<div class="file-name">
		{asset.name}
	</div>
	<div class="file-info">
		<span>{fileSize(asset.size)}</span>
	</div>
</div>
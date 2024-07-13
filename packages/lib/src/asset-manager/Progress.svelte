<script lang="ts">
  import type { Writable } from 'svelte/store';
  import type {Asset} from '../types/asset-manager.service';
	import { createEventDispatcher } from 'svelte';

	export let wording: {
		PAUSE: string;
		RESUME: string;
		CANCEL: string;
	};
	export let asset: Asset;
	export let progress: Writable<number>;
	export let status: Writable<'uploading' | 'uploaded' | 'paused' | 'error'> | undefined;

	const dispatch = createEventDispatcher();

	function cancel() {
		asset.uploader.cancel();
		dispatch('cancel');
	}
</script>

{#if $status}
	{#if $status === 'uploading'}
		<span>{$progress} / 100</span>
		<button type="button" on:click={() => asset.uploader.pause()}>{wording.PAUSE}</button>
	{:else if $status === 'paused'}
		<span>{$progress} / 100</span>
		<button type="button" on:click={() => asset.uploader.resume()}>{wording.RESUME}</button>
		<button type="button" on:click={cancel}>{wording.CANCEL}</button>
	{:else if $status === 'error'}
		<!-- TODO: Some kind of error indicator -->
	{/if}
{/if}
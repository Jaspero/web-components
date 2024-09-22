<script lang="ts">
	import '../../../dist/asset-manager.wc.js';
	import {bind} from '../../../dist/bind.js';

	let v = '123';
	let show = true;

	$: console.log(v);
</script>

<button type="button" on:click={() => (show = !show)}>Show</button>
<button type="button" on:click={() => v = Math.random().toString()}>Toggle Value</button>

{#if show}
	<jp-input label="Cool" use:bind={v} on:bind={e => v = e.detail}></jp-input>
{/if}
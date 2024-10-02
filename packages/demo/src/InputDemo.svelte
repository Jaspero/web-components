<script lang="ts">
	import '../../../dist/input.wc.js';
	import {bind} from '../../../dist/bind.js';
	import '../../../dist/input.css';
	import '../../../dist/select.wc.js';
	import '../../../dist/select.css';

	let v = '123';
	let show = true;

	$: console.log(v);
</script>

<button type="button" on:click={() => (show = !show)}>Show</button>
<button type="button" on:click={() => v = Math.random().toString()}>Toggle Value</button>

{#if show}
	<jp-input label="Cool" required use:bind={v} suffix="ms" prefix="Vrijeme:" on:bind={e => v = e.detail}></jp-input>
{/if}

<jp-select label="Test" required disabled></jp-select>
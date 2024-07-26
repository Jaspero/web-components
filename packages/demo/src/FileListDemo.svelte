<script lang="ts">
  import {onMount} from 'svelte';
  import '../../../dist/file-list.wc.js';

  let el: HTMLDivElement;

	onMount(() => {
		const fileList = document.createElement('jp-file-list') as any

		el.appendChild(fileList);
	})
</script>

<div bind:this={el}></div>

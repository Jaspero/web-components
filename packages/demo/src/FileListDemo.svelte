<script lang="ts">
  import {onMount} from 'svelte';
  import '../../../dist/file-list.wc.js';

  let el: HTMLDivElement;
	let fileList: any;

	async function save() {
		await fileList.save();
		console.log(222, fileList.getValue());
	}

	onMount(() => {
		fileList = document.createElement('jp-file-list') as any;
		fileList.value = ['https://placehold.co/600x400/000000/CCCCCC.png', 'https://placehold.co/600x400/000000/RRRRRR.png', 'https://firebasestorage.googleapis.com/v0/b/move-and-meet-202be.appspot.com/o/move-venues%2Fimg-F8y32Mkm.mov?alt=media'];
		fileList.service = {
			uploadFile: async () => 'https://placehold.co/200x200/eeeeee/CCCCCC.png'
		}

		el.appendChild(fileList);
	});
</script>

<div bind:this={el}></div>

<button on:click={save}>Save</button>
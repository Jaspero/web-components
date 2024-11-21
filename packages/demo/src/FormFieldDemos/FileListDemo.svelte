<script lang="ts">
  import { onMount } from 'svelte';
  import '../../../../dist/file-list.wc.js';
  import '../../../../dist/file-list.css';
  import '../../../../dist/cropper.wc.js';

  let el: HTMLDivElement;
  let fileList: any;

  async function save() {
    await fileList.save();
    console.log(222, fileList.getValue());
  }

  onMount(() => {
    fileList = document.createElement('jp-file-list') as any;
    fileList.cropperEnable = 'mandatory';
    fileList.value = [
    ];

    el.appendChild(fileList);
  });
</script>

<div bind:this={el}></div>

<button on:click={save}>Save</button>

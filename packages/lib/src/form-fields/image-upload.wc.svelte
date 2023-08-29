<svelte:options
  customElement={{
    tag: 'jp-image-upload',
		shadow: 'none',
		extend: (customElementConstructor) => {
      return class extends customElementConstructor {
        static formAssociated = true;
        constructor() {
          super();
          this.attachedInternals = this.attachInternals();
        }
      };
    }
	}}
/>

<script lang="ts">
  import type ImageService from '../types/image.service'
  import { createEventDispatcher } from 'svelte'

  export let attachedInternals: ElementInternals;
  export let value: string = '';
  export let id: string;
  export let name: string;

  let isLocal = false;
  let img = '';
  let file = null;

  export let service: ImageService;

  export const getValue = () => value

  const dispatch = createEventDispatcher()
  $: {
    attachedInternals.checkValidity();
    attachedInternals.setFormValue(value);
    dispatch('value', { value });
  }

  export async function save() {
    if(isLocal){
      try {
        value = await service.uploadFile(file)
      } catch(err) {
        console.log(err)
      }
    }
    return value
  }

  async function fileChanged(event) {
    isLocal = true
    value = event.target.value
    file = event.target.files[0]
    const base64 = await convertBase64(file) as string;
    img = base64;
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => resolve(fileReader.result)
      fileReader.onerror = (err) => reject(err)
    })
  }
</script>

<div class="flex">
  <input type="text" {name} {id} bind:value={value} disabled={isLocal}>
  <div class="preview-button">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
  </div>
  <div class="preview">
    <img src={isLocal ? img : value} width="100px" alt="preview" hidden={!value && !img}>
  </div>
  <div class="relative w-4">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/></svg>
    <input 
      type="file" 
      accept={service.acceptedFiles} 
      on:change={(e) => {fileChanged(e)}} 
      class="absolute z-10 opacity-0 w-full h-full left-0 top-0 cursor-pointer">
  </div>
  <button hidden={!isLocal} on:click|preventDefault={() => {isLocal = false; img = ''; value = ''}}>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
  </button>
</div>

<style>
  .preview {
    display: none
  }
  .preview-button:hover + .preview {
    display: block
  }
</style>
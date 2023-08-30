<svelte:options
  customElement={{
    tag: 'jp-quill',
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
  import type { Quill } from 'quill';
  import { createEventDispatcher, onMount } from 'svelte';
  import type ImageService from '../types/image.service';

  export let attachedInternals: ElementInternals;
  export let service: ImageService;
  // export let currentlyUploading: string = '';
  export let value: string = '';
  export let id: string | null = null;
  export let name: string | null = null;
  export let label = '';
  export let options: any = {
    modules: { toolbar: [
      ['bold', 'italic', 'underline'],        // toggled buttons
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      ['image'],
      [{ 'align': [] }], ['clean']]
    },
    theme: 'snow'
  };

  let fileHolder;

  export const getValue = () => value;

  const dispatch = createEventDispatcher();

  let containerEl: HTMLDivElement;
  let editor: Quill;

  $: {
    attachedInternals.checkValidity();
    attachedInternals.setFormValue(value);
    dispatch('value', { value });
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result)
      fileReader.onerror = (err) => reject(err)
    })
  }

  function selectLocalImage() {
    fileHolder = document.createElement('input');
    fileHolder.setAttribute('type', 'file');
    fileHolder.setAttribute('accept', service.acceptedFiles)
    fileHolder.setAttribute("style", "visibility:hidden");
    fileHolder.onchange = async () => {
      const file = fileHolder.files[0];
      // currentlyUploading = await convertBase64(file)
      const url = await service.uploadFile(file)
      // currentlyUploading = ''
      insertToEditor(url)
    }
    fileHolder.click();
    // Am I allowed to remove fileHolder here?
  }

  function insertToEditor(url) {
    const range = editor.getSelection()
    editor.insertEmbed(range.index, 'image', url)
  }

  onMount(() => {
    let quill = getQull();

		if (value) {
			containerEl.innerHTML = value;
		}

    
    editor = new quill(containerEl, options);
    
    if(service){
      editor.getModule('toolbar').addHandler('image', () => {
        selectLocalImage()
      })
    }

    editor.on('text-change', () => {
      value = editor.root.innerHTML;
    });
  });

  function getQull(): Quill {
    // @ts-ignore
    return window.Quill;
  }
</script>

{#if label}
  <span>{label}</span>
{/if}
<div bind:this={containerEl}></div>
<textarea {id} {name} {value} hidden></textarea>

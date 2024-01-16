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
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline'], // toggled buttons
        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['blockquote', 'code-block'],
        ['image'],
        [{ align: [] }],
        ['clean']
      ]
    },
    theme: 'snow'
  };

  let fileHolder;
  let internalValue;

  export const getValue = () => internalValue;

  const dispatch = createEventDispatcher();

  let containerEl: HTMLDivElement;
  let editor: Quill;

  $: {
    attachedInternals.checkValidity();
    attachedInternals.setFormValue(internalValue);
    dispatch('value', { internalValue });
  }

  export async function save(id?: string) {
    await Promise.allSettled(
      [...editor.root.querySelectorAll('img')].map(async (img) => {
        const blob = await b64toBlob(img.src);
        const url = await service.uploadFile(blob, id);
        img.src = url;
      })
    );
  }

  const b64toBlob = (base64) => fetch(base64).then((res) => res.blob());

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (err) => reject(err);
    });
  };

  function selectLocalImage() {
    fileHolder = document.createElement('input');
    fileHolder.setAttribute('type', 'file');
    fileHolder.setAttribute('accept', service.acceptedFiles);
    fileHolder.setAttribute('style', 'visibility:hidden');
    fileHolder.onchange = async () => {
      const file = fileHolder.files[0];
      const b64 = await convertBase64(file);
      const range = editor.getSelection();
      editor.insertEmbed(range.index, 'image', b64);
    };
    fileHolder.click();
    // Am I allowed to remove fileHolder here?
  }

  $: {
    if(editor){
      editor.setText(value)
    }
  }

  onMount(() => {
    let quill = getQull();

    editor = new quill(containerEl, options);

    if (service) {
      editor.getModule('toolbar').addHandler('image', () => {
        selectLocalImage();
      });
    }

    editor.on('text-change', () => {
      internalValue = editor.root.innerHTML;
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
<textarea {id} {name} bind:value={internalValue} hidden></textarea>

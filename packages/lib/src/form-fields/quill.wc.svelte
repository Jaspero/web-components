<svelte:options
  customElement={{
    tag: 'jp-quill',
    shadow: 'none',
    delegatesFocus: true,
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
        // toggled buttons
        ['bold', 'italic', 'underline'],
        // custom dropdown
        [{ size: ['small', false, 'large', 'huge'] }],
        // dropdown with defaults from theme
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['blockquote', 'code-block'],
        ['image'],
        [{ align: [] }],
        ['clean']
      ]
    },
    theme: 'snow'
  };
  export let required = false;
  export let validationMessages: {
    required?: string;
  } = {};
  export let requiredValidationMessage: string;

  let fileHolder: HTMLInputElement;
  let internalValue = '';

  export const getValue = () => internalValue || '';

  const dispatch = createEventDispatcher();

  let containerEl: HTMLDivElement;
  let editor: Quill;
  let textareaEl: HTMLTextAreaElement;

  $: {
    attachedInternals.checkValidity();

    if (textareaEl) {
      if (!internalValue && required) {
        attachedInternals.setValidity(
          { valueMissing: true },
          requiredValidationMessage || validationMessages.required || textareaEl.validationMessage,
          textareaEl
        );
      } else {
        attachedInternals.setValidity({});
      }
    }

    attachedInternals.setFormValue(internalValue || '');
    dispatch('value', { internalValue: internalValue || '' });
  }

  export async function save(id?: string) {
    await Promise.allSettled(
      [...editor.root.querySelectorAll('img')].map(async (img) => {
        const blob = await b64toBlob(img.src);
        const url = await service.uploadFile(blob, id);
        img.src = url;
      })
    );
    value = editor.root.innerHTML;
    internalValue = editor.root.innerHTML || '';

    return internalValue;
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
  }

  $: {
    if (editor) {
      editor.root.innerHTML = value;
    }
  }

  onMount(() => {
    let quill = getQuill();

    editor = new quill(containerEl, options);

    if (service) {
      editor.getModule('toolbar').addHandler('image', () => {
        selectLocalImage();
      });
    }

    editor.on('text-change', () => {
      internalValue = editor.root.innerHTML || '';
    });
  });

  function getQuill(): Quill {
    // @ts-ignore
    return window.Quill;
  }
</script>

{#if label}
  <div class="label">{label}</div>
{/if}
<div bind:this={containerEl} />
<textarea {id} {name} bind:value={internalValue} {required} tabindex="-1" bind:this={textareaEl} />

<style>
  .label {
    margin-top: 0.5rem;
    margin-bottom: 0.125rem;
    font-size: 0.875rem;
  }

  textarea {
    width: 100%;
    height: 0;
    opacity: 0;
    position: absolute;
  }
</style>
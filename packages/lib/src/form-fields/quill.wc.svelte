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
  export let value: string = '';
  export let id: string | null = null;
  export let name: string | null = null;
  export let label = '';
  export let options: any;
  export let toolbarStyle = `border-color:var(--border-primary)!important;border-top-left-radius:.25rem;border-top-right-radius:.25rem;`;
  export let containerStyle = `border-color: var(--border-primary)!important;border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem;`;
  export let editorStyle = `max-height: 500px;`;
  export let required = false;
  export let validationMessages: {
    required?: string;
  } = {};
  export let requiredValidationMessage: string;

  let fileHolder: HTMLInputElement;
  let internalValue = '';

  export const getValue = () => internalValue || '';

  const dispatch = createEventDispatcher();

  let wrapperEl: HTMLDivElement;
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
    dispatch('value', internalValue || '');
  }

  export async function save(id?: string) {
    await Promise.all(
      [...editor.root.querySelectorAll('img')].map(async (img) => {
        try {
          const blob = await b64toBlob(img.src);
          const url = await service.uploadFile(blob, id);
          img.src = url;
        } catch (e) {
          console.error(e);
        }
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

  function applyStyles() {
    wrapperEl.querySelector('.ql-toolbar').setAttribute('style', toolbarStyle);
    wrapperEl.querySelector('.ql-container').setAttribute('style', containerStyle);
    wrapperEl.querySelector('.ql-editor').setAttribute('style', editorStyle);
  }

  onMount(() => {
    let quill = getQuill();

    if (!options) {
      // @ts-ignore
      if (window.quillBetterTable) {
        quill.register(
          {
            // @ts-ignore
            'modules/better-table': window.quillBetterTable
          },
          true
        );
      }

      options = {
        modules: {
          table: false,
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{'script': 'sub'}, {'script': 'super'}],
            [{'indent': '-1'}, {'indent': '+1'}],
            ['table', 'blockquote', 'code-block'],
            ['image', 'link'],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['clean']
          ],
          // @ts-ignore
          ...(window.quillBetterTable && {
            'better-table': {
              operationMenu: {
                items: {
                  unmergeCells: {
                    text: 'Another unmerge cells name'
                  }
                }
              }
            },
            keyboard: {
              // @ts-ignore
              bindings: window.quillBetterTable.keyboardBindings
            }
          })
        },
        theme: 'snow'
      };
    }

    editor = new quill(containerEl, options);

    // @ts-ignore
    if (window.quillBetterTable) {
      editor.getModule('toolbar').addHandler('table', () => {
        const tableModule = editor.getModule('better-table');
        tableModule.insertTable(3, 3);
      });
    }

    if (service) {
      editor.getModule('toolbar').addHandler('image', () => {
        selectLocalImage();
      });
    }

    editor.on('text-change', () => {
      internalValue = editor.root.innerHTML || '';
    });

    applyStyles();
  });

  function getQuill(): Quill {
    // @ts-ignore
    return window.Quill;
  }
</script>

  <div class="label-container">
    <div class="label">{label}</div>
    {#if required}
      <span class="required-indicator">*</span>
    {/if}
  </div>
  <div bind:this={wrapperEl}>
    <div bind:this={containerEl} />
  </div>
  <textarea {id} {name} bind:value={internalValue} {required} tabindex="-1" bind:this={textareaEl} />

  <style>
  .label-container {
    display: flex;
    align-items: center;
    margin-top: 1rem; 
    margin-bottom: 0.5rem; 
  }
  .required-indicator {
    font-size: 1rem; 
    margin-left: 0.5rem; 
  }
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

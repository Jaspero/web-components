<svelte:options
  customElement={{
    tag: 'jp-ckeditor',
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
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';
  import type ImageService from '../types/image.service';

  export let attachedInternals: ElementInternals;
  export let service: ImageService;
  export let value: string = '';
  export let id: string | null = null;
  export let name: string | null = null;
  export let label = '';
  export let options: any = {
    toolbar: {
      items: [
        'findAndReplace',
        'selectAll',
        '|',
        'heading',
        '|',
        'bold',
        'italic',
        'strikethrough',
        'underline',
        'code',
        'subscript',
        'superscript',
        'removeFormat',
        '|',
        'bulletedList',
        'numberedList',
        'todoList',
        '|',
        'outdent',
        'indent',
        '|',
        'undo',
        'redo',
        '-',
        'fontSize',
        'fontColor',
        'fontBackgroundColor',
        'highlight',
        '|',
        'alignment',
        '|',
        'link',
        'uploadImage',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'codeBlock',
        'htmlEmbed',
        '|',
        'specialCharacters',
        'horizontalLine',
        '|',
        'sourceEditing'
      ],
      shouldNotGroupWhenFull: true
    },
    mediaEmbed: {
      previewsInData: true
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true
      }
    },
    // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html#configuration
    heading: {
      options: [
        { model: 'paragraph', title: 'Paragraph' },
        { model: 'heading2', view: 'h2', title: 'Heading 2' },
        { model: 'heading3', view: 'h3', title: 'Heading 3' },
        { model: 'heading4', view: 'h4', title: 'Heading 4' },
        { model: 'heading5', view: 'h5', title: 'Heading 5' },
        { model: 'heading6', view: 'h6', title: 'Heading 6' }
      ]
    },
    fontSize: {
      options: [10, 12, 14, 'default', 18, 20, 22],
      supportAllValues: true
    },
    htmlSupport: {
      allow: [
        {
          name: /.*/,
          attributes: true,
          classes: true,
          styles: true
        }
      ]
    },
    htmlEmbed: {
      showPreviews: true
    },
    link: {
      decorators: {
        openInNewTab: {
          mode: 'manual',
          label: 'Open in a new tab',
          attributes: {
            target: '_blank',
            rel: 'noopener noreferrer'
          }
        },
        defaultProtocol: 'https://',
        toggleDownloadable: {
          mode: 'manual',
          label: 'Downloadable',
          attributes: {
            download: 'file'
          }
        }
      }
    },
    removePlugins: [
      // These two are commercial, but you can try them out without registering to a trial.
      // 'ExportPdf',
      // 'ExportWord',
      'AIAssistant',
      'CKBox',
      'CKFinder',
      'EasyImage',
      // This sample uses the Base64UploadAdapter to handle image uploads as it requires no configuration.
      // https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/base64-upload-adapter.html
      // Storing images as Base64 is usually a very bad idea.
      // Replace it on production website with other solutions:
      // https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/image-upload.html
      // 'Base64UploadAdapter',
      'RealTimeCollaborativeComments',
      'RealTimeCollaborativeTrackChanges',
      'RealTimeCollaborativeRevisionHistory',
      'PresenceList',
      'Comments',
      'TrackChanges',
      'TrackChangesData',
      'RevisionHistory',
      'Pagination',
      'WProofreader',
      // Careful, with the Mathtype plugin CKEditor will not load when loading this sample
      // from a local file system (file://) - load this site via HTTP server if you enable MathType.
      'MathType',
      // The following features are part of the Productivity Pack and require additional license.
      'SlashCommand',
      'Template',
      'DocumentOutline',
      'FormatPainter',
      'TableOfContents',
      'PasteFromOfficeEnhanced',
      'CaseChange'
    ]
  };
  export let required = false;
  export let validationMessages: {
    required?: string;
  } = {};
  export let requiredValidationMessage: string;

  let internalValue = '';

  export const getValue = () => internalValue || '';

  const dispatch = createEventDispatcher();
  const b64toBlob = (base64) => fetch(base64).then((res) => res.blob());

  let wrapperEl: HTMLDivElement;
  let containerEl: HTMLDivElement;
  let editor: any;
  let textareaEl: HTMLTextAreaElement;

  export async function save(id?: string) {
    const regex = /src="data:(.*?)"/g;
    const cleanupRegex = /(^src=")|("$)/g;
    const items = [...(internalValue.match(regex) || [])];

    if (items.length) {
      await Promise.all(
        [...items].map(async (img) => {
          try {
            const blob = await b64toBlob(img.replace(cleanupRegex, ''));
            const url = await service.uploadFile(blob, id);
            internalValue = internalValue.replace(img, `src="${url}"`);
          } catch (e: any) {
            console.error(e);
          }
        })
      );

      value = internalValue;

      dispatch('value', internalValue || '');
    }

    return internalValue;
  }

  function getEditor() {
    // @ts-ignore
    return window.CKEDITOR?.ClassicEditor;
  }

  onMount(() => {
    internalValue = value;

    const ei = getEditor();

    if (!ei) {
      console.warn('CKEditor not found');
      return;
    }

    ei.create(containerEl, options)
      .then((e) => {
        editor = e;

        if (value) {
          editor.setData(value);
        }

        editor.model.document.on('change:data', () => {
          internalValue = editor.getData();

          attachedInternals.checkValidity();

          if (textareaEl) {
            if (!internalValue && required) {
              attachedInternals.setValidity(
                { valueMissing: true },
                requiredValidationMessage ||
                  validationMessages.required ||
                  textareaEl.validationMessage,
                textareaEl
              );
            } else {
              attachedInternals.setValidity({});
            }
          }

          attachedInternals.setFormValue(internalValue || '');
          dispatch('value', internalValue || '');
        });
      })
      .catch(console.error);
  });

  onDestroy(() => {
    if (editor) {
      editor.destroy().catch(console.error);
    }
  });
</script>

{#if label}
  <div class="label">{label}</div>
{/if}
<div bind:this={wrapperEl}>
  <div bind:this={containerEl} />
</div>
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

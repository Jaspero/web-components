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
  import type ImageService from '../../types/image.service';
  import './ckeditor.wc.pcss';

  export let attachedInternals: ElementInternals;
  export let service: ImageService;
  export let value: string = '';
  export let id: string | null = null;
  export let name: string | null = null;
  export let height: string | null = null;
  export let width: string | null = null;
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
      'AIAssistant',
      'CKBox',
      'CKFinder',
      'EasyImage',
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
      'MathType',
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
  const b64toBlob = (base64: string) => fetch(base64).then((res) => res.blob());

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

  $: if (height && editor) {
    editor.editing.view.change((writer: any) => {
      writer.setStyle('height', height, editor.editing.view.document.getRoot());
    });
  }

  $: if (width && editor) {
    const toolbarElement = editor.ui.view.toolbar.element;
    const editorElement = editor.ui.view.editable.element;

    toolbarElement.style.width = `${width}`;
    toolbarElement.style.boxSizing = 'border-box';

    editorElement.style.width = `${width}`;
    editorElement.style.boxSizing = 'border-box';
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
              const message =
                requiredValidationMessage ||
                validationMessages.required ||
                textareaEl.validationMessage;

              if (message) {
                attachedInternals.setValidity({ valueMissing: true }, message, textareaEl);
              }
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
  $: displayLabel = required ? `${label} *` : label;
</script>

{#if label}
  <div class="jp-ckeditor-label">
    {@html displayLabel}
  </div>
{/if}
<div class="jp-ckeditor" bind:this={wrapperEl}>
  <div bind:this={containerEl} />
</div>
<textarea
  class="jp-ckeditor-textarea"
  {id}
  {name}
  bind:value={internalValue}
  {required}
  bind:this={textareaEl}
/>

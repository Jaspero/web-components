<script lang="ts">
  import { onMount } from 'svelte';
  /*import '../../../dist/alert.wc.js'; */
  /*import '../../../dist/confirm.wc.js'*/
  /*import '../../../dist/async-table.wc.js';*/
  /*import '../../../dist/input.wc.js';
  /*import '../../../dist/quill.wc.js';*/
  import '../../../dist/autocomplete.wc.js';
  import '../../../dist/checkbox.wc.js';
  /*import '../../../dist/progress-spinner.wc.js'*/
  import '../../../dist/chips.wc.js';
  import '../../../dist/datepicker.wc.js';
  import '../../../dist/multiselect.wc.js';
  import '../../../dist/select.wc.js';
  import '../../../dist/accordion.wc.js';
  import '../../../dist/bellow.wc.js';
  import '../../../dist/radio.wc.js'
  import '../../../dist/json-editor.wc.js'
  import '../../../dist/code-editor.wc.js'
  /*import '../../../dist/image-gallery.wc.js'
  import '../../../dist/image-upload.wc.js'
  import '../../../dist/paginator.wc.js'*/
  import '../../../dist/table.wc.js'
  import '../../../dist/textarea.wc.js';
  import '../../../dist/button.wc.js'
  import '../../../dist/link.wc.js'
  import '../../../dist/tabs.wc.js'
  import '../../../dist/slider.wc.js'
  import '../../../dist/stepper.wc.js';
  import '../../../dist/tree.wc.js';
  import { renderAlert } from '../../../dist/render-alert.js';
  import { renderConfirm } from '../../../dist/render-confirm.js';
  import { FirebaseTableService } from './firebase-table.service';
  import { MockImageService } from './mock-image.service..js';

  let el: HTMLDivElement;
  let formEl: HTMLFormElement;

  onMount(() => {
    // const instanceEl = document.createElement('jp-bpmn-overview');
    const instanceEl = document.createElement('jp-async-table');

    // @ts-ignore
    instanceEl.service = new FirebaseTableService();

    // @ts-ignore
    instanceEl.headers = [
      {
        key: '/publicationDate',
        label: 'Publication Date'
      },
      {
        key: '/readTime',
        label: 'Read Time',
        pipes: [(value) => value + 'min']
      },
      {
        key: '/title',
        label: 'Title',
        sortable: true
      },
      {
        key: '/author',
        label: 'Author'
      },
      {
        key: '/author',
        label: 'Author'
      },
      {
        key: '/author',
        label: 'Author'
      },
      {
        key: '/author',
        label: 'Author'
      },
      {
        key: '/author',
        label: 'Author'
      },
      {
        key: '/author',
        label: 'Author'
      },
      {
        key: '/author',
        label: 'Author'
      },
      {
        key: '/author',
        label: 'Author'
      }
    }
    await filelist.save()
    console.log(filelist.value)
  }
</script>

<form on:submit|preventDefault={(e) => submit(e)}>
  <jp-file-list name="filelist" value="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" bind:this={filelist}></jp-file-list>
  <button type="submit">save</button>
  <button on:click|preventDefault={() => filelist.save()}></button>
</form>

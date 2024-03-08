<script lang="ts">
  import { onMount } from 'svelte';
  import '../../../dist/alert.wc.js';
  /*import '../../../dist/confirm.wc.js'*/
  import '../../../dist/async-table.wc.js';
  import '../../../dist/file-list.wc.js';
  import '../../../dist/file-upload.wc.js';
  import '../../../dist/quill.wc.js';
  /*import '../../../dist/input.wc.js';
  import '../../../dist/autocomplete.wc.js';
  import '../../../dist/checkbox.wc.js';
  /*import '../../../dist/progress-spinner.wc.js'*/
  import '../../../dist/chips.wc.js';
  import '../../../dist/datepicker.wc.js';
  import '../../../dist/multiselect.wc.js';
  import '../../../dist/select.wc.js';
  import '../../../dist/accordion.wc.js';
  import '../../../dist/bellow.wc.js';
  import '../../../dist/radio.wc.js';
  import '../../../dist/json-editor.wc.js';
  import '../../../dist/code-editor.wc.js';
  /*import '../../../dist/image-gallery.wc.js'
  import '../../../dist/image-upload.wc.js'
  import '../../../dist/paginator.wc.js'*/
  import '../../../dist/table.wc.js';
  import '../../../dist/file-list.wc.js';
  import '../../../dist/textarea.wc.js';
  import '../../../dist/button.wc.js';
  import '../../../dist/link.wc.js';
  import '../../../dist/tabs.wc.js';
  import '../../../dist/slider.wc.js';
  import '../../../dist/stepper.wc.js';
  import '../../../dist/tree.wc.js';
  import '../../../dist/node.wc.js';
  import '../../../dist/node-draggable.wc.js';
  import '../../../dist/toggle.wc.js';
  import '../../../dist/index.css';
  import '../../../dist/color.wc.js';
  import '../../../dist/input.wc.js';
  import '../../../dist/tooltip.wc.js';
  import '../../../dist/multisearch.wc.js';
  import { renderAlert } from '../../../dist/render-alert.js';
  import { renderConfirm } from '../../../dist/render-confirm.js';
  import { FirebaseTableService } from './firebase-table.service';
  import { MockImageService } from './mock-image.service..js';
  import { jpTreeStructure } from '../../../dist/structure.js';

  let el: HTMLDivElement;
  let formEl: HTMLFormElement;
  let quill: any;

  async function save() {
    await quill.save();
  }

  onMount(() => {

    // const multiselect = document.createElement('jp-multiselect') as any;
    // multiselect.options = [{label: 'a', value: 'a'}, {label: 'b', value: 'b'}];
    // multiselect.value = ['a'];
    // el.appendChild(multiselect);

    // quill = document.createElement('jp-quill');
    // quill.value = `<p>Pero</p>`;
    // quill.service = new MockImageService();

    // el.appendChild(quill);

    // const datepicker = document.createElement('jp-datepicker') as any;
    // el.appendChild(datepicker);

    // const multisearch = document.createElement('jp-multisearch')
    // multisearch.value = 'aaa, bbb'
    // multisearch.service = {
    //   i: 0,
    //   async search(str){
    //     await new Promise(resolve => setTimeout(resolve, 1500));
    //     return [{"value": "str+1"}, {"value": "str+2"}]
    //   },
    //   async loadMore(str){
    //     await new Promise(resolve => setTimeout(resolve, 1500));
    //     this.loadMore = null
    //     return [{"value": str}]
    //   },
    //   async getSingle(value){
    //     await new Promise(resolve => setTimeout(resolve, 1500));
    //     return {value: value, label: this.i++}
    //   }
    // }
    // el.appendChild(multisearch)

    const asyncTable = document.createElement('jp-async-table') as any;
    asyncTable.headers = [
      {
        key: '/name',
        label: 'Name'
      },
      {
        key: '/age',
        label: 'Age',
        sortable: true
      },
      {
        key: '/disabled',
        label: 'Disabled',
        disabled: true
      }
    ];
    asyncTable.service = {
      get: async () => {
        return {
          rows: [
            { name: 'John', age: 30, disabled: true },
            { name: 'Jane', age: 31, disabled: true }
          ],
          hasMore: false
        };
      },
      export: async () => {
        return [
          { name: 'John', age: 30, disabled: true },
          { name: 'Jane', age: 31, disabled: true }
        ];
      },
      adjustPageSize: async () => {},
    };
    asyncTable.allowArrangeColumns = false;
    asyncTable.pageSizes = [10];
    asyncTable.sort = {key: '/age', direction: 'asc'};
    el.appendChild(asyncTable);

    // renderAlert({
    //   title: 'Success',
    //   message: 'This is a success',
    //   duration: 600000
    // })
  });

  const options = JSON.stringify([{"label":"A","value":"a"}, {"label":"B","value":"b"}]);
</script>

<div bind:this={el}></div>

<!-- <jp-file-upload service={MockImageService} name="test" acceptedFiles="image/*"></jp-file-upload>
<jp-input name="test" label="asdf" labelType="outside"></jp-input>
<jp-chips name="Test" label="Test" labelType="outside"></jp-chips>
<jp-file-upload service={MockImageService} name="test" acceptedFiles="image/*"></jp-file-upload>
<jp-textarea name="Test" label="Test" labeltype="outside"></jp-textarea>
<jp-file-list name="test"></jp-file-list>
<jp-file-upload service={MockImageService} name="test" acceptedFiles="image/*"></jp-file-upload>
<button on:click={save}>Save</button> -->

<form>
  <p>Validity Test</p>
  <jp-input name="name" label="Name" labelType="outside" required></jp-input>
  <jp-input name="email" label="Email" type="email" labelType="outside" required></jp-input>
  <jp-quill name="Content" label="Content" required />
  <jp-select required options={options} label="Thing" />
  <button>Submit</button>
</form>
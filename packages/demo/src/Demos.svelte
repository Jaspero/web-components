<script lang="ts">
  import { onMount } from 'svelte';
  import '../../../dist/alert.wc.js';
  /*import '../../../dist/confirm.wc.js'*/
  import '../../../dist/async-table.wc.js';
  import '../../../dist/file-list.wc.js';
  import '../../../dist/file-upload.wc.js';
  import '../../../dist/textarea.wc.js';
  import '../../../dist/quill.wc.js';
  import '../../../dist/ckeditor.wc.js';
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
  let dislexie = false;

  async function save() {
    await quill.save();
    console.log('quill value', quill.getValue())
  }

  onMount(() => {

    
    const fileList = document.createElement('jp-file-list') as any;
    fileList.service = new MockImageService();
    el.appendChild(fileList);

    // const multiselect = document.createElement('jp-multiselect') as any;
    // multiselect.options = [{label: 'a', value: 'a'}, {label: 'b', value: 'b'}];
    // multiselect.value = ['a'];
    // el.appendChild(multiselect);

    quill = document.createElement('jp-ckeditor');
    quill.value = `<p>Pero</p><div class="quill-better-table-wrapper"><table class="quill-better-table" style="width: 300px;"><colgroup><col width="100"><col width="100"><col width="100"></colgroup><tbody><tr data-row="row-6pvi"><td data-row="row-6pvi" rowspan="1" colspan="1"><p class="qlbt-cell-line" data-row="row-6pvi" data-cell="cell-seg5" data-rowspan="1" data-colspan="1"><br></p></td><td data-row="row-6pvi" rowspan="1" colspan="1"><p class="qlbt-cell-line" data-row="row-6pvi" data-cell="cell-4r2i" data-rowspan="1" data-colspan="1"><br></p></td><td data-row="row-6pvi" rowspan="1" colspan="1"><p class="qlbt-cell-line" data-row="row-6pvi" data-cell="cell-kgn6" data-rowspan="1" data-colspan="1"><br></p></td></tr><tr data-row="row-abp3"><td data-row="row-abp3" rowspan="1" colspan="1"><p class="qlbt-cell-line" data-row="row-abp3" data-cell="cell-vn5m" data-rowspan="1" data-colspan="1"><br></p></td><td data-row="row-abp3" rowspan="1" colspan="1"><p class="qlbt-cell-line" data-row="row-abp3" data-cell="cell-t209" data-rowspan="1" data-colspan="1"><br></p></td><td data-row="row-abp3" rowspan="1" colspan="1"><p class="qlbt-cell-line" data-row="row-abp3" data-cell="cell-yttb" data-rowspan="1" data-colspan="1"><br></p></td></tr><tr data-row="row-2b45"><td data-row="row-2b45" rowspan="1" colspan="1"><p class="qlbt-cell-line" data-row="row-2b45" data-cell="cell-4q1g" data-rowspan="1" data-colspan="1"><br></p></td><td data-row="row-2b45" rowspan="1" colspan="1"><p class="qlbt-cell-line" data-row="row-2b45" data-cell="cell-7hyh" data-rowspan="1" data-colspan="1"><br></p></td><td data-row="row-2b45" rowspan="1" colspan="1"><p class="qlbt-cell-line" data-row="row-2b45" data-cell="cell-z5re" data-rowspan="1" data-colspan="1"><br></p></td></tr></tbody></table></div>`;
    quill.service = new MockImageService();

    el.appendChild(quill);

     const datepicker = document.createElement('jp-datepicker') as any;
     
    // datepicker.minDate=new Date(1999,5,6);
     datepicker.maxDate= new Date(2050,4,3);
     datepicker.minDate = new Date(1999,2,3);
     el.appendChild(datepicker);  

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
  const multiOptions = [
    {value: 1, label: 'Monday'},
    {value: 2, label: 'Tuesday'},
    {value: 3, label: 'Wednesday'},
    {value: 4, label: 'Thursday'},
    {value: 5, label: 'Friday'},
    {value: 6, label: 'Saturday'},
    {value: 0, label: 'Sunday'}
  ];
 
</script>

<div bind:this={el}></div>

<jp-toggle value={dislexie} label="Disleksija" on:value={e => console.log(e)}></jp-toggle>

<jp-textarea name="loooool">
</jp-textarea>

<jp-select options={[{"value":"aaa"}, {"value":"bbb"}, {"value":"ccc"}]} label="Select">
</jp-select>
<!-- <jp-file-upload service={MockImageService} name="test" acceptedFiles="image/*"></jp-file-upload>
<jp-input name="test" label="asdf" labelType="outside"></jp-input>
<jp-chips name="Test" label="Test" labelType="outside"></jp-chips>
<jp-file-upload service={MockImageService} name="test" acceptedFiles="image/*"></jp-file-upload>
<jp-textarea name="Test" label="Test" labeltype="outside"></jp-textarea>
<jp-file-list name="test"></jp-file-list>
<jp-file-upload service={MockImageService} name="test" acceptedFiles="image/*"></jp-file-upload> -->
<button on:click={save}>Save</button>

<form>
  <p>Validity Test</p>
  <jp-datepicker label = 'Date' required maxDate = '2050,5,6' minDate = '1999,5,5'></jp-datepicker>
  <jp-multiselect options={multiOptions} label="MultiSelect" maxSelects={3} />
  <jp-input name="name" label="Name" labelType="outside" required hint="cool"></jp-input>
  <jp-input name="email" label="Email" type="email" labelType="outside" required></jp-input>
  <jp-ckeditor name="Content" label="Content" required></jp-ckeditor>
  <jp-select required options={options} label="Thing" />

  <button>Submit</button>
</form>
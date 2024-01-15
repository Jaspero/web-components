<script lang="ts">
  import { onMount } from 'svelte';
  /*import '../../../dist/alert.wc.js'; */
  /*import '../../../dist/confirm.wc.js'*/
  import '../../../dist/async-table.wc.js';
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

  onMount(() => {
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
        label: 'Age'
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
    asyncTable.pageSizes = [10];
    el.appendChild(asyncTable);
  });
</script>

<div bind:this={el}></div>

<jp-input name="test" label="asdf" labelType="outside"></jp-input>

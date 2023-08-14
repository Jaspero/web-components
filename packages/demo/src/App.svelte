<script lang="ts">
  import { onMount } from 'svelte';
  import '../../../dist/alert.wc.js';
  import '../../../dist/confirm.wc.js'
  import '../../../dist/async-table.wc.js';
  import '../../../dist/input.wc.js';
  import '../../../dist/quill.wc.js';
  import { renderAlert } from '../../../dist/render-alert.js';
  import { renderConfirm } from '../../../dist/render-confirm.js'
  import { FirebaseTableService } from './firebase-table.service';

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
        key: '/title',
        label: 'Title',
        sortable: true
      },
      {
        key: '/phoneNumber',
        label: 'Phone Number'
      }
    ];

    el.appendChild(instanceEl);

    renderAlert({ title: 'bla' });

    const inputEl = document.createElement('jp-input') as HTMLInputElement;

    inputEl.value = 'pero';
    inputEl.label = 'Perica';
    inputEl.name = 'cool';

    formEl.appendChild(inputEl);

    const quillEl = document.createElement('jp-quill') as HTMLInputElement;

    quillEl.value = `<p>Blup</p>`;

    formEl.appendChild(quillEl);

    renderConfirm({
      title: 'Remove campaign?', 
      // message: 'Are you sure you want to remove this campaign?'
      reject: 'rejected',
      closable: true
    }, (e) => console.log(e))
  });

  function submit(e) {
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    console.log(formProps, formData);
  }
</script>

<div bind:this={el}></div>

<form bind:this={formEl} on:submit|preventDefault={submit}>
  <input type="text" id="pero" name="pero" />

  <button type="submit">Submit</button>
</form>

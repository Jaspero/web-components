<script lang="ts">
  import { onMount } from 'svelte';
  import '../../../dist/alert.wc.js';
  import '../../../dist/async-table.wc.js';
  import {renderAlert} from '../../../dist/render-alert.js';
  import {FirebaseTableService} from './firebase-table.service';

  let el: HTMLDivElement;

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

    renderAlert({title: 'bla'})
  });
</script>

<div bind:this={el}></div>

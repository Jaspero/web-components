<script lang="ts">
  import { onMount } from 'svelte';
  import '../../../dist/lib/async-table.wc';
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
  });
</script>

<div bind:this={el}></div>

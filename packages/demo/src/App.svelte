<script lang="ts">
  import { onMount } from 'svelte';
  import '../../../dist/lib/table.wc';

  let el: HTMLDivElement;

  onMount(() => {
    // const instanceEl = document.createElement('jp-bpmn-overview');
    const instanceEl = document.createElement('jp-table');

    // @ts-ignore
    instanceEl.headers = [
      {
        key: '/name',
        label: 'Name',
        sortable: true
      },
      {
        key: '/phoneNumber',
        label: 'Phone Number'
      }
    ];

    // @ts-ignore
    instanceEl.rows = [
      {name: 'Filip', phoneNumber: '123456789'},
      {name: 'John', phoneNumber: '+111 111 111'}
    ]

    el.appendChild(instanceEl);
  });
</script>

<div bind:this={el}></div>

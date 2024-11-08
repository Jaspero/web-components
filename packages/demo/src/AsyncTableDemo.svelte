<script lang="ts">
  import '../../../dist/async-table.wc';
  import '../../../dist/async-table.css';
  import { onMount } from 'svelte';

  let el: HTMLElement;

  onMount(() => {
    const asyncTable = document.createElement('jp-async-table') as any;
    asyncTable.headers = [
      {
        key: '/name',
        label: 'Name'
      },
      {
        key: '/firstName',
        label: 'First Name'
      },
      {
        key: '/lastName',
        label: 'Last Name'
      },
      {
        key: '/gender',
        label: 'Gender'
      },
      {
        key: '/height',
        label: 'Height'
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
            ...[...Array(100).keys()].map(() => ({
              name: 'John',
              firstName: 'John',
              lastName: 'Johnson',
              gender: 'M',
              height: 180,
              age: 30,
              disabled: true
            }))
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
      import: async () => {
        return [{ name: 'Imported John', age: 30, disabled: true }];
      },
      arrangeColumns: async (id: string, headers) => {
        localStorage.setItem(id, JSON.stringify(headers));
      },
      getColumnOrder: async (id) => {
        return JSON.parse(localStorage.getItem(id));
      },
      adjustPageSize: async () => {}
    };
    asyncTable.id = 'random-id';
    asyncTable.allowArrangeColumns = true;
    asyncTable.pageSizes = [10];
    asyncTable.sort = { key: '/age', direction: 'asc' };
    asyncTable.height = '500px';
    asyncTable.freezeFirstColumn = true;
    asyncTable.freezeLastColumn = true;
    el.appendChild(asyncTable);
  });
</script>

<div bind:this={el}></div>

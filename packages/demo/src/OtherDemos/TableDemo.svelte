<script lang="ts">
  import '../../../../dist/table.wc.js';
  import { onMount } from 'svelte';

  let el: HTMLElement;

  const firstNames = [
    'James',
    'Emily',
    'Michael',
    'Sarah',
    'William',
    'Jessica',
    'David',
    'Olivia',
    'John',
    'Sophia'
  ];

  const lastNames = [
    'Smith',
    'Johnson',
    'Brown',
    'Williams',
    'Jones',
    'Miller',
    'Davis',
    'Garcia',
    'Martinez',
    'Wilson'
  ];
  const gender = ['M', 'F', 'O'];
  onMount(() => {
    const table = document.createElement('jp-table') as any;
    table.headers = [
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
    table.rows = [...Array(100).keys()].map(() => ({
      name: firstNames[Math.floor(Math.random() * 10)],
      firstName: firstNames[Math.floor(Math.random() * 10)],
      lastName: lastNames[Math.floor(Math.random() * 10)],
      gender: gender[Math.floor(Math.random() * 3)],
      height: Math.floor(Math.random() * (200 - 120) + 120),
      age: Math.floor(Math.random() * 100),
      disabled: true
    }));

    table.sort = { key: '/age', direction: 'asc' };
    table.freezeFirstColumn = true;
    table.freezeLastColumn = true;
    table.service = {
      export: async () => {
        return [
          { name: 'John', age: 30, disabled: true },
          { name: 'Jane', age: 31, disabled: true }
        ];
      },
      import: async () => {
        return [{ name: 'Imported John', age: 30, disabled: true }];
      },
      arrangeColumns: async (id: string, headers: any) => {
        localStorage.setItem(id, JSON.stringify(headers));
      },
      getColumnOrder: async (id: string) => {
        const storedValue = localStorage.getItem(id);
        return storedValue ? JSON.parse(storedValue) : null;
      },
      adjustPageSize: async () => {},
      adjustSort: async () => {}
    };
    el.appendChild(table);
  });
</script>

<div bind:this={el}></div>

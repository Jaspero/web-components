<script lang="ts">
  import '../../../../dist/async-table.wc';
  import '../../../../dist/async-table.css';
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

  let filterName = '';
  let filterGender = '';
  let filterAge: number | null = null;
  /*values are set by random function, so sort and filter doesnt work properly*/
  onMount(() => {
    const asyncTable = document.createElement('jp-async-table') as any;
    asyncTable.dropdownMenuExport = true;
    asyncTable.defaultHeaders = [
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
    asyncTable.headers = asyncTable.defaultHeaders;
    asyncTable.service = {
      get: async () => {
        let rows = [...Array(100).keys()].map(() => ({
          name: firstNames[Math.floor(Math.random() * 10)],
          firstName: firstNames[Math.floor(Math.random() * 10)],
          lastName: lastNames[Math.floor(Math.random() * 10)],
          gender: gender[Math.floor(Math.random() * 3)],
          height: Math.floor(Math.random() * (200 - 120) + 120),
          age: Math.floor(Math.random() * 100),
          disabled: true
        }));

        if (filterName) {
          rows = rows.filter((row) => row.name.toLowerCase().includes(filterName.toLowerCase()));
        }
        if (filterGender) {
          rows = rows.filter((row) => row.gender === filterGender);
        }
        if (filterAge !== null) {
          rows = rows.filter((row) => row.age === filterAge);
        }
        return { rows, hasMore: false };
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
      arrangeColumns: async (id: string, headers: any) => {
        localStorage.setItem(id, JSON.stringify(headers));
      },
      getColumnOrder: async (id: string) => {
        const storedValue = localStorage.getItem(id);
        return storedValue ? JSON.parse(storedValue) : null;
      },
      setDefault: async () => {
        localStorage.setItem('default', JSON.stringify(asyncTable.defaultHeaders));
      },
      getDefault: async () => {
        const storedValue = localStorage.getItem('default');
        return storedValue ? JSON.parse(storedValue) : null;
      },
      adjustPageSize: async () => {},
      adjustSort: async () => {}
    };
    asyncTable.id = 'random-id';
    asyncTable.allowArrangeColumns = true;
    asyncTable.pageSizes = [10];
    asyncTable.sort = { key: '/age', direction: 'asc' };
    asyncTable.height = '500px';
    asyncTable.freezeFirstColumn = true;
    asyncTable.freezeLastColumn = true;
    asyncTable.showResetToDefault = true;
    el.appendChild(asyncTable);
    asyncTable.service.setDefault();
  });

  function applyFilters() {
    if (el.firstChild) {
      el.firstChild.getData();
    }
  }
</script>

<div>
  <label>
    Name:
    <input type="text" bind:value={filterName} on:input={applyFilters} />
  </label>

  <label>
    Gender:
    <select bind:value={filterGender} on:change={applyFilters}>
      <option value="">All</option>
      <option value="M">Male</option>
      <option value="F">Female</option>
      <option value="O">Other</option>
    </select>
  </label>

  <label>
    Age:
    <input type="number" bind:value={filterAge} on:input={applyFilters} />
  </label>
</div>

<div bind:this={el}></div>

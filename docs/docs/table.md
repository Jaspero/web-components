import '../static/c/table.wc.js';

# Table

### Description

`<jp-table>` is a table component with the functionality of displaying tabular data.

### Attributes

| **Name** | **Required** |            **Type**             |          **Description**           |
| :------: | :----------: | :-----------------------------: | :--------------------------------: |
| headers  |      ✓       | [`TableHeader[]`](#tableheader) |            column names            |
|   sort   |      ✓       |    [`TableSort`](#tablesort)    | current sorting state of the table |
|   rows   |      ✓       |             `any[]`             |    data displayed in the table     |

### Interfaces

#### `TableHeader`

Defines the structure of a table header.

##### Properties

|  **Name**  | **Required** |         **Type**          |                                     **Description**                                     |
| :--------: | :----------: | :-----------------------: | :-------------------------------------------------------------------------------------: |
|   label    |      ✓       |         `string`          |                               title for the table header                                |
|    key     |      ✓       |         `string`          |                    used for identifying the corresponding data field                    |
|  sortable  |              |         `boolean`         |                       determines if the table column is sortable                        |
| sortMethod |              |        `function`         | used for custom sorting with ascending ( _'asc'_ ) or descending ( _'desc'_ ) direction |
|   pipes    |              | [`TablePipe`](#tablepipe) |                            used for transforming table data                             |
|  fallback  |              |           `any`           |       optional value used as a replacement if the specific value isn't available        |

<br></br>

#### TablePipe

- **value** (required, type: `any`) - represents a data element
- **row** (type: `any`) - reference to the entire data row
- **index** (type: `number`) - numerical position in the table

<br></br>

#### `TableSort`

Defines the sorting configuration of data.

##### Properties

| **Name**  | **Required** |    **Type**     |                       **Description**                        |
| :-------: | :----------: | :-------------: | :----------------------------------------------------------: |
|    key    |      ✓       |    `string`     | used for describing the data field by which items are sorted |
| direction |      ✓       | `asc` or `desc` |  determines if the sorting order is ascendant or descendant  |

<br></br>

### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

- `rowClick`
  - triggers when a row is clicked

### Demo

```jsx live 
// import '../static/c/table.wc.js';

function table(props) {
  const firstNames = ['James', 'Emily', 'Michael', 'Sarah', 'William', 'Jessica', 'David', 'Olivia', 'John', 'Sophia'];
  const lastNames = ['Smith', 'Johnson', 'Brown', 'Williams', 'Jones', 'Miller', 'Davis', 'Garcia', 'Martinez', 'Wilson'];
  const gender = ['M', 'F', 'O'];

  let el = useRef(null);
  useEffect(() => {
    const table = document.createElement('jp-table') as any;
    table.headers = [
      {key: '/name',
       label: 'Name'},
      {key: '/firstName',
       label: 'First Name'},
      {key: '/lastName',
       label: 'Last Name'},
      {key: '/gender',
       label: 'Gender'},
      {key: '/height',
       label: 'Height'},
      {key: '/age',
       label: 'Age',
       sortable: true},
      {key: '/disabled',
       label: 'Disabled',
       disabled: true}];
       
    table.rows = [...Array(20).keys()].map(() => ({
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
    el.current.appendChild(table);
  });
  return <div ref={el}></div>;
}
```
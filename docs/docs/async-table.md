import '../static/c/async-table.wc.js';
import '../static/c/async-table.css';

# Async Table

### Description

`<jp-async-table>` is a table component that loads its data asynchronously.
****

### Attributes

|       **Name**       | **Required** |            **Type**             |                                 **Description**                                 |
|:--------------------:|:------------:|:-------------------------------:|:-------------------------------------------------------------------------------:|
|       headers        |      ✓       | [`TableHeader[]`](#tableheader) |                                  column names                                   |
|         sort         |      ✓       |    [`TableSort`](#tablesort)    |                       current sorting state of the table                        |
|       service        |      ✓       | [`TableService`](#tableservice) |                               table data service                                |
|  allowArrangeColumns |              |            `boolean`            |              should be the button for allowing arrangement of columns           |
| showArrangingColumns |              |            `boolean`            |                should the button for arranging columns be shown                 |
|      showExport      |              |            `boolean`            |                      should the button for export to be shown                   |
|      showImport      |              |            `boolean`            |                      should be the button for import to be shown                |
|  dropdownMenuExport  |              |            `boolean`            | should the button for export download csv or can you have more download options |
|     rowClickable     |              |            `boolean`            |                        determines if the row is clickable                       |
|          id          |              |            `string`             |                                 unique identifier                               |
|        height        |              |       `string` | `null`         |                        determines height of the component                       |
|      pageSizes       |              |            `number[]`           |                                array of page sizes                              |
|       wording        |              |        `Array<{ARRANGE_COLUMNS: string, EXPORT: string, IMPORT: string, SELECT: string, LOADING: string, LOAD_MORE: string, PAGE_SIZE: string, SAVE: string, EMPTY_TABLE: string}>`                                                                      |             contains labels and messages used across the component              |
<br></br>
****

<br></br>

### Interfaces

#### `TableHeader`

Defines the structure of a table header.

##### Properties

|     **Name**      | **Required** |         **Type**          |                                     **Description**                                     |
|:-----------------:|:------------:|:-------------------------:|:---------------------------------------------------------------------------------------:|
|       label       |      ✓       |         `string`          |                               title for the table header                                |
|        key        |      ✓       |         `string`          |                    used for identifying the corresponding data field                    |
|     sortable      |              |         `boolean`         |                       determines if the table column is sortable                        |
| freezeFirstColumn |              |         `boolean`         |                     determines if the first table column is frozen                      |
| freezeLastColumn  |              |         `boolean`         |                      determines if the last table column is frozen                      |
|    sortMethod     |              |        `function`         | used for custom sorting with ascending ( _'asc'_ ) or descending ( _'desc'_ ) direction |
|       pipes       |              | [`TablePipe`](#tablepipe) |                            used for transforming table data                             |
|     fallback      |              |           `any`           |       optional value used as a replacement if the specific value isn't available        |
|     disabled      |              |         `boolean`         |    disabled headers aren't shown by default but are available when arranging columns    |
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
|:---------:|:------------:|:---------------:|:------------------------------------------------------------:|
|    key    |      ✓       |    `string`     | used for describing the data field by which items are sorted |
| direction |      ✓       | `asc` or `desc` |  determines if the sorting order is ascendant or descendant  |
<br></br>

#### `TableService`

Defines methods for fetching and loading more table data.

##### Properties

|       **Name**        |  **Type**  |                                      **Description**                                      |
|:---------------------:|:----------:|:-----------------------------------------------------------------------------------------:|
|          get          | `function` |      retrieves data with optional sorting and returns a promise containing data rows      |
|       loadMore        | `function` | loads additional data with optional sorting and returns a promise containing rows of data |
|        export         | `function` |     retrieves all data that should be included when export is triggered by the table      |
|    arrangeColumns     | `function` |                This method is intended for persisting column organization                 |
| additionalExportTypes | `function` |          This method is intended for adding additional export types to function           |
<br></br>
****

### Additional Export Types

Each export type contains three key properties:

- **label**: Name of the export type, displayed on the dropdown menu.
- **type**: File format for the export. By default, `csv`, `json`, and `xml` are supported.
- **method**: A function that is triggered upon export. This function manipulates data and returns it in the desired
  format.
<br></br>

#### Example Structure

```typescript
type AdditionalExportType = {
  label: string;
  type: string; 
  method: () => {
    fileContent: string | Uint8Array; 
    mimeType: string;
    extension: string;
  };
};
```
<br></br>

#### Example
```typescript
 {
      label: 'CSV',
      type: 'csv',
      method: () => ({
        fileContent: [
          activeHeaders.map(h => `"${h.label}"`).join(','),
          ...resolved
        ].join('\n'),
        mimeType: 'text/csv',
        extension: 'csv'
      })
    }
}
```
<br></br>
****

### Slots

This component does not have any slots.
<br></br>
****

### Methods

- `removeRow(values: any, key = 'id')`
    - Removes a specific row from the loaded dataset
- `addRow(value: any)`
    - Adds a row to the end of the loaded dataset
- `updateRow(value: any, index: number)`
    - Update row at index
<br></br>
****

### Events

- `rowClick`
    - triggers when a row is clicked
<br></br>
****

### Demo

```jsx live
// import '../static/c/async-table.wc.js';
// import '../static/c/async-table.css';

function asyncTable(props) {
  let el = useRef(null);
  useEffect(() => {
    const firstNames = ['James', 'Emily', 'Michael', 'Sarah', 'William', 'Jessica', 'David', 'Olivia', 'John', 'Sophia'];
    const lastNames = ['Smith', 'Johnson', 'Brown', 'Williams', 'Jones', 'Miller', 'Davis', 'Garcia', 'Martinez', 'Wilson'];
    const gender = ['M', 'F', 'O'];

    let filterName = '';
    let filterGender = '';
    let filterAge: number | null = null;

    const asyncTable = document.createElement('jp-async-table') as any;
    asyncTable.headers = [
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

      asyncTable.service = {
        get: async () => {
          let rows = [...Array(20).keys()].map(() => ({
            name: firstNames [Math.floor(Math.random() * 10)],
            firstName: firstNames [Math.floor(Math.random() * 10)],
            lastName: lastNames [Math.floor(Math.random() * 10)],
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
      el.current.appendChild(asyncTable);
    });
    return <div ref={el}></div>;
  }
  ```
<br></br>
****
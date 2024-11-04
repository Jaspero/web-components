# Async Table

### Description

`<jp-async-table>` is a table component that loads its data asynchronously.

### Attributes

|       **Name**       | **Required** |            **Type**             |                                 **Description**                                 |
|:--------------------:|:------------:|:-------------------------------:|:-------------------------------------------------------------------------------:|
|       headers        |      ✓       | [`TableHeader[]`](#tableheader) |                                  column names                                   |
|         sort         |      ✓       |    [`TableSort`](#tablesort)    |                       current sorting state of the table                        |
|       service        |      ✓       | [`TableService`](#tableservice) |                               table data service                                |
| showArrangingColumns |              |            `boolean`            |                should the button for arranging columns be shown                 |
|      showExport      |              |            `boolean`            |                      should the button for export be shown                      |
|  dropdownMenuExport  |              |            `boolean`            | should the button for export download csv or can you have more download options |

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

### AdditionalExportTypes

Each export type contains three key properties:

- **label**: Name of the export type, displayed on the dropdown menu.
- **type**: File format for the export. By default, `csv`, `json`, and `xml` are supported.
- **method**: A function that is triggered upon export. This function manipulates data and returns it in the desired
  format.

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

### Slots

This component does not have any slots.

### Methods

- `removeRow(values: any, key = 'id')`
    - Removes a specific row from the loaded dataset
- `addRow(value: any)`
    - Adds a row to the end of the loaded dataset
- `updateRow(value: any, index: number)`
    - Update row at index

### Events

- `rowClick`
    - triggers when a row is clicked

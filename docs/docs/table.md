# Table

### Description

`<jp-table>` is a table component with the functionality of displaying tabular data. 

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :----: |
| headers | ✓ | [`TableHeader[]`](#tableheader) | column names |
| sort | ✓ | [`TableSort`](#tablesort) | current sorting state of the table |
| rows | ✓ | `any[]` | data displayed in the table |

### Interfaces

#### `TableHeader`

Defines the structure of a table header.

##### Properties

| **Name** | **Required** | **Type** |**Description** |
| :----: | :----: | :----: | :---: |
| label | ✓ | `string` | title for the table header |
| key | ✓ |`string` | used for identifying the corresponding data field |
| sortable | | `boolean`| determines if the table column is sortable |
| sortMethod | | `function` | used for custom sorting with ascending ( *'asc'* ) or descending ( *'desc'* ) direction |
| pipes | |  [`TablePipe`](#tablepipe) | used for transforming table data |
| fallback | | `any` | optional value used as a replacement if the specific value isn't available |

<br></br>

 #### TablePipe 
 - **value** (required, type: `any`) - represents a data element
 - **row** (type: `any`) - reference to the entire data row
 - **index** (type: `number`) - numerical position in the table

<br></br>

#### `TableSort`

Defines the sorting configuration of data.

##### Properties

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| key | ✓ |`string` | used for describing the data field by which items are sorted |
| direction | ✓ |`asc` or `desc` | determines if the sorting order is ascendant or descendant |

<br></br>

### Slots

This component does not have any slots.

### Methods

This component does not have any methods.


### Events

- `rowClick`
    - triggers when a row is clicked

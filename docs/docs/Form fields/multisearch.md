# Multisearch

### Description

`<jp-multisearch>` is a component with a combination of search and multi select functionalities.

### Attributes

| Name | Required |   Type   |     Description      |
|:--------:|:------------:|:------------:|:------------------------:|
| value | | `string`| initial value |
| service  |      ✓       | [`SearchService`](#searchservice) |      search service       |
|   name   |      ✓       |   `string`   | name of the form control |
| minSelects | | `number` | minimum number of selects allowed |
| minselectsValidationMessage | | `string` | validation message for when component does not satisfy minselects |
| maxSelects | | `number` | maximum number of selects allowed |
| maxselectsValidationMessage | | `string` | validation message for when component does not satisfy maxselects |
| required | | `boolean` | determines if a selection is required |
| requiredValidationMessage | | `string` | validation message for when component does not satisfy required |
| disabled | | `boolean` | determines if a selection is disabled |
| id | | `string`| unique identifier |
| label | | `string` | shows at the top of the field |
| labelType | | `'outside'` or `'inside'` | whether label is inside or outside of the field |
| hint | | `string` | shows below the field |
| validationMessages | | `{[type]: string}` where `type` is `string` | compact way of writing validation messages in a single attribute |

### Interfaces

#### `SearchService`

Defines functions for getting select options.

##### Properties

| **Name** | **Required** | **Type** |**Description** |
| :----: | :----: | :----: | :---: |
| search | | `(str: string) => Promise<Array<Option>>` | option results from search |
| getSingle | if `value` is provided | `(str: string) => Promise<Array<Option>>` | returns option given the value |
| loadMore |  | `(str: string) => Promise<Array<Option>>` | returns options given current search string |

Where `Option` is `{ label?: string; value: string; selected?: boolean; disabled?: boolean }`

<br></br>

### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

- `value` 
  - triggers when selected options change

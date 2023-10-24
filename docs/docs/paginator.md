# Paginator

### Description

`<jp-paginator>` is a component with a fuctionality of providing navigation for paginated data.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| disabled | | `boolean` | determines if the paginator is disabled |
| length| ✓ | `number`| total number of items |
| pageIndex | | `number` | current page number |
| pageSize | | `number` | number of items per page |
| pageSizeOptions | | `number []` | list of different page sizes to choose from |
| getRangeLabel | | `string` | text of the range label |
| itemsPerPageLabel | | `string`  | label for number of items shown per page |

  
### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

- `change` 
  - triggers when the page changes

### Demo

```jsx live
<jp-paginator>
</jp-paginator>
```

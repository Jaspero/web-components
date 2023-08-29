# Paginator

### Description

`<jp-paginator>` is a component with a fuctionality of providing navigation for paginated data.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| disabled | | `boolean` | determines if the paginator is disabled |
| hidePageSize | | `boolean` | determines if the size of the page should be hidden |
| showPageSizeOptions | | `boolean` | determines if a set of page size options would be shown |
| length| ✓ | `number`| total number of items |
| pageIndex | | `number` | current page number |
| pageSize | | `number` | number of items per page |
| pageSizeOptions | | `number []` | list of different page sizes to choose from |
| getRangeLabel | | `string` | text of the range label |
| itemsPerPageLabel | | `string`  | label |

  
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

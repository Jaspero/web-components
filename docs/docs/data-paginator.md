<!-- import '../static/c/data-paginator.wc.js'; -->

# Data Paginator

### Description

`<jp-data-paginator>` is a component with a fuctionality of providing navigation for paginated data.
****

### Attributes

|     **Name**      | **Required** |  **Type**   |               **Description**               |
| :---------------: | :----------: | :---------: | :-----------------------------------------: |
|      length       |      ✓       |  `number`   |            total number of items            |
|     pageIndex     |              |  `number`   |     current page number starting from 0     |
|     pageSize      |              |  `number`   |          number of items per page           |
|  pageSizeOptions  |              | `number []` | list of different page sizes to choose from |
|   getRangeLabel   |              |  `string`   |           text of the range label           |
| itemsPerPageLabel |              |  `string`   |  label for number of items shown per page   |
<br></br>
****

### Slots

This component does not have any slots.
<br></br>
****

### Methods

- `nextPage`
- `prevPage`
- `lastPage`
- `firstPage`
<br></br>
****

### Events

- `change`
  - triggers when the page changes
<br></br>
****

### Demo

```jsx live
// import '../static/c/data-paginator.wc.js';

<jp-data-paginator></jp-data-paginator>
```
<br></br>
****
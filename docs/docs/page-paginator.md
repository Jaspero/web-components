import '../static/c/page-paginator.wc.js';

# Page Paginator

### Description

`<jp-page-paginator>` is a component with a fuctionality of providing navigation for pages.

### Attributes

| **Name**  | **Required** | **Type** |           **Description**           |
| :-------: | :----------: | :------: | :---------------------------------: |
|  length   |      ✓       | `number` |        total number of pages        |
| pageIndex |              | `number` | current page number starting from 1 |

### Slots

This component does not have any slots.

### Methods

- `nextPage`
- `prevPage`
- `lastPage`
- `firstPage`
- `toPage`
  - takes page number as argument

### Events

- `change`
  - triggers when the page changes

### Demo

```jsx live
// import '../static/c/page-paginator.wc.js';

<jp-page-paginator></jp-page-paginator>
```

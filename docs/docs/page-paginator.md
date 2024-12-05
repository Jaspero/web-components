<!-- import '../static/c/page-paginator.wc.js'; -->

# Page Paginator

### Description

`<jp-page-paginator>` is a component with a fuctionality of providing navigation for pages.
****

### Attributes

| **Name**  | **Required** | **Type** |           **Description**           |
| :-------: | :----------: | :------: | :---------------------------------: |
|  length   |      ✓       | `number` |        total number of pages        |
| pageIndex |              | `number` | current page number starting from 1 |
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
- `toPage`
  - takes page number as argument
<br></br>
****

### Events

- `change`
  - triggers when the page changes
<br></br>
****

### Demo

```jsx live
// import '../static/c/page-paginator.wc.js';

<jp-page-paginator></jp-page-paginator>
```
<br></br>
****
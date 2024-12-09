import '../static/c/menu.wc.js';

# Menu

### Description

`<jp-menu>` is a floating panel with options.
****

### Attributes

| **Name** | **Required** |    **Type**     |   **Description**   |
| :------: | :----------: | :-------------: | :-----------------: |
|  label   |              | `string` (HTML) | main button content |
<br></br>
****

### Slots

Default slot is list of options (content of menu).
<br></br>
****

### Methods

This component does not have any methods.
<br></br>
****

### Events

This component does not have any events.
<br></br>
****

### Demo

```jsx live
// import '../static/c/menu.wc.js';

<jp-menu>
  <button style={{ width: '200px' }} onClick={() => alert('first')}>
    First item
  </button>
  <button style={{ width: '200px' }} onClick={() => alert('second')}>
    Second item
  </button>
  <button style={{ width: '200px' }} onClick={() => alert('third')}>
    Third item
  </button>
</jp-menu>
```
<br></br>
****
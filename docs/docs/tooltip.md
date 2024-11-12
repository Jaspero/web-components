<!-- import '../static/c/tooltip.wc.js'; -->

# Tooltip

### Description

`<jp-tooltip>` display informative text when users hover over, or tap an element.

### Attributes

| **Name** | **Required** |        **Type**         |                **Description**                |
| :------: | :----------: | :---------------------: | :-------------------------------------------: |
|  label   |              |        `string`         |  main text that always appears on the screen  |
|   mode   |              | `'static' or 'dynamic'` | whether tooltip displays on click or on hover |

### Slots

Tooltip goes into the default slot.

### Methods

This component does not have any methods.

### Events

This component does not have any events.

### Demo

```jsx live
// import '../static/c/tabs.wc.js';
 
<jp-tooltip label="Lorem ipsum">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend odio eu tellus scelerisque,
  sit amet convallis est dapibus. Vestibulum ornare nunc scelerisque nisl iaculis, scelerisque
  imperdiet purus tempus.
</jp-tooltip>
```

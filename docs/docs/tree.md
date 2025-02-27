import '../static/c/tree.wc.js';
import '../static/c/tree.css';
import '../static/c/node.wc.js';
import '../static/c/node-draggable.wc.js';

# Tree

### Description

`<jp-tree>` is a component with nested, collapsable, drag and droppable content.
****

### Attributes

|  **Name**   | **Required** | **Type**  |  **Description**  |
| :---------: | :----------: | :-------: | :---------------: |
|    title    |              | `string`  | Title of the tree |
| collapsable |              | `boolean` | collapse enabled  |
<br></br>
****

### Slots

Slot should be a list of `<jp-node>`'s.
If you want a node to be draggable, use `<jp-node-draggable>`.
You can also nest trees by using `<jp-tree>` recursively.
<br></br>
****

### Methods

This component does not have any methods.

However, there is a `jpTreeStructure` function in `structure.js`. It takes a tree and returns object containing the structure of a tree. For it to work you have to assign `value` attribute to all nodes and subtrees.
<br></br>
****

### Events

This component does not have any events.
<br></br>
****

### Demo

```jsx live
// import '../static/c/tree.wc.js';
// import '../static/c/tree.css';
// import '../static/c/node.wc.js';
// import '../static/c/node-draggable.wc.js';

<div>
  <jp-tree title="Fruit">
    <jp-node>Apple</jp-node>
    <jp-node-draggable>Banana</jp-node-draggable>
    <jp-node>Fruit Loops</jp-node>
  </jp-tree>
  <jp-tree title="Vegetables">
    <jp-tree title="Green">
      <jp-node-draggable>Broccoli</jp-node-draggable>
      <jp-node>Brussels sprouts</jp-node>
    </jp-tree>
    <jp-node>Tomato</jp-node>
  </jp-tree>
</div>
```
<br></br>
****
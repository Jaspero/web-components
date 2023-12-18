# Tree

### Description

`<jp-tree>` is a component with nested, collapsable, drag and droppable content.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| title | |`string` | Title of the tree |
  
### Slots

Slot should be a list of `<jp-node>`'s.
You can also nest trees by using `<jp-tree>` within the slot.


### Methods

This component does not have any methods.


### Events

This component does not have any events. 

### Demo

```jsx live
<div>
  <jp-tree title="Fruit"> 
    <jp-node>Apple</jp-node>
    <jp-node>Banana</jp-node>
    <jp-node>Fruit Loops</jp-node>
  </jp-tree>
  <jp-tree title="Vegetables">
    <jp-tree title="Green">
      <jp-node>Broccoli</jp-node>
      <jp-node>Brussels sprouts</jp-node>
    </jp-tree>
    <jp-node>Tomato</jp-node>
  </jp-tree>
</div>
```
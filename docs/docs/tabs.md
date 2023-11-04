# Tabs

### Description

`<jp-tabs>` organize content into separate views where only one view can be visible at a time.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| tab | | `number` | Currently shown tab (starting from 1) |

### Slots

`<jp-tab>` is `<jp-tabs>` child and contains content of that tab
- it needs to have an attribute `title` because it is used as a tab name

### Methods

- `next`
- `previous`

### Events

- `change` 
  - triggers when the tab changes

### Demo

```jsx live
<jp-tabs>
  <jp-tab title="one">Content 1</jp-tab>
  <jp-tab title="two">Content 2</jp-tab>
  <jp-tab title="three">Content 3</jp-tab>
</jp-tabs>
```
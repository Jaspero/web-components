import '../static/c/tabs.wc.js';

# Tabs

### Description

`<jp-tabs>` organize content into separate views where only one view can be visible at a time.
****

### Attributes

| **Name** | **Required** | **Type** |            **Description**            |
| :------: | :----------: | :------: | :-----------------------------------: |
|   tab    |              | `number` | Currently shown tab (starting from 1) |
<br></br>
****

### Slots

`<jp-tab>` is `<jp-tabs>` child and contains content of that tab

- it needs to have an attribute `title` because it is used as a tab name
<br></br>
****

### Methods

- `next`
- `previous`
<br></br>
****

### Events

- `change`
  - triggers when the tab changes
<br></br>
****

### Demo

```jsx live
// import '../static/c/tabs.wc.js';

<jp-tabs>
  <jp-tab title="one">Content 1</jp-tab>
  <jp-tab title="two">Content 2</jp-tab>
  <jp-tab title="three">Content 3</jp-tab>
</jp-tabs>
```
<br></br>
****
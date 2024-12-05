<!-- import '../../static/c/range.wc.js';
import '../../static/c/range.css'; -->

# Range

### Description

`<jp-range>` that has a two thumb `<input type="range">` functionality.
****

### Attributes

| **Name** | **Required** |      **Type**      |                               **Description**                               |
| :------: | :----------: | :----------------: | :-------------------------------------------------------------------------: |
|  value   |              | `[number, number]` |                                   setter                                    |
|   name   |      ✓       |      `string`      |                          name of the form control                           |
|    id    |              |      `string`      |                              unique identifier                              |
| disabled |              |     `boolean`      |                      determines if slider is disabled                       |
|   max    |              |      `number`      |                            maximal slider value                             |
|   min    |              |      `number`      |                            minimal slider value                             |
|   step   |              |      `number`      |                  size of increment/decrement when sliding                   |
| discrete |              |     `boolean`      | whether slider is smooth or in ticks <br></br> (when `false` step is `any`) |
<br></br>
****

### Slots

This component does not have any slots.
<br></br>
****

### Methods

- `getValue`
  - returns form field value
<br></br>
****

### Events

- `value`
  - triggers when slider value changes
<br></br>
****

### Demo

```jsx live
// import '../../static/c/range.wc.js';
// import '../../static/c/range.css';

<jp-range></jp-range>
```
<br></br>
****
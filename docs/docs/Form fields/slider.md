import '../../static/c/slider.wc.js';
import '../../static/c/slider.css';

# Slider

### Description

`<jp-slider>` is a form component with `<input type="range">` functionality.
****

### Attributes

| **Name** | **Required** | **Type**  |                               **Description**                               |
| :------: | :----------: | :-------: | :-------------------------------------------------------------------------: |
|  value   |              | `number`  |                              setter and getter                              |
|   name   |      ✓       | `string`  |                          name of the form control                           |
|    id    |              | `string`  |                              unique identifier                              |
| disabled |              | `boolean` |                      determines if slider is disabled                       |
|   max    |              | `number`  |                            maximal slider value                             |
|   min    |              | `number`  |                            minimal slider value                             |
|   step   |              | `number`  |                  size of increment/decrement when sliding                   |
| discrete |              | `boolean` | whether slider is smooth or in ticks <br></br> (when `false` step is `any`) |
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
// import '@jaspero/web-components/slider.wc.js';
// import '@jaspero/web-components/slider.css';

<jp-slider></jp-slider>
```
<br></br>
****
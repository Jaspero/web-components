# Slider

### Description

`<jp-slider>` is a form component with `<input type="range">` functionality.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| name | ✓ | `string` |  name of the form control |
| id | | `string`| unique identifier |
| disabled | | `boolean` | determines if slider is disabled |
| showValue | | `boolean` | whether to show numerical value |
| max | | `number` | maximal slider value |
| min | | `number` | minimal slider value |
| value | | `number` | slider value |
| step | | `number` | size of increment/decrement when sliding |
| discrete | | `boolean` | whether slider is smooth or in ticks <br></br> (when `false` step is `any`) |


### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

- `value` 
  - triggers when slider value changes

### Demo

```jsx live
<jp-slider showValue="true"></jp-slider>
```

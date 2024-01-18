# Range

### Description

`<jp-range>` that has a two thumb `<input type="range">` functionality.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| value | | `[number, number]` | setter and getter |
| name | ✓ | `string` |  name of the form control |
| id | | `string`| unique identifier |
| disabled | | `boolean` | determines if slider is disabled |
| max | | `number` | maximal slider value |
| min | | `number` | minimal slider value |
| step | | `number` | size of increment/decrement when sliding |
| discrete | | `boolean` | whether slider is smooth or in ticks <br></br> (when `false` step is `any`) |


### Slots

This component does not have any slots.

### Methods

- `getValue` 
  - returns form field value

### Events

- `value` 
  - triggers when slider value changes

### Demo

```jsx live
<jp-range></jp-range>
```

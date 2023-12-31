# Datepicker

### Description

`<jp-datepicker>` is a field component with `<input type="date">` functionality.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| name | ✓ | `string` |  name of the form control |
| value |  | `Date()` constructor param |  initial value |
| label |  | `string` |  label displayed on date field |
| required | | `boolean` | determines if date needs to be selected |
| requiredValidationMessage | | `string` | validation message for when component does not satisfy required |
| returnFormat |  | `custom` \| `json` \| `unix` \| `js` \| `utc` \| `iso` \| `isoDate` |  format of exposing value (through events and methods) |
| returnFormatFunction | if `returnFormat` <br></br> is `custom` | `(date:Date) => any` |  custom return format function |
| displayFormat |  | `custom` \| `normal` \| `short` \| `medium` \| `long` \| `full` |  format of displayed date in the field |
| displayFormatFunction | if `displayFormat` <br></br> is `custom` | `(date:Date) => string` |  custom display format function |

  
### Slots

This component does not have any slots.

### Methods

- `reportValidity` 
  - triggers reportValidity

### Events

- `value` 
  - triggers when value of the field changes

### Demo

```jsx live
<jp-datepicker>
</jp-datepicker>
```

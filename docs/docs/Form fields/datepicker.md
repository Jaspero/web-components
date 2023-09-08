# Datepicker

### Description

`<jp-datepicker>` is a field component with `<input type="date">` functionality.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| name | ✓ | `string` |  name of the form control |
| label |  | `string` |  label displayed on date field |
| displayFormat |  | `normal` \| `short` \| `medium` \| `long` \| `full` |  format of displayed date in the field |
| returnFormat |  | `json` \| `unix` \| `js` \| `utc` |  format of exposing value (through events and methods) |

  
### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

- `value` 
  - triggers when value of the field changes

### Demo

```jsx live
<form>
  <jp-datepicker>
  </jp-datepicker>
</form>
```

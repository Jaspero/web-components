# Checkbox

### Description

`<jp-checkbox>` is a form component with multi `<input type="checkbox">` functionality.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| options | ✓ | `Array<{ label?: string; value:` <br></br> `boolean; checked?: boolean;` <br></br> `disabled?: boolean }>` | List of checkboxes |
| minSelects | | `number` | minimum number of checks allowed |
| maxSelects | | `number` | maximum number of checks allowed |

### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

- `value` 
  - triggers when one of the checkboxes changes value

### Demo

```jsx live
<form>
  <jp-checkbox options='[{"value": "aaa"},{"value": "lorem aa"},{"value": "lorem adasda"}]'>
  </jp-checkbox>
</form>
```

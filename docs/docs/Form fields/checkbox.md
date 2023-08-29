# Checkbox

### Description

`<jp-checkbox>` is a form component with multi `<input type="checkbox">` functionality.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| options | ✓ | `Array<{ label: string; value:` <br></br> `boolean; disabled?: boolean }>` | List of checkboxes |
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
  <jp-checkbox options='[{"label": "aaa", "value": false},{"label": "lorem aa", "value": true},{"label": "lorem adasda", "value": true},{"label": "ipsum dolorrr", "value": false, "disabled": true}]'>
  </jp-checkbox>
</form>
```

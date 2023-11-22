# Checkbox

### Description

`<jp-checkbox>` is a form component with multi `<input type="checkbox">` functionality.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| options | ✓ | `Array<{ label?: string; value:` <br></br> `boolean; checked?: boolean;` <br></br> `disabled?: boolean }>` | List of checkboxes |
| minSelects | | `number` | minimum number of checks allowed |
| minselectsValidationMessage | | `string` | validation message for when component does not satisfy minSelects |
| maxSelects | | `number` | maximum number of checks allowed |
| maxselectsValidationMessage | | `string` | validation message for when component does not satisfy maxSelects |
| validationMessages | | `{[type]: string}` where `type` is `string` | compact way of writing validation messages in a single attribute |

### Slots

This component does not have any slots.

### Methods
- `reportValidity` 
  - triggers reportValidity

### Events

- `value` 
  - triggers when one of the checkboxes changes value

### Demo

```jsx live
<jp-checkbox options='[{"value": "aaa"},{"value": "lorem aa"},{"value": "lorem adasda"}]'>
</jp-checkbox>
```

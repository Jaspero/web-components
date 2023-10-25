# Multiselect

### Description

`<jp-multiselection>` is a field component with multi `<select>` functionality.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :---: | :---: |
| options | ✓ |`Array<{ label?: string; value:` <br></br> ` string; selected?: boolean;`  <br></br> `disabled?: boolean }>` | select options |
| minSelects | | `number` | minimum number of selects allowed |
| minselectsValidationMessage | | `string` | validation message for when component does not satisfy minselects |
| maxSelects | | `number` | maximum number of selects allowed |
| maxselectsValidationMessage | | `string` | validation message for when component does not satisfy maxselects |
| required | | `boolean` | determines if a selection is required |
| requiredValidationMessage | | `string` | validation message for when component does not satisfy required |
| disabled | | `boolean` | determines if a selection is disabled |
| id | | `string`| unique identifier |
| name | ✓ | `string` | name of the form control |
| label | | `string` | shows at the top of the field |
| hint | | `string` | shows below the field |
| validationMessages | | `{[type]: string}` where `type` is `string` | compact way of writing validation messages in a single attribute |

  
### Slots

This component does not have any slots.

### Methods

- `reportValidity` 
  - triggers reportValidity

### Events

- `value` 
  - triggers when one of the selections changes value

### Demo

```jsx live
<form>
  <jp-multiselect options='[{"value":"aaa"}, {"value":"bbb"}, {"value":"ccc"}]'>
  </jp-multiselect>
</form>
```

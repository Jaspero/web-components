# Select

### Description

`<jp-select>` is a form component with `<select>` functionality.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| value | | `string` | setter and getter |
| options | ✓ | `Array<{label?: string, value: string, disabled?: boolean}>` | select options |
| disabled | | `boolean` | determines if a selection is disabled |
| required | | `boolean` | determines if a selection is required |
| requiredValidationMessage | | `string` | validation message for when component does not satisfy required |
| id | | `string`| unique identifier |
| name | ✓ | `string` |  name of the form control |
| label | | `string` | shows at the top of the field |
| labelType | | `'outside'` or `'inside'` | whether label is inside or outside of the field |
| hint | | `string` | shows below the field |

### Slots

This component does not have any slots.

### Methods
- `getValue` 
  - returns form field value
- `reportValidity` 
  - triggers reportValidity

### Events

- `value` 
  - triggers when item is selected

### Demo

```jsx live
<jp-select options='[{"value":"aaa"}, {"value":"bbb"}, {"value":"ccc"}]' label="Select">
</jp-select>
```

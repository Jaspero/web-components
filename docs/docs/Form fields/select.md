# Select

### Description

`<jp-select>` is a form component with `<select>` functionality.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| options | ✓ | `Array<string>` | select options |
| disabled | | `boolean` | determines if a selection is disabled |
| required | | `boolean` | determines if a selection is required |
| value | | `string` | currently selected option |
| id | | `string`| unique identifier |
| name | ✓ | `string` |  name of the form control |
| label | | `string` | shows at the top of the field |
| hint | | `string` | shows below the field |

### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

- `value` 
  - triggers when item is selected

### Demo

```jsx live
<form>
  <jp-select options='["aaa", "bbb", "ccc"]'>
  </jp-select>
</form>
```

import '@jaspero/web-components/dist/input.wc';

# Input

### Description

`<jp-input>` is a field component with `<input>` functionality.

### Attributes

| **Name** | **Type** | **Description** |
| :----: | :----: | :---: |
| value | `string` | currently selected option |
| label | `string` | shows at the top of an input |
| disabled | `boolean` | determines if an input is disabled |
| required | `boolean` | determines if an input is required |
| readonly | `boolean` | determines if an input is read-only |
| id | `string`| unique identifier |
| name | `string` |  `required` for native form submission |
| minlength | `number` | minimum character count allowed |
| maxlength | `number` | maximum character count allowed |
| label | `string` | shows at the top of an input |
| pattern | `string` | each chip has to satisfy pattern |
| placeholder | `string` | temporary text that appears in an input field before any input is entered |
| inputFocused | `boolean` | determines if an input is focused |

  
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
  <jp-input value='pero' label='Perica' name='input'>
  </jp-input>
</form>
```

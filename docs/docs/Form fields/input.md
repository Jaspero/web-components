# Input

### Description

`<jp-input>` is a field component with `<input>` functionality.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| label | | `string` | shows at the top of an input |
| placeholder | | `string` | temporary text that appears in an <br></br> input field before any input is entered |
| name | ✓ | `string` |  name of the form control |
| id | | `string`| unique identifier |
| hint | | `string` | shows below the input |
| disabled | | `boolean` | determines if an input is disabled |
| required | | `boolean` | determines if an input is required |
| readonly | | `boolean` | determines if an input is read-only |
| type | | One of the following: <br></br> `'text'`, `'password'`, <br></br> `'email'`, `'tel'`, `'url'`  | type of input |
| minlength | | `number` | minimum character count allowed |
| maxlength | | `number` | maximum character count allowed |
| pattern | | `string` | pattern that input has to satisfy |

  
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

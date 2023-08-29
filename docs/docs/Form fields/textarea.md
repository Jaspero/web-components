# Textarea

### Description

`<jp-textarea>` is a field component with `<textarea>` functionality.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| id | | `string`| unique identifier |
| value | |`string` | content within textarea field |
| label | | `string` | shows at the top of a textarea field|
| hint | | `string` | additional information that shows below textarea|
| disabled | | `boolean` | determines if an input is disabled |
| name | ✓ | `string` |  name of the form control |
| placeholder | | `string` | temporary text that appears in a <br></br> textarea field before any input is entered |
| required | | `boolean` | determines if a textarea is required |
| readonly | | `boolean` | determines if a textarea is read-only |
| minlength | | `number` | minimum character count allowed |
| maxlength | | `number` | maximum character count allowed |

  
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
  <jp-textarea value='pattern text' name='textarea'>
  </jp-textarea>
</form>
```

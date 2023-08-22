import '@jaspero/web-components/dist/input.wc';

# Input

### Description

`<jp-input>` is a field component with `<input>` functionality.

### Attributes

- `value` (`string`)
  - Currently selected option
- `label`(`string`)
  - Shows at top of the input
- `disabled` (`boolean`)
- `required` (`boolean`)
- `readonly` (`boolean`)
- `id` (`string`)
- `name` (`string`)
  - `required` for native form submission
- `minlength` (`number`)
  - Minimum character count allowed
- `maxlength` (`number`)
  - Maximum character count required for a field
- `pattern` (`string`)
  - Input has to satisfy pattern
- `placeholder` (`string`)
- `inputFocused` (`boolean`)
  - `true` - input is focused
  - `false` - input is not focused

  
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

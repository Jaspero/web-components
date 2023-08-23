import '@jaspero/web-components/dist/chips.wc';

# Chips

### Description

`<jp-chips>` is a field component that makes typed input iterative.

### Attributes

- `id`
- `name`
  - `required` for native form submission
- `label` (`string`)
  - Shows at the top of the input
- `placeholder`
- `minitems` (`number`)
  - Minimum number of items allowed
- `maxitems` (`number`)
  - Maximum number of items allowed
- `pattern` (`string`)
  - Each chip has to satisfy pattern
- `clearAll` (`boolean`)
  - Clears all chips
- `required` (`bool`)
- `unique` (`bool`)
  - `true` - each chip has to be different
  - `false` - chips don't have to be different
- `chips` (`Array<string>`)
  - Array of chips
  - Binded to input
- `inputFocused` (`boolean`)
  - `true` - input is focused
  - `false` - input is not focused
- `inputValue` (`string`)
  - content of input

### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

- `value` 
  - triggers when chips/input changes

### Demo

```jsx live
<form>
  <jp-chips name="chips" label="label12" placeholder="placeholder">
  </jp-chips>
</form>
```

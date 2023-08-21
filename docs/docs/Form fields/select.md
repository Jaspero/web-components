import '@jaspero/web-components/dist/select.wc';

# Select

### Description

`<jp-select>` is a form component with `<select>` functionality.

### Attributes

- `options` (`Array<string>`)
  - Select options
- `disabled` (`boolean`)
- `required` (`boolean`)
- `value` (`string`)
  - Currently selected option
- `id` (`string`)
- `name` (`string`)
  - `required` for native form submission
- `placeholder` (`string`)
- `open` (`boolean`)
  - `true` - select is open
  - `false` - select is closed

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
  <jp-select options={['aaa', 'bbb', 'ccc']}>
  </jp-select>
</form>
```

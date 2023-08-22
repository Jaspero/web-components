import '@jaspero/web-components/dist/radio.wc';

# Radio

### Description

`<jp-radio>` is an enhanced form component with the functionality of selecting a single choice from multiple options.

### Attributes

- `options` (`Array<string>`)
  - Select options
- `disabled` (`boolean`)
- `required` (`boolean`)
- `value` (`string`)
  - Currently selected option
- `name` (`string`)
  - `required` for native form submission
  
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
  <jp-radio options='["aaa", "bbb", "ccc"]'>
  </jp-radio>
</form>
```

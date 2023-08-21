import '@jaspero/web-components/dist/checkbox.wc';

# Checkbox

### Description

`<jp-checkbox>` is a form component with multi `<input type="checkbox">` functionality.

### Attributes

- `options` (`Array<{ label: string; value: boolean; disabled?: boolean }>`)
  - Checkboxes
- `minSelects` (`number`)
  - Minimum number of checks allowed
- `maxSelects` (`number`)
  - Minimum number of checks allowed

### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

- `value` 
  - triggers when one of the checkboxes changes value

### Demo

```jsx live
<form>
  <jp-checkbox options={[
      {label: 'aaa', value: false},
      {label: 'lorem aa', value: true},
      {label: 'lorem adasda', value: true},
      {label: 'ipsum dolorrr', value: false, disabled: true},
    ]}>
  </jp-checkbox>
</form>
```

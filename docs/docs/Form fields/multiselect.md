import '@jaspero/web-components/dist/multiselect.wc';

# Multiselect

### Description

`<jp-multiselection>` is a field component with multi `<select>` functionality.

### Attributes

- `options` (`Array<{ label: string; selected: boolean; disabled: boolean }>`)
  - Select options
- `minSelects` (`number`)
  - Minimum number of selects allowed
- `maxSelects` (`number`)
  - Maximum number of selects allowed
- `required` (`boolean`)
- `id` (`string`)
- `name` (`string`)
  - `required` for native form submission
- `placeholder` (`string`)
- `value` (`string`)
  - Currently selected option
- `open` (`boolean`)
  - `true` - select is open
  - `false` - select is closed

  
### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

- `value` 
  - triggers when one of the selections changes value

### Demo

```jsx live
<form>
  <jp-multiselect required={true} options= '[{"label": "label1", "selected": false},{"label": "label2", "selected": true},{"label": "label3", "selected": true},{"label": "label4", "selected": false, "disabled": true},{"label": "label5", "selected": false}]' placeholder = 'placeholder' name = 'multiselect'>
  </jp-multiselect>
</form>
```

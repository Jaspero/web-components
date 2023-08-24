import '@jaspero/web-components/dist/chips.wc';

# Chips

### Description

`<jp-chips>` is a field component that makes typed input iterative.

### Attributes

| **Name** | **Type** | **Description** |
| :----: | :----: | :---: |
| id | `string` | unique identifier |
| name | `string` | `required` for native form submission |
| placeholder | `string` | temporary text that appears in an input field before any input is entered |
| label | `string` | shows at the top of an input |
| minitems | `number` | minimum number of items allowed |
| maxitems |  `number` |  maximum number of items allowed |
| pattern | `string` | each chip has to satisfy pattern |
| required | `boolean` | determines if an input is required |
| unique | `boolean` | determines if each chip has to be different | 
| chips |  `Array<string>` | array of chips |
| inputFocused | `boolean` | determines if an input is focused |
| inputValue | `string` | content of an input |


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

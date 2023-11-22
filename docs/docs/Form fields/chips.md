# Chips

### Description

`<jp-chips>` is a field component that makes typed input iterative.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| id | | `string` | unique identifier |
| name | ✓ | `string` | name of the form control |
| placeholder | | `string` | temporary text that appears in an input field before any input is entered |
| label | | `string` | shows at the top of an input |
| minitems | | `number` | minimum number of items allowed |
| minitemsValidationMessage | | `string` | validation message for when component does not satisfy minitems |
| maxitems | |  `number` |  maximum number of items allowed |
| maxitemsValidationMessage | | `string` | validation message for when component does not satisfy maxitems |
| pattern | | `RegExp` | each chip has to satisfy pattern |
| patternValidationMessage | | `string` | validation message for when component does not satisfy pattern |
| required | | `boolean` | determines if a chip is required |
| requiredValidationMessage | | `string` | validation message for when component does not satisfy required |
| unique | | `boolean` | determines if each chip has to be different | 
| uniqueValidationMessage | | `string` | validation message for when component does not satisfy unique |
| validationMessages | | `{[type]: string}` where `type` is `string` | compact way of writing validation messages in a single attribute |


### Slots

This component does not have any slots.

### Methods

- `reportValidity` 
  - triggers reportValidity

### Events

- `value` 
  - triggers when chips/input changes

### Demo

```jsx live
<jp-chips name="chips" label="label12" placeholder="placeholder">
</jp-chips>
```

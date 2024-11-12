<!-- import '../../static/c/autocomplete.wc.js';
import '../../static/c/autocomplete.css'; -->

# Autocomplete

### Description

`<jp-autocomplete>` is a field component with a combination of `<input>` functionality and `<select>` functionality.

### Attributes

|          **Name**          | **Required** |                  **Type**                   |                                   **Description**                                   |
| :------------------------: | :----------: | :-----------------------------------------: | :---------------------------------------------------------------------------------: |
|          options           |              |                 `string[]`                  |                            list of autocomplete options                             |
|        asyncOptions        |              |        `(string) => Promise<array>`         |          async function that takes value of input and returns new options           |
|            lag             |              |                  `number`                   |       time it takes for asyncOptions to be called after input stops changing        |
|           label            |              |                  `string`                   |                            shows at the top of an input                             |
|         labelType          |              |          `'outside'` or `'inside'`          |                   whether label is inside or outside of the field                   |
|        placeholder         |              |                  `string`                   | temporary text that appears in an <br></br> input field before any input is entered |
|            name            |      ✓       |                  `string`                   |                              name of the form control                               |
|             id             |              |                  `string`                   |                                  unique identifier                                  |
|          disabled          |              |                  `boolean`                  |                         determines if an input is disabled                          |
|          required          |              |                  `boolean`                  |                         determines if an input is required                          |
| requiredValidationMessage  |              |                  `string`                   |           validation message for when component does not satisfy required           |
|         minlength          |              |                  `number`                   |                           minimum character count allowed                           |
| minlengthValidationMessage |              |                  `string`                   |          validation message for when component does not satisfy minlength           |
|         maxlength          |              |                  `number`                   |                           maximum character count allowed                           |
| maxlengthValidationMessage |              |                  `string`                   |          validation message for when component does not satisfy maxlength           |
|          pattern           |              |                  `string`                   |                          pattern that input has to satisfy                          |
|  patternValidationMessage  |              |                  `string`                   |           validation message for when component does not satisfy pattern            |
|     validationMessages     |              | `{[type]: string}` where `type` is `string` |          compact way of writing validation messages in a single attribute           |

### Slots

This component does not have any slots.

### Methods

- `getValue`
  - returns form field value
- `reportValidity`
  - triggers reportValidity

### Events

- `value`
  - triggers when value of the field changes

### Demo

```jsx live
// import '../../static/c/autocomplete.wc.js';
// import '../../static/c/autocomplete.css';

<jp-autocomplete options='["One", "Two", "Three"]' label="Autocomplete"></jp-autocomplete>
```

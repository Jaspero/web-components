import '../../static/c/input.wc.js';
import '../../static/c/input.css';

# Input

### Description

`<jp-input>` is a field component with `<input>` functionality.

### Attributes

|          **Name**          | **Required** |                                           **Type**                                            |                                   **Description**                                     |
| :------------------------: | :----------: | :-------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | 
|           label            |              |                                           `string`                                            |                            shows at the top of an input                             |
|         labelType          |              |                                   `'outside'` or `'inside'`                                   |                   whether label is inside or outside of the field                   |
|        placeholder         |              |                                           `string`                                            | temporary text that appears in an <br></br> input field before any input is entered |
|           value            |              |                 
`string`                                            |                            setter                 |
|            name            |      ✓       |                                           `string`                                            |                              name of the form control                               |
|             hint           |                      |                                         `string`                                   | helps users establish what information they should enter into the field|
|        autocomplete        |                      |                                         `string`                                            |               predicts the value of an input field                        |
|             id             |              |                                           `string`                                            |                                  unique identifier                                  |
|           autocomplete           |              |                 
`string`                                            |                            setter                 |
|          inputFocused         |              |                                           `boolean`                                           |                         determines if an input is focused on page load 
|          disabled          |              |                                           `boolean`                                           |                         determines if an input is disabled                          |
|            list            |              |                                           `string`                                            |                     id of datalist (list of predefined values)                      |
|            min             |              |                                           `number`                                            |                           minimal value on numeric input                            |
|            max             |              |                                           `number`                                            |                           maximal value on numeric input                            |
|            step            |              |                                           `number`       \|                                       `'any'`                                       | number that specifies step on numeric input |
|          required          |              |                                           `boolean`                                           |                         determines if an input is required                          |
| requiredValidationMessage  |              |                                           `string`                                            |           validation message for when component does not satisfy required           |
|          readonly          |              |                                           `boolean`                                           |                         determines if an input is read-only                         |
|            type            |              | One of the following: <br></br> `'text'`, `'password'`, <br></br> `'email'`, `'tel'`, `'url'` |                                    type of input                                    |
|         minlength          |              |                                           `number`                                            |                           minimum character count allowed                           |
| minlengthValidationMessage |              |                                           `string`                                            |          validation message for when component does not satisfy minlength           |
|         maxlength          |              |                                           `number`                                            |                           maximum character count allowed                           |
| maxlengthValidationMessage |              |                                           `string`                                            |          validation message for when component does not satisfy maxlength           |
|          pattern           |              |                                           `string`                                            |                          pattern that input has to satisfy                          |
|  patternValidationMessage  |              |                                           `string`                                            |           validation message for when component does not satisfy pattern            |
|     validationMessages     |              |                          `{[type]: string}` where `type` is `string`                          |          compact way of writing validation messages in a single attribute           |

### Slots

- `hint`
  - renders below the input field
- `prefix`
  - renders in front of the input field
- `suffix`
  - renders after the input field

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
// import '../../static/c/input.wc.js';
// import '../../static/c/input.css';

<jp-input label="Input"></jp-input>
```

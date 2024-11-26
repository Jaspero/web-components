<!-- import '../../static/c/textarea.wc.js';
import '../../static/c/textarea.css'; -->

# Textarea

### Description

`<jp-textarea>` is a field component with `<textarea>` functionality.
****

### Attributes

|          **Name**          | **Required** |                  **Type**                   |                                    **Description**                                    |
| :------------------------: | :----------: | :-----------------------------------------: | :-----------------------------------------------------------------------------------: |
|             id             |              |                  `string`                   |                                   unique identifier                                   |
|           value            |              |                  `string`                   |                                   setter and getter                                   |
|           label            |              |                  `string`                   |                         shows at the top of a textarea field                          |
|         labelType          |              |          `'outside'` or `'inside'`          |                    whether label is inside or outside of the field                    |
|            hint            |              |                  `string`                   |                   additional information that shows below textarea                    |
|          disabled          |              |                  `boolean`                  |                          determines if an input is disabled                           |
|            name            |      ✓       |                  `string`                   |                               name of the form control                                |
|        placeholder         |              |                  `string`                   | temporary text that appears in a <br></br> textarea field before any input is entered |
|          required          |              |                  `boolean`                  |                         determines if a textarea is required                          |
| requiredValidationMessage  |              |                  `string`                   |            validation message for when component does not satisfy required            |
|          readonly          |              |                  `boolean`                  |                         determines if a textarea is read-only                         |
|         minlength          |              |                  `number`                   |                            minimum character count allowed                            |
| minlengthValidationMessage |              |                  `string`                   |           validation message for when component does not satisfy minlength            |
|         maxlength          |              |                  `number`                   |                            maximum character count allowed                            |
| maxlengthValidationMessage |              |                  `string`                   |           validation message for when component does not satisfy maxlength            |
|     validationMessages     |              | `{[type]: string}` where `type` is `string` |           compact way of writing validation messages in a single attribute            |
<br></br>
****

### Slots

This component does not have any slots.
<br></br>
****

### Methods

- `getValue`
  - returns form field value
- `reportValidity`
  - triggers reportValidity
<br></br>
****

### Events

- `value`
  - triggers when value of the field changes
<br></br>
****

### Demo

```jsx live
// import '../../static/c/textarea.wc.js';
// import '../../static/c/textarea.css';

<jp-textarea label="Textarea"></jp-textarea>
```
<br></br>
****
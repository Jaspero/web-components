<!-- import '../../static/c/chips.wc.js';
import '../../static/c/chips.css'; -->

# Chips

### Description

`<jp-chips>` is a field component that makes typed input iterative.
****

### Attributes

|         **Name**          | **Required** |                  **Type**                   |                              **Description**                              |
| :-----------------------: | :----------: | :-----------------------------------------: | :-----------------------------------------------------------------------: |
|            id             |              |                  `string`                   |                             unique identifier                             |
|           value           |              |                  `string`                   |                         value of the input field                          |
|           name            |      ✓       |                  `string`                   |                         name of the form control                          |
|        placeholder        |              |                  `string`                   | temporary text that appears in an input field before any input is entered |
|           label           |              |                  `string`                   |                       shows at the top of an input                        |
|         labelType         |              |          `'outside'` or `'inside'`          |              whether label is inside or outside of the field              |
|         minitems          |              |                  `number`                   |                      minimum number of items allowed                      |
| minitemsValidationMessage |              |                  `string`                   |      validation message for when component does not satisfy minitems      |
|         maxitems          |              |                  `number`                   |                      maximum number of items allowed                      |
| maxitemsValidationMessage |              |                  `string`                   |      validation message for when component does not satisfy maxitems      |
|          pattern          |              |                  `RegExp`                   |                     each chip has to satisfy pattern                      |
| patternValidationMessage  |              |                  `string`                   |      validation message for when component does not satisfy pattern       |
|         required          |              |                  `boolean`                  |                     determines if a chip is required                      |
| requiredValidationMessage |              |                  `string`                   |      validation message for when component does not satisfy required      |
|          unique           |              |                  `boolean`                  |                determines if each chip has to be different                |
|  uniqueValidationMessage  |              |                  `string`                   |       validation message for when component does not satisfy unique       |
|    validationMessages     |              | `{[type]: string}` where `type` is `string` |     compact way of writing validation messages in a single attribute      |
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
  - triggers when chips/input changes
<br></br>
****

### Demo

```jsx live
// import '../../static/c/chips.wc.js';
// import '../../static/c/chips.css';

<jp-chips label="Chips" placeholder="Placeholder"></jp-chips>
```
<br></br>
****
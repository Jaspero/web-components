import '../../static/c/checkbox.wc.js';
import '../../static/c/checkbox.css';

# Checkbox

### Description

`<jp-checkbox>` is a form component with multi `<input type="checkbox">` functionality.

### Attributes

|          **Name**           | **Required** |                                                  **Type**                                                  |                          **Description**                          |
| :-------------------------: | :----------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------: |
|            value            |              |                                `Array<string>` or comma separated `string`                                 |                              setter                               |
|           options           |      ✓       | `Array<{ label?: string; value:` <br></br> `boolean; checked?: boolean;` <br></br> `disabled?: boolean }>` |                        List of checkboxes                         |
|          required           |              |                                                 `boolean`                                                  |                determines if an input is required                 |
|  requiredValidationMessage  |              |                                                  `string`                                                  |  validation message for when component does not satisfy required  |
|         minSelects          |              |                                                  `number`                                                  |                 minimum number of checks allowed                  |
| minselectsValidationMessage |              |                                                  `string`                                                  | validation message for when component does not satisfy minSelects |
|         maxSelects          |              |                                                  `number`                                                  |                 maximum number of checks allowed                  |
| maxselectsValidationMessage |              |                                                  `string`                                                  | validation message for when component does not satisfy maxSelects |
|     validationMessages      |              |                                `{[type]: string}` where `type` is `string`                                 | compact way of writing validation messages in a single attribute  |

### Slots

This component does not have any slots.

### Methods

- `getValue`
  - returns form field value
- `reportValidity`
  - triggers reportValidity

### Events

- `value`
  - triggers when one of the checkboxes changes value

### Demo

```jsx live
// import '../../static/c/checkbox.wc.js';
// import '../../static/c/checkbox.css';

<jp-checkbox options='[
    {"value": "aaa", "label": "aaa"},
    {"value": "lorem aa", "label": "lorem aa"},
    {"value": "lorem adasda", "label": "lorem adasda"}
]'></jp-checkbox>
```

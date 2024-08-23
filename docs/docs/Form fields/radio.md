# Radio

### Description

`<jp-radio>` is an enhanced form component with the functionality of selecting a single choice from multiple options.

### Attributes

|         **Name**          | **Required** |                         **Type**                          |                         **Description**                         |
| :-----------------------: | :----------: | :-------------------------------------------------------: | :-------------------------------------------------------------: |
|           value           |              |                         `string`                          |                        setter and getter                        |
|          options          |      ✓       | `Array<{name?: string, value: any, disabled?: boolean;}>` |                         select options                          |
|           name            |      ✓       |                         `string`                          |                    name of the form control                     |
|          inline           |              |                         `boolean`                         |                           row/columns                           |
|         required          |              |                         `boolean`                         |              determines if a selection is required              |
| requiredValidationMessage |              |                         `string`                          | validation message for when component does not satisfy required |

### Slots

This component does not have any slots.

### Methods

- `getValue`
  - returns form field value
- `reportValidity`
  - triggers reportValidity

### Events

- `value`
  - triggers when item is selected

### Demo

```jsx live
<jp-radio options='[{"value": "aaa"}, {"name": "bcb", "value":"bbb"}, {"value":"ccc"}]'></jp-radio>
```

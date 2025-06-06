import '../../static/c/datepicker.wc.js';
import '../../static/c/datepicker.css';

# Date Picker

### Description

`<jp-datepicker>` is a field component with `<input type="date">` functionality.
****

### Attributes

|         **Name**          |               **Required**               |                              **Type**                               |                         **Description**                         |
| :-----------------------: | :--------------------------------------: | :-----------------------------------------------------------------: | :-------------------------------------------------------------: |
|           name            |                    ✓                     |                              `string`                               |                    name of the form control                     |
|           value           |                                          |                     `Date()` constructor param                      |                             setter                              |
|           label           |                                          |                              `string`                               |                  label displayed on date field                  |
|         labelType         |                                          |                      `'outside'` or `'inside'`                      |         whether label is inside or outside of the field         |
|    enableMultiple         |                                          |                              `boolean`                              |             determines if multiple dates can be selected                    |
|         separator         |                                          |                              `string`                               |                    string between the dates                     |
|         required          |                                          |                              `boolean`                              |             determines if date needs to be selected             |
| requiredValidationMessage |                                          |                              `string`                               | validation message for when component does not satisfy required |
|       returnFormat        |                                          | `custom` \| `json` \| `unix` \| `js` \| `utc` \| `iso` \| `isoDate` |      format of exposing value (through events and methods)      |
|   returnFormatFunction    | if `returnFormat` <br></br> is `custom`  |                        `(date:Date) => any`                         |                  custom return format function                  |
|       displayFormat       |                                          |   `custom` \| `normal` \| `short` \| `medium` \| `long` \| `full`   |              format of displayed date in the field              |
|   displayFormatFunction   | if `displayFormat` <br></br> is `custom` |                       `(date:Date) => string`                       |                 custom display format function                  |
|         minDate           |                                          |                              `string` \| `Date`                           |                    minimum date that can be selected                  |
|         maxDate           |                                          |                              `string` \| `Date`                         |                    maximum date that can be selected                   |
|      allowedDates         |                                          |                     `Date()` constructor param                      |                    dates that can be picked                     |
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
// import '@jaspero/web-components/datepicker.wc.js';
// import '@jaspero/web-components/datepicker.css';

<jp-datepicker label="Pick a date"></jp-datepicker>
```
<br></br>
****
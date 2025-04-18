import '../../static/c/date-range.wc.js';
import '../../static/c/date-range.css';

# Date Range

### Description

`<jp-date-range>` is a field component with `<input type="date">` from/to functionality.
****

### Attributes

|         **Name**          |               **Required**               |                              **Type**                               |                         **Description**                         |
| :-----------------------: | :--------------------------------------: | :-----------------------------------------------------------------: | :-------------------------------------------------------------: |
|           name            |                    ✓                     |                              `string`                               |                    name of the form control                     |
|         separator         |                                          |                              `string`                               |                    string between the dates                     |
|           value           |                                          |  `string˛` (`Date()` constructor params with separator inbetween)   |                             setter                              |
|           label           |                                          |                              `string`                               |                  label displayed on date field                  |
|         labelType         |                                          |                      `'outside'` or `'inside'`                      |         whether label is inside or outside of the field         |
|         required          |                                          |                              `boolean`                              |             determines if date needs to be selected             |
| requiredValidationMessage |                                          |                              `string`                               | validation message for when component does not satisfy required |
|       returnFormat        |                                          | `custom` \| `json` \| `unix` \| `js` \| `utc` \| `iso` \| `isoDate` |      format of exposing value (through events and methods)      |
|   returnFormatFunction    | if `returnFormat` <br></br> is `custom`  |                        `(date:Date) => any`                         |                  custom return format function                  |
|       displayFormat       |                                          |   `custom` \| `normal` \| `short` \| `medium` \| `long` \| `full`   |              format of displayed date in the field              |
|   displayFormatFunction   | if `displayFormat` <br></br> is `custom` |                       `(date:Date) => string`                       |                 custom display format function                  |
|           minDate         |                                          |                          `string \| Date `                          |        earliest date that can be selected by the user.          |
|           maxDate         |                                          |                          `string \| Date `                          |          last date that can be selected by the user.            |
|     maxSelectableDays     |                                          |                                `number`                             |               number of days that can be in range               |
|     minSelectableDays     |                                          |                                `number`                             |              number of days that must be in range               |
|     maxDateSelectable     |                                          |                                 `Date`                              |    Automatically set based on the value of maxSelectableDays    |
|     minDateSelectable     |                                          |                                 `Date`                              |    Automatically set based on the value of maxSelectableDays    |
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
// import '@jaspero/web-components/date-range.wc.js';
// import '@jaspero/web-components/date-range.css';

<jp-date-range label="Pick a date range"></jp-date-range>
```
<br></br>
****
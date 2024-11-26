<!-- import '../../static/c/toggle.wc.js';
import '../../static/c/toggle.css'; -->

# Toggle

### Description

`<jp-toggle>` is on/off switch component.
****

### Attributes

|         **Name**          | **Required** | **Type**  |                         **Description**                         |
| :-----------------------: | :----------: | :-------: | :-------------------------------------------------------------: | 
|           value           |              | `boolean` |                        setter and getter                        |
|           name            |      ✓       | `string`  |                    name of the form control                     |
|           label           |              | `string`  |                      text above the toggle                      |
|           size            |              | `large` \| `small`                            | size of the toggle button |
|         disabled          |              | `boolean` |                determines if toggle is disabled                 |
|         required          |              | `boolean` |        if true toggle needs to be check to pass validity        |
| requiredValidationMessage |              | `string`  | validation message for when component does not satisfy required |
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
  - triggers when toggle is switched
<br></br>
****

### Demo

```jsx live
// import '../../static/c/toggle.wc.js';
// import '../../static/c/toggle.css';

<jp-toggle></jp-toggle>
```
<br></br>
****
# Progress-Spinner

### Description

`<jp-progress-spinner>` is a circular indicator of progress and activity.

### Attributes

| **Name** | **Required** | **Type** | **Description**|
| :----: | :----: | :----: | :----: |
| determinate | | `boolean` | `true` - component renders as a progress bar <br></br> `false` - component renders as a spinner |
| progress | | `number` | from `0` to `100` <br></br> number indicating the progress | 
| radius | | `number` | determines the size of the progress/spinner |
| stroke | | `number` | determines the thickness of the line |
| color | | `string` | determines the color of the line |

### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

This component does not have any events.


### Demo
```jsx live
<jp-progress-spinner determinate progress="33"></jp-progress-spinner>
```
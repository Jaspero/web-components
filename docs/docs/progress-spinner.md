import '@jaspero/web-components/dist/progress-spinner.wc';

# Progress-Spinner

### Description

`<jp-progress-spinner>` is a circular indicator of progress and activity.

### Attributes

- `determinate` (`true`/`false`)
  - `true` - component renders as a progress bar
  - `false` - component renders as a spinner
- `progress` (`0` to `100`)
  - number indicating the progress
- Styling
  - `radius` (number)
  - `stroke` (number)
  - `color` (string)

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
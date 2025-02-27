import '../static/c/stepper.wc.js';

# Stepper

### Description

`<jp-stepper>` convey progress through numbered steps.
****

### Attributes

| **Name** | **Required** |  **Type**  |  **Description**  |
| :------: | :----------: | :--------: | :---------------: |
|  steps   |      ✓       | `string[]` | name of each step |
<br></br>
****

### Slots

This component does not have any slots.
<br></br>
****

### Methods

- `next`
  - goes to the next step
- `previous`
  - goes to the previous step
- `reset`
  - goes to the first step
<br></br>
****

### Events

- `change`
  - triggers when step changes
<br></br>
****

### Demo

```jsx live
// import '../static/c/stepper.wc.js';

<jp-stepper steps='["one", "two", "three"]'></jp-stepper>
```
<br></br>
****
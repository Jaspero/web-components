# Stepper

### Description

`<jp-stepper>` convey progress through numbered steps.

### Attributes

| **Name** | **Required** | **Type** | **Description**|
| :----: | :----: | :----: | :----: |
| steps | ✓ | `string[]` | name of each step |

### Slots

This component does not have any slots.

### Methods

- `next`
  - goes to the next step
- `previous`
  - goes to the previous step
- `reset`
  - goes to the first step

### Events

- `change` 
  - triggers when step changes


### Demo
```jsx live
<jp-stepper steps='["one", "two", "three"]'></jp-stepper>
```
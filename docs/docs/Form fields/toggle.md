# Toggle

### Description

`<jp-toggle>` is on/off switch component.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| name | ✓ | `string` |  name of the form control |
| label |  | `string` |  text above the toggle |
| size | | `'large'`|`'small'` | size of the toggle button |
| checked | | `boolean`| is on by default |
| disabled | | `boolean`| determines if toggle is disabled |
| required | | `boolean`| if true toggle needs to be check to pass validity |
| requiredValidationMessage | | `string` | validation message for when component does not satisfy required |

  
### Slots

This component does not have any slots.

### Methods

- `reportValidity` 
  - triggers reportValidity

### Events

- `value` 
  - triggers when toggle is switched

### Demo

```jsx live
<jp-toggle>
</jp-toggle>
```

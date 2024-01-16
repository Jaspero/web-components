# Color

### Description

`<jp-color>` has `<input type="color">` functionality.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| name | ✓ | `string` |  name of the form control |
| id |  | `string` |  id of the form control |
| label |  | `string` |  text right to the color picker |
| value | | `string`| value of the color picker |
| disabled | | `boolean`| determines if an input is disabled |

  
### Slots

This component does not have any slots.

### Methods

- `getValue` 
  - returns form field value

### Events

- `value` 
  - triggers when color is picked

### Demo

```jsx live
<jp-color>
</jp-color>
```

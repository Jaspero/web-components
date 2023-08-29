# Radio

### Description

`<jp-radio>` is an enhanced form component with the functionality of selecting a single choice from multiple options.

### Attributes
| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| options | ✓ |`Array<string>` | select options |
| name | ✓ | `string` |  name of the form control |
| disabled | | `boolean` | determines if a selection is disabled |
| required | | `boolean` | determines if a selection is required |
  
### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

- `value` 
  - triggers when item is selected

### Demo

```jsx live
<form>
  <jp-radio options='["aaa", "bbb", "ccc"]'>
  </jp-radio>
</form>
```

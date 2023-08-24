import '@jaspero/web-components/dist/multiselect.wc';

# Multiselect

### Description

`<jp-multiselection>` is a field component with multi `<select>` functionality.

### Attributes

| **Name** | **Type** | **Description** |
| :----: | :----: | :---: |
| options|`Array<{ label: string; selected:`  <br></br> ` boolean; disabled: boolean }>` | select options |
| minSelects | `number` | minimum number of selects allowed |
| maxSelects | `number` | maximum number of selects allowed |
| required | `boolean` | determines if a selection is required |
| disabled | `boolean` | determines if a selection is disabled |
| id | `string`| unique identifier |
| name | `string` |  `required` for native form submission |
| value | `string` | currently selected option |
| label | `string` | shows at the top of a selection |

  
### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

- `value` 
  - triggers when one of the selections changes value

### Demo

```jsx live
<form>
  <jp-multiselect required={true} options= '[{"label": "label1", "selected": false},{"label": "label2", "selected": true},{"label": "label3", "selected": true},{"label": "label4", "selected": false, "disabled": true},{"label": "label5", "selected": false}]' placeholder = 'placeholder' name = 'multiselect'>
  </jp-multiselect>
</form>
```

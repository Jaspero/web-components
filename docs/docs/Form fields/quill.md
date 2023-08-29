# Quill

### Description

`<jp-quill>` is a text editor form component.

It's a wrapper around https://quilljs.com/.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| value | | `string` | value of the input field (quill content) |
| id | | `string`| unique identifier |
| options | |`Object` | [Quill config](https://quilljs.com/docs/configuration/)|
| name | ✓ | `string` |  name of the form control |
| label | | `string` | shows at the top |

### Dependencies

In order for this component to work you have to include the following

```html
<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
```
```html
<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
```

### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

- `value` 
  - triggers when value of the quill changes

### Demo

```jsx live
<form>
  <jp-quill value="<p>Blup</p>">
  </jp-quill>
</form>
```

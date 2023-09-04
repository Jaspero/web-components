# Quill

### Description

`<jp-quill>` is a text editor form component.

It's a wrapper around https://quilljs.com/.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| value | | `string` | value of the input field (quill content) |
| options | |`Object` | [Quill config](https://quilljs.com/docs/configuration/)|
| service | | [`ImageService`](#imageservice) | service that handles image adding |
| id | | `string` | unique identifier |
| name | ✓ | `string` |  name of the form control |
| label | | `string` | shows at the top |

### Interfaces

#### `ImageService`

Defines the accepted file types and provides a method to upload a file.

##### Properties

| **Name** | **Required** | **Type** |**Description** |
| :----: | :----: | :----: | :---: |
| acceptedFiles | ✓ | `string` | defines acceptable file types for uploading images |
| uploadFile |  |`function` | uploads a file and returns a promise <br></br> which is a string that represents an identifier for the image |

<br></br>

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

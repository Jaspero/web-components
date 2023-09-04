# Image upload

### Description

`<jp-image-upload>` is a component with functionality of `<input type="file">`, but also supports url links.

### Attributes

| Name | Required |   Type   |     Description      |
|:--------:|:------------:|:------------:|:------------------------:|
|    id    |              |   `string`   |    unique identifier     |
|    label    |              |   `string`   |    label of the input field     |
| service  |      ✓       | [`ImageService`](#imageservice) |      image service       |
|   name   |      ✓       |   `string`   | name of the form control |

### Interfaces

#### `ImageService`

Defines the accepted file types and provides a method to upload a file.

##### Properties

| **Name** | **Required** | **Type** |**Description** |
| :----: | :----: | :----: | :---: |
| acceptedFiles | ✓ | `string` | defines acceptable file types for uploading images |
| uploadFile |  |`function` | uploads a file and returns a promise <br></br> which is a string that represents an identifier for the image |

<br></br>

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
  <jp-image-upload>
  </jp-image-upload>
</form>
```

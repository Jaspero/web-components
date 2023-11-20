# File upload

### Description

`<jp-file-upload>` is a component with functionality of `<input type="file">`, but also supports url links.

### Attributes

| Name | Required |   Type   |     Description      |
|:--------:|:------------:|:------------:|:------------------------:|
|    id    |              |   `string`   |    unique identifier     |
|    label    |              |   `string`   |    label of the input field     |
| service  |      ✓       | [`FileService`](#fileservice) |      file service       |
|   name   |      ✓       |   `string`   | name of the form control |

### Interfaces

#### `FileService`

Defines the accepted file types and provides a method to upload a file.

##### Properties

| **Name** | **Required** | **Type** |**Description** |
| :----: | :----: | :----: | :---: |
| acceptedFiles | ✓ | `string` | defines acceptable file types |
| uploadFile |  | `function` | uploads a file and returns a promise <br></br> which is a string that represents a link to the file location |

<br></br>

### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

- `value` 
  - triggers when value changes

### Demo

```jsx live
<jp-file-upload>
</jp-file-upload>
```

import '../../static/c/file-upload.wc.js';
import '../../static/c/file-upload.css';

# File upload

### Description

`<jp-file-upload>` is a component with functionality of `<input type="file">`, but also supports url links.
****

### Attributes

|   Name    | Required |             Type              |                   Description                   |
| :-------: | :------: | :---------------------------: | :---------------------------------------------: |
|    id     |          |           `string`            |                unique identifier                |
|   value   |          |           `string`            |                     setter                      |
|   label   |          |           `string`            |            label of the input field             |
| labelType |          |   `'outside'` or `'inside'`   | whether label is inside or outside of the field |
|  service  |    ✓     | [`FileService`](#fileservice) |                  file service                   |
|   name    |    ✓     |           `string`            |            name of the form control             |
<br></br>
****

### Interfaces

#### `FileService`

Defines the accepted file types and provides a method to upload a file.
<br></br>
****

##### Properties

|   **Name**    | **Required** |                   **Type**                    |                                               **Description**                                                |
| :-----------: | :----------: | :-------------------------------------------: | :----------------------------------------------------------------------------------------------------------: |
| acceptedFiles |      ✓       |                   `string`                    |                                        defines acceptable file types                                         |
|    maxSize    |              |                   `number`                    |                                            max file size in bytes                                            |
|  uploadFile   |              | `(file: any, id?: string) => Promise<string>` | uploads a file and returns a promise <br></br> which is a string that represents a link to the file location |
<br></br>
****


### Slots

This component does not have any slots.
<br></br>
****

### Methods

This component does not have any methods.
<br></br>
****

### Events

- `getValue`
  - returns form field value
- `value`
  - triggers when value (file) changes
- `rejected`
  - triggers when added file is not accepted because it does not satisfy some service criteria
<br></br>
****

### Demo

```jsx live
// import '@jaspero/web-components/file-upload.wc.js';
// import '@jaspero/web-components/file-upload.css';

<jp-file-upload label="Upload a file"></jp-file-upload>
```
<br></br>
****
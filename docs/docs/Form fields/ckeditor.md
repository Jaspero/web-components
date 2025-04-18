import '../../static/c/ckeditor.wc.js';
import '../../static/c/ckeditor.css';

# CKEditor

### Description

`<jp-ckeditor>` is a text editor form component.

It's a wrapper around https://ckeditor.com/.
****

### Attributes

| **Name** | **Required** |            **Type**             |                          **Description**                           |
| :------: | :----------: | :-----------------------------: | :----------------------------------------------------------------: |
| service  |              | [`ImageService`](#imageservice) |                 service that handles image adding                  |
|  value   |              |            `string`             |                               setter                               |
| options  |              |            `Object`             | [CKEditor config](https://ckeditor.com/docs/ckeditor5/latest/api/) |
|    id    |              |            `string`             |                         unique identifier                          |
|   name   |      ✓       |            `string`             |                      name of the form control                      |
|  label   |              |            `string`             |                          shows at the top                          |
| height   |              |            `string`             |               defines the height of the editable area              |
|  width   |              |            `string`             |               defines the width of the editable area               |
<br></br>
****

### Interfaces

#### `ImageService`

Defines the accepted file types and provides a method to upload a file.
<br></br>
****

##### Properties

|  **Name**  | **Required** |  **Type**  |                                               **Description**                                                |
| :--------: | :----------: | :--------: | :----------------------------------------------------------------------------------------------------------: |
| uploadFile |              | `function` | uploads a file and returns a promise <br></br> which is a string that represents an identifier for the image |

<br></br>
****

### Dependencies

In order for this component to work you have to include the following

```html
<script src="https://cdn.ckeditor.com/ckeditor5/41.2.1/super-build/ckeditor.js"></script>
```
<br></br>
****

### Slots

This component does not have any slots.
<br></br>
****

### Methods

- `getValue`
  - returns form field value
<br></br>
****

### Events

- `value`
  - triggers when value of the editor changes
<br></br>
****

### Demo

```jsx live
// import '@jaspero/web-components/ckeditor.wc.js';
// import '@jaspero/web-components/ckeditor.css';

<jp-ckeditor value="<p>Blup</p>"></jp-ckeditor>
```
<br></br>
****
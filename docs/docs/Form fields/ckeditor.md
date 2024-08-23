# CKEditor

### Description

`<jp-ckeditor>` is a text editor form component.

It's a wrapper around https://ckeditor.com/.

### Attributes

| **Name** | **Required** |            **Type**             |                          **Description**                           |
| :------: | :----------: | :-----------------------------: | :----------------------------------------------------------------: |
| service  |              | [`ImageService`](#imageservice) |                 service that handles image adding                  |
|  value   |              |            `string`             |                               setter                               |
| options  |              |            `Object`             | [CKEditor config](https://ckeditor.com/docs/ckeditor5/latest/api/) |
|    id    |              |            `string`             |                         unique identifier                          |
|   name   |      ✓       |            `string`             |                      name of the form control                      |
|  label   |              |            `string`             |                          shows at the top                          |

### Interfaces

#### `ImageService`

Defines the accepted file types and provides a method to upload a file.

##### Properties

|  **Name**  | **Required** |  **Type**  |                                               **Description**                                                |
| :--------: | :----------: | :--------: | :----------------------------------------------------------------------------------------------------------: |
| uploadFile |              | `function` | uploads a file and returns a promise <br></br> which is a string that represents an identifier for the image |

<br></br>

### Dependencies

In order for this component to work you have to include the following

```html
<link
  href="
https://cdn.jsdelivr.net/npm/ckeditor-full@4.7.3/skins/moono-lisa/editor.min.css
"
  rel="stylesheet"
/>
```

```html
<script src="
https://cdn.jsdelivr.net/npm/ckeditor-full@4.7.3/ckeditor.min.js
"></script>
```

### Slots

This component does not have any slots.

### Methods

- `getValue`
  - returns form field value

### Events

- `value`
  - triggers when value of the editor changes

### Demo

```jsx live
<jp-ckeditor value="<p>Blup</p>"></jp-ckeditor>
```

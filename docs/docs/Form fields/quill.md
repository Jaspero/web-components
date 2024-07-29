# Quill

### Description

`<jp-quill>` is a text editor form component.

It's a wrapper around https://quilljs.com/.

### Attributes

| **Name** | **Required** |            **Type**             |                     **Description**                     |
| :------: | :----------: | :-----------------------------: | :-----------------------------------------------------: |
|  value   |              |            `string`             |                         setter                          |
| options  |              |            `Object`             | [Quill config](https://quilljs.com/docs/configuration/) |
| service  |              | [`ImageService`](#imageservice) |            service that handles image adding            |
|    id    |              |            `string`             |                    unique identifier                    |
|   name   |      ✓       |            `string`             |                name of the form control                 |
|  label   |              |            `string`             |                    shows at the top                     |

### Interfaces

#### `ImageService`

Defines the accepted file types and provides a method to upload a file.

##### Properties

|   **Name**    | **Required** |  **Type**  |                                               **Description**                                                |
| :-----------: | :----------: | :--------: | :----------------------------------------------------------------------------------------------------------: |
| acceptedFiles |      ✓       |  `string`  |                              defines acceptable file types for uploading images                              |
|  uploadFile   |              | `function` | uploads a file and returns a promise <br></br> which is a string that represents an identifier for the image |

<br></br>

### Dependencies

In order for this component to work you have to include the following

```html
<link href="https://cdn.jsdelivr.net/npm/quill@2.0.0-rc.2/dist/quill.snow.css" rel="stylesheet" />
<link
  href="https://cdn.jsdelivr.net/npm/quill-better-table@1.2.10/dist/quill-better-table.min.css"
  rel="stylesheet"
/>
```

```html
<script src="https://cdn.jsdelivr.net/npm/quill@2.0.0-rc.2/dist/quill.js"></script>
<script src="https://cdn.jsdelivr.net/npm/quill-better-table@1.2.10/dist/quill-better-table.min.js"></script>
```

### Slots

This component does not have any slots.

### Methods

- `getValue`
  - returns form field value

### Events

- `value`
  - triggers when value of the quill changes

### Demo

```jsx live
<jp-quill value="<p>Blup</p>"></jp-quill>
```

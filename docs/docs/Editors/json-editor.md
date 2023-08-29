# JSON Editor

### Description

`<jp-json-editor>` is a component to view, edit, format, and validate JSON. 

JSON editor **can be used as a form field**.

It's a wrapper around https://github.com/josdejong/jsoneditor.

### Attributes


| **Name** |  **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| value |  | `string` or `Object` | JSON in editor |
| options |  | `Object` | [jsoneditor options](https://github.com/josdejong/jsoneditor/blob/master/docs/api.md) |
| label |  | `string` | Shows at the top of the editor |
| name | ✓ <br></br> (to be a valid form element) | `string` | native `name` on form element |
| id | | `string` | native `id` on form element |

### Dependencies

In order for this component to work you have to include the following

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.10.2/jsoneditor.min.css" rel="stylesheet" type="text/css" />
```

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.10.2/jsoneditor.min.js"></script>
```

### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

- `value`
  - triggers when editor content changes

### Demo

```jsx live
<jp-json-editor
  value='{"array": [1, 2, 3],"boolean": true,"color": "#82b92c","null": null,"number": 123,"object": { "a": "b", "c": "d" },"string": "Hello World"}'
></jp-json-editor>
```

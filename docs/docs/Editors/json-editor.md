import '@jaspero/web-components/dist/json-editor.wc';

# JSON Editor

### Description

`<jp-json-editor>` is a component to view, edit, format, and validate JSON.

It's a wrapper around https://github.com/josdejong/jsoneditor.

### Attributes


| **Name** | **Type** | **Description** |
| :----: | :----: | :---: |
| content | `JSON` | content of the editor |
| options | `Object` |   [jsoneditor options](https://github.com/josdejong/jsoneditor/blob/master/docs/api.md) |

### Includes

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

This component does not have any events.

### Demo

```jsx live
<jp-json-editor
  content='{"array": [1, 2, 3],"boolean": true,"color": "#82b92c","null": null,"number": 123,"object": { "a": "b", "c": "d" },"string": "Hello World"}'
></jp-json-editor>
```

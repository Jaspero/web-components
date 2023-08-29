# Code Editor

### Description

`<jp-code-editor>` is a code editor component for the web.

Code editor **can be used as a form field**.

It's a wrapper around https://codemirror.net/5/.

### Attributes

| **Name** |  **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| options |  | `Object` | [CodeMirror options](https://codemirror.net/5/doc/manual.html#config) |
| label |  | `string` | Shows at the top of the editor |
| name | ✓ <br></br> (to be a valid form element) | `string` | native `name` on form element |
| id | | `string` | native `id` on form element |

### Dependencies

In order for this component to work you have to include the following

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.14/codemirror.min.css" rel="stylesheet">
```

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.14/codemirror.min.js"></script>
```

### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

- `value`
  - triggers when code changes

### Demo

```jsx live
<div>
  <jp-code-editor
    options={{mode:"javascript"}}
  ></jp-code-editor>
</div>
```

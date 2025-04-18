import '../../static/c/code-editor.wc.js';
import '../../static/c/code-editor.css';

# Code Editor

### Description

`<jp-code-editor>` is a code editor component for the web. Code editor **can be used as a form field**. 

It's a wrapper around https://codemirror.net/5/.
****

### Attributes

| **Name** |               **Required**               | **Type** |                            **Description**                            |
| :------: | :--------------------------------------: | :------: | :-------------------------------------------------------------------: |
| options  |                                          | `Object` | [CodeMirror options](https://codemirror.net/5/doc/manual.html#config) |
|  label   |                                          | `string` |                    Shows at the top of the editor                     |
|   name   | ✓ <br></br> (to be a valid form element) | `string` |                     native `name` on form element                     |
|    id    |                                          | `string` |                      native `id` on form element                      |
<br></br>
****

### Dependencies

In order for this component to work you have to include the following

```html
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.14/codemirror.min.css"
  rel="stylesheet"
/>
```

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.14/codemirror.min.js"></script>
```

Depending on your editor options, you might need additional dependancies that you can find on https://cdnjs.com/libraries/codemirror/5.65.14
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

- `value`
  - triggers when code changes
<br></br>
****

### Demo

```jsx live
// import '@jaspero/web-components/code-editor.wc.js';
// import '@jaspero/web-components/code-editor.css';

<jp-code-editor options='{"mode": "javascript"}'></jp-code-editor>
```
<br></br>
****
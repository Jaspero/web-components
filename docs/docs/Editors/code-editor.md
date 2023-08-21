import '@jaspero/web-components/dist/code-editor.wc';

# Code Editor

### Description

`<jp-code-editor>` is a code editor component for the web.

It's a wrapper around https://codemirror.net/5/.

### Attributes

- `content` (`JSON`)
  - content of the editor
- `options` (`Object`)
  - codemirror options
  - https://codemirror.net/5/doc/manual.html#config

### Includes

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

- `change`
  - triggers when code changes

### Demo

```jsx live
<div>
  <jp-code-editor
    content="function myScript(){return 100;}\n"
    options={{mode:"javascript"}}
  ></jp-code-editor>
</div>
```

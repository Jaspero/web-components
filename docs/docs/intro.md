---
sidebar_position: 1
---

# Installation

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Installing the package

The easiest way to install @jaspero/web-components is to use the npm command.

You can do this by running the command:

```bash
npm i --save-exact @jaspero/web-components
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

## Component dependancies

Certain components require us to import scripts and styles in order for them to work properly.

Easiest way to do this is to simply directly load the following *js* and *css* in your html.

### Quill
```html
<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
```
```html
<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
```

### Code editor
```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.14/codemirror.min.css" rel="stylesheet">
```
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.14/codemirror.min.js"></script>
```

### Json editor
```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.10.2/jsoneditor.min.css" rel="stylesheet" type="text/css">
```
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.10.2/jsoneditor.min.js"></script>
```
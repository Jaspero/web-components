---
sidebar_position: 1
---

# Installation

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.
****

## Installing the package

The easiest way to install @jaspero/web-components is to use the npm command.

You can do this by running the command:

```bash
npm i --save-exact @jaspero/web-components
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.
<br></br>
****

## Component dependancies

For components to display properly, you'll need to import default styles and css variables at the top level of your project;

```js
<style>@import '@jaspero/web-components/dist/index.css';</style>
```

Some components require additional imports to function properly.

Simplest way to do this is to load the following scripts and stylesheets;
<br></br>
****

### Quill

```html
<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
```

```html
<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
```
<br></br>
****

### Code editor

```html
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.14/codemirror.min.css"
  rel="stylesheet"
/>
```

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.14/codemirror.min.js"></script>
```
<br></br>
****

### Json editor

```html
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.10.2/jsoneditor.min.css"
  rel="stylesheet"
  type="text/css"
/>
```

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.10.2/jsoneditor.min.js"></script>
```
<br></br>
****
<script lang="ts">
  import '../../../../dist/code-editor.wc';
  let options = {
    mode: {name: "javascript", json: true},
    lineNumbers: true,
    theme: 'default',
    indentUnit: 2
  };
</script>

<jp-code-editor {options}></jp-code-editor>
<jp-code-editor {options} label="label"></jp-code-editor>

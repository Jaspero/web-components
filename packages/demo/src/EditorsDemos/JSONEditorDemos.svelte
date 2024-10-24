<script lang="ts">
  import '../../../../dist/json-editor.wc';
  let value = {
    array: [1, 2, 3],
    boolean: true,
    color: '#82b92c',
    null: 'null',
    number: 123,
    object: { a: 'b', c: 'd' },
    string: 'HELOO'
  };
</script>

<jp-json-editor {value} label="jsoneditor" />

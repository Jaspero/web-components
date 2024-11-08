<script lang="ts">
  import '../../../../dist/quill.wc';
  import '../../../../dist/quill.css';
</script>

<form>
  <jp-quill />
  <jp-quill label="quill label" />
  <jp-quill label="quill required" required="true" />

  <button type="submit">submit</button>
</form>

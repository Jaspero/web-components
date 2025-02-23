<script lang="ts">
  import '../../../../dist/file-upload.wc';
  import '../../../../dist/file-upload.css';
</script>

<form>
  <jp-file-upload />
  <jp-file-upload label="file-upload" />
  <jp-file-upload label="file-upload label outside" labelType="outside" />
  <jp-file-upload
    label="file-upload required"
    required="true"
    value="https://placehold.co/600x400/EEE/31343C"
    on:value={(e) => console.log(e)}
  />

  <button type="submit">submit</button>
</form>

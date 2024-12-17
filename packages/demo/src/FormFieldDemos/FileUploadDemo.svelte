<script lang="ts">
  import '../../../../dist/file-upload.wc';
  import '../../../../dist/file-upload.css';
  let enab=true;
</script>

<form>
  <jp-file-upload />
  <jp-file-upload label="file-upload" />
  <jp-file-upload label="file-upload label outside" labelType="outside" />
  <jp-file-upload label="file-upload required" required="true" enableCropper={enab}/>

  <button type="submit">submit</button>
</form>

<script lang="ts">
    import '../../../../dist/file-upload.wc';
    import '../../../../dist/file-upload.css';
</script>
<form>
<jp-file-upload />
<jp-file-upload label="file-upload" />
<jp-file-upload label="file-upload label outside" labelType="outside" />

<button type="submit">submit</button>
</form>
<script lang="ts">
  import '../../../../dist/ckeditor.wc';
  import '../../../../dist/ckeditor.css';

  async function submit() {
    const el = document.querySelector('jp-ckeditor') as any;
    console.log(el.getValue());
  }
</script>

<form on:submit|preventDefault={submit}>
  <jp-ckeditor label="CK Editor" value="<p>Blup</p>" required="true" height="500px"></jp-ckeditor>

  <button type="submit">submit</button>
</form>

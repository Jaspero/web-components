<script lang="ts">  
  import '../../../dist/file-list.wc.js'
  function submit(e) {
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    console.log(formProps, formData);
  }
</script>

<form on:submit|preventDefault={(e) => submit(e)}>
  <jp-file-list name="filelist"></jp-file-list>
  <button type="submit">aaa</button>
</form>

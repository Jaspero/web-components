<script lang="ts">  
  import '../../../dist/file-list.wc.js'
  function submit(e) {
    for (const pair of new FormData(e.target).entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
  }
</script>

<form on:submit|preventDefault={(e) => submit(e)}>
  <jp-file-list name="filelist"></jp-file-list>
  <button type="submit">aaa</button>
</form>

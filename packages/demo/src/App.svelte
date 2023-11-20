<script lang="ts">  
  import '../../../dist/file-list.wc.js'
  let filelist;
  async function submit(e) {
    filelist.service = {
      uploadFile(file){
        return 'aaa'
      }
    }
    await filelist.save()
    console.log(filelist.value)
  }
</script>

<form on:submit|preventDefault={(e) => submit(e)}>
  <jp-file-list name="filelist" value="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" bind:this={filelist}></jp-file-list>
  <button type="submit">save</button>
  <button on:click|preventDefault={() => filelist.save()}></button>
</form>

<script lang="ts">
  import '../../../../dist/menu.wc.js';
  function hello() {
    alert('Hello');
  }
</script>

<jp-menu>
  <button style={"width: 200px;"} on:click={() => alert('first')}> First item </button>
  <button style={ "width: 200px;" } on:click={() => alert('second')}> Second item </button>
  <button style={ "width: 200px;" } on:click={() => alert('third')}> Third item </button>
</jp-menu>

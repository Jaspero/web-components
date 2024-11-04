<script lang="ts">
  import '../../../../dist/menu.wc.js';
</script>

<jp-menu>
  <button
    style={'width: 200px; background-color: transparent; border: 0; cursor: pointer;'}
    on:click={() => alert('first')}
  >
    First item
  </button>
  <button
    style={'width: 200px; background-color: transparent; border: 0; cursor: pointer;'}
    on:click={() => alert('second')}
  >
    Second item
  </button>
  <button
    style={'width: 200px; background-color: transparent; border: 0; cursor: pointer;'}
    on:click={() => alert('third')}
  >
    Third item
  </button>
</jp-menu>

<script lang="ts">
  import '../../../../dist/data-paginator.wc.js';
  const pageSizeOptions = [11, 15, 7, 1, 8];
</script>

<div>
  default
  <jp-data-paginator />
</div>

<div>
  page size
  <jp-data-paginator {pageSizeOptions}/>
</div>
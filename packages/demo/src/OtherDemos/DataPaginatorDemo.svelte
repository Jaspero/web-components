<script lang="ts">
  import '../../../../dist/data-paginator.wc.js';
  const pageSizeOptions = [11, 7, 1, 8];
</script>

<div>
  default
  <jp-data-paginator />
</div>

<div>
  page index
  <jp-data-paginator pageIndex="30" />
</div>

<div>
  page size
  <jp-data-paginator pageSize="15" />
</div>

<div>
  <jp-data-paginator {pageSizeOptions} pageSize="15" />
</div>

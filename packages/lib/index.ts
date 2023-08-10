export default () => {
  /**
   * Table
   */
  import('./src/table/table.wc.svelte');
  import('./src/table/table-pipe.type');
  import('./src/table/table-header.interface');

  /**
   * Async Table
   */
  import('./src/async-table/async-table.wc.svelte');
  import('./src/async-table/table.service');

  /**
   * Image upload
   */
  import('./src/image-upload/image-upload.wc.svelte');
};

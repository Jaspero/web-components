<script lang="ts">
  import '../../../../dist/page-paginator.wc.js';
  let PagePaginatorComponent: {
    nextPage: () => any;
    prevPage: () => any;
    lastPage: () => any;
    firstPage: () => any;
    toPage: (arg0: number) => any;
  };
  let pageNum: number;
</script>

<jp-page-paginator bind:this={PagePaginatorComponent} />

<button on:click={() => PagePaginatorComponent.lastPage()}>lastPage</button>
<button on:click={() => PagePaginatorComponent.firstPage()}>firstPage</button>

<label for="peas">To what page?</label>
<input type="number" bind:value={pageNum} on:input={() => PagePaginatorComponent.toPage(pageNum)} />

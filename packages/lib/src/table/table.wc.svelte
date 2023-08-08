<script>
  export let headers = []
  export let rows = []
</script>

<div class="overflow-x-auto border">
  <table>
    {#if headers}
      <tr class="odd:bg-[#F1F5F3]">
        {#each headers as header}
          <th>{@html header}</th>
        {/each}
      </tr>
    {/if}

    {#if rows}
      {#each rows as row}
        <tr class="odd:bg-[#F1F5F3]">
          {#each row.cells as cell}
            <td>{@html cell}</td>
          {/each}
        </tr>
      {/each}
    {/if}
  </table>
</div>

<style lang="postcss">
  table {
    @apply w-full rounded-lg overflow-hidden;
  }

  tr {
    @apply w-full;
  }

  th {
    @apply text-left px-2 py-1;
  }

  td {
    @apply text-left px-2 py-1;
  }
</style>
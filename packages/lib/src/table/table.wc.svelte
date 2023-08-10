<svelte:options
  customElement={{
    tag: 'jp-table',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import {get} from '../utils/json-pointer';
  import type {TableHeader} from './table-header.interface';

  export let headers: TableHeader[] = [];
  export let rows: any[] = [];

  async function handleColumn(header: TableHeader, row: any, index: number) {
    const {key, fallback, pipes} = header;
    
    let value: any;

    try {
      value = get(row, key);
    } catch {
      return fallback || '';
    }

    if (!row.pipes) {
      return value;
    }

    for (const pipe of pipes) {
      value = await pipe(value, row, index);
    }

    return value;
  }
</script>

<div class="overflow-x-auto border">
  <table>
    {#if headers}
      <tr class="odd:bg-[#F1F5F3]">
        {#each headers as header}
          <th>{@html header.label}</th>
        {/each}
      </tr>
    {/if}

    {#if rows}
      {#each rows as row, index}
        <tr class="odd:bg-[#F1F5F3]">
          {#each headers as header}
            <td>
              {#await handleColumn(header, row, index) then val}
                {@html val}
              {/await}
            </td>
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
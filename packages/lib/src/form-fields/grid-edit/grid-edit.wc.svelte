<svelte:options
  customElement={{
    tag: 'jp-grid-edit',
    shadow: 'none',
    extend: (customElementConstructor) => {
      return class extends customElementConstructor {
        static formAssociated = true;

        constructor() {
          super();
          this.attachedInternals = this.attachInternals();
          this.attachedInternals.role = 'textbox';
        }
      };
    }
  }}
/>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import clearIcon from '../../icons/clear.svg?raw';
  import './grid-edit.wc.pcss';

  export let value: string[][];
  export let defaultRows = 4;
  export let defaultCols = 4;
  export let boldFirstRow = true;
  export let boldFirstCol = true;

  export const getValue = () => value;

  const dispatch = createEventDispatcher();

  let addRowVisible = false;
  let addColVisible = false;
  let hoveredRow: number | null = null;
  let hoveredCol: number | null = null;

  $: addRowVisible = hoveredRow === value?.length - 1;
  $: addColVisible = hoveredCol === value?.[0]?.length - 1;

  function addRow() {
    const columns = [];

    for (let j = 0; j < value?.[0]?.length; j++) {
      columns.push('');
    }

    value = [...value, columns];

    dispatch('change', { value });

    hoveredRow = value.length - 1;
  }

  function addCol() {
    for (let i = 0; i < value.length; i++) {
      value[i].push('');
    }

    value = [...value];

    dispatch('change', { value });
  }

  function removeCol(col: number) {
    value = value.filter((_, i) => i !== col);
    dispatch('change', { value });
  }

  function removeRow(row: number) {
    value = value.map((columns) => {
      columns.splice(row, 1);
      return columns;
    });

    dispatch('change', { value });
  }

  onMount(() => {
    if (!value) {
      value = [];
    }

    for (let i = 0; i < defaultRows; i++) {
      const columns = [];

      for (let j = 0; j < defaultCols; j++) {
        columns.push('');
      }

      value.push(columns);
    }

    value = [...value];
  });
</script>

{#if value}
  <div class="jp-grid-edit">
    {#each value as row, i}
      <div class="jp-grid-edit-row">
        {#each row as column, j}
          <div class="jp-grid-edit-col">
            <input
              type="text"
              class:jp-grid-edit-bold={(boldFirstCol && j === 0) || (boldFirstRow && i === 0)}
              placeholder={`Row ${i} Col ${j}`}
              bind:value={value[i][j]}
              on:mouseenter={() => ((hoveredRow = i), (hoveredCol = j))}
              on:blur={() => dispatch('change', { value })}
            />

            {#if i === 0}
              <button
                type="button"
                class="jp-grid-edit-row-remove"
                class:jp-grid-edit-active={hoveredCol === j}
                on:click={() => removeRow(j)}>{@html clearIcon}</button
              >
            {/if}

            {#if j === 0}
              <button
                type="button"
                class="jp-grid-edit-col-remove"
                class:jp-grid-edit-active={hoveredRow === i}
                on:click={() => removeCol(i)}>{@html clearIcon}</button
              >
            {/if}
          </div>
        {/each}
      </div>
    {/each}
    <button
      type="button"
      class="jp-grid-edit-row-add"
      class:jp-grid-edit-active={addRowVisible}
      on:click={addRow}
    >
      <div class="jp-grid-edit-row-add-inner">+</div>
    </button>
    <button
      type="button"
      class="jp-grid-edit-col-add"
      class:jp-grid-edit-active={addColVisible}
      on:click={addCol}
    >
      <div class="jp-grid-edit-col-add-inner">+</div>
    </button>
  </div>
{/if}

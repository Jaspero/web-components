<svelte:options
  customElement={{
    tag: 'jp-table-chart',
    shadow: 'none'
  }}
/>

<svelte:head>
  <script src="https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.umd.min.js"></script>
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';

  /**
   * TYPES
   */
  type Config = {
    dimensions: {
      capitalize: boolean;
      active_background: string;
      border: string;
      width: string;
      title: {
        color: string;
        font_size: string;
      },
      select: {
        border: string;
      }
    },
    content: {
      toolbar: {
        input: {
          border: string;
        },
        button: {
          border: string;
          font_size: string;
          hover_background_color: string;
        }
      },
      table: {
        container: {
          background: string;
          padding: string;
          border: string;
          border_radius: string;
          border_color: string;
        },
        cell: {
          background: string;
        },
        head: {
          background: string;
          min_height: string;
          font_size: string;
          font_weight: string;
          padding: string;
        }
      }
      max_height: string;
      max_width: string;
      background: string;
    }
  };

  type Dimension = {
    label: string;
    value: string;
    selected: boolean;
  };

  type Dimensions = Dimension[];

  /**
   * CONSTS
   */
  const DEFAULT_CONFIG: Config = {
    dimensions: {
      capitalize: false,
      active_background: '#f3f3f3',
      border: '1px solid #E0E0E0',
      width: '20vw',
      title: {
        color: '#757575',
        font_size: '0.75rem'
      },
      select: {
        border: '1px solid #f3f3f3'
      }
    },
    content: {
      toolbar: {
        input: {
          border: '1px solid #f3f3f3'
        },
        button: {
          border: '1px solid #f3f3f3',
          font_size: '0.875rem',
          hover_background_color: '#e8e8e8'
        }
      },
      table: {
        head: {
          background: '#e3e3e3',
          min_height: '28px',
          font_size: '0.75rem',
          font_weight: 'bold',
          padding: '0.5rem'
        },
        cell: {
          background: '#f3f3f3'
        },
        container: {
          background: 'blue',
          padding: '0.5rem',
          border: '1px solid red',
          border_radius: '0.25rem',
          border_color: '#ccc'
        }
      },
      max_height: '80vh',
      max_width: '75vw',
      background: '#75757511'
    }
  };

  /**
   * VARIABLES
   */
  export let config: Config;
  export let data: any[];

  let dimensions: Dimensions;
  let selected_dimensions: Dimensions;
  let processed_data: { [key: string]: any }[];
  let sort_order: { [key: string]: 'asc' | 'desc' } = {};
  let search_value: string = '';
  let date_range_key: string;

  let picker;
  let date_input_element: HTMLInputElement | null = null;
  let date_range = { start: '', end: '' };

  /**
   * FUNCTIONS
   */
  function select_dimension(dimension: string) {
    const index = dimensions.findIndex(curr => curr.value === dimension);

    dimensions[index].selected = !dimensions[index].selected;

    const any_selected = dimensions.reduce((curr, acc) => {
      return acc.selected ? curr + 1 : curr;
    }, 0);

    selected_dimensions = [];

    if (!any_selected) {
      return;
    }

    for (const dimension of dimensions) {
      if (dimension.selected) {
        selected_dimensions.push(dimension);
      }
    }

    selected_dimensions.push({
      label: 'Value',
      value: 'value'
    });
  }

  function getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
  }

  function process_data() {
    const grouped_data: { [key: string]: any } = {};

    const keys = selected_dimensions
      .map(dimension => dimension.value)
      .filter(dimension => dimension !== 'value');

    let prefiltered_data = data;

    if (date_range?.start?.length && date_range?.end?.length) {
      const start_date = new Date(date_range.start);
      const end_date = new Date(date_range.end);

      prefiltered_data = prefiltered_data.filter(item => {
        const item_date = new Date(item[date_range_key]);

        return item_date >= start_date && item_date <= end_date;
      });
    }

    for (const item of prefiltered_data) {
      const key = keys.map(field => getNestedValue(item, field) || '').join('_');

      if (!grouped_data[key]) {
        grouped_data[key] = { value: 0 };

        for (const field of keys) {
          grouped_data[key][field] = getNestedValue(item, field) || '';
        }
      }

      grouped_data[key].value += 1;
    }

    processed_data = Object.values(grouped_data);

    if (Object.keys(sort_order)?.length) {
      sort_data(Object.keys(sort_order)[0], false);
    }
  }

  function sort_data(dimension: string, reverse = true) {
    if (reverse) {
      sort_order[dimension] = sort_order[dimension] === 'asc' ? 'desc' : 'asc';
    }

    for (const key in sort_order) {
      if (key !== dimension) {
        delete sort_order[key];
      }
    }

    processed_data = processed_data.sort((a, b) => {
      if (sort_order[dimension] === 'asc') {
        return a[dimension] > b[dimension] ? 1 : a[dimension] < b[dimension] ? -1 : 0;
      } else {
        return a[dimension] < b[dimension] ? 1 : a[dimension] > b[dimension] ? -1 : 0;
      }
    });
  }

  function filter_data() {
    process_data();

    const filtered_data = processed_data.filter(item => {
      return Object.values(item).some(value => JSON.stringify(value).toLowerCase().includes(search_value.toLowerCase()));
    });

    processed_data = (filtered_data?.length && filtered_data) || [];
  }

  async function inject_date_picker() {
    picker = new easepick.create({
      element: date_input_element,
      css: [
        'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
        'https://cdn.jsdelivr.net/npm/@easepick/range-plugin@1.2.1/dist/index.css',
      ],
      plugins: ['RangePlugin'],
      format: 'MM-DD-YYYY',
      RangePlugin: {
        tooltip: true,
      }
    });
  }

  function swap_elements(array, index1, index2) {
    let temp = array[index1];

    array[index1] = array[index2];

    array[index2] = temp;

    return array;
  }

  /**
   * LIFECYCLE
   */

  $: if (data?.length) {
    dimensions = Object.keys(data[0]).map(curr => ({
      label: config?.dimensions?.capitalize ? curr.charAt(0).toUpperCase() + curr.slice(1) : curr,
      value: curr,
      selected: false
    }));
  }

  $: if (search_value?.length) {
    filter_data();
  }

  $: if (search_value.length === 0 && selected_dimensions?.length) {
    process_data();
  }

  $: if (date_input_element) {
    inject_date_picker();
  }

  onMount(() => {
    setInterval(() => {
      if (picker) {
        if (picker.getStartDate() || picker.getEndDate()) {
          const start = swap_elements(picker.getStartDate().toLocaleDateString().split('/'), 0, 1).join('/');
          const end = swap_elements(picker.getEndDate().toLocaleDateString().split('/'), 0, 1).join('/');

          if (date_range.start !== start || date_range.end !== end) {
            date_range.start = start;
            date_range.end = end;

            process_data();
          }
        }
      }
    }, 500);
  })
</script>

{#if dimensions}
  <div class="container">
    <div class="dimensions-picker"
         style="--active-dimension-background: {config?.dimensions?.active_background || DEFAULT_CONFIG.dimensions.active_background}; --dimensions-picker-border: {config?.content?.toolbar?.input?.border || DEFAULT_CONFIG.content.toolbar.input.border}; --dimensions-picker-width: {config?.dimensions?.width || DEFAULT_CONFIG.dimensions.width}; --dimensions-picker-title-color: {config?.dimensions?.title?.color || DEFAULT_CONFIG.dimensions.title.color}; --dimensions-picker-title-font-size: {config?.dimensions?.title?.font_size || DEFAULT_CONFIG.dimensions.title.font_size}; --dimensions-picker-select-border: {DEFAULT_CONFIG.dimensions.select.border};">
      <span class="dimensions-picker-title">
        Date Range Dimension
      </span>

      <select class="dimensions-picker-select" bind:value={date_range_key}>
        {#each dimensions as dimension}
          <option value={dimension.value}>
            {dimension.label}
          </option>
        {/each}
      </select>

      <span class="dimensions-picker-title">
        Dimensions
      </span>

      {#each dimensions as dimension}
        <div class="selected-dimension hidden" />

        <span
          class="cursor-pointer dimension {dimension.selected ? 'selected-dimension' : ''}"
          on:click={() => select_dimension(dimension.value)}
        >
          {dimension.label}
        </span>
      {/each}
    </div>

    <div class="table-wrapper-container">
      {#if (processed_data?.length || search_value?.length || date_range.start?.length || date_range.end?.length) && selected_dimensions?.length}
        <div class="filters-row"
             style="--filters-row-input-border: {config?.content?.toolbar?.input?.border || DEFAULT_CONFIG.content.toolbar.input.border}; --filters-row-button-border: {config?.content?.toolbar?.button?.border || DEFAULT_CONFIG.content.toolbar.button.border}; --filters-row-button-font-size: {config?.content?.toolbar?.button?.font_size || DEFAULT_CONFIG.content.toolbar.button.font_size}; --filters-row-button-hover-background-color: {config?.content?.toolbar?.button?.hover_background_color || DEFAULT_CONFIG.content.toolbar.button.hover_background_color};">
          <input class="filters-row-input cursor-text" type="text" placeholder="Search" bind:value={search_value}>

          <input type="text" bind:this={date_input_element} placeholder="Select Date Range" />
        </div>
      {/if}

      <div class="table-wrapper"
           style="--table-wrapper-max-width: {config?.content?.max_width || DEFAULT_CONFIG.content.max_width}; --table-wrapper-max-height: {config?.content?.max_height || DEFAULT_CONFIG.content.max_height}; --table-wrapper-background: {config?.content?.background || DEFAULT_CONFIG.content.background};">
        {#if selected_dimensions}
          <div
            style="--table-cell-background: {config?.content?.table?.cell?.background || DEFAULT_CONFIG.content.table.cell.background}; --table-container-background: {config?.content?.table?.container?.background || DEFAULT_CONFIG.content.table.container.background}; --table-container-padding: {config?.content?.table?.container?.padding || DEFAULT_CONFIG.content.table.container.padding}; --table-head-row-background: {config?.content?.table?.head?.background || DEFAULT_CONFIG.content.table.head.background}; --table-head-row-min-height: {config?.content?.table?.head?.min_height || DEFAULT_CONFIG.content.table.head.min_height}; --table-head-row-font-size: {config?.content?.table?.head?.font_size || DEFAULT_CONFIG.content.table.head.font_size}; --table-head-row-font-weight: {config?.content?.table?.head?.font_weight || DEFAULT_CONFIG.content.table.head.font_weight}; --table-head-row-padding: {config?.content?.table?.head?.padding || DEFAULT_CONFIG.content.table.head.padding}; --table-border: {config?.content?.table?.container?.border || DEFAULT_CONFIG.content.table.container.border}; --table-border-radius: {config?.content?.table?.container?.border_radius || DEFAULT_CONFIG.content.table.container.border_radius}; --table-border-color: {config?.content?.table?.container?.border_color || DEFAULT_CONFIG.content.table.container.border_color};"
          >
            <table>
              <tr class="table-head-row">
                {#each selected_dimensions as dimension}
                  <th class="cursor-pointer" on:click={() => sort_data(dimension.value)}>
                    {dimension.label}
                    {#if sort_order[dimension.value] === 'asc'}↑{:else if sort_order[dimension.value] === 'desc'}↓{/if}
                  </th>
                {/each}
              </tr>

              {#each processed_data as row}
                <tr>
                  {#each selected_dimensions as dimension}
                    <td class="table-cell">
                      {#if typeof row[dimension.value] === 'object'}
                        {#each Object.entries(row[dimension.value]) as [key, value]}
                          <div>
                            <b>{key}:</b> {value}
                          </div>
                        {/each}
                      {:else}
                        {row[dimension.value]}
                      {/if}
                    </td>
                  {/each}
                </tr>
              {/each}
            </table>
          </div>
        {/if}
      </div>
    </div>
  </div>
{:else}
  <div>
    No data
  </div>
{/if}

<style lang="postcss">
    .hidden {
        display: none;
    }

    .cursor-pointer {
        cursor: pointer;
    }

    .cursor-text {
        cursor: text;
    }

    .container {
        margin: 0;
        padding: 0;
        display: flex;
        gap: 0.5rem;
    }

    .table-cell {
        padding: 0.5rem 1rem;
        background: var(--table-cell-background);
    }

    .table-wrapper-container {
        position: relative;
    }

    .filters-row {
        height: 2.5rem;
        position: absolute;
        top: 0;
        right: 0;
        background-color: white;
        z-index: 10;
        display: flex;
        gap: 0.5rem;
        justify-content: end;
        left: 14rem;

        &-input {
            border: var(--filters-row-input-border);
            padding: 0.5rem;
            border-radius: 0.25rem;
        }

        &-button {
            border: var(--filters-row-button-border);
            font-size: var(--filters-row-button-font-size);
            padding: 0.5rem;
            border-radius: 0.25rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &-button:hover {
            background-color: var(--filters-row-button-hover-background-color);
        }
    }

    .table-wrapper {
        margin-top: 3rem;
        max-width: var(--table-wrapper-max-width);
        max-height: var(--table-wrapper-max-height);
        overflow: auto;
        background: var(--table-container-background);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        flex: 1 1 0;
    }

    .dimensions-picker {
        border: var(--dimensions-picker-border);
        width: var(--dimensions-picker-width);
        padding: 0.5rem;
        border-radius: 0.25rem;
        display: flex;
        gap: 0.5rem;
        align-items: start;
        flex-direction: column;

        &-title {
            color: var(--dimensions-picker-title-color);
            font-size: var(--dimensions-picker-title-font-size);
        }
    }

    .dimensions-picker-select {
        border: var(--dimensions-picker-select-border);
        padding: 0.5rem;
        border-radius: 0.25rem;
        width: 70%;
    }

    .dimension {
        padding: 0.25rem;
        border-radius: 0.25rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }

    .selected-dimension {
        background-color: var(--active-dimension-background);
    }

    .table-head-row {
        min-height: var(--table-head-row-min-height);
        background-color: var(--table-head-row-background);
        position: sticky;
        top: 0;
        z-index: 2;
    }

    .table-head-row th {
        font-size: var(--table-head-row-font-size);
        font-weight: var(--table-head-row-font-weight);
        padding: var(--table-head-row-padding);
    }
</style>

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
      background_color: string;
      capitalize: boolean;
      active_background: string;
      border: string;
      width: string;
      color: string;
      active_color: string;
      title: {
        color: string;
        font_size: string;
      },
      select: {
        border: string;
        background_color: string;
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
          color: string;
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
      background_color: '#f3f3f3',
      capitalize: false,
      active_background: '#f3f3f3',
      border: '1px solid #E0E0E0',
      width: '20vw',
      color: '#000',
      active_color: '#000',
      title: {
        color: '#757575',
        font_size: '0.75rem'
      },
      select: {
        border: '1px solid #f3f3f3',
        background_color: '#f3f3f3'
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
          padding: '0.5rem',
          color: '#757575'
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
  let search_element;
  let is_search_active = false;
  let interval;

  let picker;
  let date_input_element: HTMLInputElement | null = null;
  let date_range = { start: '', end: '', start_raw: null, end_raw: null };

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
    picker?.destroy();

    picker = new easepick.create({
      element: date_input_element,
      css: [
        'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
        'https://cdn.jsdelivr.net/npm/@easepick/range-plugin@1.2.1/dist/index.css'
      ],
      plugins: ['RangePlugin'],
      format: 'MM-DD-YYYY',
      startDate: date_range?.start_raw,
      endDate: date_range?.end_raw,
      RangePlugin: {
        tooltip: true,
      },
      setup(picker) {
        picker.on('select', (e) => {
          date_input_element.innerHTML = `<svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-calendar-days">
              <path d="M8 2v4"/>
              <path d="M16 2v4"/>
              <rect width="18" height="18" x="3" y="4" rx="2"/>
              <path d="M3 10h18"/>
              <path d="M8 14h.01"/>
              <path d="M12 14h.01"/>
              <path d="M16 14h.01"/>
              <path d="M8 18h.01"/>
              <path d="M12 18h.01"/>
              <path d="M16 18h.01"/>
            </svg>`;

          const start = swap_elements(picker.getStartDate().toLocaleDateString().split('/'), 0, 1).join('/');
          const end = swap_elements(picker.getEndDate().toLocaleDateString().split('/'), 0, 1).join('/');


          if (date_range.start !== start || date_range.end !== end) {
            date_range.start = start;
            date_range.start_raw = picker.getStartDate();
            date_range.end = end;
            date_range.end_raw = picker.getEndDate();

            process_data();

            inject_date_picker();
          }
        });
      },
    });
  }

  function swap_elements(array, index1, index2) {
    let temp = array[index1];

    array[index1] = array[index2];

    array[index2] = temp;

    return array;
  }

  function handle_search_focus() {
    is_search_active = true;
  }

  function handle_search_blur() {
    if (!search_value.trim()) {
      is_search_active = false;
    }
  }

  function toggle_input() {
    if (!search_element) {
      return;
    }

    search_element.style.opacity = is_search_active ? 1 : 0;
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

  $: if (is_search_active || !is_search_active) {
    toggle_input();
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

    return () => {
      clearInterval(interval);
    }
  })
</script>

{#if dimensions}
  <div class="container">
    <div class="dimensions-picker"
         style="--dimensions-select-background-color: {config?.dimensions?.select?.background_color || DEFAULT_CONFIG?.dimensions?.select?.background_color}; --dimensions-active-text-color: {config?.dimensions?.active_color || DEFAULT_CONFIG.dimensions.active_color}; --dimensions-text-color: {config?.dimensions?.color || DEFAULT_CONFIG?.dimensions?.color}; --active-dimension-background: {config?.dimensions?.active_background || DEFAULT_CONFIG.dimensions.active_background}; --dimensions-picker-border: {config?.dimensions?.border || DEFAULT_CONFIG.dimensions.border}; --dimensions-picker-width: {config?.dimensions?.width || DEFAULT_CONFIG.dimensions.width}; --dimensions-picker-title-color: {config?.dimensions?.title?.color || DEFAULT_CONFIG.dimensions.title.color}; --dimensions-picker-title-font-size: {config?.dimensions?.title?.font_size || DEFAULT_CONFIG.dimensions.title.font_size}; --dimensions-picker-select-border: {config?.dimensions?.select?.border || DEFAULT_CONFIG.dimensions.select.border}; --dimensions-background-color: {config?.dimensions?.background_color || DEFAULT_CONFIG.dimensions.background_color};">
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
          style="color: {dimension.selected ? 'var(--dimensions-active-text-color)' : 'var(--dimensions-text-color)'}"
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
          <input
            class="filters-row-input cursor-text"
            type="text"
            placeholder="Search"
            bind:this={search_element}
            bind:value={search_value}
            on:focus={handle_search_focus}
            on:blur={handle_search_blur}
            style="transition: opacity 0.5s ease;"
          />

          <div class="icon-button" on:click={() => (is_search_active = true)} style="display: {is_search_active ? 'none' : 'block'}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
          </div>

          <div class="calendar-icon" bind:this={date_input_element} on:click={() => {
            if (date_range?.start_raw) {
              picker.setStartDate(date_range.start_raw);
            }

            if (date_range?.end_raw) {
              picker.setEndDate(date_range.end_raw);
            }

            picker?.show();
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-calendar-days">
              <path d="M8 2v4"/>
              <path d="M16 2v4"/>
              <rect width="18" height="18" x="3" y="4" rx="2"/>
              <path d="M3 10h18"/>
              <path d="M8 14h.01"/>
              <path d="M12 14h.01"/>
              <path d="M16 14h.01"/>
              <path d="M8 18h.01"/>
              <path d="M12 18h.01"/>
              <path d="M16 18h.01"/>
            </svg>
          </div>
        </div>
      {/if}

      <div class="table-wrapper"
           style="--table-wrapper-max-width: {config?.content?.max_width || DEFAULT_CONFIG.content.max_width}; --table-wrapper-max-height: {config?.content?.max_height || DEFAULT_CONFIG.content.max_height}; --table-wrapper-background: {config?.content?.background || DEFAULT_CONFIG.content.background};">
        {#if selected_dimensions}
          <div
            style="max-width: 60vw; --table-head-text-color: {config?.content?.table?.head?.color || DEFAULT_CONFIG.content.table.head.color}; --table-cell-background: {config?.content?.table?.cell?.background || DEFAULT_CONFIG.content.table.cell.background}; --table-container-background: {config?.content?.table?.container?.background || DEFAULT_CONFIG.content.table.container.background}; --table-container-padding: {config?.content?.table?.container?.padding || DEFAULT_CONFIG.content.table.container.padding}; --table-head-row-background: {config?.content?.table?.head?.background || DEFAULT_CONFIG.content.table.head.background}; --table-head-row-min-height: {config?.content?.table?.head?.min_height || DEFAULT_CONFIG.content.table.head.min_height}; --table-head-row-font-size: {config?.content?.table?.head?.font_size || DEFAULT_CONFIG.content.table.head.font_size}; --table-head-row-font-weight: {config?.content?.table?.head?.font_weight || DEFAULT_CONFIG.content.table.head.font_weight}; --table-head-row-padding: {config?.content?.table?.head?.padding || DEFAULT_CONFIG.content.table.head.padding}; --table-border: {config?.content?.table?.container?.border || DEFAULT_CONFIG.content.table.container.border}; --table-border-radius: {config?.content?.table?.container?.border_radius || DEFAULT_CONFIG.content.table.container.border_radius}; --table-border-color: {config?.content?.table?.container?.border_color || DEFAULT_CONFIG.content.table.container.border_color};"
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

    .icon-button {
        border: none;
        background: none;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 0.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .calendar-icon {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .calendar-icon svg {
        width: 24px;
        height: 24px;
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
        z-index: 10;
        display: flex;
        gap: 0.5rem;
        justify-content: end;
        left: 14rem;

        &-input {
            color: black;
            border: var(--filters-row-input-border);
            padding: 0.5rem;
            border-radius: 0.25rem;
            transition: opacity 0.3s ease;
            max-width: 200px;
            opacity: 0;
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
        background-color: var(--dimensions-background-color);
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
        background-color: var(--dimensions-select-background-color);
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
        color: var(--table-head-text-color);
    }
</style>

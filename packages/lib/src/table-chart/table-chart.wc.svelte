<svelte:options
  customElement={{
    tag: 'jp-table-chart',
    shadow: 'none'
  }}
/>

<svelte:head>
  <script src="https://cdn.jsdelivr.net/npm/litepicker/dist/litepicker.js"></script>
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';

  /**
   * TYPES
   */
  type Config = {
    type: 'sql' | 'data',
    table?: string;
    sort_priority?: {
      key?: string;
      order?: string;
    }[],
    formatter?: (value: string) => {},
    data_formatting?: {
      [key: string]: {
        label: string;
        formatter: (value: string) => {}
      }
    },
    date_range?: {
      hidden?: boolean;
      key?: string;
    },
    dimensions?: {
      background_color?: string;
      capitalize?: boolean;
      active_background?: string;
      border?: string;
      width?: string;
      color?: string;
      active_color?: string;
      title?: {
        color?: string;
        font_size?: string;
      },
      select?: {
        border?: string;
        background_color?: string;
      }
    },
    content?: {
      toolbar?: {
        input?: {
          border?: string;
        },
        button?: {
          border?: string;
          font_size?: string;
          hover_background_color?: string;
        }
      },
      table?: {
        border_spacing?: string;
        border_collapse?: string;
        popover?: {
          border?: string;
          background_color?: string;
          indicator: {
            background_color: string;
          },
          actions?: {
            color?: string;
            background_color?: string;
            hover_background_color?: string;
            border?: string;
          }
        },
        container?: {
          background?: string;
          padding?: string;
          border?: string;
          border_radius?: string;
          border_color?: string;
        },
        cell?: {
          background?: string;
        },
        head?: {
          background?: string;
          min_height?: string;
          font_size?: string;
          font_weight?: string;
          padding?: string;
          color?: string;
        }
      }
      max_height?: string;
      background?: string;
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
    type: 'sql',
    table: '',
    sort_priority: [],
    date_range: {
      hidden: false,
      key: 'date'
    },
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
        border_spacing: '2px',
        border_collapse: 'separate',
        popover: {
          border: '1px solid #b4b1b1',
          background_color: '#f3f3f3',
          indicator: {
            background_color: '#757575'
          },
          actions: {
            border: 'none',
            color: '#757575',
            background_color: '#f3f3f3',
            hover_background_color: '#e8e8e8'
          }
        },
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
      background: '#75757511'
    }
  };

  /**
   * VARIABLES
   */
  export let config: Config;
  export let data: any[];
  export let sql: string;
  export let dimensions: Dimensions;
  export let selected_dimensions: string[];
  export let loading = false;

  let mapped_dimensions: Dimensions;
  let active_dimensions: Dimensions;
  let processed_data: { [key: string]: any }[];
  let sort_order: { [key: string]: 'asc' | 'desc' } = {};
  let search_value: string = '';
  let date_range_key: string;
  let search_element;
  let is_search_active = false;
  let show_sort_popover = false;

  let picker;
  let date_input_element: HTMLInputElement | null = null;
  let date_range = { start: null, end: null };

  /**
   * FUNCTIONS
   */
  function add_date_range_filter() {
    const date_range_millis = {
      start: date_range?.start?.getTime(),
      end: date_range?.end?.getTime()
    };

    if (date_range?.end && date_range?.start) {
      return `WHERE PARSE_NUMERIC(${date_range_key}) <= ${date_range_millis.end} AND PARSE_NUMERIC(${date_range_key}) >= ${date_range_millis.start}`
    }

    if (date_range?.end && !date_range?.start) {
      return `WHERE PARSE_NUMERIC(${date_range_key}) <= ${date_range_millis.end}`;
    }

    if (date_range?.start && !date_range?.end) {
      return `WHERE PARSE_NUMERIC(${date_range_key}) >= ${date_range_millis.start}`;
    }

    return '';
  }

  function select_dimension(dimension: string) {
    const index = mapped_dimensions.findIndex(curr => curr.label === dimension);

    mapped_dimensions[index].selected = !mapped_dimensions[index].selected;

    const any_selected = mapped_dimensions.reduce((curr, acc) => {
      return acc.selected ? curr + 1 : curr;
    }, 0);

    active_dimensions = [];

    if (!any_selected) {
      return;
    }

    for (const dimension of mapped_dimensions) {
      if (dimension.selected) {
        active_dimensions.push(dimension);
      }
    }

    active_dimensions.push({
      label: 'value',
      value: 'value'
    });

    const query_fields = [];

    for (const dimension of active_dimensions.filter((it) => it.label !== 'value')) {
      query_fields.push(dimension.label);
    }
    sql = `SELECT ${query_fields.join(', ')}
      FROM ${config.table} ${add_date_range_filter()}
      GROUP BY ${query_fields.join(', ')}`.trim();

    window.postMessage({
      name: 'sql',
      value: sql
    });
  }

  function getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
  }

  function process_data() {
    if (config?.type === 'sql') {
      processed_data = data;
      return;
    }

    const grouped_data: { [key: string]: any } = {};

    const keys = active_dimensions
      .map(dimension => dimension.value)
      .filter(dimension => dimension !== 'value');

    let prefiltered_data = data;

    if (date_range?.start && date_range?.end) {
      prefiltered_data = prefiltered_data.filter(item => {
        const item_date = Number(item[date_range_key]) ? new Date(Number(item[date_range_key])) : new Date(item[date_range_key]);

        return item_date >= date_range.start && item_date <= date_range.end;
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
      sort_column_data(Object.keys(sort_order)[0], false);
    }
  }

  function sort_column_data(dimension: string, reverse = true) {
    if (config?.sort_priority?.length) {
      return;
    }

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

  async function inject_date_picker() {
    picker = new Litepicker({
      element: date_input_element,
      singleMode: false,
      resetButton: true
    });

    picker.on('selected', (start, end) => {
      date_range.start = new Date(start?.dateInstance);
      date_range.end = new Date(end?.dateInstance);

      if (config.type === 'data') {
        process_data();
      } else {
        const query_fields = [];

        for (const dimension of active_dimensions.filter((it) => it.label !== 'value')) {
          query_fields.push(dimension.label);
        }

        sql = `SELECT ${query_fields.join(', ')}
        FROM ${config.table} ${add_date_range_filter()}
        GROUP BY ${query_fields.join(', ')}`.trim();

        window.postMessage({
          name: 'sql',
          value: sql
        });
      }
    });

    picker.on('clear:selection', () => {
      date_range = { start: null, end: null };

      if (config.type === 'data') {
        process_data();
      } else {
        const query_fields = [];

        for (const dimension of active_dimensions.filter((it) => it.label !== 'value')) {
          query_fields.push(dimension.label);
        }

        sql = `SELECT ${query_fields.join(', ')}
        FROM ${config.table} ${add_date_range_filter()}
        GROUP BY ${query_fields.join(', ')}`.trim();

        window.postMessage({
          name: 'sql',
          value: sql
        });
      }
    });
  }

  function add_column_to_sort() {
    if (!config?.sort_priority) {
      config.sort_priority = [];
    }

    if (config.sort_priority.length === active_dimensions.length) {
      return;
    }

    const filtered = active_dimensions.filter((item) => {
      return !config.sort_priority.map((it) => it.key).includes(item.label);
    });

    if (!filtered.length) {
      return;
    }

    config.sort_priority = [
      ...config.sort_priority,
      {key: filtered[0].label, order: 'a-z'}
    ];
  }

  function set_dimensions() {
    mapped_dimensions = Object.keys(data[0]).map(curr => ({
      label: config?.dimensions?.capitalize ? curr.charAt(0).toUpperCase() + curr.slice(1) : curr,
      value: curr,
      selected: false
    }));
  }

  function move_column_up(index: number) {
    const item = config.sort_priority[index];
    const to_replace = config.sort_priority[index - 1];

    config.sort_priority[index - 1] = item;
    config.sort_priority[index] = to_replace;
  }

  function move_column_down(index: number) {
    const item = config.sort_priority[index];
    const to_replace = config.sort_priority[index + 1];

    config.sort_priority[index + 1] = item;
    config.sort_priority[index] = to_replace;
  }

  function remove_column(index: number) {
    config.sort_priority = config.sort_priority.filter((item, i) => {
      if (i === index) {
        return false;
      }

      return true;
    });
  }

  function clickOutside(node) {
    const handleClick = (event) => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        node.dispatchEvent(
          new CustomEvent('click_outside', node)
        )
      }
    }

    document.addEventListener('click', handleClick, true);

    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    }
  }

  function sort_data_by_priority() {
    if (!config?.sort_priority?.length) {
      return;
    }

    // TODO: Implement sort data by priority
  }

  function export_csv() {
    const csv = processed_data.map((item) => {
      return Object.values(item).join(',');
    }).join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `reports_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  /**
   * LIFECYCLE
   */
  $: if (selected_dimensions?.length && mapped_dimensions?.length) {
    for (const dimension of selected_dimensions) {
      select_dimension(dimension);
    }

    selected_dimensions = [];
  }

  $: if (config?.type === 'sql' && !sql) {
    sql = `SELECT * FROM ${config.table}`;

    window.postMessage({
      name: 'sql',
      value: sql
    });
  }

  $: if (dimensions?.length) {
    mapped_dimensions = dimensions.map(curr => ({
      label: config?.dimensions?.capitalize ? curr.charAt(0).toUpperCase() + curr.slice(1) : curr,
      value: curr,
      selected: false
    }));
  }

  $: if (data?.length && config?.type === 'data') {
    set_dimensions();
  }

  $: if (data?.length) {
    processed_data = data;
  }

  $: if (data && !data.length) {
    processed_data = [];
  }

  $: if (config?.date_range?.key) {
    date_range_key = config.date_range.key;
  }

  $: if (config?.sort_priority) {
    sort_data_by_priority();
  }

  $: if (search_value?.length) {
    if (config.type === 'data') {
      filter_data();
    } else if (config.type === 'sql') {
      const filtered_data = processed_data.filter(item => {
        return Object.values(item).some(value => JSON.stringify(value).toLowerCase().includes(search_value.toLowerCase()));
      });

      processed_data = (filtered_data?.length && filtered_data) || [];
    }
  }

  $: if (search_value?.length === 0 && active_dimensions?.length) {
    process_data();
  }

  $: if (date_input_element && !picker) {
    inject_date_picker();
  }

  $: if (is_search_active || !is_search_active) {
    toggle_input();
  }

  onMount(() => {
    return () => {
      picker?.destroy();
    }
  });
</script>

{#if loading}
  <div class="container">
    <div class="dimensions-picker-skeleton">
    </div>

    <div class="table-container-skeleton">
    </div>
  </div>
{:else}
  {#if mapped_dimensions}
    <div class="container">
      <div class="dimensions-picker"
           style="--dimensions-select-background-color: {config?.dimensions?.select?.background_color || DEFAULT_CONFIG?.dimensions?.select?.background_color}; --dimensions-active-text-color: {config?.dimensions?.active_color || DEFAULT_CONFIG.dimensions.active_color}; --dimensions-text-color: {config?.dimensions?.color || DEFAULT_CONFIG?.dimensions?.color}; --active-dimension-background: {config?.dimensions?.active_background || DEFAULT_CONFIG.dimensions.active_background}; --dimensions-picker-border: {config?.dimensions?.border || DEFAULT_CONFIG.dimensions.border}; --dimensions-picker-width: {config?.dimensions?.width || DEFAULT_CONFIG.dimensions.width}; --dimensions-picker-title-color: {config?.dimensions?.title?.color || DEFAULT_CONFIG.dimensions.title.color}; --dimensions-picker-title-font-size: {config?.dimensions?.title?.font_size || DEFAULT_CONFIG.dimensions.title.font_size}; --dimensions-picker-select-border: {config?.dimensions?.select?.border || DEFAULT_CONFIG.dimensions.select.border}; --dimensions-background-color: {config?.dimensions?.background_color || DEFAULT_CONFIG.dimensions.background_color};">

        {#if !config?.date_range?.hidden}
        <span class="dimensions-picker-title">
          Date Range Dimension
        </span>

          <select class="dimensions-picker-select" bind:value={date_range_key}>
            {#each mapped_dimensions as dimension}
              <option value={dimension.value}>
                {dimension.label}
              </option>
            {/each}
          </select>
        {/if}

        <span class="dimensions-picker-title">
        Dimensions
      </span>

        {#each mapped_dimensions as dimension}
          <div class="selected-dimension hidden" />

          <span
            class="cursor-pointer dimension {dimension.selected ? 'selected-dimension' : ''}"
            style="color: {dimension.selected ? 'var(--dimensions-active-text-color)' : 'var(--dimensions-text-color)'}"
            on:click={() => select_dimension(dimension.value)}
          >
          {#if config?.data_formatting?.[dimension.label]}
            {config.data_formatting[dimension.label].label}
          {:else}
            {dimension.label}
          {/if}
        </span>
        {/each}
      </div>

      <div class="table-wrapper-container">
        {#if active_dimensions?.length}
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

            <div class="icon-button" on:click={() => export_csv()} style="display: {is_search_active ? 'none' : 'block'}">
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
                class="lucide lucide-download">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
            </div>

            <div class="icon-button sort-button" on:click={() => (show_sort_popover = !show_sort_popover)}>
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
                class="lucide lucide-arrow-down-up">
                <path d="m3 16 4 4 4-4"/>
                <path d="M7 20V4"/>
                <path d="m21 8-4-4-4 4"/>
                <path d="M17 4v16"/>
              </svg>

              {#if config?.sort_priority?.length}
                <div class="sort-indicator" style="--sort-indicator-background: {config?.content?.table?.popover?.indicator?.background_color || DEFAULT_CONFIG.content?.table?.popover?.indicator?.background_color};">
                  {config.sort_priority.length}
                </div>
              {/if}
            </div>

            <div class="sort-popover" use:clickOutside on:click_outside={() => (show_sort_popover = false)} style="display: {show_sort_popover ? 'block' : 'none'}; --sort-popover-border: {config?.content?.table?.popover?.border || DEFAULT_CONFIG.content?.table?.popover?.border}; --sort-popover-background: {config?.content?.table?.popover?.background_color || DEFAULT_CONFIG.content?.table?.popover?.background_color};">
              <div class="sort-popover-head">
                <span>Sort columns</span>

                <div class="sort-popover-actions" style="--sort-popover-action-color: {config?.content?.table?.popover?.actions?.color || DEFAULT_CONFIG.content?.table?.popover?.actions?.color}; --sort-popover-action-background-color: {config?.content?.table?.popover?.actions?.background_color || DEFAULT_CONFIG.content?.table?.popover?.actions?.background_color}; --sort-popover-action-border: {config?.content?.table?.popover?.actions?.border || DEFAULT_CONFIG.content?.table?.popover?.actions?.border}; --sort-popover-action-hover-background-color: {config?.content?.table?.popover?.actions?.hover_background_color || DEFAULT_CONFIG.content?.table?.popover?.actions?.hover_background_color};">
                  <button class="sort-popover-action" on:click={() => add_column_to_sort()}>
                    Add column
                  </button>
                </div>
              </div>

              <div class="sort-popover-body">
                {#if config?.sort_priority}
                  {#if config.sort_priority?.length}
                    {#each config.sort_priority as item, index}
                      <div class="sort-popover-item">
                    <span class="sort-popover-item-index">
                      {index + 1}.
                    </span>
                        <select class="dimensions-picker-select" style="margin-right: 1rem;" bind:value={item.key}>
                          {#each active_dimensions as dimension}
                            <option value={dimension.value}>
                              {dimension.label}
                            </option>
                          {/each}
                        </select>

                        <select class="dimensions-picker-select" style="margin-right: 1rem;" bind:value={item.order}>
                          {#each [{label: 'A-Z', value: 'a-z'}, {label: 'Z-A', value: 'z-a'}] as order}
                            <option value={order.value}>
                              {order.label}
                            </option>
                          {/each}
                        </select>
                        <div class="sort-popover-item-actions" style="--sort-popover-action-color: {config?.content?.table?.popover?.actions?.color || DEFAULT_CONFIG.content?.table?.popover?.actions?.color}; --sort-popover-action-background-color: {config?.content?.table?.popover?.actions?.background_color || DEFAULT_CONFIG.content?.table?.popover?.actions?.background_color}; --sort-popover-action-border: {config?.content?.table?.popover?.actions?.border || DEFAULT_CONFIG.content?.table?.popover?.actions?.border}; --sort-popover-action-hover-background-color: {config?.content?.table?.popover?.actions?.hover_background_color || DEFAULT_CONFIG.content?.table?.popover?.actions?.hover_background_color};">
                          <button class="sort-popover-action" on:click={() => move_column_up(index)} disabled={index === 0}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up"><path d="M8 6L12 2L16 6"/><path d="M12 2V22"/></svg>
                          </button>
                          <button class="sort-popover-action" on:click={() => move_column_down(index)} disabled={(index + 1) === config.sort_priority.length}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-down"><path d="M8 18L12 22L16 18"/><path d="M12 2V22"/></svg>
                          </button>
                          <button class="sort-popover-action" on:click={() => remove_column(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                          </button>
                        </div>
                      </div>
                    {/each}
                  {/if}
                {/if}
              </div>
            </div>

            <div class="calendar-icon" bind:this={date_input_element} on:click={() => picker?.show()}>
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
             style="--table-wrapper-max-height: {config?.content?.max_height || DEFAULT_CONFIG.content.max_height}; --table-wrapper-background: {config?.content?.background || DEFAULT_CONFIG.content.background};">
          {#if active_dimensions}
            <div
              style="--table-head-text-color: {config?.content?.table?.head?.color || DEFAULT_CONFIG.content.table.head.color}; --table-cell-background: {config?.content?.table?.cell?.background || DEFAULT_CONFIG.content.table.cell.background}; --table-container-background: {config?.content?.table?.container?.background || DEFAULT_CONFIG.content.table.container.background}; --table-container-padding: {config?.content?.table?.container?.padding || DEFAULT_CONFIG.content.table.container.padding}; --table-head-row-background: {config?.content?.table?.head?.background || DEFAULT_CONFIG.content.table.head.background}; --table-head-row-min-height: {config?.content?.table?.head?.min_height || DEFAULT_CONFIG.content.table.head.min_height}; --table-head-row-font-size: {config?.content?.table?.head?.font_size || DEFAULT_CONFIG.content.table.head.font_size}; --table-head-row-font-weight: {config?.content?.table?.head?.font_weight || DEFAULT_CONFIG.content.table.head.font_weight}; --table-head-row-padding: {config?.content?.table?.head?.padding || DEFAULT_CONFIG.content.table.head.padding}; --table-border: {config?.content?.table?.container?.border || DEFAULT_CONFIG.content.table.container.border}; --table-border-radius: {config?.content?.table?.container?.border_radius || DEFAULT_CONFIG.content.table.container.border_radius}; --table-border-color: {config?.content?.table?.container?.border_color || DEFAULT_CONFIG.content.table.container.border_color};"
            >
              <table style="--border-spacing: {config?.content?.table?.border_spacing || DEFAULT_CONFIG.content.table.border_spacing}; --border-collapse: {config?.content?.table?.border_collapse || DEFAULT_CONFIG.content.table.border_collapse}">
                <tr class="table-head-row">
                  {#each active_dimensions as dimension}
                    <th class={config?.sort_priority?.length ? '' : 'cursor-pointer'} on:click={() => sort_column_data(dimension.value)}>
                      {#if config?.data_formatting?.[dimension.label]}
                        {config.data_formatting[dimension.label].label}
                      {:else}
                        {dimension.label}
                      {/if}
                    </th>
                  {/each}
                </tr>

                {#each processed_data as row}
                  <tr>
                    {#each active_dimensions as dimension}
                      <td class="table-cell">
                        {#if typeof row[dimension.value] === 'object'}
                          {#if Object.entries(row[dimension.value]).length}
                            {#each Object.entries(row[dimension.value]) as [key, value]}
                              <div>
                                <b>{key}:</b>
                                {#if config?.formatter?.toString()}
                                  {#if config?.data_formatting?.[dimension.label]}
                                    {value ? config.data_formatting[dimension.label].formatter(value) : '-'}
                                  {:else}
                                    {value ? config.formatter(value) : '-'}
                                  {/if}
                                {:else}
                                  {#if config?.data_formatting?.[dimension.label]}
                                    {value ? config.data_formatting[dimension.label].formatter(value) : '-'}
                                  {:else}
                                    {value ? value : '-'}
                                  {/if}
                                {/if}
                              </div>
                            {/each}
                          {:else}
                            -
                          {/if}
                        {:else}
                          {#if config?.formatter?.toString()}
                            {#if config?.data_formatting?.[dimension.label]}
                              {row[dimension.value] ? config.data_formatting[dimension.label].formatter(row[dimension.value]) : '-'}
                            {:else}
                              {row[dimension.value] ? config.formatter(row[dimension.value]) : '-'}
                            {/if}
                          {:else}
                            {#if config?.data_formatting?.[dimension.label]}
                              {row[dimension.value] ? config.data_formatting[dimension.label].formatter(row[dimension.value]) : '-'}
                            {:else}
                              {row[dimension.value] ? row[dimension.value] : '-'}
                            {/if}
                          {/if}
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
  {/if}
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
        padding: 0.5rem;
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

    .lucide-arrow-down-up {
        position: relative;
    }

    .sort-button {
        position: relative;
    }

    .sort-indicator {
        position: absolute;
        right: -7px;
        top: 0;
        padding: 0.2rem;
        border-radius: 50%;
        background-color: var(--sort-indicator-background);
        color: white;
        font-size: 10px;
        width: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sort-popover {
        cursor: default;
        position: absolute;
        top: 2.5rem;
        right: 5rem;
        z-index: 10;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        border: var(--sort-popover-border);
        border-radius: 0.25rem;
        background-color: var(--sort-popover-background);
        padding: 0.5rem;
        width: 30vw;
        min-height: 6vh;

        &-head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }

        &-action {
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 0.25rem;
            background-color: var(--sort-popover-action-background-color);
            border: var(--sort-popover-action-border);
            color: var(--sort-popover-action-color);
        }

        &-action:hover {
            background-color: var(--sort-popover-action-hover-background-color);
        }

        &-actions {
            display: flex;
            gap: 0.5rem;
        }

        &-body {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        &-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem;

            &-index {
                padding: 0.5rem;
            }

            &-action {
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 0.25rem;
                background-color: var(--sort-popover-action-background-color);
                border: var(--sort-popover-action-border);
                color: var(--sort-popover-action-color);
            }

            &-action:hover {
                background-color: var(--sort-popover-action-hover-background-color);
            }

            &-actions {
                display: flex;
                gap: 0.5rem;
            }
        }
    }

    .table-wrapper-container {
        position: relative;
        display: flex;
        overflow-x: auto;
        flex: 1;
    }

    table {
        width: 100%;
        border-spacing: var(--border-spacing);
        border-collapse: var(--border-collapse);
    }

    .table-wrapper {
        margin-top: 3rem;
        width: 100%;
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

        &-skeleton {
            height: 40vh;
            width: 17vw;
            background-color: #f0f0f0;
            animation: pulse 2s infinite;
            @keyframes pulse {
                0% {
                    opacity: 1;
                }
                50% {
                    opacity: 0.5;
                }
                100% {
                    opacity: 1;
                }
            }
        }
    }

    .table-container-skeleton {
        height: 40vh;
        width: 100%;
        background-color: #f0f0f0;
        animation: pulse 2s infinite;
        @keyframes pulse {
            0% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
            100% {
                opacity: 1;
            }
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

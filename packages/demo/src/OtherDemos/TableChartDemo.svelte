<script lang="ts">
  import '../../../../dist/table-chart.wc.js';
  import { onMount } from 'svelte';
  // import { RUNS_DATA } from '../lib/consts/runs.const';
  import { TABLE_CHART_DATA } from '../lib/consts/table_data.const';

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

  /**
   * VARIABLES
   */
  let element: HTMLElement;
  let table;

  $: if (element) {
    window.addEventListener('message', (message) => {
      if (message.data.name === 'sql') {
        console.log(message.data.value);
      }
    });
  }

  /**
   * FUNCTIONS
   */
  onMount(() => {
    /**
     * Table element
     */
    table = document.createElement('jp-table-chart');

    /**
     * Table data
     */
    table.data = TABLE_CHART_DATA;
    table.dimensions = Object.keys(TABLE_CHART_DATA[0])

    /**
     * Table config
     */
    table.config = {
      type: 'sql',
      table: 'assessments',
      formatter: (value: string) => value + ' %',
      data_formatting: {
        project: {
          label: 'Project',
          formatter: (value: string) => {
            return value.toLowerCase();
          }
        }
      },
      date_range: {
        key: 'createdOn',
        hidden: true
      },
      dimensions: {
        capitalize: false,
        active_background: '#e88c8c',
        border: '1px solid #E0E0E0',
        width: '15vw',
        title: {
          color: '#757575',
          font_size: '0.75rem'
        }
      },
      content: {
        max_height: '80vh',
        background: '#75757511'
      }
    } as Config;

    element.appendChild(table);
  });
</script>

<div bind:this={element}></div>

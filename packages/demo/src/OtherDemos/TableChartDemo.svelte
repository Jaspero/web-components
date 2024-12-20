<script lang="ts">
  import '../../../../dist/table-chart.wc.js';
  import { onMount } from 'svelte';
  // import { RUNS_DATA } from '../lib/consts/runs.const';
  import { TABLE_CHART_DATA } from '../lib/consts/table_data.const';

  /**
   * TYPES
   */
  type Config = {
    formatter: (value: string) => {},
    data_formatting: {
      [key: string]: {
        label: string;
        formatter: (value: string) => {}
      }
    },
    date_range: {
      hidden: boolean;
      key: string;
    },
    dimensions: {
      capitalize: boolean;
      active_background: string;
      border: string;
      width: string;
      title: {
        color: string;
        font_size: string;
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
      background: string;
    }
  };

  /**
   * VARIABLES
   */
  let element: HTMLElement;

  /**
   * FUNCTIONS
   */
  onMount(() => {
    /**
     * Table element
     */
    const table = document.createElement('jp-table-chart');

    /**
     * Table data
     */
    table.data = TABLE_CHART_DATA;

    /**
     * Table config
     */
    table.config = {
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

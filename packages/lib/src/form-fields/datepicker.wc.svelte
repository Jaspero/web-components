<svelte:options
        customElement={{
    tag: 'jp-datepicker',
    shadow: 'none',
    extend: (customElementConstructor) => {
      return class extends customElementConstructor {
        static formAssociated = true;

        constructor() {
          super();
          this.attachedInternals = this.attachInternals();
        }
      };
    }
  }}
/>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import {options} from "./multiselect.wc.svelte";

  export let attachedInternals: ElementInternals;
  export let value: string = '';
  export let name: string = '';
  export let label: string = '';

  let borderTop: boolean = false;
  let borderBottom: boolean = false;
  let bindingElement;
  let menuStyle;
  let yearSelected = (new Date(Date.now())).getFullYear();
  let monthSelected = (new Date(Date.now())).getMonth();
  let dateSelected = (new Date(Date.now())).getDate();
  let pickerYear = yearSelected;
  let pickerMonth = monthSelected;
  let pickerRows;
  let openPicker = false;
  let daysMap = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  let monthMap = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  let yearPickerIndex = 0;

  export const getValue = () => value;

  const dispatch = createEventDispatcher();

  const getYearPickerRows = (yearPickerIndex) => {
    const tmp = Array.from(Array(4*6).keys()).map(el => el + 2000 + yearPickerIndex*4*6)
    return Array.from(Array(6).keys()).map((el) => {
      return tmp.slice(el * 4, (el + 1) * 4);
    });
  }

  const getPickerRows = (month, year) => {
    const thisMonthDays = 40 - new Date(year, month, 40).getDate();
    const prevMonthDays = 40 - new Date(year, month - 1, 40).getDate();
    const startingDay = new Date(year, month).getDay();
    const daysAfter = 6 * 7 - thisMonthDays - startingDay;
    let mData = [];

    mData = [
      ...mData,
      Array.from(Array(startingDay).keys())
              .map((el) => prevMonthDays - el)
              .toReversed()
              .map((el) => {
                let obj = { day: el, month: month - 1, year: year, gray: true };
                return obj;
              })
    ];

    mData = [
      ...mData,
      Array.from(Array(thisMonthDays).keys()).map((el) => {
        let obj = { day: el+1, month: month, year: year, gray: false };
        return obj;
      })
    ];

    mData = [
      ...mData,
      Array.from(Array(daysAfter).keys()).map((el) => {
        let obj = { day: el+1, month: month + 1, year: year, gray: true };
        return obj;
      })
    ];

    mData = mData.flat();

    mData = Array.from(Array(6).keys()).map((el) => {
      return mData.slice(el * 7, (el + 1) * 7);
    });

    return mData;
  };

  function toggleMenu(event) {
    if (event && event.target && event.target.closest('.menu')) {
      return;
    }

    const rect = bindingElement.getBoundingClientRect();
    const availableSpaceBelow = window.innerHeight - rect.bottom;
    const dropdownHeight = 304;

    let style: string = '';
    if (availableSpaceBelow < dropdownHeight) {
      style = `
            min-width: ${rect.width}px;
            bottom: ${window.innerHeight - rect.top}px;
            left: ${rect.left}px;
        `;
    } else {
      style = `
            min-width: ${rect.width}px;
            top: ${rect.bottom}px;
            left: ${rect.left}px;
        `;
    }

    menuStyle = style;
    openPicker = !openPicker;
  }

  function handleKeydown(event) {
    if (openPicker) {
      if (event.key === 'Escape') {
        toggleMenu(event);
        bindingElement.focus();
        return;
      }
    }
  }

  onMount(() => {
    pickerRows = getPickerRows(pickerMonth, pickerYear);
  });

  $: if (pickerMonth == 12) {
    pickerMonth = 0
    pickerYear++
  } else if (pickerMonth == -1){
    pickerMonth = 11
    pickerYear--
  }

  $: pickerYearRows = getYearPickerRows(yearPickerIndex)

  $: pickerRows = getPickerRows(pickerMonth, pickerYear);

  $: {
    value = `${yearSelected}-${monthSelected + 1 < 10 ? '0' : ''}${monthSelected + 1}-${dateSelected < 10 ? '0' : ''}${dateSelected}`
    attachedInternals.checkValidity();
    attachedInternals.setFormValue(value);
    dispatch('value', { value });
  }


  $: if (openPicker) {
    document.documentElement.style.overflowY = 'hidden';
  } else {
    document.documentElement.style.overflowY = '';
  }
</script>

<button class="field"
        bind:this={bindingElement}
        class:active={openPicker}
        class:borderBottom
        class:borderTop
        on:click|preventDefault={toggleMenu}>
  <span class="field-label" class:move={openPicker || value}>{@html label}</span>
  <p class="field-input">{dateSelected} {monthSelected + 1} {yearSelected}</p>

  <span class="field-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
    </svg>
  </span>
</button>

<div>
  <button on:click={() => yearPickerIndex--}>down</button>
  <button on:click={() => yearPickerIndex++}>up</button>
  {#each pickerYearRows as row}
  <div>
    {#each row as year}
      <button on:click={() => yearSelected = year}>{year}</button>
    {/each}
  </div>
  {/each}
</div>

<input type="date" {name} bind:value hidden />
{#if openPicker}
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div class="overlay" on:click|stopPropagation={toggleMenu} on:keydown={handleKeydown} tabindex="-1" role="dialog">
    <div class="menu" style={menuStyle}>
      <div class="menu-nav">
        <button on:click|preventDefault={() => (pickerYear = pickerYear - 1)}>&lt;&lt;</button>
        <button on:click|preventDefault={() => (pickerMonth = pickerMonth - 1)}>&lt;</button>
        <span>{monthMap[pickerMonth]},</span>
        <span>{pickerYear}</span>
        <button on:click|preventDefault={() => (pickerMonth = pickerMonth + 1)}>&gt;</button>
        <button on:click|preventDefault={() => (pickerYear = pickerYear + 1)}>&gt;&gt;</button>
      </div>

      <div>
        <table>
          {#each daysMap as day}
            <td>
              {day}
            </td>
          {/each}
        </table>

        <table>
          {#each pickerRows as row}
            <tr>
              {#each row as col}
                <td>
                  <button
                          on:click|preventDefault={() => {
                  dateSelected = col.day
                  yearSelected = col.year
                  monthSelected = col.month
                }}
                          class:gray={col.gray}
                          class:active={dateSelected == col.day && monthSelected == col.month && yearSelected == col.year}>
                    {col.day}
                  </button>
                </td>
              {/each}
            </tr>
          {/each}
        </table>
      </div>
    </div>
  </div>
{/if}

<style>
  .field {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: left;
    height: 3rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0 .75rem;
    gap: .75rem;
    background-color: var(--background-primary);
    border: 1px solid var(--border-primary);
    -webkit-border-radius: .25rem;
    -moz-border-radius: .25rem;
    border-radius: .25rem;
  }

  .field.active .field-icon {
    color: var(--primary-color);;
    fill: var(--primary-color);;
  }

  .field.borderTop {
    border-top-color: var(--primary-color);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .field.borderBottom {
    border-bottom-color: var(--primary-color);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .field-input {
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    -moz-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    width: 10rem;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    padding: 1rem 0 0 0;
    border: none;
    outline: none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }

  .field-label {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 1rem;
    -webkit-transition: transform .3s, top .3s, font-size .3s;
    -o-transition: transform .3s, top .3s, font-size .3s;
    -moz-transition: transform .3s, top .3s, font-size .3s;
    transition: transform .3s, top .3s, font-size .3s;
  }

  .field-label.move {
    top: .25rem;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    font-size: .75rem;
  }

  .field-icon {
    width: 1rem;
    height: 1rem;
    fill: var(--text-primary);
    transition: .3s;
  }

  .overlay {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .menu {
    position: absolute;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    max-height: 700px;
    padding: 1rem;
    overflow-y: auto;
    -webkit-border-bottom-left-radius: .25rem;
    -moz-border-radius-bottomleft: .25rem;
    border-bottom-left-radius: .25rem;
    -webkit-border-bottom-right-radius: .25rem;
    -moz-border-radius-bottomright: .25rem;
    border-bottom-right-radius: .25rem;
    -webkit-box-shadow: 0 6px 9px rgba(0,0,0,.16);
    -moz-box-shadow: 0 6px 9px rgba(0,0,0,.16);
    box-shadow: 0 6px 9px rgba(0,0,0,.16);
    background-color: var(--background-primary);
  }

  .menu-nav {
    display: flex;
    justify-content: center;
    gap: .5rem;
  }

  table {
    width: max-content;
  }

  td {
    width: 40px;
    height: 40px;
    max-width: 40px;
    text-align: center;
  }

  td button {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  td button:hover {
    background-color: var(--background-secondary);
  }

  td button.gray {
    opacity: .5;
  }

  td button.active {
    background-color: var(--primary-color);
    color: var(--text-on-primary);
    opacity: 1;
  }
</style>
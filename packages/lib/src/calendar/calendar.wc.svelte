<svelte:options
  customElement={{
    tag: 'jp-calendar',
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
  import { formatReturnDate } from '../utils/dateFormatter';

  export let attachedInternals: ElementInternals;
  export let value: string = '';
  export let id = null;
  export let name: string = '';
  export let returnFormat: string = 'unix';
  export let returnFormatFunction: (date: Date) => any = (date) => date.valueOf();

  let pickerYear = new Date(Date.now()).getFullYear();
  let pickerMonth = new Date(Date.now()).getMonth();
  let monthSelected, yearSelected, dateSelected;
  let modalOpen = false;
  let inputValue = '';
  let pickerRows;
  let openPicker = false;
  let yearSelector = false;
  let monthSelector = false;
  let schedulesByDay = {};
  let daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday'];
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
  let selectedTime;
  let yearPickerIndex = 0;
  let schedules = [];

  const dispatch = createEventDispatcher();

  export const getValue = () => JSON.parse(value);

  $: {
    value = JSON.stringify(
      schedules.map((el) => {
        const obj = { ...el };
        obj.date = formatReturnDate(obj.date, returnFormat, returnFormatFunction);
        return obj;
      })
    );
    attachedInternals.setFormValue(value);
  }

  $: {
    dispatch('value', { value: JSON.parse(value) });
  }

  const getYearPickerRows = (yearPickerIndex) => {
    const tmp = Array.from(Array(4 * 6).keys()).map((el) => el + 2000 + yearPickerIndex * 4 * 6);
    return Array.from(Array(6).keys()).map((el) => {
      return tmp.slice(el * 4, (el + 1) * 4);
    });
  };

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
          let obj = { day: el, month: month, year: year };
          return obj;
        })
    ];

    mData = [
      ...mData,
      Array.from(Array(thisMonthDays).keys()).map((el) => {
        let obj = { day: el + 1, month: month + 1, year: year };
        return obj;
      })
    ];

    mData = [
      ...mData,
      Array.from(Array(daysAfter).keys()).map((el) => {
        let obj = { day: el + 1, month: month, year: year };
        return obj;
      })
    ];

    mData = mData.flat();

    mData = Array.from(Array(6).keys()).map((el) => {
      return mData.slice(el * 7, (el + 1) * 7);
    });

    return mData;
  };

  onMount(() => {
    pickerRows = getPickerRows(pickerMonth, pickerYear);
  });

  $: if (pickerMonth == 12) {
    pickerMonth = 0;
    pickerYear++;
  } else if (pickerMonth == -1) {
    pickerMonth = 11;
    pickerYear--;
  }

  $: pickerYearRows = getYearPickerRows(yearPickerIndex);

  $: pickerRows = getPickerRows(pickerMonth, pickerYear);

  $: if (openPicker) {
    document.documentElement.style.overflowY = 'hidden';
  } else {
    document.documentElement.style.overflowY = '';
  }

  function updateScheduleArray() {
    const selectedDate = new Date(
            `${yearSelected}-${monthSelected + 1 < 10 ? '0' : ''}${monthSelected}-${
                    dateSelected < 10 ? '0' : ''
            }${dateSelected} ${selectedTime}`
    );
    console.log('selectedDate:', selectedDate);

    const newSchedule = {
      description: inputValue,
      date: selectedDate
    };
    schedules = [...schedules, newSchedule];
    modalOpen = false;
  }



  $: {
    if (schedules) {
      console.log(1, schedules);
      schedulesByDay = schedules.reduce((acc, cur) => {
        const day = cur.date.toISOString().split('T')[0];

        if (!acc[day]) {
          acc[day] = [];
        }

        acc[day].push(cur);

        return acc;
      }, {});
    }
    schedulesByDay = { ...schedulesByDay };
    console.log(schedulesByDay);
  }

  function hideButton() {

    const selectedDate = new Date(
            `${yearSelected}-${monthSelected + 1 < 10 ? '0' : ''}${monthSelected}-${
                    dateSelected < 10 ? '0' : ''
            }${dateSelected} ${selectedTime}`
    );

    console.log(selectedDate);

    return !selectedDate;

    // console.log(selectedDate.toISOString());
    // console.log(schedules);
    //
    // return !schedules.find((el) => el.date.toISOString() === selectedDate.toISOString());
  }

  function deleteModalData (data) {
    inputValue = '';
    modalOpen = false;
    selectedTime = null;
    if (schedules) {
        schedules = schedules.filter((el) => {
            const day = el.date.toISOString().split('T')[0];
            const selectedDay = new Date(
                    `${yearSelected}-${monthSelected + 1 < 10 ? '0' : ''}${monthSelected}-${
                            dateSelected < 10 ? '0' : ''
                    }${dateSelected}`
            ).toISOString().split('T')[0];
            return day !== selectedDay;
        });
    }
  }

  function prepareModalData(col) {
    yearSelected = col.year;
    monthSelected = col.month;
    dateSelected = col.day;

    const date = new Date(
            `${yearSelected}-${monthSelected + 1 < 10 ? '0' : ''}${monthSelected}-${
                    dateSelected < 10 ? '0' : ''
            }${dateSelected}`
    );

    const selectedSchedule = schedules.find((el) => {
      const day = el.date.toISOString().split('T')[0];
      const selectedDay = date.toISOString().split('T')[0];
      return day === selectedDay;
    });

    inputValue = selectedSchedule?.description || '';
    selectedTime = selectedSchedule?.date.getTime() || null;


    modalOpen = true;
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      updateScheduleArray();
    } else if (event.key === 'Escape') {
      modalOpen = false;
    }
  });
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="calendar">
  <div class="calendar-nav">
    <!--<button on:click|preventDefault={() => (pickerYear = pickerYear - 1)}>&lt;&lt;</button>-->
    <button class="calendar-nav-date" on:click|preventDefault={() => (yearSelector = true)}>
      <p>{monthMap[pickerMonth]}, {pickerYear}</p>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
        />
      </svg>
    </button>
    <div class="calendar-nav-buttons">
      <button on:click|preventDefault={() => (pickerMonth = pickerMonth - 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
          />
        </svg>
      </button>
      <button on:click|preventDefault={() => (pickerMonth = pickerMonth + 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
          />
        </svg>
      </button>
    </div>
    <!--<button on:click|preventDefault={() => (pickerYear = pickerYear + 1)}>&gt;&gt;</button>-->
  </div>

  <div>
    <table>
      <tr>
        {#each daysMap as day}
          <th>
            {day}
          </th>
        {/each}
      </tr>
      {#each pickerRows as row}
        <tr>
          {#each row as col}
            {@const key = col.year + '-' + col.month + '-' + col.day}
            <td
                    on:click={() => {
                      console.log(col);
                      prepareModalData(col)
        }}
            >
              <div class="cell-date">
                {col.day}
              </div>
              {#if schedulesByDay[key]}
                {#each schedulesByDay[key] as event}
                  <div>{event.description} {event.date.toLocaleString()}</div>
                {/each}
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </table>
  </div>

  {#if yearSelector}
    <div class="calendar-year">
      <div class="calendar-year-nav">
        <button
          class="calendar-year-nav-date"
          on:click|stopPropagation={() => (yearSelector = false)}
        >
          <p>
            {pickerYearRows[0][0]} - {pickerYearRows[pickerYearRows.length - 1][
              pickerYearRows[pickerYearRows.length - 1].length - 1
            ]}
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            />
          </svg>
        </button>
        <div class="calendar-year-nav-buttons">
          <button on:click|preventDefault={() => yearPickerIndex--}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
          </button>
          <button on:click|preventDefault={() => yearPickerIndex++}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              />
            </svg>
          </button>
        </div>
      </div>
      {#each pickerYearRows as row}
        <div class="calendar-year-row">
          {#each row as year}
            <button
              class="calendar-year-row-cell"
              on:click|preventDefault|stopPropagation={() => {
                pickerYear = year;
                yearSelector = false;
                monthSelector = true;
              }}>{year}</button
            >
          {/each}
        </div>
      {/each}
    </div>
  {/if}

  {#if monthSelector}
    <div class="calendar-month">
      <div class="calendar-month-nav">
        <button
          class="calendar-month-nav-date"
          on:click|preventDefault={() => {
            monthSelector = false;
          }}
        >
          <p>{pickerYear}</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </button>
        <div class="calendar-month-nav-buttons">
          <button on:click|preventDefault={() => (pickerYear = pickerYear - 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
          </button>
          <button on:click|preventDefault={() => (pickerYear = pickerYear + 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="calendar-month-grid">
        {#each monthMap as month, index}
          <div class="calendar-month-grid-cell">
            <button
              on:click|preventDefault={() => {
                pickerMonth = index;
                monthSelector = false;
              }}
            >
              {month}
            </button>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

{#if modalOpen}
<div class="modal" style="display: flex;">
  <div class="modal-container">
    <div>
      <svg on:click|preventDefault={() => (modalOpen = false)} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      <h2>Add an event or task</h2>
      <hr />
    </div>
    <input type="text" placeholder="Write a description" bind:value={inputValue} />
    <div>
      <div>
        {dateSelected}.{monthMap[monthSelected - 1]}.{yearSelected}
      </div>
      <div>
        <input type="time" bind:value={selectedTime} />
      </div>
    </div>
    <div>
      {#if hideButton()}
        <button id="deleteButton" class="delete-button" on:click|preventDefault={() => deleteModalData()}>Delete</button>
      {/if}
      <button
        on:click|preventDefault={() => updateScheduleArray()}
        disabled={!inputValue || !selectedTime}>Save</button
      >
    </div>
  </div>
</div>
{/if}

<input type="text" {id} {name} bind:value hidden />

<style>
  .calendar {
    display: flex;
    border: 1px solid #e65000;
    flex-direction: column;
    max-width: 900px;
    max-height: 700px;
    width: 100%;
    padding: 1rem;
  }

  .calendar-month {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background-color: var(--background-primary);
  }

  .calendar-month-grid {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .calendar-month-grid-cell button {
    width: 100%;
    border-radius: 999px;
    padding: 0.25rem 0.75rem;
  }

  .calendar-month-grid-cell button.active,
  .calendar-month-grid-cell button:hover {
    background-color: var(--primary-color);
    color: var(--text-on-primary);
  }

  .calendar-year {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background-color: var(--background-primary);
  }

  .calendar-nav,
  .calendar-month-nav,
  .calendar-year-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    gap: 0.5rem;
  }

  .calendar-year-nav-buttons,
  .calendar-month-nav-buttons,
  .calendar-nav-buttons {
    display: flex;
  }

  .calendar-year-nav-buttons button,
  .calendar-month-nav-buttons button,
  .calendar-nav-buttons button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    border-radius: 50%;
  }

  .calendar-year-nav-buttons button:hover,
  .calendar-month-nav-buttons button:hover,
  .calendar-nav-buttons button:hover {
    background-color: var(--background-secondary);
  }

  .calendar-year-row {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1 1 0;
    gap: 0.25rem;
  }

  .calendar-year-row-cell {
    flex: 1 1 0;
    padding: 0.25rem;
    border-radius: 999px;
  }

  .calendar-year-row-cell:hover,
  .calendar-year-row-cell.active {
    background-color: var(--primary-color);
    color: var(--text-on-primary);
  }

  .calendar-nav-date,
  .calendar-month-nav-date,
  .calendar-year-nav-date {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-align: left;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
  }

  .calendar-nav-date:hover,
  .calendar-month-nav-date:hover,
  .calendar-year-nav-date:hover {
    background-color: var(--background-secondary);
  }

  .modal {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .modal-container {
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    position: relative;
  }

  table {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  table,
  th,
  td {
    border: 1px solid gray;
    border-collapse: collapse;
  }

  table tr {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
  }

  table td {
    position: relative;
    min-height: 75px;
  }

  .cell-date {
    position: absolute;
    right: 0;
    top: 0;
  }
</style>

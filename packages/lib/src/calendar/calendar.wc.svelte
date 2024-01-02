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
  let pickerRows = [];
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

  let yearPickerIndex = 0;
  let schedules = [];
  let selectedTime;


  const getYearPickerRows = (yearPickerIndex) => {
    const tmp = Array.from(Array(4 * 6).keys()).map((el) => el + 2000 + yearPickerIndex * 4 * 6);
    return Array.from(Array(6).keys()).map((el) => {
      return tmp.slice(el * 4, (el + 1) * 4);
    });
  };

  $: pickerYearRows = getYearPickerRows(yearPickerIndex);

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

  $: if (pickerMonth == 12) {
    pickerMonth = 0;
    pickerYear++;
  } else if (pickerMonth == -1) {
    pickerMonth = 11;
    pickerYear--;
  }

  const getCalendarRows = (year, month) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    const rows = [];
    let currentRow = [];

    // previous month
    for (let i = firstDayOfMonth.getDay() - 1; i >= 0; i--) {
      const prevMonthDate = new Date(year, month, 0);
      prevMonthDate.setDate(prevMonthDate.getDate() - i);
      currentRow.push({
        year: prevMonthDate.getFullYear(),
        month: prevMonthDate.getMonth(),
        day: prevMonthDate.getDate(),
      });
    }

    // current month
    for (let i = 1; i <= daysInMonth; i++) {
      currentRow.push({
        year,
        month,
        day: i,
      });

      if (currentRow.length % 7 === 0) {
        rows.push(currentRow);
        currentRow = [];
      }
    }

    // remaining cells with days from the next month
    const remainingCells = 42 - currentRow.length;
    for (let i = 1; i <= remainingCells; i++) {
      const nextMonthDate = new Date(year, month + 1, i);
      currentRow.push({
        year: nextMonthDate.getFullYear(),
        month: nextMonthDate.getMonth(),
        day: nextMonthDate.getDate(),
      });
    }

    // Ensure there are exactly 6 rows
    while (rows.length < 6) {
      rows.push(currentRow.slice(0, 7));
      currentRow = currentRow.slice(7);
    }

    return rows;
  };






  $: pickerRows = getCalendarRows(pickerYear, pickerMonth + 1);  // I've added this +1 because of indicies


  function hideButton() {

    const selectedDate = new Date(
            `${yearSelected}-${monthSelected + 1 < 10 ? '0' : ''}${monthSelected}-${
                    dateSelected < 10 ? '0' : ''
            }${dateSelected} ${selectedTime}`
    );

    console.log(selectedDate);

    return !selectedDate;
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
</script>

<div class="calendar">
  <div class="calendar-nav">
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
  </div>

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
                prepareModalData(col);
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
      <input on:submbit type="text" placeholder="Write a description" bind:value={inputValue} />
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


<style>
  .calendar {
    margin-top: 100px;
    margin-bottom: 100px;
    border: 1px solid #e65000;
    justify-content: space-between;
    max-width: 900px;
    max-height: 700px;
    width: 100%;
    padding: 1rem;
  }

  .calendar-nav {
    display: flex;
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

  table {
    width: 100%;
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

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    background-color: white;
    padding: 1rem;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .modal-container {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
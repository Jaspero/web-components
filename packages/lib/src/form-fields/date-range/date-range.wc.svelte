<svelte:options
  customElement={{
    tag: 'jp-date-range',
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
  import { clickOutside } from '../../click-outside';
  import './date-range.css';
  import { createEventDispatcher } from 'svelte';
  import { formatDisplayDate, formatReturnDate } from '../../utils/dateFormatter';
  import Month from './Month.svelte';
  import Year from './Year.svelte';
  import Day from './Day.svelte';
  import {
    calculateMaxDate,
    calculateMinDate,
    isOutOfMaxBounds,
    isOutOfMinBounds
  } from './calculate-limits/min-date';

  export let attachedInternals: ElementInternals;
  export let value: string = '';
  export let firstInternalValue: string = '';
  export let secondInternalValue: string = '';
  export let required: boolean = false;
  export let requiredValidationMessage: string = '';
  export let name: string = '';
  export let label: string = '';
  export let labelType: 'inside' | 'outside' = 'inside';
  export let separator: string = ' to ';
  export let displayFormat: string = 'normal';
  export let displayFormatFunction: (date: Date) => string = (date) => date.toDateString();
  export let returnFormat: string = 'js';
  export let returnFormatFunction: (date: Date) => any = (date) => date.valueOf();
  export let minDate: string | Date;
  export let maxDate: string | Date;
  export let selectingFirst = true;
  export let maxSelectibleDays: number;
  export let minSelectibleDays: number;
  export let maxDateSelectible: Date;
  export let minDateSelectible: Date;
  let firstSelectedDateObject = new Date();
  let secondSelectedDateObject = new Date();
  let displayedDateString = '';
  let borderTop: boolean = false;
  let borderBottom: boolean = false;
  let bindingElement: HTMLButtonElement;
  let menuStyle: string;
  let firstYearSelected: number | null = null;
  let firstMonthSelected: string | number | null;
  let firstDateSelected: number | null;
  let secondYearSelected: number | null = null;
  let secondMonthSelected: string | number | null;
  let secondDateSelected: number | null;
  let pickerYear = new Date(Date.now()).getFullYear();
  let pickerMonth = new Date(Date.now()).getMonth();
  let pickerRows;
  let openPicker = false;
  let yearSelector = false;
  let monthSelector = false;
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

  function handleYearSelected(event) {
    const { year } = event.detail;
    pickerYear = year;
    yearSelector = false;
    monthSelector = true;
  }

  function handleMonthSelected(event) {
    const { month } = event.detail;
    pickerMonth = month;
    monthSelector = false;
  }

  function handleSelect(event) {
    const { day, month, year } = event.detail;
    if (selectingFirst) {
      firstDateSelected = day;
      firstYearSelected = year;
      firstMonthSelected = month;
      secondYearSelected = null;
      secondMonthSelected = null;
      selectingFirst = false;
    } else {
      const lessThanFirst =
        parseInt(firstInternalValue.split('-').join(''), 10) >
        parseInt(
          `${year + (month < 0 ? -1 : month > 11 ? 1 : 0)}${
            month < 0 ? '12' : month > 11 ? '01' : (month + 1 < 10 ? '0' : '') + (month + 1)
          }${day < 10 ? '0' : ''}${day}`,
          10
        );
      if (lessThanFirst) {
        secondDateSelected = firstDateSelected;
        secondYearSelected = firstYearSelected;
        secondMonthSelected = firstMonthSelected;
        firstDateSelected = day;
        firstYearSelected = year;
        firstMonthSelected = month;
      } else {
        secondDateSelected = day;
        secondYearSelected = year;
        secondMonthSelected = month;
      }
      selectingFirst = true;
    }
  }

  export const getValue = () => {
    if (firstYearSelected && secondYearSelected) {
      return (
        formatReturnDate(firstSelectedDateObject, returnFormat, returnFormatFunction) +
        separator +
        formatReturnDate(secondSelectedDateObject, returnFormat, returnFormatFunction)
      );
    } else {
      return '';
    }
  };

  const dispatch = createEventDispatcher();

  export const reportValidity = () => attachedInternals.reportValidity();

  const getYearPickerRows = (yearPickerIndex: number) => {
    const tmp = Array.from(Array(4 * 6).keys()).map((el) => el + 2024 + yearPickerIndex * 4 * 6);
    return Array.from(Array(6).keys()).map((el) => {
      return tmp.slice(el * 4, (el + 1) * 4);
    });
  };

  const getPickerRows = (month: number, year: number) => {
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
        let obj = { day: el + 1, month: month, year: year, gray: false };
        return obj;
      })
    ];

    mData = [
      ...mData,
      Array.from(Array(daysAfter).keys()).map((el) => {
        let obj = { day: el + 1, month: month + 1, year: year, gray: true };
        return obj;
      })
    ];

    mData = mData.flat();

    mData = Array.from(Array(6).keys()).map((el) => {
      return mData.slice(el * 7, (el + 1) * 7);
    });

    return mData;
  };

  function checkMinBounds(
    internalMinDate: Date | null,
    year: number,
    month: number,
    day: number,
    minDateAllowed: number | Date,
    selectingFirst: boolean
  ) {
    return (
      isOutOfMinBounds(internalMinDate, year, month, day) ||
      (minDateAllowed > new Date(year, month, day) && !selectingFirst && maxSelectibleDays)
    );
  }

  function checkMaxBounds(
    internalMaxDate: Date | null,
    year: number,
    month: number,
    day: number,
    maxDateAllowed: number | Date,
    selectingFirst: boolean
  ) {
    return (
      isOutOfMaxBounds(internalMaxDate, year, month, day) ||
      (maxDateAllowed < new Date(year, month, day) && !selectingFirst && maxSelectibleDays)
    );
  }

  function toggleMenu(event) {
    if (event && event.target && event.target.closest('.menu')) {
      return;
    }

    const rect = bindingElement.getBoundingClientRect();
    const availableSpaceBelow = window.innerHeight - rect.bottom;
    const dropdownHeight = 385;

    let style: string = '';
    if (availableSpaceBelow < dropdownHeight) {
      style = `
        bottom: ${window.innerHeight - rect.top}px;
        left: ${rect.left}px;
      `;
    } else {
      style = `
        top: ${rect.bottom}px;
        left: ${rect.left}px;
      `;
    }

    menuStyle = style;
    openPicker = !openPicker;
  }

  $: maxDateSelectible = calculateMaxDate(firstInternalValue, maxSelectibleDays);
  $: minDateSelectible = calculateMinDate(firstInternalValue, maxSelectibleDays);

  $: internalMinDate = minDate ? (minDate instanceof Date ? minDate : new Date(minDate)) : null;
  $: internalMaxDate = maxDate ? (maxDate instanceof Date ? maxDate : new Date(maxDate)) : null;

  $: internalMinMonthCheck = checkMinBounds(
    internalMinDate,
    pickerYear,
    pickerMonth,
    1,
    minDateSelectible,
    selectingFirst
  );
  $: internalMaxMonthCheck = checkMaxBounds(
    internalMaxDate,
    pickerYear,
    pickerMonth,
    31,
    maxDateSelectible,
    selectingFirst
  );

  $: internalMinYearCheck = checkMinBounds(
    internalMinDate,
    pickerYear,
    0,
    1,
    minDateSelectible,
    selectingFirst
  );
  $: internalMaxYearCheck = checkMaxBounds(
    internalMaxDate,
    pickerYear,
    11,
    31,
    maxDateSelectible,
    selectingFirst
  );

  $: internalMinYearPageCheck = checkMinBounds(
    internalMinDate,
    2024 + yearPickerIndex * 4 * 6,
    0,
    1,
    minDateSelectible,
    selectingFirst
  );
  $: internalMaxYearPageCheck = checkMaxBounds(
    internalMaxDate,
    2024 + yearPickerIndex * 4 * 6,
    11,
    31,
    maxDateSelectible,
    selectingFirst
  );

  $: {
    if (openPicker) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = '';
    }
  }
  $: {
    if (value) {
      const [from, to] = value.split(separator);
      const first = new Date(from);
      const second = new Date(to);
      firstYearSelected = first.getFullYear();
      firstMonthSelected = first.getMonth();
      firstDateSelected = first.getDate();
      secondYearSelected = second.getFullYear();
      secondMonthSelected = second.getMonth();
      secondDateSelected = second.getDate();
      pickerMonth = secondMonthSelected;
      pickerYear = secondYearSelected;
      attachedInternals.setValidity({});
    } else {
      if (required) {
        attachedInternals.setValidity(
          { customError: true },
          requiredValidationMessage || `Date is required.`,
          bindingElement
        );
      }
      dispatch('value', { value: '' });
      attachedInternals.checkValidity();
    }
  }
  $: if (firstMonthSelected == 12) {
    firstMonthSelected = 0;
    firstYearSelected++;
  }
  $: if (firstMonthSelected == -1) {
    firstMonthSelected = 11;
    firstYearSelected--;
  }

  $: if (secondMonthSelected == 12) {
    secondMonthSelected = 0;
    secondYearSelected++;
  }
  $: if (secondMonthSelected == -1) {
    secondMonthSelected = 11;
    secondYearSelected--;
  }

  $: if (pickerMonth == 12) {
    pickerMonth = 0;
    pickerYear++;
  } else if (pickerMonth == -1) {
    pickerMonth = 11;
    pickerYear--;
  }

  $: pickerYearRows = getYearPickerRows(yearPickerIndex);

  $: pickerRows = getPickerRows(pickerMonth, pickerYear);

  $: {
    if (firstYearSelected) {
      firstInternalValue = `${firstYearSelected}-${Number(firstMonthSelected) + 1 < 10 ? '0' : ''}${
        Number(firstMonthSelected) + 1
      }-${Number(firstDateSelected) < 10 ? '0' : ''}${firstDateSelected}`;
      firstSelectedDateObject = new Date(firstInternalValue);
      displayedDateString =
        formatDisplayDate(firstSelectedDateObject, displayFormat, displayFormatFunction) +
        separator;
      if (required) {
        attachedInternals.setValidity(
          { customError: true },
          requiredValidationMessage || `Date is required.`
        );
      }
      dispatch('value', { value: '' });
    }
  }

  $: {
    if (secondYearSelected) {
      secondInternalValue = `${secondYearSelected}-${Number(secondMonthSelected) + 1 < 10 ? '0' : ''}${
        Number(secondMonthSelected) + 1
      }-${Number(secondDateSelected) < 10 ? '0' : ''}${secondDateSelected}`;
      secondSelectedDateObject = new Date(secondInternalValue);
      displayedDateString =
        formatDisplayDate(firstSelectedDateObject, displayFormat, displayFormatFunction) +
        separator +
        formatDisplayDate(secondSelectedDateObject, displayFormat, displayFormatFunction);
      const returnDate =
        formatReturnDate(firstSelectedDateObject, returnFormat, returnFormatFunction) +
        separator +
        formatReturnDate(secondSelectedDateObject, returnFormat, returnFormatFunction);
      attachedInternals.setValidity({});
      attachedInternals.setFormValue(returnDate);
      dispatch('value', { value: returnDate });
    }
  }
  $: displayLabel = required ? `${label} *` : label;
</script>

{#if label && labelType == 'outside'}
  <div class="jp-date-range-label">
    {@html displayLabel}
  </div>
{/if}
<button
  type="button"
  class="jp-date-range-field"
  bind:this={bindingElement}
  class:jp-date-range-field-active={openPicker}
  class:jp-date-range-field-borderBottom={borderBottom}
  class:jp-date-range-field-borderTop={borderTop}
  on:click|preventDefault={toggleMenu}
>
  {#if label && labelType == 'inside'}
    <span class="jp-date-range-field-label" class:jp-date-range-field-label-move={openPicker || displayedDateString}>
      {@html displayLabel}
    </span>
  {/if}
  <p class={`jp-date-range-field-input ${labelType == 'outside' || !label ? '' : 'jp-date-range-field-input-padding'}`}>
    {displayedDateString}
  </p>

  <span class="jp-date-range-field-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path
        d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"
      />
    </svg>
  </span>
</button>

<input type="date" name={`${name}-from`} bind:value={firstInternalValue} hidden />
<input type="date" name={`${name}-to`} bind:value={secondInternalValue} hidden />

{#if openPicker}
  <div class="jp-date-range-overlay">
    <div
      class="jp-date-range-menu"
      use:clickOutside
      on:click_outside={() => (openPicker = false)}
      style={menuStyle}
    >
      <div class="jp-date-range-menu-nav">
        <button
          type="button"
          class="jp-date-range-menu-nav-date"
          on:click|preventDefault={() => (yearSelector = true)}
        >
          <p>{monthMap[pickerMonth]}, {pickerYear}</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </button>
        <div class="jp-date-range-menu-nav-buttons">
          <button
            type="button"
            on:click|preventDefault={() => (pickerMonth = pickerMonth - 1)}
            class:jp-date-range-menu-nav-buttons-disabled={Boolean(internalMinMonthCheck)}
            disabled={Boolean(internalMinMonthCheck)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
          </button>
          <button
            type="button"
            on:click|preventDefault={() => (pickerMonth = pickerMonth + 1)}
            class:jp-date-range-menu-nav-buttons-disabled={Boolean(internalMaxMonthCheck)}
            disabled={Boolean(internalMaxMonthCheck)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
              <path
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div>
        <div class="jp-date-range-table">
          <div class="jp-date-range-table-row">
            {#each daysMap as day}
              <div class="jp-date-range-table-cell">
                {day}
              </div>
            {/each}
          </div>
        </div>

        <div class="jp-date-range-table">
          {#each pickerRows as row}
            <div class="jp-date-range-table-row">
              {#each row as col}
                <Day
                  {minDateSelectible}
                  {maxDateSelectible}
                  {col}
                  {minSelectibleDays}
                  {maxSelectibleDays}
                  {selectingFirst}
                  {firstDateSelected}
                  {internalMaxDate}
                  {internalMinDate}
                  {firstInternalValue}
                  {secondInternalValue}
                  {firstMonthSelected}
                  {firstYearSelected}
                  {secondYearSelected}
                  on:dateSelected={handleSelect}
                ></Day>
              {/each}
            </div>
          {/each}
        </div>
      </div>

      {#if yearSelector}
        <div class="jp-date-range-menu-year">
          <div class="jp-date-range-menu-year-nav">
            <button
              type="button"
              class="jp-date-range-menu-year-nav-date"
              on:click|stopPropagation={() => (yearSelector = false)}
            >
              <p>
                {pickerYearRows[0][0]} - {pickerYearRows[pickerYearRows.length - 1][
                  pickerYearRows[pickerYearRows.length - 1].length - 1
                ]}
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path
                  d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                />
              </svg>
            </button>
            <div class="jp-date-range-menu-year-nav-buttons">
              <button
                type="button"
                on:click|preventDefault={() => yearPickerIndex--}
                class:jp-date-range-menu-year-nav-buttons-disabled={Boolean(internalMinYearPageCheck)}
                disabled={Boolean(internalMinYearPageCheck)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                  <path
                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                  />
                </svg>
              </button>
              <button
                type="button"
                on:click|preventDefault={() => yearPickerIndex++}
                class:jp-date-range-menu-year-nav-buttons-disabled={Boolean(internalMaxYearPageCheck)}
                disabled={Boolean(internalMaxYearPageCheck)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                  <path
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </svg>
              </button>
            </div>
          </div>
          {#each pickerYearRows as row}
            <div class="jp-date-range-menu-year-row">
              {#each row as year}
                <div class="jp-date-range-menu-year-row-cell">
                  <Year
                    {minDateSelectible}
                    {maxDateSelectible}
                    {internalMaxDate}
                    {internalMinDate}
                    {firstYearSelected}
                    {secondYearSelected}
                    {year}
                    {selectingFirst}
                    {maxSelectibleDays}
                    on:yearSelected={handleYearSelected}
                  />
                </div>
              {/each}
            </div>
          {/each}
        </div>
      {/if}

      {#if monthSelector}
        <div class="jp-date-range-menu-month">
          <div class="jp-date-range-menu-month-nav">
            <button
              type="button"
              class="jp-date-range-menu-month-nav-date"
              on:click|stopPropagation={() => {
                monthSelector = false;
              }}
            >
              <p>{pickerYear}</p>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                />
              </svg>
            </button>
            <div class="jp-date-range-menu-month-nav-buttons">
              <button
                type="button"
                on:click|preventDefault={() => (pickerYear = pickerYear - 1)}
                class:jp-date-range-menu-month-nav-buttons-disabled={Boolean(internalMinYearCheck)}
                disabled={Boolean(internalMinYearCheck)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                  <path
                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                  />
                </svg>
              </button>
              <button
                type="button"
                on:click|preventDefault={() => (pickerYear = pickerYear + 1)}
                class:jp-date-range-menu-month-nav-buttons-disabled={Boolean(internalMaxYearCheck)}
                disabled={Boolean(internalMaxYearCheck)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                  <path
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="jp-date-range-menu-month-grid">
            {#each monthMap as month, index}
              <div class="jp-date-range-menu-month-grid-cell">
                <Month
                  {minDateSelectible}
                  {maxDateSelectible}
                  {index}
                  {month}
                  {pickerYear}
                  {internalMaxDate}
                  {internalMinDate}
                  {firstMonthSelected}
                  {secondMonthSelected}
                  {firstYearSelected}
                  {secondYearSelected}
                  {selectingFirst}
                  {maxSelectibleDays}
                  on:monthSelected={handleMonthSelected}
                />
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}

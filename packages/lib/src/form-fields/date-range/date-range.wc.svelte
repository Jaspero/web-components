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
  import { clickOutside } from '../../utils/click-outside';
  import './date-range.pcss';
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
  import calendarIcon from '../../icons/calendar.svg?raw';
  import dropdownArrowExpandedIcon from '../../icons/dropdown-arrow-expanded.svg?raw';
  import leftArrowIcon from '../../icons/left-arrow.svg?raw';
  import rightArrowIcon from '../../icons/right-arrow.svg?raw';
  import upArrowIcon from '../../icons/up-arrow.svg?raw';
  import closeCrossIcon from '../../icons/close-cross.svg?raw';

  export let showClearButton = true;
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
  export let maxSelectableDays: number;
  export let minSelectableDays: number;
  export let maxDateSelectable: Date;
  export let minDateSelectable: Date;

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

  function handleYearSelected(event: { detail: { year: any } }) {
    const { year } = event.detail;
    pickerYear = year;
    yearSelector = false;
    monthSelector = true;
  }

  function handleMonthSelected(event: { detail: { month: any } }) {
    const { month } = event.detail;
    pickerMonth = month;
    monthSelector = false;
  }

  function handleSelect(event: { detail: { day: any; month: any; year: any } }) {
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
    let mData: any[] = [];

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
      (minDateAllowed > new Date(year, month, day) && !selectingFirst && maxSelectableDays)
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
      (maxDateAllowed < new Date(year, month, day) && !selectingFirst && maxSelectableDays)
    );
  }

  function toggleMenu(event: MouseEvent) {
    if (event && event.target && (event.target as HTMLElement).closest('.menu')) {
      return;
    }

    const rect = bindingElement.getBoundingClientRect();
    const availableSpaceBelow = window.innerHeight - rect.bottom;
    const dropdownHeight = 400;

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
  function clearInput(event?: MouseEvent) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    firstYearSelected = null;
    firstMonthSelected = null;
    firstDateSelected = null;
    secondYearSelected = null;
    secondMonthSelected = null;
    secondDateSelected = null;

    displayedDateString = '';
    firstInternalValue = '';
    secondInternalValue = '';
    value = '';

    selectingFirst = true;

    if (attachedInternals) {
      attachedInternals.setFormValue('');
    }

    dispatch('value', { value: '' });
    openPicker = false;
  }

  $: hasInput = Boolean(
    (firstInternalValue || secondInternalValue || displayedDateString) ||
    (firstYearSelected !== null && firstMonthSelected !== null && firstDateSelected !== null) ||
    (secondYearSelected !== null && secondMonthSelected !== null && secondDateSelected !== null)
  );

  $: maxDateSelectable = calculateMaxDate(firstInternalValue, maxSelectableDays);
  $: minDateSelectable = calculateMinDate(firstInternalValue, maxSelectableDays);

  $: internalMinDate = minDate ? (minDate instanceof Date ? minDate : new Date(minDate)) : null;
  $: internalMaxDate = maxDate ? (maxDate instanceof Date ? maxDate : new Date(maxDate)) : null;

  $: internalMinMonthCheck = checkMinBounds(
    internalMinDate,
    pickerYear,
    pickerMonth,
    1,
    minDateSelectable,
    selectingFirst
  );
  $: internalMaxMonthCheck = checkMaxBounds(
    internalMaxDate,
    pickerYear,
    pickerMonth,
    31,
    maxDateSelectable,
    selectingFirst
  );

  $: internalMinYearCheck = checkMinBounds(
    internalMinDate,
    pickerYear,
    0,
    1,
    minDateSelectable,
    selectingFirst
  );
  $: internalMaxYearCheck = checkMaxBounds(
    internalMaxDate,
    pickerYear,
    11,
    31,
    maxDateSelectable,
    selectingFirst
  );

  $: internalMinYearPageCheck = checkMinBounds(
    internalMinDate,
    2024 + yearPickerIndex * 4 * 6,
    0,
    1,
    minDateSelectable,
    selectingFirst
  );
  $: internalMaxYearPageCheck = checkMaxBounds(
    internalMaxDate,
    2024 + yearPickerIndex * 4 * 6,
    11,
    31,
    maxDateSelectable,
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
      value = '';
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
  $: if (firstMonthSelected == 12 && firstYearSelected) {
    firstMonthSelected = 0;
    firstYearSelected++;
  }
  $: if (firstMonthSelected == -1 && firstYearSelected) {
    firstMonthSelected = 11;
    firstYearSelected--;
  }

  $: if (secondMonthSelected == 12 && secondYearSelected) {
    secondMonthSelected = 0;
    secondYearSelected++;
  }
  $: if (secondMonthSelected == -1 && secondYearSelected) {
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
    <span
      class="jp-date-range-field-label"
      class:jp-date-range-field-label-move={openPicker || displayedDateString}
    >
      {@html displayLabel}
    </span>
  {/if}
  <p
    class={`jp-date-range-field-input ${labelType == 'outside' || !label ? '' : 'jp-date-range-field-input-padding'}`}
  >
    {displayedDateString}
  </p>

    {#if showClearButton && hasInput}
    <button
      type="button"
      class="jp-datepicker-clear-button"
      on:click={clearInput}
      aria-label="Clear selection"
    >
      {@html closeCrossIcon}
    </button>
  {/if}

  <span class="jp-date-range-field-icon">
    {@html calendarIcon}
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
          {@html dropdownArrowExpandedIcon}
        </button>
        <div class="jp-date-range-menu-nav-buttons">
          <button
            type="button"
            on:click|preventDefault={() => (pickerMonth = pickerMonth - 1)}
            class:jp-date-range-menu-nav-buttons-disabled={Boolean(internalMinMonthCheck)}
            disabled={Boolean(internalMinMonthCheck)}
          >
            {@html leftArrowIcon}
          </button>
          <button
            type="button"
            on:click|preventDefault={() => (pickerMonth = pickerMonth + 1)}
            class:jp-date-range-menu-nav-buttons-disabled={Boolean(internalMaxMonthCheck)}
            disabled={Boolean(internalMaxMonthCheck)}
          >
            {@html rightArrowIcon}
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
                  {minDateSelectable}
                  {maxDateSelectable}
                  {col}
                  {minSelectableDays}
                  {maxSelectableDays}
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
              {@html upArrowIcon}
            </button>
            <div class="jp-date-range-menu-year-nav-buttons">
              <button
                type="button"
                on:click|preventDefault={() => yearPickerIndex--}
                class:jp-date-range-menu-year-nav-buttons-disabled={Boolean(
                  internalMinYearPageCheck
                )}
                disabled={Boolean(internalMinYearPageCheck)}
              >
                {@html leftArrowIcon}
              </button>
              <button
                type="button"
                on:click|preventDefault={() => yearPickerIndex++}
                class:jp-date-range-menu-year-nav-buttons-disabled={Boolean(
                  internalMaxYearPageCheck
                )}
                disabled={Boolean(internalMaxYearPageCheck)}
              >
                {@html rightArrowIcon}
              </button>
            </div>
          </div>
          {#each pickerYearRows as row}
            <div class="jp-date-range-menu-year-row">
              {#each row as year}
                <div class="jp-date-range-menu-year-row-cell">
                  <Year
                    {minDateSelectable}
                    {maxDateSelectable}
                    {internalMaxDate}
                    {internalMinDate}
                    {firstYearSelected}
                    {secondYearSelected}
                    {year}
                    {selectingFirst}
                    {maxSelectableDays}
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
              {@html upArrowIcon}
            </button>
            <div class="jp-date-range-menu-month-nav-buttons">
              <button
                type="button"
                on:click|preventDefault={() => (pickerYear = pickerYear - 1)}
                class:jp-date-range-menu-month-nav-buttons-disabled={Boolean(internalMinYearCheck)}
                disabled={Boolean(internalMinYearCheck)}
              >
                {@html leftArrowIcon}
              </button>
              <button
                type="button"
                on:click|preventDefault={() => (pickerYear = pickerYear + 1)}
                class:jp-date-range-menu-month-nav-buttons-disabled={Boolean(internalMaxYearCheck)}
                disabled={Boolean(internalMaxYearCheck)}
              >
                {@html rightArrowIcon}
              </button>
            </div>
          </div>

          <div class="jp-date-range-menu-month-grid">
            {#each monthMap as month, index}
              <div class="jp-date-range-menu-month-grid-cell">
                <Month
                  {minDateSelectable}
                  {maxDateSelectable}
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
                  {maxSelectableDays}
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

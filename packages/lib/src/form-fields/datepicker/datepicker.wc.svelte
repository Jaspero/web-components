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
  import calendarIcon from '../../icons/calendar.svg?raw';
  import dropdownArrowExpandedIcon from '../../icons/dropdown-arrow-expanded.svg?raw';
  import upArrowIcon from '../../icons/up-arrow.svg?raw';
  import leftArrowIcon from '../../icons/left-arrow.svg?raw';
  import rightArrowIcon from '../../icons/right-arrow.svg?raw';
  import closeCrossIcon from '../../icons/close-cross.svg?raw';
  import { clickOutside } from '../../utils/click-outside';
  import { createEventDispatcher } from 'svelte';
  import { formatDisplayDate, formatReturnDate } from '../../utils/dateFormatter';
  import Day from '../datepicker/Day.svelte';
  import Month from '../datepicker/Month.svelte';
  import Year from '../datepicker/Year.svelte';
  import { isOutOfMaxBounds } from './is-out-of-max-bounds';
  import { isOutOfMinBounds } from './is-out-of-min-bounds';
  import './datepicker.wc.pcss';

  export let showClearButton = true;
  export let attachedInternals: ElementInternals;
  export let value = '';
  export let internalValue = '';
  export let required = false;
  export let requiredValidationMessage: string = '';
  export let enableMultiple = false;
  export let separator = ', ';
  export let name = '';
  export let label = '';
  export let labelType: 'inside' | 'outside' = 'inside';
  export let displayFormat: 'custom' | 'normal' | 'short' | 'medium' | 'long' | 'full' = 'normal';
  export let displayFormatFunction: (date: Date) => string = (date) => date.toDateString();
  export let returnFormat: 'custom' | 'js' | 'unix' | 'json' | 'utc' | 'iso' | 'isoDate' = 'js';
  export let returnFormatFunction: (date: Date) => any = (date) => date.valueOf();
  export let minDate: string | Date;
  export let maxDate: string | Date;
  export let disabled = false;
  export let readonly = false;
  export let allowedDates = '';
  let allowedDateTimestamps: number[];
  let selectedDateObject = new Date();
  let displayedDateString = '';
  let selectedDates: { year: any; month: any; day: any }[] = [];
  let date: { year: number; month: number; day: number };
  let dates: (string | number | Date)[] = [];
  let datePicked: boolean;
  let borderTop = false;
  let borderBottom = false;
  let bindingElement: HTMLButtonElement;
  let menuStyle: string;
  let yearSelected: number | null = null;
  let monthSelected: number | null = null;
  let dateSelected: number | null = null;
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

  function handleDateSelected(event: { detail: { day: any; month: any; year: any } }) {
    const { day, month, year } = event.detail;
    dateSelected = day;
    monthSelected = month;
    yearSelected = year;
    openPicker = false;
  }

  function handleMonthSelected(event: { detail: { month: any } }) {
    const { month } = event.detail;
    pickerMonth = month;
    monthSelector = false;
  }

  function handleYearSelected(event: { detail: { year: any } }) {
    const { year } = event.detail;
    pickerYear = year;
    yearSelector = false;
    monthSelector = true;
  }

  function handleMultipleSelects(event: {
    detail: { day: number; month: number; year: number; isDatePicked: any };
  }) {
    const { day, month, year, isDatePicked } = event.detail;
    dateSelected = day;
    monthSelected = month;
    yearSelected = year;
    openPicker = true;
    datePicked = isDatePicked;
    date = { year: yearSelected, month: monthSelected, day: dateSelected };
    if (
      selectedDates.some(
        (e) => e.year === yearSelected && e.month === monthSelected && e.day === dateSelected
      )
    ) {
      const index = selectedDates.findIndex(
        (e) => e.year === yearSelected && e.month === monthSelected && e.day === dateSelected
      );
      selectedDates.splice(index, 1);
    } else {
      selectedDates.push(date);
    }

    selectedDates = [...selectedDates];
  }

  $: internalMinDate = minDate ? (minDate instanceof Date ? minDate : new Date(minDate)) : null;
  $: internalMaxDate = maxDate ? (maxDate instanceof Date ? maxDate : new Date(maxDate)) : null;

  $: internalMinMonthCheck = isOutOfMinBounds(internalMinDate, pickerYear, pickerMonth, 0);
  $: internalMaxMonthCheck = isOutOfMaxBounds(internalMaxDate, pickerYear, pickerMonth, 31);
  $: internalMinYearCheck = isOutOfMinBounds(internalMinDate, pickerYear, 0, 1);
  $: internalMaxYearCheck = isOutOfMaxBounds(internalMaxDate, pickerYear, 11, 31);
  $: internalMinYearPageCheck = isOutOfMinBounds(
    internalMinDate,
    2000 + yearPickerIndex * 4 * 6,
    0,
    1
  );
  $: internalMaxYearPageCheck = isOutOfMaxBounds(
    internalMaxDate,
    2000 + (yearPickerIndex + 1) * 4 * 6,
    11,
    31
  );

  export const getValue = () => {
    if (enableMultiple && dates.length > 0) {
      let returnValues = dates.map((elem) =>
        formatReturnDate(new Date(elem), returnFormat, returnFormatFunction)
      );
      return returnValues.join(separator);
    } else if (yearSelected) {
      return formatReturnDate(selectedDateObject, returnFormat, returnFormatFunction);
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
        .map((el) => ({
          day: el,
          month: month - 1,
          year: year,
          gray: true
        }))
    ];

    mData = [
      ...mData,
      Array.from(Array(thisMonthDays).keys()).map((el) => ({
        day: el + 1,
        month: month,
        year: year,
        gray: false
      }))
    ];

    mData = [
      ...mData,
      Array.from(Array(daysAfter).keys()).map((el) => ({
        day: el + 1,
        month: month + 1,
        year: year,
        gray: true
      }))
    ];

    mData = mData.flat();

    mData = Array.from(Array(6).keys()).map((el) => mData.slice(el * 7, (el + 1) * 7));

    return mData;
  };

  function toggleMenu(event: any) {
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

  function clearInput(event?: MouseEvent) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    yearSelected = null;
    monthSelected = null;
    dateSelected = null;
    displayedDateString = '';
    internalValue = '';
    dates = [];
    selectedDates = [];
    datePicked = false;

    if (attachedInternals) {
      attachedInternals.setFormValue('');
    }

    dispatch('value', { value: '' });
    openPicker = false;
  }

  $: hasInput = Boolean(
    displayedDateString ||
      internalValue ||
      yearSelected !== null ||
      (dates && dates.length > 0) ||
      (selectedDates && selectedDates.length > 0)
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
      if (enableMultiple) {
        dates = value
          .split(separator)
          .map((v) => new Date(v.trim()))
          .filter((d) => !isNaN(d.getTime()))
          .map((d) => {
            return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d
              .getDate()
              .toString()
              .padStart(2, '0')}`;
          });

        selectedDates = dates.map((dateStr) => {
          const d = new Date(dateStr);
          return {
            year: d.getFullYear(),
            month: d.getMonth(),
            day: d.getDate()
          };
        });
        displayedDateString = dates
          .map((d) => formatDisplayDate(new Date(d), displayFormat, displayFormatFunction))
          .join(separator);

        if (dates.length > 0) {
          const last = new Date(dates[dates.length - 1]);
          yearSelected = last.getFullYear();
          monthSelected = last.getMonth();
          dateSelected = last.getDate();
          pickerMonth = last.getMonth();
          pickerYear = last.getFullYear();
        }
      } else {
        const tmp = new Date(value);
        if (!isNaN(tmp.getTime())) {
          yearSelected = tmp.getFullYear();
          monthSelected = tmp.getMonth();
          dateSelected = tmp.getDate();
          pickerMonth = tmp.getMonth();
          pickerYear = tmp.getFullYear();
        }
      }
    }
  }

  $: {
    if (allowedDates) {
      allowedDateTimestamps = allowedDates.split(separator).map((v) => {
        return new Date(v).getTime();
      });
    }
  }
  $: if (monthSelected == 12 && yearSelected) {
    monthSelected = 0;
    yearSelected++;
  }
  $: if (monthSelected == -1 && yearSelected) {
    monthSelected = 11;
    yearSelected--;
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
    if (enableMultiple && yearSelected != null && monthSelected != null && dateSelected != null) {
      if (selectedDates) {
        internalValue = `${yearSelected}-${monthSelected + 1 < 10 ? '0' : ''}${monthSelected + 1}-${dateSelected < 10 ? '0' : ''}${dateSelected}`;
        if (!dates.includes(internalValue)) {
          dates.push(internalValue);
        }
        const toDeleteTime = selectedDates.map((date) => {
          return Date.UTC(date.year, date.month, date.day);
        });

        dates = dates.filter((d) => toDeleteTime.includes(new Date(d).getTime()));
        dates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
        let displayList = dates.map((elem) =>
          formatDisplayDate(new Date(elem), displayFormat, displayFormatFunction)
        );
        displayedDateString = displayList.join(separator);

        let returnValues = dates.map((elem) =>
          formatReturnDate(new Date(elem), returnFormat, returnFormatFunction)
        );

        attachedInternals.setValidity({});
        attachedInternals.setFormValue(dates.join(separator));

        dispatch('value', { value: returnValues.join(separator) });
      } else {
        internalValue = `${yearSelected}-${monthSelected + 1 < 10 ? '0' : ''}${monthSelected + 1}-${dateSelected < 10 ? '0' : ''}${dateSelected}`;
        const toDeleteTime = selectedDates.map((date) => {
          return Date.UTC(date.year, date.month, date.day);
        });

        dates = dates.filter((d) => toDeleteTime.includes(new Date(d).getTime()));

        let displayList = dates.map((elem) =>
          formatDisplayDate(new Date(elem), displayFormat, displayFormatFunction)
        );
        displayedDateString = displayList.join(separator);

        let returnValues = dates.map((elem) =>
          formatReturnDate(new Date(elem), returnFormat, returnFormatFunction)
        );

        attachedInternals.setValidity({});
        attachedInternals.setFormValue(dates.join(separator));

        dispatch('value', { value: returnValues.join(separator) });
      }
    } else {
      if (yearSelected) {
        internalValue = `${yearSelected}-${monthSelected + 1 < 10 ? '0' : ''}${monthSelected + 1}-${
          dateSelected < 10 ? '0' : ''
        }${dateSelected}`;
        selectedDateObject = new Date(internalValue);
        displayedDateString = formatDisplayDate(
          selectedDateObject,
          displayFormat,
          displayFormatFunction
        );
        attachedInternals.setValidity({});
        attachedInternals.setFormValue(internalValue);
        dispatch('value', {
          value: formatReturnDate(selectedDateObject, returnFormat, returnFormatFunction)
        });
      } else {
        if (required) {
          attachedInternals.setValidity(
            { valueMissing: true },
            requiredValidationMessage || `Date is required.`,
            bindingElement
          );
        }
        displayedDateString = '';
        dispatch('value', { value: '' });
      }
      attachedInternals.checkValidity();
    }
  }
  $: displayLabel = required ? `${label} *` : label;
</script>

<div style="position: relative;">
  {#if label && labelType === 'outside'}
    <div class="label">
      {@html displayLabel}
    </div>
  {/if}

  <button
    type="button"
    class="jp-datepicker-field"
    bind:this={bindingElement}
    class:jp-datepicker-field-active={openPicker}
    class:jp-datepicker-field-borderBottom={borderBottom}
    class:jp-datepicker-field-borderTop={borderTop}
    class:jp-datepicker-field-disabled={disabled}
    disabled={disabled || readonly}
    on:click|preventDefault={toggleMenu}
  >
    {#if label && labelType === 'inside'}
      <span
        class="jp-datepicker-field-label"
        class:jp-datepicker-field-label-move={openPicker || internalValue}
        >{@html displayLabel}</span
      >
    {/if}
    <p
      class={`jp-datepicker-field-input ${labelType === 'outside' || !label ? '' : 'jp-datepicker-field-input-padding'}`}
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

    <span class="jp-datepicker-field-icon">
      {@html calendarIcon}
    </span>
  </button>

  <input
    type="date"
    tabindex="-1"
    class="jp-datepicker-hidden-input"
    {name}
    bind:value={internalValue}
    {disabled}
    {readonly}
    {required}
  />
  {#if openPicker}
    <div class="jp-datepicker-overlay">
      <div
        class="jp-datepicker-menu"
        use:clickOutside
        on:click_outside={() => (openPicker = false)}
        style={menuStyle}
      >
        <div class="jp-datepicker-menu-nav">
          <button
            type="button"
            class="jp-datepicker-menu-nav-date"
            on:click|preventDefault={() => (yearSelector = true)}
          >
            <p>{monthMap[pickerMonth]}, {pickerYear}</p>
            {@html dropdownArrowExpandedIcon}
          </button>
          <div class="jp-datepicker-menu-nav-buttons">
            <button
              type="button"
              on:click|preventDefault={() => (pickerMonth = pickerMonth - 1)}
              class:jp-datepicker-menu-nav-buttons-disabled={internalMinMonthCheck}
              disabled={internalMinMonthCheck}
            >
              {@html leftArrowIcon}
            </button>
            <button
              type="button"
              on:click|preventDefault={() => (pickerMonth = pickerMonth + 1)}
              class:jp-datepicker-menu-nav-buttons-disabled={internalMaxMonthCheck}
              disabled={internalMaxMonthCheck}
            >
              {@html rightArrowIcon}
            </button>
          </div>
        </div>

        <div>
          <div class="jp-datepicker-table">
            <div class="jp-datepicker-table-row">
              {#each daysMap as day}
                <div class="jp-datepicker-table-cell">
                  {day}
                </div>
              {/each}
            </div>
          </div>

          <div class="jp-datepicker-table">
            {#each pickerRows as row}
              <div class="jp-datepicker-table-row">
                {#each row as col}
                  <div class="jp-datepicker-table-cell">
                    <Day
                      {col}
                      {internalMinDate}
                      {internalMaxDate}
                      {monthSelected}
                      {yearSelected}
                      {dateSelected}
                      {enableMultiple}
                      {selectedDates}
                      {allowedDateTimestamps}
                      on:dateSelected={handleDateSelected}
                      on:multipleDatesSelected={handleMultipleSelects}
                    ></Day>
                  </div>
                {/each}
              </div>
            {/each}
          </div>
        </div>

        {#if yearSelector}
          <div class="jp-datepicker-menu-year">
            <div class="jp-datepicker-menu-year-nav">
              <button
                type="button"
                class="jp-datepicker-menu-year-nav-date"
                on:click|stopPropagation={() => (yearSelector = false)}
              >
                <p>
                  {pickerYearRows[0][0]} - {pickerYearRows[pickerYearRows.length - 1][
                    pickerYearRows[pickerYearRows.length - 1].length - 1
                  ]}
                </p>
                {@html upArrowIcon}
              </button>
              <div class="jp-datepicker-menu-year-nav-buttons">
                <button
                  type="button"
                  on:click|preventDefault={() => yearPickerIndex--}
                  class:jp-datepicker-menu-year-nav-buttons-disabled={internalMinYearPageCheck}
                  disabled={internalMinYearPageCheck}
                >
                  {@html leftArrowIcon}
                </button>
                <button
                  type="button"
                  on:click|preventDefault={() => yearPickerIndex++}
                  class:jp-datepicker-menu-year-nav-buttonsv={internalMaxYearPageCheck}
                  disabled={internalMaxYearPageCheck}
                >
                  {@html rightArrowIcon}
                </button>
              </div>
            </div>
            {#each pickerYearRows as row}
              <div class="jp-datepicker-menu-year-row">
                {#each row as year}
                  <div class="jp-datepicker-menu-year-row-cell">
                    <Year
                      {internalMaxDate}
                      {internalMinDate}
                      {yearSelected}
                      {year}
                      on:yearSelected={handleYearSelected}
                    ></Year>
                  </div>
                {/each}
              </div>
            {/each}
          </div>
        {/if}

        {#if monthSelector}
          <div class="jp-datepicker-menu-month">
            <div class="jp-datepicker-menu-month-nav">
              <button
                type="button"
                class="jp-datepicker-menu-month-nav-date"
                on:click|preventDefault={() => {
                  monthSelector = false;
                }}
              >
                <span>{pickerYear}</span>
                {@html upArrowIcon}
              </button>
              <div class="jp-datepicker-menu-month-nav-buttons">
                <button
                  type="button"
                  on:click|preventDefault={() => (pickerYear = pickerYear - 1)}
                  class:jp-datepicker-menu-month-nav-buttons-disabled={internalMinYearCheck}
                  disabled={internalMinYearCheck}
                >
                  {@html leftArrowIcon}
                </button>
                <button
                  type="button"
                  on:click|preventDefault={() => (pickerYear = pickerYear + 1)}
                  class:jp-datepicker-menu-month-nav-buttons-disabled={internalMaxYearCheck}
                  disabled={internalMaxYearCheck}
                >
                  {@html rightArrowIcon}
                </button>
              </div>
            </div>

            <div class="jp-datepicker-menu-month-grid">
              {#each monthMap as month, index}
                <div class="jp-datepicker-menu-month-grid-cell">
                  <Month
                    {index}
                    {month}
                    {pickerYear}
                    {internalMaxDate}
                    {internalMinDate}
                    {monthSelected}
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
</div>

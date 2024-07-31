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
  import { clickOutside } from '../../clickOutside';
  import { createEventDispatcher, onMount } from 'svelte';
  import { formatDisplayDate, formatReturnDate } from '../../utils/dateFormatter';
  import Month from './Month.svelte';
  import Year from './Year.svelte';
  import Day from './Day.svelte';
  import { isOutOfMaxBounds } from '../datepicker/is-out-of-max-bounds';
  import { isOutOfMinBounds } from '../datepicker/is-out-of-min-bounds';
  import { calculateMaxDate, calculateMinDate } from './calculate-max/min-date.js';
  

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
  export let maxSelectibleDays = null;
  export let minSelectibleDays = null;
  export let maxDateSelectible: Date;
  export let minDateSelectible: Date;
  let firstSelectedDateObject = new Date();
  let secondSelectedDateObject = new Date();
  let displayedDateString = '';
  let borderTop: boolean = false;
  let borderBottom: boolean = false;
  let bindingElement;
  let menuStyle;
  let firstYearSelected = null;
  let firstMonthSelected;
  let firstDateSelected;
  let secondYearSelected = null;
  let secondMonthSelected;
  let secondDateSelected;
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
              parseInt(`${year + (month < 0 ? -1 : month > 11 ? 1 : 0)}${month < 0 ? '12' : month > 11 ? '01' : (month + 1 < 10 ? '0' : '') + (month + 1)}${day < 10 ? '0' : ''}${day}`,10) 
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

  const getYearPickerRows = (yearPickerIndex) => {
    const tmp = Array.from(Array(4 * 6).keys()).map((el) => el + 2024 + yearPickerIndex * 4 * 6);
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
  $: {
      maxDateSelectible = calculateMaxDate(firstInternalValue, maxSelectibleDays);
      minDateSelectible = calculateMinDate(firstInternalValue, maxSelectibleDays);
  }
  $: internalMinDate = minDate ? (minDate instanceof Date ? minDate : new Date(minDate)) : null;
  $: internalMaxDate = maxDate ? (maxDate instanceof Date ? maxDate : new Date(maxDate)) : null;
  $: console.log(calculateMinDate(firstInternalValue, maxSelectibleDays), new Date(pickerYear, pickerMonth - 1, 1 ));
  
  $: internalMinMonthCheck = isOutOfMinBounds(internalMinDate, pickerYear, pickerMonth, 0) || (calculateMinDate(firstInternalValue, maxSelectibleDays) > new Date(pickerYear, pickerMonth, 1) && !selectingFirst);
  $: internalMaxMonthCheck = isOutOfMaxBounds(internalMaxDate, pickerYear, pickerMonth, 31) || (calculateMaxDate(firstInternalValue, maxSelectibleDays) < new Date(pickerYear, pickerMonth, 31) && !selectingFirst);
  $: internalMinYearCheck = isOutOfMinBounds(internalMinDate, pickerYear, 0, 1) || (calculateMinDate(firstInternalValue, maxSelectibleDays) >= new Date(pickerYear, 0, 1) && !selectingFirst);;
  $: internalMaxYearCheck = isOutOfMaxBounds(internalMaxDate, pickerYear, 11, 31) || (calculateMaxDate(firstInternalValue, maxSelectibleDays) < new Date(pickerYear, 11, 31) && !selectingFirst);
  $: internalMinYearPageCheck = isOutOfMinBounds(
    internalMinDate,
    2024 + yearPickerIndex * 4 * 6,
    0,
    1
  );
  $: internalMaxYearPageCheck = isOutOfMaxBounds(
    internalMaxDate,
    2024 + (yearPickerIndex + 1) * 4 * 6,
    11,
    31
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
          requiredValidationMessage || `Date is required.`, bindingElement
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
      firstInternalValue = `${firstYearSelected}-${firstMonthSelected + 1 < 10 ? '0' : ''}${
        firstMonthSelected + 1
      }-${firstDateSelected < 10 ? '0' : ''}${firstDateSelected}`;
      firstSelectedDateObject = new Date(firstInternalValue);
      displayedDateString =
        formatDisplayDate(firstSelectedDateObject, displayFormat, displayFormatFunction) +
        separator;
      
    }
    
  }

  $: {
    if (secondYearSelected) {
      secondInternalValue = `${secondYearSelected}-${secondMonthSelected + 1 < 10 ? '0' : ''}${
        secondMonthSelected + 1
      }-${secondDateSelected < 10 ? '0' : ''}${secondDateSelected}`;
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
</script>

{#if label && labelType == 'outside'}
  <div class="label">
    {@html label}
  </div>
{/if}
<button
  type="button"
  class="field"
  bind:this={bindingElement}
  class:active={openPicker}
  class:borderBottom
  class:borderTop
  on:click|preventDefault={toggleMenu}
>
  {#if label && labelType == 'inside'}
    <span class="field-label" class:move={openPicker || displayedDateString}>{@html label}</span>
  {/if}
  <p class={`field-input ${labelType == 'outside' || !label ? '' : 'field-input-padding'}`}>
    {displayedDateString}
  </p>

  <span class="field-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path
        d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"
      />
    </svg>
  </span>
</button>

<input type="date" name={`${name}-from`} bind:value={firstInternalValue} hidden required />
<input type="date" name={`${name}-to`} bind:value={secondInternalValue} hidden required />

{#if openPicker}
  <div class="overlay">
    <div
      class="menu"
      use:clickOutside
      on:click_outside={() => (openPicker = false)}
      style={menuStyle}
    >
      <div class="menu-nav">
        <button
          type="button"
          class="menu-nav-date"
          on:click|preventDefault={() => (yearSelector = true)}
        >
          <p>{monthMap[pickerMonth]}, {pickerYear}</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </button>
        <div class="menu-nav-buttons">
          <button type="button" on:click|preventDefault={() => (pickerMonth = pickerMonth - 1)}
            disabled={internalMinMonthCheck}
            >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
          </button>
          <button type="button" on:click|preventDefault={() => (pickerMonth = pickerMonth + 1)}
            disabled={internalMaxMonthCheck}
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
        <div class="table">
          {#each daysMap as day}
            <div class="table-cell">
              {day}
            </div>
          {/each}
        </div>

      <div class="table">
        {#each pickerRows as row}
          <div class="table-row">
            {#each row as col}
              <div class="table-cell">
                <Day  
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
                </div>
              {/each}
            </div>
          {/each}
        </div>
      </div>

      {#if yearSelector}
        <div class="menu-year">
          <div class="menu-year-nav">
            <button
              type="button"
              class="menu-year-nav-date"
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
            <div class="menu-year-nav-buttons">
              <button type="button" on:click|preventDefault={() => yearPickerIndex--}
                disabled={internalMinYearPageCheck}
                >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                  <path
                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                  />
                </svg>
              </button>
              <button type="button" on:click|preventDefault={() => yearPickerIndex++}
                disabled={internalMaxYearPageCheck}
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
            <div class="menu-year-row">
              {#each row as year}
                <div class="menu-year-row-cell">
                  <Year 
                      {internalMaxDate}
                      {internalMinDate}
                      {firstYearSelected}
                      {secondYearSelected}
                      {year}
                      {selectingFirst}
                      {maxSelectibleDays}
                      {firstInternalValue}
                      on:yearSelected={handleYearSelected}
                  />
                </div>
              {/each}
            </div>
          {/each}
        </div>
      {/if}

      {#if monthSelector}
        <div class="menu-month">
          <div class="menu-month-nav">
            <button
              type="button"
              class="menu-month-nav-date"
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
            <div class="menu-month-nav-buttons">
              <button type="button" on:click|preventDefault={() => (pickerYear = pickerYear - 1)}
                disabled={internalMinYearCheck}
                >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                  <path
                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                  />
                </svg>
              </button>
              <button type="button" on:click|preventDefault={() => (pickerYear = pickerYear + 1)}
                disabled={internalMaxYearCheck}
                >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                  <path
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="menu-month-grid">
            {#each monthMap as month, index}
              <div class="menu-month-grid-cell">
                <Month
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
                    {firstInternalValue}
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
    width: 100%;
    height: 3rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0 0.75rem;
    gap: 0.75rem;
    background-color: transparent;
    border: 1px solid var(--border-primary);
    -webkit-border-radius: 0.25rem;
    -moz-border-radius: 0.25rem;
    border-radius: 0.25rem;
  }

  .field:hover {
    border-color: var(--primary-color);
  }

  .field.active {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-color: var(--primary-color);
  }

  .field.active .field-icon {
    color: var(--primary-color);
    fill: var(--primary-color);
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
    border: none;
    outline: none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    background-color: transparent;
  }

  .field-input-padding {
    padding: 1rem 0 0 0;
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
    -webkit-transition:
      transform 0.3s,
      top 0.3s,
      font-size 0.3s;
    -o-transition:
      transform 0.3s,
      top 0.3s,
      font-size 0.3s;
    -moz-transition:
      transform 0.3s,
      top 0.3s,
      font-size 0.3s;
    transition:
      transform 0.3s,
      top 0.3s,
      font-size 0.3s;
  }

  .field-label.move {
    top: 0.25rem;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    font-size: 0.75rem;
  }

  .field-icon {
    width: 1rem;
    height: 1rem;
    fill: var(--text-primary);
    transition: 0.3s;
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
    z-index: 100;
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
    max-width: 312px;
    max-height: 390px;
    width: 100%;
    padding: 1rem;
    overflow-y: auto;
    -webkit-border-bottom-left-radius: 0.25rem;
    -moz-border-radius-bottomleft: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    -webkit-border-bottom-right-radius: 0.25rem;
    -moz-border-radius-bottomright: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    -webkit-box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
    box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
    background-color: var(--background-primary);
  }

  .menu-month {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background-color: var(--background-primary);
  }

  .menu-month-grid {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  :global(.menu-month-grid-cell button) {
    width: 100%;
    border-radius: 999px;
    padding: 0.25rem 0.75rem;
  }

  :global(.menu-month-grid-cell button.active,
  .menu-month-grid-cell button:hover) {
    background-color: var(--primary-color);
    color: var(--text-on-primary);
  }

  .menu-year {
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

  .menu-nav,
  .menu-month-nav,
  .menu-year-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    gap: 0.5rem;
  }

  .menu-year-nav-buttons,
  .menu-month-nav-buttons,
  .menu-nav-buttons {
    display: flex;
  }

  .menu-year-nav-buttons button,
  .menu-month-nav-buttons button,
  .menu-nav-buttons button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    border-radius: 50%;
  }

  .menu-year-nav-buttons button:hover,
  .menu-month-nav-buttons button:hover,
  .menu-nav-buttons button:hover {
    background-color: var(--background-secondary);
  }

  .menu-year-row {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1 1 0;
    gap: 0.25rem;
  }

  :global(.menu-year-row-cell button) {
    flex: 1 1 0;
    padding: 0.25rem  1rem;
    border-radius: 999px;
  }

  :global(.menu-year-row-cell button:hover,
  .menu-year-row-cell button.active) {
    background-color: var(--primary-color);
    color: var(--text-on-primary);
  }

  .menu-nav-date,
  .menu-month-nav-date,
  .menu-year-nav-date {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-align: left;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
  }

  .menu-nav-date:hover,
  .menu-month-nav-date:hover,
  .menu-year-nav-date:hover {
    background-color: var(--background-secondary);
  }
  :global(
      .table-cell button:disabled:hover,
      .menu-month-grid-cell button:disabled:hover,
      .menu-year-row-cell button:disabled:hover
    ),
  .menu-nav-buttons button:disabled:hover,
  .menu-year-nav-buttons button:disabled:hover,
  .menu-month-nav-buttons button:disabled:hover {
    background-color: transparent;
    color: var(--text-secondary);
  }

  .table {
    display: table;
    width: max-content;
  }

  :global(.table-cell) {
    display: table-cell;
    width: 40px;
    height: 40px;
    max-width: 40px;
    line-height: 35px;
    text-align: center;
    padding: 0;
  }

  :global(.table-cell button) {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  :global(.table-cell button:hover) {
    background-color: var(--background-secondary);
  }

  :global(.table-cell button.gray) {
    opacity: 0.5;
  }

  :global(.table-cell button.active) {
    background-color: var(--primary-color);
    color: var(--text-on-primary);
    opacity: 1;
  }

  .overlay {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
</style>

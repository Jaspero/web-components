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

  export let attachedInternals: ElementInternals;
  export let value: string = '';
  export let name: string = '';

  let yearSelected = (new Date(Date.now())).getFullYear();
  let monthSelected = (new Date(Date.now())).getMonth();
  let dateSelected = (new Date(Date.now())).getDate();
  let pickerYear = yearSelected;
  let pickerMonth = monthSelected;
  let pickerRows;
  let openPicker = false;
  let daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let monthMap = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  export const getValue = () => value;

  const dispatch = createEventDispatcher();

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

  onMount(() => {
    pickerRows = getPickerRows(pickerMonth, pickerYear);
  });

  $: if(pickerMonth == 12) {
    pickerMonth = 0
    pickerYear++
  } else if (pickerMonth == -1){
    pickerMonth = 11
    pickerYear--
  }

  $: pickerRows = getPickerRows(pickerMonth, pickerYear);

  $: {
    value = `${yearSelected}-${monthSelected+1 < 10 ? '0' : ''}${monthSelected+1}-${dateSelected < 10 ? '0' : ''}${dateSelected}`
    attachedInternals.checkValidity();
    attachedInternals.setFormValue(value);
    dispatch('value', { value });
  }
</script>

<button on:click|preventDefault={() => (openPicker = !openPicker)}
  >{dateSelected} {monthSelected + 1} {yearSelected}</button
>
<input type="date" {name} bind:value hidden />
{#if openPicker}
  <div>
    <div>
      <button on:click|preventDefault={() => (pickerYear = pickerYear - 1)}>&lt;&lt;</button>
      <button on:click|preventDefault={() => (pickerMonth = pickerMonth - 1)}>&lt;</button>
      <span>{monthMap[pickerMonth]}, </span>
      <span>{pickerYear}</span>
      <button on:click|preventDefault={() => (pickerMonth = pickerMonth + 1)}>&gt;</button>
      <button on:click|preventDefault={() => (pickerYear = pickerYear + 1)}>&gt;&gt;</button>
    </div>
    <div class="flex flex-col">
      <div class="flex">
        {#each daysMap as day}
          <div>
            {day}
          </div>
        {/each}
      </div>
      <div>
        {#each pickerRows as row}
          <div>
            {#each row as col}
              <button
                on:click|preventDefault={() => {
                  dateSelected = col.day
                  yearSelected = col.year
                  monthSelected = col.month
                }}
                class="mr-2
                  {col.gray ? 'text-slate-400' : ''} 
                  {dateSelected == col.day && monthSelected == col.month && yearSelected == col.year ? 'bg-slate-700' : ''}
                "
              >
                {col.day}
              </button>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}

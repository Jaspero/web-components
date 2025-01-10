<script lang="ts">
  import '../../../../dist/date-range.wc';
  import '../../../../dist/date-range.css';

  import {onMount} from 'svelte';
  
  const minDate = new Date(2024, 9, 10);
  const maxDate = new Date(2024, 9, 27);
  
  let el: HTMLDivElement;

  onMount(() => {
    const item = document.createElement('jp-date-range') as any;
    item.value = [new Date(2024, 9, 10), new Date(2024, 9, 27)].map((date) => date.toISOString().split('T')[0]).join(' to ');
    item.label = 'Created through code';
    el.appendChild(item);
  })

</script>

<form>
  <!-- <jp-date-range />
  <jp-date-range label="default" />
  <jp-date-range label="label outside" labelType="outside" />
  <jp-date-range label="datepicker display format short" displayFormat="short" />
  <jp-date-range label="datepicker display format medium" displayFormat="medium" />
  <jp-date-range label="datepicker display format long" displayFormat="long" />
  <jp-date-range label="datepicker display format full" displayFormat="full" />
  <jp-date-range minSelectableDays="2" label="minSelectableDays" />
  <jp-date-range maxSelectableDays="10" label="maxSelectableDays" />
  <jp-date-range minDate="2024-10-2" label="minDate string format" />
  <jp-date-range {minDate} label="minDate date format" />
  <jp-date-range maxDate="2024-10-2" label="maxDate string format" />
  <jp-date-range {maxDate} label="maxDate date format" />
  <jp-date-range label="required" required="true" />
  <jp-date-range label="testiranje pozicije na dnu zaslona" /> -->

  <div bind:this={el}></div>

  <button type="submit" style="z-index:10">submit</button>
</form>

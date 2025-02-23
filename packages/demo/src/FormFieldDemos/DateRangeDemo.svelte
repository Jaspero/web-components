<script lang="ts">
  import '../../../../dist/date-range.wc';
  import '../../../../dist/date-range.css';
  export let showClearButton = true;

  import { onMount } from 'svelte';

  const minDate = new Date(2024, 9, 10);
  const maxDate = new Date(2024, 9, 27);

  let el: HTMLDivElement;

  onMount(() => {
    const item = document.createElement('jp-date-range') as any;
    item.value = [new Date(2024, 9, 10), new Date(2024, 9, 27)]
      .map((date) => date.toISOString().split('T')[0])
      .join(' to ');
    item.label = 'Created through code';
    el.appendChild(item);
  });
</script>

<form>
  <jp-date-range {showClearButton} />
  <jp-date-range label="default" {showClearButton} />
  <jp-date-range label="label outside" labelType="outside" {showClearButton} />
  <jp-date-range label="datepicker display format short" displayFormat="short" {showClearButton} />
  <jp-date-range
    label="datepicker display format medium"
    displayFormat="medium"
    {showClearButton}
  />
  <jp-date-range label="datepicker display format long" displayFormat="long" {showClearButton} />
  <jp-date-range label="datepicker display format full" displayFormat="full" {showClearButton} />
  <jp-date-range minSelectableDays="2" label="minSelectableDays" {showClearButton} />
  <jp-date-range maxSelectableDays="10" label="maxSelectableDays" {showClearButton} />
  <jp-date-range minDate="2024-10-2" label="minDate string format" {showClearButton} />
  <jp-date-range {minDate} label="minDate date format" {showClearButton} />
  <jp-date-range maxDate="2024-10-2" label="maxDate string format" {showClearButton} />
  <jp-date-range {maxDate} label="maxDate date format" {showClearButton} />
  <jp-date-range label="required" required="true" {showClearButton} />
  <jp-date-range label="testiranje pozicije na dnu zaslona" {showClearButton} />

  <div bind:this={el}></div>

  <button type="submit" style="z-index:10">submit</button>
</form>

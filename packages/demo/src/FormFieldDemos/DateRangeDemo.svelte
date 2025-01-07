<script lang="ts">
  import '../../../../dist/date-range.wc';
  import '../../../../dist/date-range.css';
  const minDate = new Date(2024, 9, 10);
  const maxDate = new Date(2024, 9, 27);
  //note: new Date has indexed months so january is 0, feb is 1 etc.
</script>

<form>
  <jp-date-range />
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
  <jp-date-range maxDate="2025-1-3" label="maxDate string format" />
  <jp-date-range {maxDate} label="maxDate date format" />
  <jp-date-range label="required" required="true" />
  <jp-date-range label="testiranje pozicije na dnu zaslona" />

  <button type="submit" style="z-index:10">submit</button>
</form>

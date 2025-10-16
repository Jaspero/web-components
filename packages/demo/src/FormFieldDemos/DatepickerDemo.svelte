<script lang="ts">
  import '../../../../dist/datepicker.wc';
  import '../../../../dist/datepicker.css';
  const minDate = new Date(2024, 9, 10);
  const maxDate = new Date(2024, 9, 27);
  export let showClearButton = true;
  //note: new Date has indexed months so january is 0, feb is 1 etc.
</script>

<form>
<!--  <jp-datepicker {showClearButton} />-->
<!--  <jp-datepicker label="datepicker" {showClearButton} />-->
<!--  <jp-datepicker label="datepicker label outside" labelType="outside" {showClearButton} />-->
  <jp-datepicker allowedDates="2025-10-20T00:00:00.000Z, 2025-10-24T00:00:00.000Z, 2025-11-24T00:00:00.000Z"
                 label="datepicker enable multiple 22" enableMultiple="true" returnFormat="iso" {showClearButton} />
<!--  <jp-datepicker label="datepicker enable multiple" enableMultiple="true" returnFormat="iso" {showClearButton} />-->
  <!--<jp-datepicker
    label="datepicker enable multiple separator"
    enableMultiple="true"
    separator="&#45;&#45;"
    {showClearButton}
  />
  <jp-datepicker label="datepicker required" required="true" {showClearButton} />
  <jp-datepicker label="datepicker display format short" displayFormat="short" {showClearButton} />
  <jp-datepicker
    label="datepicker display format medium"
    displayFormat="medium"
    {showClearButton}
  />
  <jp-datepicker label="datepicker display format long" displayFormat="long" {showClearButton} />
  <jp-datepicker label="datepicker display format full" displayFormat="full" {showClearButton} />
  <jp-datepicker label="datepicker minDate string" minDate="2024-10-10" {showClearButton} />
  <jp-datepicker label="datepicker minDate date" {minDate} {showClearButton} />
  <jp-datepicker label="datepicker maxDate string" maxDate="2024-10-27" {showClearButton} />
  <jp-datepicker label="datepicker maxDate date" {maxDate} {showClearButton} />
-->
  <button type="button" on:click="{() => {
    const datepicker = document.querySelector('jp-datepicker');
    if (datepicker) {
      console.log(datepicker.getValue());
    }
  }}">submit</button>
</form>

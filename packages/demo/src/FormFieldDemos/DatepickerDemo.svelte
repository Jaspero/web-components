<script lang="ts">
  import '../../../../dist/datepicker.wc';
  import '../../../../dist/datepicker.wc.css';
  const minDate = new Date(2024, 9, 10);
  const maxDate = new Date(2024, 9, 27);
  export let showClearButton = true;
  //note: new Date has indexed months so january is 0, feb is 1 etc.
</script>

<form>
  <jp-datepicker {showClearButton} />
  <jp-datepicker label="datepicker" {showClearButton} />
  <jp-datepicker label="datepicker label outside" labelType="outside" {showClearButton} />
  <jp-datepicker label="datepicker enable multiple" enableMultiple="true" {showClearButton} />
  <jp-datepicker
    label="datepicker enable multiple separator"
    enableMultiple="true"
    separator="--" {showClearButton}
    />
  <jp-datepicker label="datepicker required" required="true" {showClearButton} />
  <jp-datepicker label="datepicker display format short" displayFormat="short" {showClearButton} />
  <jp-datepicker label="datepicker display format medium" displayFormat="medium" {showClearButton} />
  <jp-datepicker label="datepicker display format long" displayFormat="long" {showClearButton} />
  <jp-datepicker label="datepicker display format full" displayFormat="full" {showClearButton} />
  <jp-datepicker label="datepicker minDate string" minDate="2024-10-10" {showClearButton} />
  <jp-datepicker label="datepicker minDate date" {minDate} {showClearButton} />
  <jp-datepicker label="datepicker maxDate string" maxDate="2024-10-27" {showClearButton} />
  <jp-datepicker label="datepicker maxDate date" {maxDate} {showClearButton} />

  <button type="submit">submit</button>
</form>

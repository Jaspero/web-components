<script lang="ts">
    import '../../../../dist/datepicker.wc';
    const minDate= new Date(2024,9,10);
    const maxDate= new Date(2024,9,27);
    //note: new Date has indexed months so january is 0, feb is 1 etc.
</script>

<form>
<jp-datepicker />
<jp-datepicker label="datepicker "/>
<jp-datepicker label="datepicker label outside" labelType="outside"/>
<jp-datepicker label="datepicker enable multiple" enableMultiple=true/>
<jp-datepicker label="datepicker enable multiple separator" enableMultiple=true separator="--"/>
<jp-datepicker label="datepicker  required" required=true/>
<jp-datepicker label="datepicker display format short" displayFormat="short"/>
<jp-datepicker label="datepicker display format medium" displayFormat="medium"/>
<jp-datepicker label="datepicker display format long" displayFormat="long"/>
<jp-datepicker label="datepicker display format full" displayFormat="full"/>
<jp-datepicker label="datepicker minDate string" minDate="2024-10-10"/>
<jp-datepicker label="datepicker minDate date" minDate={minDate}/>
<jp-datepicker label="datepicker maxDate string" maxDate="2024-10-27"/>
<jp-datepicker label="datepicker maxDate date" maxDate={maxDate}/>

<button type="submit">submit</button>
</form>
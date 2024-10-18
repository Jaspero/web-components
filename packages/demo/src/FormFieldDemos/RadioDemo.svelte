<script lang="ts">
    import '../../../../dist/radio.wc';
    import '../../../../dist/radio.css';
</script>

<form>
<jp-radio options={[{"value":"aaa"}, {"value":"bbb"}, {"value":"ccc"}]} label="radio required" required=true/>

<button type="submit"> submit</button>
</form> 
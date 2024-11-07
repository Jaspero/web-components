<script lang="ts">
  import '../../../../dist/select.wc.js';
  let options = [{ value: 'aaa' }, { value: 'bbb' }, { value: 'ccc' }];
</script>
<!--submit button doesnt work twice for some reason-->
<form>
  <jp-select {options} label="Select disabled ne required" disabled=true />
  <jp-select {options} label="Select hidden required" hidden=true required=true/>
  <jp-select {options} label="Select display none ne required"  style="display: none;"/>
  <jp-select {options} label="Select disabled display none required" style="display: none;" required=true/>
  <jp-select {options} label="Select og req" required=true/>

<button type="submit">submit</button>
</form>

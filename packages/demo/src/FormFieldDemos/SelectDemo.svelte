<script lang="ts">
  import '../../../../dist/select.wc.js';
  import '../../../../dist/range.wc';
  import '../../../../dist/range.css';
  let options = [{ value: 'aaa' }, { value: 'bbb' }, { value: 'ccc' }];
</script>

<form>
  <jp-select {options} label="Select disabled ne required" disabled=true />
  <jp-select {options} label="Select hidden required" hidden=true required=true/>
  <jp-select {options} label="Select display none ne required"  style="display: none;"/>
  <jp-select {options} label="Select disabled display none required" style="display: none;" required=true/>
  <jp-select {options} label="Select og req" required=true/>

  <jp-range label="range"></jp-range>
  <jp-range label="range min" min=20></jp-range>

<button type="submit">submit</button>
</form>

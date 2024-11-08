<script lang="ts">
  import '../../../../dist/select.wc.js';
  let options = [{ value: 'aaa' }, { value: 'bbb' }, { value: 'ccc' }];
</script>

<form>
  <jp-select {options} label="Select" />
  <jp-select {options} label="Select outside" labelType="outside" />
  <jp-select {options} label="Select disabled" disabled="true" />
  <jp-select {options} label="Select required" required="true" />
  <jp-select {options} label="Select hint" hint="hint" />

  <button type="submit">submit</button>
</form>

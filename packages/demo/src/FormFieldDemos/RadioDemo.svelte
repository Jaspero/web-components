<script lang="ts">
  import '../../../../dist/radio.wc';
  import '../../../../dist/radio.css';
  let options = [{ value: 'aaa' }, { value: 'bbb' }, { value: 'ccc' }];
</script>

<form>
  <jp-radio {options} />
  <jp-radio {options} label="radio required" required="true" />
  <jp-radio {options} label="radio inline" inline="true" />

  <button type="submit"> submit</button>
</form>

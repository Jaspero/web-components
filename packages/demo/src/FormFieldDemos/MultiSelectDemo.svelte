<script lang="ts">
  import '../../../../dist/multiselect.wc.js';
  import '../../../../dist/multiselect.css';

  const options = [
    { value: 1, label: 'Monday' },
    { value: 2, label: 'Tuesday' },
    { value: 3, label: 'Wednesday' },
    { value: 4, label: 'Thursday' },
    { value: 5, label: 'Friday' },
    { value: 6, label: 'Saturday' },
    { value: 0, label: 'Sunday' }
  ];

  console.log(JSON.stringify(options));
</script>

<form>
  <div>
    <jp-multiselect {options} labelType="outside" label="Label"> </jp-multiselect>
  </div>

  <div>
    <jp-multiselect {options} hint="hint" labelType="inside" label="Label"> </jp-multiselect>
  </div>
  <div>
    <jp-multiselect {options}> </jp-multiselect>
  </div>
  <div>
    <jp-multiselect {options} required="true" label="required"> </jp-multiselect>
  </div>
  <div>
    <jp-multiselect {options} disabled="true" label="disabled"> </jp-multiselect>
  </div>
  <div>
    <jp-multiselect {options} label="label maxSelects" labelType="outside" maxSelects="4">
    </jp-multiselect>
  </div>
  <div>
    <jp-multiselect {options} label="label maxSelects" labelType="inside" maxSelects="4">
    </jp-multiselect>
  </div>

  <button type="submit">submit</button>
</form>

<style>
  div {
    padding-top: 10px;
  }
</style>

<script lang="ts">
  import '../../../../dist/input.wc.js';
  import '../../../../dist/input.css';
  import '../../../../dist/select.wc.js';
  import '../../../../dist/select.css';

  let v = '123';
  $: console.log(v);
</script>

<form>
  <jp-input label="default" />
  <jp-input label="label type outside" labelType="outside" />
  <jp-input placeholder="placeholder" />
  <jp-input label="hint" hint="hint" />
  <jp-input label="autocomplete" autocomplete="on" />
  <jp-input label="disabled" disabled="true" />
  <jp-input label="min number 10" type="number" min="10" />
  <jp-input label="max number 10" type="number" max="10" />
  <jp-input label="minlength of chars 5" minlength="5" />
  <jp-input label="maxlength of chars 5" maxlength="5" />
  <jp-input label="step" step="3" type="number" />
  <jp-input label="required" required="true" />
  <jp-input label="readonly" readonly="true" />
  <jp-input label="type text" type="text" />
  <jp-input label="type password" type="password" />
  <jp-input label="type email" type="email" />
  <jp-input label="type tel" type="tel" />
  <jp-input label="type url" type="url" />
  <jp-input label="type color" type="color"/>
  <jp-input label="pattern 'pattern'" pattern="pattern" />
  <button type="submit">submit</button>
  <jp-input label="" />
</form>

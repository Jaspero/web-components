<script lang="ts">
  import '../../../../dist/input.wc.js';
  import { bind } from '../../../../dist/bind.js';
  import '../../../../dist/input.css';
  import '../../../../dist/select.wc.js';
  import '../../../../dist/select.css';

  let v = '123';
  $: console.log(v);
</script>


<form>
<jp-input
  label="Cool"
  required
  use:bind={v}
  suffix="ms"
  prefix="Vrijeme:"
  on:bind={(e) => (v = e.detail)}
></jp-input>


<jp-input
  label="step u"
  required
  use:bind={v}
  type="number"
  step=5
  suffix="ms"
  prefix="Vrijeme:"
  on:bind={(e) => (v = e.detail)}
></jp-input>


<jp-input
  label="Cool"
  hint="hint"
  use:bind={v}
  suffix="ms"
  prefix="Vrijeme:"
  on:bind={(e) => (v = e.detail)}
></jp-input>
<button type="submit">submit</button>
</form>
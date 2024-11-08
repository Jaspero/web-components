<script lang="ts">
  import '../../../../dist/textarea.wc';
  import '../../../../dist/textarea.css';
</script>

<form>
  <jp-textarea />
  <jp-textarea label="label outside" labelType="outside" />
  <jp-textarea label="hint" hint="hint" />
  <jp-textarea label="disabled" disabled="true" />
  <jp-textarea label="required" required="true" />
  <jp-textarea label="read only" readonly="true" value="can't touch this" />
  <jp-textarea label="minlength" minlength="10" />
  <jp-textarea label="maxlength" maxlength="10" />

  <button type="submit">submit</button>
</form>

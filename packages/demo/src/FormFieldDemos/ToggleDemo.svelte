<script lang="ts">
  import '../../../../dist/toggle.wc';
  import '../../../../dist/toggle.css';
</script>

<form>
  <jp-toggle />
  <jp-toggle label="toggle" />
  <jp-toggle label="disabled" disabled="true" />
  <jp-toggle label="required" required="true" />
  <jp-toggle label="large" size="large" />

  <button type="submit">submit</button>
</form>

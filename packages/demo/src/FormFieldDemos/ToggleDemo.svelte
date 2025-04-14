<script lang="ts">
  import '../../../../dist/toggle.wc';
  import '../../../../dist/toggle.css';
</script>

<form style="max-width: 200px;">
  <jp-toggle />
  <jp-toggle label="toggle" />
  <jp-toggle label="This is some very very long label it's really long and it also isn't short." />
  <jp-toggle label="disabled" disabled="true" />
  <jp-toggle label="required" required="true" />
  <jp-toggle label="large" size="large" />

  <button type="submit">submit</button>
</form>

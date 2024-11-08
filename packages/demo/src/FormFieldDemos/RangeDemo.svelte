<script lang="ts">
  import '../../../../dist/range.wc';
  import '../../../../dist/range.css';
</script>

<form>
  <jp-range label="range"></jp-range>
  <jp-range label="range min" min="20"></jp-range>
  <jp-range label="range max" max="70"></jp-range>
  <jp-range label="range step" step="4" discrete="true"></jp-range>
  <jp-range label="range disabled" disabled="true"></jp-range>
  <jp-range label="range required" required="true"></jp-range>
  <jp-range label="range"></jp-range>
  <jp-range label="range"></jp-range>
  <jp-range label="range"></jp-range>

  <button type="submit">submit</button>
</form>

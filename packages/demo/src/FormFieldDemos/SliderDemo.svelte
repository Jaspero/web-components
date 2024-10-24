<script lang="ts">
  import '../../../../dist/slider.wc';
  import '../../../../dist/slider.css';
</script>

<form>
  <jp-slider />
  <jp-slider label="slider" />
  <jp-slider label="slider disabled" disabled="true" />
  <jp-slider label="slider required" required="true" />
  <jp-slider label="slider max" max="70" />
  <jp-slider label="slider min" min="20" />
  <jp-slider label="slider step" step="10" />
  <jp-slider label="slider discrele" discrete="true" />

  <button type="submit">submit</button>
</form>

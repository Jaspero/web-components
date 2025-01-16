<script lang="ts">
  import '../../../../dist/slider.wc';
  import '../../../../dist/slider.css';
</script>

<form>
  <jp-slider showValue=true/>
  <jp-slider label="slider" showValue=true />
  <jp-slider label="slider disabled" disabled="true" showValue=true />
  <jp-slider label="slider required" required="true" showValue=true />
  <jp-slider label="slider max" max="70" showValue=true />
  <jp-slider label="slider min" min="20" showValue=true />
  <jp-slider label="slider step" step="10" showValue=true />
  <jp-slider label="slider discrete" discrete="true" showValue=true />
  <jp-slider />
  <jp-slider />
  <jp-slider />

  <button type="submit">submit</button>
</form>

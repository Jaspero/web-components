<script lang="ts">
  import AssetManagerDemo from './AssetManagerDemo.svelte';
  import Demos from './Demos.svelte';
  import ImageGalleryDemo from './ImageGalleryDemo.svelte';
  import SelectDemo from './SelectDemo.svelte';
  import '../../../dist/checkbox.wc';
  import '../../../dist/input.wc';
  import '../../../dist/select.wc';
  let OPTIONS = [
      {value: "I agree to GlycanAge Terms & Conditions"},
      {value: "Subscribe to our Partners Newsletter"}
  ];
</script>

<div class="flex" style="display: flex;">
    <jp-select options={OPTIONS} label="Select">
    </jp-select>
    <jp-input  label="lol"></jp-input>
</div>
<jp-checkbox options={OPTIONS}></jp-checkbox>
<!-- <AssetManagerDemo /> -->
<!-- <Demos /> -->
<ImageGalleryDemo />
<!-- <SelectDemo /> -->
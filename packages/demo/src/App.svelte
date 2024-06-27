<script lang="ts">
  import AssetManagerDemo from './AssetManagerDemo.svelte';
  import Demos from './Demos.svelte';
  import ImageGalleryDemo from './ImageGalleryDemo.svelte';
  import SelectDemo from './SelectDemo.svelte';
  import '../../../dist/checkbox.wc';
  import '../../../dist/input.wc';
  let OPTIONS = [
      {value: "I agree to GlycanAge Terms & Conditions"},
      {value: "Subscribe to our Partners Newsletter"}
  ];
</script>

<jp-checkbox options={OPTIONS}></jp-checkbox>
<jp-input type="time" label="lol"></jp-input>
<!-- <AssetManagerDemo /> -->
<!-- <Demos /> -->
<ImageGalleryDemo />
<!-- <SelectDemo /> -->
<script lang="ts">
  import AssetManagerDemo from './AssetManagerDemo.svelte';
  import Demos from './Demos.svelte';
  import SelectDemo from './SelectDemo.svelte';
  import '../../../dist/checkbox.wc';
  let OPTIONS = [
      {value: "I agree to GlycanAge Terms & Conditions"},
      {value: "Subscribe to our Partners Newsletter"}
  ];
</script>

<jp-checkbox options={OPTIONS}></jp-checkbox>

<!-- <AssetManagerDemo /> -->
<Demos />
<!-- <SelectDemo /> -->
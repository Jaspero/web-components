<script lang="ts">
  import '../../lib/src/index.css';
  import AsyncTableDemo from './AsyncTableDemo.svelte';
  import Demos from './Demos.svelte';
  import FileListDemo from './FormFieldDemos/FileListDemo.svelte';
  import InputDemo from './FormFieldDemos/InputDemo.svelte';
  import MultiSelectDemo from './FormFieldDemos/MultiSelectDemo.svelte';
  import ImageGalleryDemo from './ImageGalleryDemo.svelte';
  import CkEditorDemo from './FormFieldDemos/CkEditorDemo.svelte';
  import DateRangeDemo from './FormFieldDemos/DateRangeDemo.svelte';
  import RangeDemo from './FormFieldDemos/RangeDemo.svelte';
  import ChipsDemo from './FormFieldDemos/ChipsDemo.svelte';
  import MultiSearchDemo from './FormFieldDemos/MultiSearchDemo.svelte';
  import SelectDemo from './FormFieldDemos/SelectDemo.svelte';
</script>

<form>
  <CkEditorDemo />
  <button type="submit">Submit</button>
</form>

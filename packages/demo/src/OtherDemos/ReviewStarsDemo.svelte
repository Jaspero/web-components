<script lang="ts">
  import '../../../../dist/review-stars.wc.js';
  let indicator = false;
  let starsInput = false;
</script>

default
<jp-review-stars />

starsInput false
<jp-review-stars {starsInput} />

indicator false
<jp-review-stars {indicator} />

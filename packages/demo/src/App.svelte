<script lang="ts">
  import { onMount } from 'svelte';
  /*import '../../../dist/alert.wc.js'; */
  /*import '../../../dist/confirm.wc.js'*/
  import '../../../dist/async-table.wc.js'
  /*import '../../../dist/input.wc.js';
  /*import '../../../dist/quill.wc.js';*/
  import '../../../dist/autocomplete.wc.js';
  import '../../../dist/checkbox.wc.js';
  /*import '../../../dist/progress-spinner.wc.js'*/
  import '../../../dist/chips.wc.js';
  import '../../../dist/datepicker.wc.js';
  import '../../../dist/multiselect.wc.js';
  import '../../../dist/select.wc.js';
  import '../../../dist/accordion.wc.js';
  import '../../../dist/bellow.wc.js';
  import '../../../dist/radio.wc.js'
  import '../../../dist/json-editor.wc.js'
  import '../../../dist/code-editor.wc.js'
  /*import '../../../dist/image-gallery.wc.js'
  import '../../../dist/image-upload.wc.js'
  import '../../../dist/paginator.wc.js'*/
  import '../../../dist/table.wc.js'
  import '../../../dist/textarea.wc.js';
  import '../../../dist/button.wc.js'
  import '../../../dist/link.wc.js'
  import '../../../dist/tabs.wc.js'
  import '../../../dist/slider.wc.js'
  import '../../../dist/stepper.wc.js';
  import '../../../dist/tree.wc.js';
  import '../../../dist/node.wc.js';
  import '../../../dist/node-draggable.wc.js';
  import '../../../dist/toggle.wc.js';
  import '../../../dist/index.css'
  import '../../../dist/color.wc.js'
  import '../../../dist/input.wc.js'
  import '../../../dist/tooltip.wc.js'
  import { renderAlert } from '../../../dist/render-alert.js';
  import { renderConfirm } from '../../../dist/render-confirm.js';
  import { FirebaseTableService } from './firebase-table.service';
  import { MockImageService } from './mock-image.service..js';
  import { jpTreeStructure } from '../../../dist/structure.js'

  let el: HTMLDivElement;
  let formEl: HTMLFormElement;

  onMount(() => {
  });
</script>

<jp-tooltip label='tooltip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend odio eu tellus scelerisque, sit amet convallis est dapibus. Vestibulum ornare nunc scelerisque nisl iaculis, scelerisque imperdiet purus tempus. Integer consequat eros sit amet risus auctor maximus. Morbi facilisis sagittis sem non maximus. Phasellus sodales nec ligula vitae varius. In vestibulum, lacus at rhoncus lacinia, velit mauris varius dolor, ac tincidunt velit turpis sit amet metus. In condimentum est nunc, sed tempus dolor vestibulum et. Sed sed ipsum iaculis, dapibus nulla id, egestas odio. In eros urna, vehicula ac accumsan ultricies, placerat eu libero. Pellentesque ac fermentum ipsum.</jp-tooltip>
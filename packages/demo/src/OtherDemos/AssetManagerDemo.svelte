<script lang="ts">
  import { onMount } from 'svelte';
  import '../../../../dist/asset-manager.wc.js';
  import { AMService } from '../asset-manager.service.js';

  let el: HTMLDivElement;

  onMount(() => {
    const item = document.createElement('jp-asset-manager') as any;
    item.service = new AMService();
    item.rootPath = 'landing-pages';

    item.selectable = 'single';
    // item.selectable = 'multiple';

    item.addEventListener('selected', (event) => {
      console.log('event', event);
    });

    el.appendChild(item);
  });
</script>

<div class="binding-element" bind:this={el}></div>

<script lang="ts">
  import '../../../../dist/asset-manager.css';
  import '../../../../dist/asset-manager.wc.js';
  import '../../../../dist/asset-manager.css';
  import { onMount } from 'svelte';
  import { AMService } from '../asset-manager.service.js';
  import '../../../lib/src/asset-manager/asset-manager.wc.pcss'

  let el: HTMLDivElement;

  onMount(() => {
    const item = document.createElement('jp-asset-manager') as any;
    item.service = new AMService();
    item.rootPath = 'landing-pages';

    //item.selectable = 'single';
    item.selectable = 'multiple';
    item.minSelected = 1;
    item.maxSelected = 3;

    item.addEventListener('selected', (event: any) => {
      console.log('event', event);
    });

    el.appendChild(item);
  });
</script>

<div class="binding-element" bind:this={el}></div>

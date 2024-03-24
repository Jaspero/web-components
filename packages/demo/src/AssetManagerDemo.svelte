<script lang="ts">
  import { onMount } from 'svelte';
  import '../../../dist/asset-manager.wc.js';
  import {AMService} from './asset-manager.service.js';

  let el: HTMLDivElement;

  onMount(() => {
    const item = document.createElement('jp-asset-manager') as any;
    item.service = new AMService();
    item.rootPath = 'landing-pages';
    el.appendChild(item);
  });
</script>

<div bind:this={el}></div>
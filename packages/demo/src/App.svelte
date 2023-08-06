<script lang="ts">
  import {onMount} from 'svelte';
  import '../../../dist/lib/overview.wc.js';
  import '../../../dist/lib/single.wc.js';
  import {MockBPMNService} from './mock-bpmn.service.js';

  let el: HTMLDivElement;

  onMount(() => {
    // const instanceEl = document.createElement('jp-bpmn-overview');
    const instanceEl = document.createElement('jp-bpmn-single');

    // @ts-ignore
    instanceEl.service = new MockBPMNService();

    el.appendChild(instanceEl);
  })
</script>

<div bind:this={el}></div>
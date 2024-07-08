<script lang="ts">
  import {onMount} from 'svelte';
  import '../../../dist/multisearch.wc.js';

	let el: HTMLDivElement;

	onMount(() => {
		const multisearch = document.createElement('jp-multisearch') as any
    multisearch.value = 'aaa, bbb'
		multisearch.label = 'Cool';
    multisearch.service = {
      i: 0,
      async search(str){
        await new Promise(resolve => setTimeout(resolve, 1500));
        return [{"value": "str+1"}, {"value": "str+2"}]
      },
      async loadMore(str){
        await new Promise(resolve => setTimeout(resolve, 1500));
        this.loadMore = null
        return [{"value": str}]
      },
      async getSingle(value){
        await new Promise(resolve => setTimeout(resolve, 1500));
        return {value: value, label: this.i++}
      }
    }
    el.appendChild(multisearch)
	});
</script>

<div bind:this={el} />
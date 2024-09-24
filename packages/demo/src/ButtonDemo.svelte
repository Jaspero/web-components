<script lang="ts">
	import '../../../dist/button.wc';
	import '../../../dist/button.wc.css';

	let loading = true;
</script>

<jp-button variant="basic" loading={loading} on:click|stopPropagation={() => {
	 loading = !loading;
	 console.log('here');
}}>Basic</jp-button>
<!-- <jp-button variant="raised">Raised</jp-button>
<jp-button variant="stroked">Stroked</jp-button>
<jp-button variant="flat">Flat</jp-button>
<jp-button variant="icon">Icon</jp-button>
<jp-button variant="fab">FAB</jp-button>
<jp-button variant="mini-fab">Mini FAB</jp-button> -->
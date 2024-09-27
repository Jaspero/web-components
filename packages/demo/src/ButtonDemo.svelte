<script lang="ts">
	import '../../../dist/button.wc';
	import '../../../dist/button.wc.css';

	import '../../../dist/raised-button.wc';
	import '../../../dist/fab-button.wc';
	import '../../../dist/flat-button.wc';
	import '../../../dist/icon-button.wc';
	import '../../../dist/stroked-button.wc';
	import '../../../dist/basic-button.wc';

	import '../../../dist/raised-button.wc.css';
	import '../../../dist/fab-button.wc.css';
	import '../../../dist/flat-button.wc.css';
	import '../../../dist/icon-button.wc.css';
	import '../../../dist/stroked-button.wc.css';
	import '../../../dist/basic-button.wc.css';

	let loading = true;
</script>

<!--<jp-button variant="basic" loading={loading} on:click|stopPropagation={() => {
	 loading = !loading;
	 console.log('here');
}}>Basic</jp-button>-->

<div>
	<jp-button variant="basic" >basic default</jp-button>
	<jp-button variant="basic" color='primary' >basaaaaaaaaaaaaaaaaaaaaic primary</jp-button>
	<jp-button variant="basic" color='accent' >basic accent</jp-button>
	<jp-button variant="basic" color='warn' >basic warn</jp-button>
	<jp-button variant="basic" disabled=true >basic disabled</jp-button>
	</div>

<div>
<jp-button variant="raised">Raised default</jp-button>
<jp-button variant="raised" color='primary'>Raised primaryyyyyyyyyyyyyy</jp-button>
<jp-button variant="raised" color='accent'>Raised accent</jp-button>
<jp-button variant="raised" color='warn'>Raised warn</jp-button>
<jp-button variant="raised" disabled=true >Raised disabled</jp-button>
</div>

<div>
<jp-button variant="stroked">Stroked default</jp-button>
<jp-button variant="stroked" color='primary' >Stroked primary</jp-button>
<jp-button variant="stroked" color='accent' >Stroked accent</jp-button>
<jp-button variant="stroked" color='warn' >Stroked warn</jp-button>
<jp-button variant="stroked" disabled=true >Stroked disabled</jp-button>
</div>

<div>
<jp-button variant="flat">Flat default</jp-button>
<jp-button variant="flat" color='primary' >Flat primary</jp-button>
<jp-button variant="flat" color='accent' >Flat accent</jp-button>
<jp-button variant="flat" color='warn' >Flat warn</jp-button>
<jp-button variant="flat" disabled=true >Flat disabled</jp-button>	
</div>

<!--
<div>
<jp-button variant="icon">Icon default</jp-button>
<jp-button variant="icon" color='primary' >Icon primary</jp-button>
<jp-button variant="icon" color='accent' >Icon accent</jp-button>
<jp-button variant="icon" color='warn' >Icon warn</jp-button>
<jp-button variant="icon" disabled=true >Icon disabled</jp-button>	
</div>

<div>
<jp-button variant="fab">Fab default</jp-button>
<jp-button variant="fab" color='primary' >Fab primary</jp-button>
<jp-button variant="fab" color='accent' >Fab accent</jp-button>
<jp-button variant="fab" color='warn' >Fab warn</jp-button>
<jp-button variant="fab" disabled=true >Fab disabled</jp-button>	
</div>

-->
<!-- <jp-button variant="mini-fab">Mini FAB</jp-button> -->
 <style>
	div {
		background-color: white;
		margin-top: 10px;
	}
 </style>
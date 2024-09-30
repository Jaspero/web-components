<script lang="ts">
  import '../../../dist/multiselect.wc.js';
  import '../../../dist/multiselect.css';

  const options = [
		{value: 1, label: 'Monday'},
		{value: 2, label: 'Tuesday'},
		{value: 3, label: 'Wednesday'},
		{value: 4, label: 'Thursday'},
		{value: 5, label: 'Friday'},
		{value: 6, label: 'Saturday'},
		{value: 0, label: 'Sunday'}
	];

  console.log(JSON.stringify(options));
</script>
<div>
<jp-multiselect  options={options}>
</jp-multiselect>
</div>

<div>
<jp-multiselect  options={options}  hint="hint">
</jp-multiselect>
</div>
<div>
<jp-multiselect  options={options}>
</jp-multiselect>
</div>
<div>
<jp-multiselect  options={options} required=true>
</jp-multiselect>
</div>
<div>
<jp-multiselect  options={options} disabled=true>
</jp-multiselect>
</div>
<div>
<jp-multiselect  options={options} label="label" labelType='outside'>
</jp-multiselect>
</div>
<div>
<jp-multiselect  options={options} label="label" labelType='inside'>
</jp-multiselect></div>

<style>
	div{
		padding-top: 10px;
	}
</style>
<script lang="ts">
  import '../../../dist/multiselect.wc.js';

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

<jp-multiselect value={'1,2'} options={options} label="Select">
</jp-multiselect>
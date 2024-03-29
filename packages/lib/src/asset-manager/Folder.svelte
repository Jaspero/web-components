<script lang="ts">
  import type {Folder} from '../types/asset-manager.service';
	export let folder: Folder;
	export let path: string;
</script>

<div class="folder">
	<button type="button" on:click={() => path = folder.id}>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960">
			<path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/>
		</svg>
		<span>{folder.name}</span>
	</button>
</div>
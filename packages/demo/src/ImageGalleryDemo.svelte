<script lang="ts">
	import '../../../dist/image-gallery.wc.js';

	let el: HTMLDivElement;

	$: if (el) {
		const imgEl = document.createElement('jp-image-gallery');

		// @ts-ignore
		imgEl.images = [
			'https://placehold.co/600x400.png',
			'https://loremflickr.com/640/360',
			'https://loremflickr.com/640/360',
			'https://loremflickr.com/640/360'
		]

		el.appendChild(imgEl);
	}
</script>

<div bind:this={el}></div>
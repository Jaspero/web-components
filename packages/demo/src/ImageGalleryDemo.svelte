<script lang="ts">
  import '../../../dist/image-gallery.wc.js';

  let el: HTMLDivElement;

  $: if (el) {
    const imgEl = document.createElement('jp-image-gallery');

    // @ts-ignore
    imgEl.images = [
      { src: 'https://picsum.photos/200/300' },
      { src: 'https://picsum.photos/800/400' },
      { src: 'https://picsum.photos/300/300' },
      { src: 'https://picsum.photos/600/700' },
      { src: 'https://picsum.photos/500/500' },
      { src: 'https://picsum.photos/200/300' },
      { src: 'https://picsum.photos/800/400' },
      { src: 'https://picsum.photos/300/300' },
      { src: 'https://picsum.photos/600/700' },
      { src: 'https://picsum.photos/500/500' },
      { src: 'https://picsum.photos/300/300' }
    ];

    el.appendChild(imgEl);
  }
</script>

<div bind:this={el}></div>

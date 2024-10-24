<script lang="ts">
  import '../../../../dist/image-gallery.wc.js';
  const images = [
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
    { src: 'https://picsum.photos/300/300' },
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
    { src: 'https://picsum.photos/300/300' },
    { src: 'https://picsum.photos/200/300' },
    { src: 'https://picsum.photos/800/400' },
    { src: 'https://picsum.photos/300/300' },
    { src: 'https://picsum.photos/600/700' },
    { src: 'https://picsum.photos/500/500' },
    { src: 'https://picsum.photos/200/300' },
    { src: 'https://picsum.photos/800/400' }
  ];
</script>

<div>
  <jp-image-gallery {images} />
  default
</div>
<div>
  <jp-image-gallery {images} enablePagination="true" />
  Pagination
</div>
<div>
  <jp-image-gallery {images} sliderBar="true" />
  Slider Bar
</div>
<div>
  <jp-image-gallery {images} autoSlide="true" interval="2000" />
  AutoSlide
</div>

<style>
  div {
    margin-bottom: 400px;
  }
</style>

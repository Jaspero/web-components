<script lang="ts">
    import '../../../../dist/carousel.wc.js';
    const images=[
        {src: "https://picsum.photos/200/300"},
        {src: "https://picsum.photos/200/200"},
        {src: "https://picsum.photos/400/300"},
        {src: "https://picsum.photos/400/200"},
        {src: "https://picsum.photos/300/300"}
    ]
</script>
<jp-carousel {images} /> <h1>default</h1>
<jp-carousel {images}  imagesPerSlide=2/><h1> images per slide</h1>
<jp-carousel {images} enablePagination=true /><h1> pagination</h1>
<jp-carousel {images} autoSlide=true interval=2000 sliderBar=true/><h1> autoslide</h1>
<!-- import '../static/c/carousel.wc.js'; -->

# Carousel

### Description

`<jp-carousel>` is a component with the functionality of creating an interactive image carousel.
****

### Attributes

|     **Name**     | **Required** |               **Type**               |               **Description**               |
| :--------------: | :----------: | :----------------------------------: | :-----------------------------------------: |
|      images      |      ✓       | `Array<{src: string, alt?: string}>` |         stores an image collection          |
|  imagesPerSlide  |              |               `number`               |      number of images shown on a slide      |
| enablePagination |              |              `boolean`               |     determines if pagination is enabled     |
|    sliderBar     |              |              `boolean`               |    determines visability of a slider bar    |
|    autoSlide     |              |              `boolean`               |  determines if automatic slide is enabled   |
|     interval     |              |               `number`               | time interval between slides in miliseconds |
<br></br>
****

### Slots

This component does not have any slots.
<br></br>
****

### Methods

This component does not have any methods.
<br></br>
****

### Events

This component does not have any events.
<br></br>
****

### Demo

```jsx live
// import '../static/c/carousel.wc.js';

<jp-carousel images='[{"src": "https://picsum.photos/1920/1080"}, {"src": "https://picsum.photos/1280/720"}, {"src": "https://picsum.photos//600"}]'></jp-carousel>
```
<br></br>
****
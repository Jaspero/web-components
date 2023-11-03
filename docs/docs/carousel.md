# Carousel

### Description

`<jp-carousel>` is a component with the functionality of creating an interactive image carousel.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :---: | :---: |
| images | ✓ | `Array<{src: string, alt?: string}>` | stores an image collection |
| imagesPerSlide | | `number` | number of images shown on a slide |
| enablePagination | | `boolean` | determines if pagination is enabled |
| sliderBar | | `boolean` | determines visability of a slider bar |
| autoSlide | | `boolean` | determines if automatic slide is enabled |
| interval | | `number` | time interval between slides in miliseconds |
  
### Slots

This component does not have any slots.


### Methods

This component does not have any methods.


### Events

This component does not have any events. 

### Demo

```jsx live
<jp-carousel images='[{"src": "https://picsum.photos/200/300"}, {"src": "https://picsum.photos/200/200"}, {"src": "https://picsum.photos/300/300"}]'>
</jp-carousel>
```
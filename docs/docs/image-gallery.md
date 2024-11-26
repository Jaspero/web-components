<!-- import '../static/c/image-gallery.wc.js'; -->

# Image Gallery

### Description

`<jp-image-gallery>` is a component with the functionality of creating an image gallery with an interactive image carousel.
****

### Attributes

|      **Name**     | **Required** |                **Type**              |                                  **Description**                                  |
| :---------------: | :----------: | :----------------------------------: | :-------------------------------------------------------------------------------: |
|      images       |       ✓      | `Array<{src: string, alt?: string}>` |                             stores an image collection                            |
|  enablePagination |              |                `boolean`             |                         determines if pagination is enabled                       |
|     sliderBar     |              |                `boolean`             |                        determines visability of a slider bar                      |
|     autoSlide     |              |                `boolean`             |                       determines if automatic slide is enabled                    |
|      interval     |              |                `number`              |                      time interval between slides in miliseconds                  |
|    columnCount    |              |                `number`              |            determines the number of columns for screens wider than 1024px         |
| columnCountTable  |              |                `number`              | determines the number of columns for screenswith a width between 600px and 1024px |
| columnCountMobile |              |                `number`              |     determines the number of columns for screens with a width less then 600px     |
|        gapX       |              |                `number`              |                        determines space between columns in px                     |
|        gapY       |              |                `number`              |                          determines space between rows in px                      |
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
// import '../static/c/image-gallery.wc.js';

<jp-image-gallery images='[{"src": "https://picsum.photos//700"}, {"src": "https://picsum.photos/1280/720"}, {"src": "https://picsum.photos/1920/1080"}, {"src": "https://picsum.photos//800"}, {"src": "https://picsum.photos/900/900"}, {"src": "https://picsum.photos/854/480"}, {"src": "https://picsum.photos/2560/1440"}, {"src": "https://picsum.photos/1000/1000"}, {"src": "https://picsum.photos/800/600"}, {"src": "https://picsum.photos/700/900"}, {"src": "https://picsum.photos/700/700"}, {"src": "https://picsum.photos/1200/1200"}] '>
</jp-image-gallery>
```
<br></br>
****
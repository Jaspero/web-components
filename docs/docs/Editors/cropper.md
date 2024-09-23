# JSON Editor

### Description

`<Cropper>` is a component to view, crop and format images.

Cropper **can be used as a form field**.


### Attributes

|       **Name**        |               **Required**               |       **Type**       |                                    **Description**                                    |
| :-------------------: | :--------------------------------------: | :------------------: | :-----------------------------------------------------------------------------------: |
|          src          |                     ✓                    |      `string`        |                           Specifies the path to the image                             |
|          alt          |                     ✓                    |      `string`        |                      Specifies an alternate text for the image                        |
|       mandatory       |                                          |     `boolean`        |                          Determines if Cropper is enabled                             |
|      aspectRatio      |                                          |      `number`        |                      Define the fixed aspect ratio of the crop box                    |
|    minCanvasHeight    |                                          |      `number`        |                    The minimum height of the canvas (image wrapper).                  |
|    minCanvasWidth     |                                          |      `number`        |                     The minimum width of the canvas (image wrapper).                  |
|    minCropBoxWidth    |                                          |      `number`        |                             The minimum width of the crop box.                        |
|  minContainerHeight   |                                          |      `number`        |                          The minimum height of the container.                         |
|   minContainerWidth   |                                          |      `number`        |                            The minimum width of the container.                        |
|  maxContainerHeight   |                                          |      `number`        |                           The maximum height of the container.                        |
|   maxContainerWidth   |                                          |      `number`        |                            The maximum width of the container.                        |
|      maxImgHeight     |                                          |      `number`        |                             The maximum height of the image.                          |
|      maxImgWidth      |                                          |      `number`        |                             The maximum width of the image.                           |
|       movable         |                                          |     `boolean`        |                           Determines if the image is movable.                         |
|      scalable         |                                          |     `boolean`        |                          Determines if the image is scalable.                         |
|      zoomable         |                                          |     `boolean`        |                          Determines if the image is zoomable.                         |
|    cropBoxMovable     |                                          |     `boolean`        |                         Determines if the crop box is movable.                        |
|   cropBoxResizable    |                                          |     `boolean`        |                        Determines if the crop box is resizable.                       |
|       position        |                                          |      `string`        |                                Position of the container.                             |


### Dependencies

In order for this component to work you have to include the following

```html
<link  href="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/2.0.0-alpha.2/cropper.css" rel="stylesheet">
```

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/2.0.0-alpha.2/cropper.min.js"></script>
```

### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

### Demo

```jsx live
<Cropper src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="image" />
```

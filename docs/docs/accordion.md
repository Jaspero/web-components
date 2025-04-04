import '../static/c/accordion.wc.js';

# Accordion

### Description

`<jp-accordion>` allows the user to show and hide sections of related content on a page.
****

### Attributes

| **Name** | **Required** | **Type**  |       **Description**        |
| :------: | :----------: | :-------: | :--------------------------: |
| multiple |              | `boolean` | single/multi panel accordion |
<br></br>
****

### Slots

`<jp-bellow>` are panels (children) components of `<jp-accordion>`

- `<jp-bellow>` needs to have an attribute `title` because it is used as unique identifier
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
// import '../static/c/accordion.wc.js';

<jp-accordion>
  <jp-bellow title="First Panel">Content for the first panel</jp-bellow>
  <jp-bellow title="Second Panel">Content for the second panel</jp-bellow>
  <jp-bellow title="Third Panel">Content for the third panel</jp-bellow>
</jp-accordion>
```
<br></br>
****
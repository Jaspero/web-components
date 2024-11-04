import '../static//c/accordion.wc.js';
import '../static//c/bellow.wc.js';

# Accordion

### Description

`<jp-accordion>` allows the user to show and hide sections of related content on a page.

### Attributes

| **Name** | **Required** | **Type**  |       **Description**        |
| :------: | :----------: | :-------: | :--------------------------: |
| multiple |              | `boolean` | single/multi panel accordion |

### Slots

`<jp-bellow>` are panels (children) components of `<jp-accordion>`

- `<jp-bellow>` needs to have an attribute `title` because it is used as unique identifier

### Methods

This component does not have any methods.

### Events

This component does not have any events.

### Demo

```jsx live
// import '../static/c/accordion.wc.js';
// import '../static/c/bellow.wc.js';

<jp-accordion>
  <jp-bellow title="First Panel">Content for the first panel</jp-bellow>
  <jp-bellow title="Second Panel">Content for the second panel</jp-bellow>
  <jp-bellow title="Third Panel">Content for the third panel</jp-bellow>
</jp-accordion>
```

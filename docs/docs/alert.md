import '../static/c/alert.wc.js';
import '../static/c/alert.css';

# Alert

### Description

`<jp-alert>` is a component with the functionality of displaying alert messages.
****

### Attributes

| **Name** | **Required** |         **Type**         |       **Description**       |
| :------: | :----------: | :----------------------: | :-------------------------: |
|  title   |              |         `string`         |     title of the alert      |
| message  |              |         `string`         | information within an alert |
|  state   |      ✓       | `'error'` or `'success'` |        type of alert        |
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

- `close`
  - triggers when the "close" button is clicked
<br></br>
****

### Demo

```jsx live
// import '../static/c/alert.wc.js';
// import '../static/c/alert.css';

function alert(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div hidden={!show}>
        <jp-alert
          title="Alert title"
          message="This is message"
          onClose={() => setShow(false)}
        ></jp-alert>
      </div>
      <button onClick={() => setShow(!show)}>Click me to toggle!</button>
    </>
  );
}
```
<br></br>
****
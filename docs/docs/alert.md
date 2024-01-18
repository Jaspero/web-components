# Alert

### Description

`<jp-alert>` is a component with the functionality of displaying alert messages.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :----: |
| title | | `string` | title of the alert |
| message | | `string` | information within an alert |
| state | ✓ | `'error'` or `'success'` | type of alert | 

### Slots

This component does not have any slots.

### Methods

This component does not have any methods.

### Events

- `close`
    - triggers when the "close" button is clicked

### Demo

```jsx live
function alert(props){
  const [show, setShow] = useState(false);
  return (
    <>
      <div hidden={!show}>
        <jp-alert title="Alert title" message="This is message" onClose={() => setShow(false)}></jp-alert>
      </div>
      <button onClick={() => setShow(!show)}>Click me to toggle!</button>
    </>  
  ) 
} 
```
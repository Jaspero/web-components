# JSON Pointer

### Description

`JSON Pointer` is a custom util designed for handling parsing and traversal of JSON objects using a `JSON Pointer` which is a string syntax that allows referencing specific parts of JSON document.
****

### Integration and Usage

To use `json-pointer` util, you need to import the `get` **function** from the `json-pointer` file into your project

```jsx
import { get } from './path/to/utils/json-pointer';
```

and use it to retrieve values from a JSON object by providing the said object and the pointer.

```jsx
const data = {
  user: {
    name: 'John Doe',
    address: {
      city: 'New York',
      postalCode: '10001',
    },
  },
};

const userName = get(data, '/user/name'); 
const city = get(data, '/user/address/city');
```
<br></br>
****

### Get Function
The `Get` **function** unescapes special characters `~1` **(which represents a forward slash)** and `~0` **(which represents a tilde)** in a JSON Pointer string, and converts a JSON Pointer string into an array of reference tokens. By doing that the function normalizes the JSON Pointer, then retrieves the value referenced by that pointer within a given JavaScript object.

```tsx
export function get<T = any, V = any>(obj: T, pointer: string): V
```

#### Parameters

- `obj`: `T`
  - JavaScript object that is being searched
- `pointer`: `string`
  - represents the JSON Pointer string used to locate the desired value withing the object `obj`

#### Returns

Returns the value referenced by the JSON Pointer with the type `V`
 
<br></br>
****
 
### Events

This util does not have any events.
<br></br>
****
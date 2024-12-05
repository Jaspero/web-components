# Bind

### Description

`Bind` is a custom util representing a Svelte action designed for enabling two-way data binding between an HTML element's value and a variable.
The util is used to synchronize element's value with the bound variable and updates every time when either of the values changes.
****

### Integration and Usage

To use `bind` util, you need to import it into your project

```jsx
import { bind } from './path/to/utils/bind';
```

and add it to a HTML element that has a `value` property (e.g., `<input>`).

```html
<input type="text" use:bind={value} />
```
<br></br>
****

### Type Definition

```tsx
import type { ActionReturn } from 'svelte/action';

interface Return {
  'on:bind': (v: { detail: any }) => any;
}
```

- `ActionReturn`
  - represents the return type of a Svelte action
  - can contain functions and event handlers
- `Return` **Interface**
  - defines the structure of `on:bind` event handler which is dispatched by the `bind` action
  - event handler function takes an object with `detail` property and can optionally return a value 
<br></br>
****

### Bind Function

```tsx
export function bind(
  node: HTMLElement & { value: any },
  value: any
  ): ActionReturn<{}, Return>
```

#### Parameters

- `node`: `HTMLElement & {value: any}`
  - the DOM element it binds the actions to
  - must have a value property (e.g., `<input>`, `<select>`, `<textarea>`)
- `value`: `any`
  - value that binds to the element
  - updated based on the changes in the DOM element
  - can be any type that the element's value property supports

#### Return Type
- `ActionReturn<{}, Return>`
  - `{}`: no specifict options are passed to the action
  - `Return`: specifies the custom event `on:bind` defined in the **Return interface** as part of return type 
<br></br>
****

### Function Logic

```tsx
node.addEventListener('value', change);
```

An event listener is added to the node listening for `value` events and triggering the **function** `change`.
<br></br>

#### Change Function 

```tsx
function change(event: any) {
    value = event.detail.value;
    node.dispatchEvent(new CustomEvent('bind', { detail: value }));
  }
```

**Function** `Change` is a part of **function** `Bind` that updates the `value` variable whenever it is modified.
<br></br>

#### Returns

```tsx
return {
    update(v: any) {
      value = v;
      node.value = v;
    }
  };
```

**Function** `bind` returns an object that mathes the format of Svelte's `ActionReturn` interface. 
It contains a function:
- `update`:`(v: any)`
  - called when the bound value changes
  - updates both the element's value as well as the internal state
<br></br>
****

### Events

- [`bind`](#change-function)
  - triggers when the `value` in the `detail` property changes
<br></br>
****
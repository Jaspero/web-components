# Click Outside

### Description

`Click outside` is a custom util representing a Svelte action designed for detecting when a user `clicks` outside of a specific HTML element. 
<br></br>
****

### Integration and Usage

To use `click-outside` util, you need to import it into your project

```jsx
import { clickOutside } from './path/to/utils/click-outside';
```

and add it to a HTML element you want to monitor.

```jsx
<div use:clickOutside on:click:click_outside={() => handleCloseOutside()}>
    <!-- Your content goes here  -->
</div>
```
<br></br>
****

### Type Definition

```tsx
import type { ActionReturn } from 'svelte/action';

interface Return {
  'on:click_outside': () => void;
}
```

- `ActionReturn`
  - represents the return type of a Svelte action
  - can contain functions and event handlers
- `Return` **Interface**
  - defines the structure of `on:click_outside` event handler which is dispatched by the `clickOutside` action
<br></br>
****

### ClickOutside Function

```tsx
export function clickOutside(
    node: HTMLElement
    ): ActionReturn<{}, Return>
```

#### Parameters

- `node`: `HTMLElement`
  - the DOM element it monitors for outside `clicks`

#### Return Type
- `ActionReturn<{}, Return>`
  - `{}`: no specifict options are passed to the action
  - `Return`: specifies the custom event `on:click_outside` defined in the **Return interface** as part of return type 
<br></br>
****

### Function Logic

```tsx
window.addEventListener('keydown', handleEscape, true);
document.addEventListener('click', handleClick, true);
```

Event listeners are added to the window and document listening for `keydown` and `click` events and triggering **functions** `handleEscape` and `handleClick`.
<br></br>

#### Dispatch Function

```tsx
function dispatch() {
    node.dispatchEvent(new CustomEvent('click_outside', node));
  }
```

**Function** `Dispatch` is a part of **function** `clickOutside` used for dispatching a custom `click_outside` event.
<br></br>

#### HandleClick Function

```tsx
function handleClick(event: MouseEvent) {
    if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
      dispatch();
    }
  }
```

**Function** `HandleClick` is a part of **function** `clickOutside` that triggers the [`dispatch`](#dispatch-function) function if the `click` is outside of the target `node`.
<br></br>

#### HandleEscape Function

```tsx
function handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      dispatch();
    }
  }
```

**Function** `HandleEscape` is a part of **function** `clickOutside` that checks that triggers the [`dispatch`](#dispatch-function) function if the `Escape` key is pressed.
<br></br>

#### Returns

```tsx
return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
      window.removeEventListener('keydown', handleEscape, true);
    }
  };
```

Function `clickOutside` returns an object that mathes the format of Svelte's `ActionReturn` interface. 
It contains a function:
- `destroy`
  - called when the action is no longer in use
  - removes event listeners that were added to detect `clicks` outside the target element and presses of `Escape` key
<br></br>
****

### Events

- [`click_outside`](#dispatch-function)
  - triggers when a `click` is detected outside the specified element or when the `Escape` key is pressed

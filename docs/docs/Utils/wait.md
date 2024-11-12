# Wait

### Description

`Wait` is a custom util designed to pause the execution of a code for a specified duration. 
<br></br>
****

### Integration and Usage

To use `scriptLoader` util, you need to import it into your project

```jsx
import { wait } from './path/to/utils/wait';
```

and call the function `wait` where you want a delay to happen.

```jsx
await wait();
```
<br></br>
****

### Wait Function

```tsx
export async function wait(duration = 10): Promise<void>
```

#### Parameters

- `duration`: `number`
  - duration of the wait in milliseconds
  - default is set to `10` milliseconds

#### Return Type

- `Promise<void>`
  - resolves after the specified duration, enabling the use of `await` function to pause code execution
<br></br>
****

### Function Logic

```tsx
script.onload = () => resolve(script);
script.onerror = () => reject(new Error(`Script load error for ${src}`));
```

Event listeners are added to the script, waiting to either **resolve** the promise if the script is successfully loaded or **reject** it.
<br></br>
****

### Events

This util does not have any events.
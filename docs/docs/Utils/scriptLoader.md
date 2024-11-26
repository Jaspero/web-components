# Script Loader

### Description

`Script Loader` is a custom util designed to dynamically load external JavaScript files into an HTML document. 
****

### Integration and Usage

To use `scriptLoader` util, you need to import it into your project

```jsx
import { loadScript } from './path/to/utils/scriptLoader';
```

and call the function on a `src` URL of the script you want to load.

```jsx
loadScript('https://example.com/script.js', { async: true }, { defer: true })
  .then((script) => {
    console.log('Script loaded successfully:', script);
  })
  .catch((error) => {
    console.error('Error loading script:', error);
  });
```
<br></br>
****

### LoadScript Function

```tsx
export function loadScript(
    src: string, 
    isAsync: { async: boolean }, 
    defer: { defer: boolean }
): Promise<HTMLScriptElement>
```

#### Parameters

- `src`: `string`
  - URL of the script that needs to be loaded
- `isAsync`: `{ async: boolean }` 
  - specifies asynchronous loading of the script
  - default is set to `{ async: true }` 
- `defer`: `{ defer: boolean }`
  - specifies whether the script should be deffered until the document has been parsed
  - default is set to `{ defer: true }`

#### Return Type

- `Promise<HTMLScriptElement>`
  - once the script is successfully loaded, it resolves to `HTMLScriptElement`
  - if the script isn't successfully loaded, it rejects with an `Error`
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

- [`load`](#function-logic)
  - triggers when a script has been loaded
- [`error`](#function-logic)
  - triggers when an error occurs while loading the script
<br></br>
****
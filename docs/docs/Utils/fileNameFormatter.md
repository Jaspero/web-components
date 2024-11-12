# File Name Formatter

### Description

`File Name Formatter` is a custom formatter util designed for formatting a given file name for easier retrieval and readability.
<br></br>
****

### Integration and Usage

To use `fileNameFormatter` util, you need to import the `formatDisplayFileName` **function** from the `fileNameFormatter` file into your project

```jsx
import { formatDisplayFileName } from './path/to/utils/fileNameFormatter';
```

and call the function with a `string` object and a specified format.

```jsx
const displayedFileNameString = formatDisplayFileName(
          fileName, 
          displayFormat,
          displayFormatFunction //optional
        );
```
<br></br>
****

### FormatDisplayFileName Function

```tsx
export function formatDisplayFileName(
  name: string,
  format: string,
  formatter?: (name: string) => string
) 
```

#### Parameters

- `name`: `string`
  - name of the file that needs to be formatted
- `format`: `string`
  - specifies the output style
- `formatter`: `(date: Date) => string` (optional)
  - function that customizes the output format of a `string` object

#### Returns

Returns a date string formatted according to the chosen format for displaying file names.

<br></br>
****

### Formats

#### Displayed File Name Formats

- `custom`
  - custom file name format defined by the user
- `pascal`
  - `capitalizes` all words **including** the first word and `removes the space` in between them 
- `camel` 
  - `capitalizes` all words **except** the first word and `removes the space` in between them 
- `snake`
  - combines words by replacing the space with an `underscore (_)`
- `kebab`
  - combines words by replacing the space with a `dash (-)`
- `title`
  - each word starts with an `uppercase` letter and is `separated` by spaces
- `upper`
  - `uppercases` **all** characters `removing spaces or separators`
- `lower`
  - `lowercases` **all** characters `removing spaces or separators`
- `dot`
  - combines words by replacing space with a `dot (.)` and `lowercases` **all** characters
- `sentence`
  - `capizalizes` only the first word and replaces **all** symbols with `space`, making the name look like a regular sentence
<br></br>
****
 
### Events

This util does not have any events.

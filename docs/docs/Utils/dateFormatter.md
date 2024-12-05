# Date Formatter

### Description

`Date Formatter` is a custom formatter util designed for easier display of dates. It converts `Date` objects into different text or data representations providing two functions, `formatDisplayDate` and `formatReturnDate`.
****

### Integration and Usage

To use `dateFormatter` util, you need to import **functions** `formatDisplayDate` and `formatReturnDate` from `dateFormatter` file, into your project

```jsx
import { formatDisplayDate, formatReturnDate } from './path/to/utils/dateFormatter';
```

and call the functions with a `Date` object and a specified format.

```jsx
const date = new Date();
const formattedDisplayDate = formatDisplayDate(
    date, 
    format, 
    formatter //optional
); 
const formattedReturnDate = formatReturnDate(
    date, 
    format,
    formatter //optional
);
```
<br></br>
****

### FormatDisplayDate Function

```tsx
export function formatDisplayDate(
    date: Date, 
    format: string, 
    formatter?: (date: Date) => string
) 
```

#### Parameters

- `date`: `Date`
  - `Date` object that needs to be formatted
- `format`: `string`
  - specifies the output style
- `formatter`: `(date: Date) => string` (optional)
  - function that customizes the output format of a `Date` object

#### Returns

Returns a date string formatted according to the chosen format for displaying dates.

<br></br>
****

### FormatReturnDate Function

```tsx
export function formatReturnDate(
    date: Date, 
    format: string, 
    formatter?: (date: Date) => any
)
```

#### Parameters

- `date`: `Date`
  - `Date` object that needs to be formatted
- `format`: `string`
  - specifies the output style
- `formatter`: `(date: Date) => string` (optional)
  - function that customizes the output format of a `Date` object

#### Returns

Returns a date string formatted according to the chosen format for returning dates.
<br></br>
****

### Formats

#### Displayed Date Formats

- `custom`
  - custom date format defined by the user
- `normal` 
  - simple date format: `YYYY/MM/DD`
- `short`
  - date format in shorter form: `MM/DD/YYYY`
- `medium`
  - date in a more readable format: `Mon DD, YYYY`
- `long`
  - date format with a full name of the month along with the date: `Month DD, YYYY`
- `full`
  - full weekday name, followed by the full month name, day, and year: `Day, Month DD, YYYY`
<br></br>

#### Returned Date Formats

- `custom`
  - custom return format defined by the user
- `js`
  - original `Date` object
- `unix`
  - Unix timestamp, which is the number of milliseconds elapsed since January 1, 1970
- `json`
  - date in JSON format
- `utc`
  - date as a UTC string
- `iso`
  - date as an ISO 8601 string, including the time: `YYYY-MM_DDTHH:mm:ss:sssZ`
- `isoDate`
  - date portion of the ISO 8601 string, formatted as: `YYYY-MM-DD` 
<br></br>
****
 
### Events

This util does not have any events.
<br></br>
****
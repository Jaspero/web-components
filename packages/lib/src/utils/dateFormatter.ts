const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const shortMonthNames = monthNames.map((el) => el.substring(0, 3));

export function formatDisplayDate(date: Date, format: string, formatter?: (date: Date) => string) {
  switch (format) {
    case 'custom':
      return formatter(date);
    case 'normal':
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    case 'short':
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    case 'medium':
      return `${shortMonthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    case 'long':
      return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    case 'full':
      return `${days[date.getDay()]}, ${
        monthNames[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;
  }
}

export function formatReturnDate(date: Date, format: string, formatter?: (date: Date) => any) {
  switch (format) {
    case 'custom':
      return formatter(date);
    case 'js':
      return date;
    case 'unix':
      return date.valueOf();
    case 'json':
      return date.toJSON();
    case 'utc':
      return date.toUTCString();
  }
}

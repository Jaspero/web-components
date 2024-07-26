export function isOutOfMaxBounds(internalMaxDate: Date, year: number, month: number, date: number) {
  if (internalMaxDate === null) {
    return false;
  }
  const maxYear = internalMaxDate.getFullYear();
  let maxMonth = internalMaxDate.getMonth();
  const maxDate = internalMaxDate.getDate();

  if (maxYear > year) return false;
  if (maxYear < year) return true;

  if (maxMonth > month) return false;
  if (maxMonth < month) return true;

  if (maxDate >= date) return false;
  return true;
}

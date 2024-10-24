function getLastDayOfMonth(year: number, month: number) {
  let nextMonth = new Date(year, month + 1, 1);
  nextMonth.setDate(nextMonth.getDate() - 1);
  return nextMonth.getDate();
}

export function isOutOfMinBounds(
  internalMinDate: Date | null,
  year: number,
  month: number,
  date: number
) {
  if (internalMinDate === null) {
    return false;
  }
  const minYear = internalMinDate.getFullYear();
  const minMonth = internalMinDate.getMonth();
  const minDate = internalMinDate.getDate();

  if (minYear > year) return true;
  if (minYear < year) return false;

  if (minMonth < month) return false;
  if (minMonth > month) return true;

  const lastDayOfMonth = getLastDayOfMonth(year, month);
  return date < minDate ? true : date > lastDayOfMonth ? false : date < minDate;
}

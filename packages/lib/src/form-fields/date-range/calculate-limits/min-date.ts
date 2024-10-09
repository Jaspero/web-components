export function calculateMaxDate(date: string | Date, days: number) {
  const maxDate = new Date(date);
  maxDate.setDate(Number(maxDate.getDate()) + Number(days) - 1);
  return maxDate;
}

export function calculateMinDate(date: string | Date, days: number) {
  const minDate = new Date(date);
  minDate.setDate(Number(minDate.getDate()) - Number(days));
  return minDate;
}

export function calculateRequiredBefore(date: string | Date, days: number) {
  const minDate = new Date(date);
  minDate.setDate(Number(minDate.getDate()) - Number(days));
  return minDate;
}

export function calculateRequiredAfter(date: string | Date, days: number) {
  const minDate = new Date(date);
  minDate.setDate(Number(minDate.getDate()) + Number(days) - 1);
  return minDate;
}

export function isOutOfMaxBounds(
  internalMaxDate: Date | null,
  year: number,
  month: number,
  date: number
) {
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

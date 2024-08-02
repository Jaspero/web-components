export function calculateMaxDate(date: string | Date, days: number) {
  const maxDate = new Date(date);
  maxDate.setDate(maxDate.getDate() + days);
  return maxDate;
}

export function calculateMinDate(date: string | Date, days: number) {
  const minDate = new Date(date);
  minDate.setDate(minDate.getDate() - days - 1);
  return minDate;
}

export function calculateRequiredBefore(date: string | Date, days: number) {
  const minDate = new Date(date);
  minDate.setDate(minDate.getDate() - days);
  return minDate;
}

export function calculateRequiredAfter(date: string | Date, days: number) {
  const minDate = new Date(date);
  minDate.setDate(minDate.getDate() + days - 1);
  return minDate;
}

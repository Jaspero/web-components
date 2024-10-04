export function calculateMaxDate(date: string | Date, days: number) {
    const maxDate = new Date(date);
    maxDate.setDate(Number(maxDate.getDate()) + Number(days));
    return maxDate;
  }
  
  export function calculateMinDate(date: string | Date, days: number) {
    const minDate = new Date(date);
    minDate.setDate(Number(minDate.getDate()) - Number(days) - 1);
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
export interface DateDiffCalculatorUI extends Record<string, string> {
  startLabel: string;
  endLabel: string;
  nowBtn: string;
  todayBtn: string;
  tomorrowBtn: string;
  daysLabel: string;
  hoursLabel: string;
  minsLabel: string;
  secsLabel: string;
  weeksLabel: string;
  totalHoursLabel: string;
  totalMinsLabel: string;
  elapsed: string;
  past: string;
  invalidDates: string;
}

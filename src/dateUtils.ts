import { DATE_UNIT_TYPES } from "./constants";
import {
  addDays,
  addMinutes,
  addMonths,
  addSeconds,
  addWeeks,
  addYears,
  getYear,
  isBefore,
  isEqual,
  isWithinInterval,
} from "date-fns";

export function getCurrentYear() {
  return getYear(new Date());
}

export function add(
  date: Date,
  number: number,
  type = DATE_UNIT_TYPES.DAYS,
): Date {
  if (type == DATE_UNIT_TYPES.SECONDS) {
    return addSeconds(date, number);
  }
  if (type == DATE_UNIT_TYPES.MINUTES) {
    return addMinutes(date, number);
  }
  if (type == DATE_UNIT_TYPES.WEEKS) {
    return addWeeks(date, number);
  }
  if (type == DATE_UNIT_TYPES.MONTHS) {
    return addMonths(date, number);
  }
  if (type == DATE_UNIT_TYPES.YEARS) {
    return addYears(date, number);
  }
  return addDays(date, number);
}

export function isWithinRange(date: Date, from: Date, to: Date): boolean {
  return isWithinInterval(date, { start: from, end: to });
}

export function isDateBefore(date: Date, compareDate: Date): boolean {
  return isBefore(date, compareDate);
}

export function isSameDay(date: Date, compareDate: Date): boolean {
  return isEqual(date, compareDate);
}

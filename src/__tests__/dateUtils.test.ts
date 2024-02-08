import { test, describe, expect } from "vitest";
import { add, isDateBefore, isSameDay, isWithinRange } from "../dateUtils";
import { DATE_UNIT_TYPES } from "../constants";

describe("Date Utils", () => {
  test("add function adds correct nr of days", () => {
    const date = new Date("2024-01-17");
    const newDate = new Date("2024-01-19");
    const addDate = add(date, 2, DATE_UNIT_TYPES.DAYS);
    expect(addDate).toEqual(newDate);
  });

  test("isWithinRange returns true when date is within range", () => {
    const date = new Date("2024-01-21");
    const from = new Date("2024-01-17");
    const to = new Date("2024-02-17");
    const isInRange = isWithinRange(date, from, to);
    expect(isInRange).toBe(true);
  });

  test("isWithinRange returns false when date is not within range", () => {
    const date = new Date("2024-01-01");
    const from = new Date("2024-01-17");
    const to = new Date("2024-02-17");
    const isInRange = isWithinRange(date, from, to);
    expect(isInRange).toBe(false);
  });

  test("isDateBefore function returns true when date is before", () => {
    const date1 = new Date("2024-01-01");
    const date2 = new Date("2024-01-02");
    const compare = isDateBefore(date1, date2);
    expect(compare).toEqual(true);
  });

  test("isDateBefore function returns false when date is after", () => {
    const date1 = new Date("2024-01-02");
    const date2 = new Date("2024-01-01");
    const compare = isDateBefore(date1, date2);
    expect(compare).toEqual(false);
  });

  test("isSameDay function returns true if same days given", () => {
    const day1 = new Date("2024-01-17");
    const day2 = new Date("2024-01-17");
    const compare = isSameDay(day1, day2);
    expect(compare).toEqual(true);
  });

  test("isSameDay function returns false if different days given", () => {
    const day1 = new Date("2024-01-17");
    const day2 = new Date("2024-02-17");
    const compare = isSameDay(day1, day2);
    expect(compare).toEqual(false);
  });
});

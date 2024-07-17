import { generateDays } from "./dateUtils";
import { startOfMonth, endOfMonth, format, startOfWeek, endOfWeek } from "date-fns";

describe("dateUtils", () => {
  test("generateDays returns correct number of days", () => {
    const currentDate = new Date(2023, 6, 15);
    const days = generateDays(currentDate);
    const startDate = startOfWeek(startOfMonth(currentDate));
    const endDate = endOfWeek(endOfMonth(currentDate));

    expect(days.length).toBeGreaterThanOrEqual(28);
    expect(days.length).toBeLessThanOrEqual(42);
    expect(format(days[0], "yyyy-MM-dd")).toBe(format(startDate, "yyyy-MM-dd"));
    expect(format(days[days.length - 1], "yyyy-MM-dd")).toBe(
      format(endDate, "yyyy-MM-dd")
    );
  });
});

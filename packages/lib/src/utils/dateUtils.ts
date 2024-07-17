import { startOfWeek, endOfWeek, startOfMonth, endOfMonth, addDays, format } from "date-fns";

export const generateDays = (currentDate: Date): Date[] => {
  const startDate = startOfWeek(startOfMonth(currentDate));
  const endDate = endOfWeek(endOfMonth(currentDate));
  const days: Date[] = [];
  let day = startDate;

  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }
  return days;
};

export const formatDate = (date: Date, formatStr: string): string => {
  return format(date, formatStr);
};

import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  addDays,
  format,
  eachDayOfInterval,
} from 'date-fns';

export const generateWeeks = (currentDate: Date): (Date | null)[][] => {
  const startDate = startOfWeek(startOfMonth(currentDate));
  const endDate = endOfWeek(endOfMonth(currentDate));

  const weeks: (Date | null)[][] = [];

  let startOfWeekDate = startDate;

  while (startOfWeekDate <= endDate) {
    const endOfWeekDate = endOfWeek(startOfWeekDate);
    const weekDays = eachDayOfInterval({ start: startOfWeekDate, end: endOfWeekDate });

    const filteredWeekDays = weekDays.map((day) => {
      return startOfMonth(currentDate).getMonth() === day.getMonth() ? day : null;
    });

    weeks.push(filteredWeekDays);
    startOfWeekDate = addDays(endOfWeekDate, 1);
  }

  return weeks;
};

export const formatDate = (date: Date, formatStr: string): string => {
  return format(date, formatStr);
};

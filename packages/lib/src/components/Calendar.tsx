import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { generateDays } from "../utils/dateUtils";
import CalendarHeader from "./CalendarHeader";
import DayCell from "./DayCell";
import { addMonths, subMonths } from "date-fns";

const CalendarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 296,
  backgroundColor: theme.palette.background.default,
  padding: 8,
  borderRadius: 8,
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
}));

const CalendarDays = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "8px",
  width: "100%",
});

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);
  const [previewDate, setPreviewDate] = useState<Date | null>(null);

  const handleDayClick = (day: Date) => {
    if (rangeStart === null || (rangeStart !== null && rangeEnd !== null)) {
      setRangeStart(day);
      setRangeEnd(null);
    } else if (rangeStart !== null && rangeEnd === null) {
      if (day < rangeStart) {
        setRangeEnd(rangeStart);
        setRangeStart(day);
      } else {
        setRangeEnd(day);
      }
    }
  };

  const handleMouseEnter = (day: Date) => {
    if (rangeStart && !rangeEnd) {
      setPreviewDate(day);
    }
  };

  const handleMouseLeave = () => {
    setPreviewDate(null);
  };

  const days = generateDays(currentDate);

  return (
    <CalendarContainer>
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={() => setCurrentDate(subMonths(currentDate, 1))}
        onNextMonth={() => setCurrentDate(addMonths(currentDate, 1))}
      />
      <CalendarDays>
        {days.map((day) => (
          <DayCell
            key={day.toISOString()}
            day={day}
            currentDate={currentDate}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            previewDate={previewDate}
            onClick={handleDayClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </CalendarDays>
    </CalendarContainer>
  );
};

export default Calendar;

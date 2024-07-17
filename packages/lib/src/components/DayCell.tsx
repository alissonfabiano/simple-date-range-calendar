import React from "react";
import { styled } from "@mui/material/styles";
import { isSameMonth, isSameDay, isWithinInterval } from "date-fns";
import { formatDate } from "../utils/dateUtils";

const Cell = styled("div")<{
  isCurrentMonth: boolean;
  isSelected: boolean;
  isToday: boolean;
  isInRange: boolean;
  isPreviewing: boolean;
}>(({ theme, ...props }) => ({
  padding: "8px",
  textAlign: "center",
  borderRadius: "50%",
  boxShadow:
    props.isPreviewing && props.isInRange
      ? `0 0 0 1px ${theme.palette.primary.main} inset`
      : "none",
  backgroundColor: props.isToday
    ? theme.palette.primary.main
    : props.isSelected
    ? theme.palette.secondary.main
    : props.isInRange
    ? theme.palette.secondary.light
    : "transparent",
  color: props.isToday
    ? theme.palette.text.primary
    : props.isCurrentMonth
    ? theme.palette.text.primary
    : theme.palette.text.secondary,
  cursor: "pointer",
}));

interface DayCellProps {
  day: Date;
  currentDate: Date;
  rangeStart: Date | null;
  rangeEnd: Date | null;
  previewDate: Date | null;
  onClick: (day: Date) => void;
  onMouseEnter: (day: Date) => void;
  onMouseLeave: () => void;
}

const DayCell: React.FC<DayCellProps> = ({
  day,
  currentDate,
  rangeStart,
  rangeEnd,
  previewDate,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const isCurrentMonth = isSameMonth(day, currentDate);
  const isSelected =
    (rangeStart && isSameDay(day, rangeStart)) ||
    (rangeEnd && isSameDay(day, rangeEnd)) ||
    false;
  const isToday = isSameDay(day, new Date());
  const isInRange =
    (rangeStart &&
      rangeEnd &&
      isWithinInterval(day, { start: rangeStart, end: rangeEnd })) ||
    (rangeStart &&
      previewDate &&
      isWithinInterval(day, { start: rangeStart, end: previewDate })) ||
    false;
  const isPreviewing =
    !!previewDate &&
    !!rangeStart &&
    !rangeEnd &&
    day >= rangeStart &&
    day <= previewDate;

  return (
    <Cell
      isCurrentMonth={isCurrentMonth}
      isSelected={isSelected}
      isToday={isToday}
      isInRange={isInRange}
      isPreviewing={isPreviewing}
      onClick={() => onClick(day)}
      onMouseEnter={() => onMouseEnter(day)}
      onMouseLeave={onMouseLeave}
    >
      {formatDate(day, "d")}
    </Cell>
  );
};

export default DayCell;

import { useMemo, useState, useEffect } from 'react';
import {
  addMonths,
  eachDayOfInterval,
  format,
  isAfter,
  isBefore,
  isEqual,
  isSameDay,
  startOfMonth,
  subMonths,
} from 'date-fns';
import { generateWeeks } from '../utils/dateUtils';
import CalendarContainer from './CalendarContainer';
import CalendarHeader from './CalendarHeader';
import HeaderLabel from './HeaderLabel';
import ArrowSwitcher from './ArrowSwitcher';
import ArrowButton from './ArrowButton';
import WeekDaysRow from './WeekDaysRow';
import CalendarRowsContent from './CalendarRowsContent';
import WeekRow from './WeekRow';
import DayCellHeader from './DayCellHeader';
import DayCellContainer from './DayCellContainer';
import DayCellPreview from './DayCellPreview';
import DayCellButton from './DayCellButton';
import SlideTransition from './SlideTransition';
import DayCellDisabled from './DayCellDisabled';
import {
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
} from '@mui/icons-material';

interface CalendarProps {
  startDate?: Date | null;
  endDate?: Date | null;
  onDateRangeChange?: (startDate: Date | null, endDate: Date | null) => void;
  onDateRangeIsSelected?: (startDate: Date, endDate: Date) => void;
}

const Calendar = ({
  startDate,
  endDate,
  onDateRangeChange,
  onDateRangeIsSelected,
}: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [rangeStart, setRangeStart] = useState<Date | null>(startDate ?? null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(endDate ?? null);
  const [previewDate, setPreviewDate] = useState<Date | null>(null);
  const [directionAnim, setDirectionAnim] = useState<'left' | 'right'>('left');
  const [currentMonth, setCurrentMonth] = useState<Date>(startOfMonth(new Date()));

  const handleMonthChange = (direction: 'prev' | 'next') => {
    setCurrentMonth((prevMonth) =>
      direction === 'prev' ? subMonths(prevMonth, 1) : addMonths(prevMonth, 1),
    );
    setDirectionAnim(direction === 'prev' ? 'left' : 'right');
  };

  useEffect(() => {
    setRangeStart(startDate ?? null);
  }, [startDate]);

  useEffect(() => {
    setRangeEnd(endDate ?? null);
  }, [endDate]);

  useEffect(() => {
    if (onDateRangeChange) {
      onDateRangeChange(rangeStart, rangeEnd);
    }
    if (onDateRangeIsSelected && !!rangeStart && !!rangeEnd) {
      onDateRangeIsSelected(rangeStart, rangeEnd);
    }
  }, [rangeStart, rangeEnd, onDateRangeChange]);

  const previewDirection =
    previewDate && rangeStart && isBefore(previewDate, rangeStart) ? 'left' : 'right';

  const selectedRangeDates = useMemo(() => {
    if (!rangeStart || !rangeEnd) {
      return [];
    }

    const dates = eachDayOfInterval({
      start: rangeStart,
      end: rangeEnd,
    });

    return dates;
  }, [rangeStart, rangeEnd]);

  function isInPreviewing(day: Date) {
    if (!previewDate) return false;

    if (rangeStart && isEqual(rangeStart, currentDate)) {
      return day >= rangeStart && day <= previewDate;
    }
    if (rangeEnd && isEqual(rangeEnd, currentDate)) {
      return rangeEnd >= day && day >= previewDate;
    }
    return false;
  }

  const selectedPreviewDates = useMemo(() => {
    if (!previewDate || !currentDate || !rangeStart) {
      return [];
    }

    const start = isEqual(rangeStart, currentDate) ? currentDate : previewDate;
    const end = isEqual(rangeStart, currentDate) ? previewDate : currentDate;

    const dates = eachDayOfInterval({
      start,
      end,
    });

    return dates.filter(
      (date) =>
        !selectedRangeDates.some((rangeDate) => isEqual(date, rangeDate)) && isInPreviewing(date),
    );
  }, [rangeStart, previewDate, currentDate, selectedRangeDates]);

  const weeks = generateWeeks(currentMonth);

  const monthLabel = format(currentMonth, 'MMMM yyyy');

  const handleDayClick = (day: Date) => {
    if (rangeStart === null) {
      setRangeStart(day);
      setRangeEnd(null);
    } else if (rangeStart !== null && rangeEnd === null) {
      if (isBefore(day, rangeStart)) {
        setRangeStart(day);
      } else {
        setRangeEnd(day);
      }
    } else if (isBefore(day, rangeStart)) {
      if (isEqual(currentDate, rangeEnd!)) {
        setRangeStart(day);
      } else {
        setRangeStart(day);
        setRangeEnd(null);
      }
    } else if (isAfter(day, rangeStart)) {
      if (isEqual(currentDate, rangeStart)) {
        setRangeEnd(day);
      } else {
        if (isAfter(day, rangeEnd!)) {
          setRangeEnd(null);
        }
        setRangeStart(day);
      }
    } else {
      setRangeStart(day);
      setRangeEnd(null);
    }
    setCurrentDate(day);
  };

  const handleOnMouseOver = (day: Date) => {
    setPreviewDate(day);
  };

  const handleMouseLeave = () => {
    setPreviewDate(null);
  };

  return (
    <CalendarContainer>
      <CalendarHeader>
        <HeaderLabel>{monthLabel}</HeaderLabel>
        <ArrowSwitcher>
          <ArrowButton onClick={() => handleMonthChange('prev')}>
            <KeyboardArrowLeftIcon />
          </ArrowButton>
          <ArrowButton onClick={() => handleMonthChange('next')}>
            <KeyboardArrowRightIcon />
          </ArrowButton>
        </ArrowSwitcher>
      </CalendarHeader>
      <WeekDaysRow>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
          <DayCellHeader key={`${day}-${i}`} variant="body2">
            {day}
          </DayCellHeader>
        ))}
      </WeekDaysRow>
      <SlideTransition direction={directionAnim} key={currentMonth.toString()}>
        <CalendarRowsContent>
          {weeks.map((week, weekIndex) => (
            <WeekRow key={weekIndex}>
              {week.map((day, dayIndex) => {
                if (!day) {
                  return <DayCellDisabled key={dayIndex} />;
                }

                const isToday = isSameDay(day, new Date());
                const isRangeStart = !!rangeStart && isSameDay(day, rangeStart);
                const isRangeEnd = !!rangeEnd && isSameDay(day, rangeEnd);

                const isInRange = selectedRangeDates.some((rangeDate) => isEqual(rangeDate, day));

                const isInPreviewingRange = selectedPreviewDates.some((preview) =>
                  isEqual(preview, day),
                );

                return (
                  <DayCellContainer
                    onClick={() => handleDayClick(day)}
                    onMouseEnter={() => handleOnMouseOver(day)}
                    onMouseLeave={handleMouseLeave}
                    key={day.toISOString()}
                    isInRange={isInRange}
                    isInPreviewingRange={isInPreviewingRange}
                    isRangeStart={isRangeStart}
                    isRangeEnd={isRangeEnd}
                    direction={previewDirection}
                    isToday={isToday}
                  >
                    <DayCellPreview
                      direction={previewDirection}
                      isInRange={isInRange}
                      isInPreviewingRange={isInPreviewingRange}
                      isRangeStart={isRangeStart}
                      isRangeEnd={isRangeEnd}
                      isToday={isToday}
                    >
                      <DayCellButton
                        isToday={isToday}
                        isRangeStart={isRangeStart}
                        isRangeEnd={isRangeEnd}
                      >
                        {day.getDate()}
                      </DayCellButton>
                    </DayCellPreview>
                  </DayCellContainer>
                );
              })}
            </WeekRow>
          ))}
        </CalendarRowsContent>
      </SlideTransition>
    </CalendarContainer>
  );
};

export default Calendar;

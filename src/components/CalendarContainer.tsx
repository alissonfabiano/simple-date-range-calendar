import { styled } from '@mui/material';

interface CalendarContainerProps {
  borderRadius?: number;
  width?: number | string;
}

const CalendarContainer = styled('div')<CalendarContainerProps>(
  ({ theme, borderRadius = 25, width = 280 }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    width: typeof width === 'number' ? `${width}px` : width,
    borderRadius: `${borderRadius}px`,
    backgroundColor: theme.palette.background.paper,
  }),
);

export default CalendarContainer;

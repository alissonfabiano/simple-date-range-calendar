import { styled } from '@mui/material';

const CalendarContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(1),
  width: 280,
  borderRadius: 25,
  backgroundColor: theme.palette.background.paper,
}));

export default CalendarContainer;

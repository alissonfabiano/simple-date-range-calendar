import { styled } from '@mui/material/styles';

const WeekDaysRow = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(1),
}));

export default WeekDaysRow;

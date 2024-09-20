import { ButtonBase, styled } from '@mui/material';

interface DayCellButtonProps {
  isToday: boolean;
  isRangeEnd: boolean;
  isRangeStart: boolean;
}

const DayCellButton = styled(ButtonBase, {
  shouldForwardProp: (prop: string) =>
    ![
      'isToday',
      'direction',
      'isInRange',
      'isRangeEnd',
      'isRangeStart',
      'isInPreviewingRange',
    ].includes(prop),
})<DayCellButtonProps>(({ theme, isToday, isRangeStart, isRangeEnd }) => ({
  ...theme.typography.button,
  border: isToday ? `1px solid ${theme.palette.border.today}` : 'none',
  background: 'none',
  borderRadius: '50%',
  width: 36,
  height: 36,
  margin: 0,
  padding: 0,
  transform: 'scale(1.1)',
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.short,
  }),
  color: theme.palette.text.primary,
  ...(isRangeStart || isRangeEnd
    ? {
        backgroundColor: theme.palette.primary.main,
        fontWeight: 500,
      }
    : {}),
}));

export default DayCellButton;

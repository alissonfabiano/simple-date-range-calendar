import { styled } from '@mui/material';

interface DayCellPreviewProps {
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isInPreviewingRange: boolean;
  isInRange: boolean;
  isToday: boolean;
  direction: 'left' | 'right';
}

const DayCellPreview = styled('div', {
  shouldForwardProp: (prop: string) =>
    ![
      'isToday',
      'direction',
      'isInRange',
      'isRangeEnd',
      'isRangeStart',
      'isInPreviewingRange',
    ].includes(prop),
})<DayCellPreviewProps>(({
  theme,
  isToday,
  isInPreviewingRange,
  isRangeStart,
  isRangeEnd,
  isInRange,
  direction,
}) => {
  const baseBorderStyle = '2px solid transparent';
  const previewingBorderStyle = '2px dashed transparent';
  const borderColorToday = `${theme.palette.border.previewing} transparent ${theme.palette.border.previewing} transparent`;
  const borderColorDefault = `${theme.palette.border.previewing} transparent`;

  const rangeStartBorderColor =
    direction === 'left'
      ? `${theme.palette.border.previewing} ${theme.palette.border.previewing} ${theme.palette.border.previewing} transparent`
      : `${theme.palette.border.previewing} transparent ${theme.palette.border.previewing} ${theme.palette.border.previewing}`;

  const rangeEndBorderColor = `${theme.palette.border.previewing} ${theme.palette.border.previewing} ${theme.palette.border.previewing} transparent`;

  return {
    border: isInPreviewingRange ? previewingBorderStyle : baseBorderStyle,
    ...(isInPreviewingRange &&
      !isInRange && {
        borderRadius: 0,
        borderImage: 'initial',
        borderColor: isToday ? borderColorToday : borderColorDefault,
      }),
    ...(isInPreviewingRange &&
      isRangeStart && {
        borderRadius: direction === 'left' ? '0px 50% 50% 0px' : '50% 0px 0px 50%',
        borderImage: 'initial',
        borderColor: rangeStartBorderColor,
      }),
    ...(isInPreviewingRange &&
      isRangeEnd && {
        borderRadius: '0px 50% 50% 0px',
        borderImage: 'initial',
        borderColor: rangeEndBorderColor,
      }),
  };
});

export default DayCellPreview;

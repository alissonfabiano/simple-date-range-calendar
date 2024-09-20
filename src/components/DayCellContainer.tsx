import { styled } from '@mui/material';

interface DayCellContainerProps {
  isToday: boolean;
  isInRange: boolean;
  isRangeEnd: boolean;
  isRangeStart: boolean;
  isInPreviewingRange: boolean;
  direction: 'left' | 'right';
}

const DayCellContainer = styled('div', {
  shouldForwardProp: (prop: string) =>
    ![
      'isToday',
      'direction',
      'isInRange',
      'isRangeEnd',
      'isRangeStart',
      'isInPreviewingRange',
    ].includes(prop),
})<DayCellContainerProps>(({
  theme,
  isToday,
  direction,
  isInRange,
  isRangeEnd,
  isRangeStart,
  isInPreviewingRange,
}) => {
  return {
    ...(isInRange && {
      borderRadius: 0,
      backgroundColor: theme.palette.action.selected,
    }),
    ...(isRangeStart && {
      borderTopLeftRadius: '50%',
      borderBottomLeftRadius: '50%',
      paddingLeft: 0,
    }),
    ...(isRangeEnd && {
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
      paddingRight: 0,
    }),
    ':first-of-type': {
      borderTopLeftRadius: '50%',
      borderBottomLeftRadius: '50%',
      '> div': {
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
        borderLeftColor:
          isInPreviewingRange && !isInRange ? theme.palette.info.main : 'transparent',
      },
    },
    ':last-of-type': {
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
      '> div': {
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
        borderRightColor:
          isInPreviewingRange && !isInRange ? theme.palette.info.main : 'transparent',
      },
    },
    '&:hover': {
      '> div': {
        ...(isInPreviewingRange &&
          !isInRange && {
            borderColor:
              isRangeStart || isRangeEnd
                ? 'transparent'
                : direction === 'right'
                  ? `${theme.palette.info.main} ${theme.palette.info.main} ${theme.palette.info.main} transparent`
                  : `${theme.palette.info.main} transparent ${theme.palette.info.main} ${theme.palette.info.main}`,
            borderRadius: direction === 'right' ? '0px 50% 50% 0px' : '50% 0px 0px 50%',
          }),
        ...(isInRange &&
          isRangeStart && {
            borderColor: 'transparent',
            borderRadius: direction === 'left' ? '0px 50% 50% 0px' : '50% 0px 0px 50%',
          }),
        ...(isInRange &&
          isRangeEnd && {
            borderColor: 'transparent',
            borderRadius: direction === 'left' ? '0px 50% 50% 0px' : '50% 0px 0px 50%',
          }),

        '> button': {
          ...(!isToday &&
            !isInRange &&
            !isRangeStart &&
            !isRangeEnd && {
              backgroundColor: theme.palette.action.selected,
              border: `1px solid ${theme.palette.info.dark}`,
            }),
        },
      },
      ':first-of-type': {
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
        '> div': {
          borderTopLeftRadius: '50%',
          borderBottomLeftRadius: '50%',
          borderLeftColor:
            isInPreviewingRange && !isInRange ? theme.palette.info.main : 'transparent',
        },
      },
      ':last-of-type': {
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
        '> div': {
          borderTopRightRadius: '50%',
          borderBottomRightRadius: '50%',
          borderRightColor:
            isInPreviewingRange && !isInRange ? theme.palette.info.main : 'transparent',
        },
      },
    },
  };
});

export default DayCellContainer;

import React, { ReactElement } from 'react';
import { Slide, styled } from '@mui/material';

const Main = styled('div')({
  display: 'block',
  position: 'relative',
  overflowX: 'hidden',
  minWidth: 280,
  minHeight: 252,
});

interface SlideTransitionProps {
  direction: 'left' | 'right';
  children: ReactElement;
  width?: number | string;
}

const SlideTransition: React.FC<SlideTransitionProps> = ({ children, direction }) => {
  return (
    <Main>
      <Slide direction={direction} in>
        {children}
      </Slide>
    </Main>
  );
};

export default SlideTransition;

import React, { ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideTransitionProps {
  direction: 'left' | 'right';
  in: boolean;
  children: ReactElement;
  timeout?: number;
}

const SlideTransition: React.FC<SlideTransitionProps> = ({
  children,
  direction,
  in: inProp,
  timeout = 500,
}) => {
  const variants = {
    hidden: {
      x: direction === 'left' ? '-100%' : '100%',
      opacity: 0,
    },
    visible: {
      x: '0%',
      opacity: 1,
      transition: {
        duration: timeout / 1000,
      },
    },
    exit: {
      x: direction === 'left' ? '100%' : '-100%',
      opacity: 0,
      transition: {
        duration: timeout / 1000,
      },
    },
  };

  return (
    <AnimatePresence>
      {inProp && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlideTransition;

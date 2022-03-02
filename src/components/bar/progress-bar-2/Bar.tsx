import React from 'react';
import { Flex } from 'rebass';

const Bar: React.FC<{
  animationDuration: number;
  progress: number;
  variant: string;
}> = ({ animationDuration, progress, variant }) => (
  <Flex
    variant={variant}
    sx={{
      position: 'relative',
      width: `${progress * 100}%`,
      transition: `width ${animationDuration}ms linear`,
      height: '8px',
    }}
  >
    <Flex
      variant="perf.green"
      sx={{
        position: 'absolute',
        width: '100%',
        height: '2px',
        top: '3px',
      }}
    />
  </Flex>
);
export default Bar;

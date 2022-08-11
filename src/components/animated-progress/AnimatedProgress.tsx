import React from 'react';
import { useNProgress } from '@tanem/react-nprogress';
import { Options } from '@tanem/react-nprogress/dist/types';

import Bar from './Bar';
import Container from './Container';

export interface Props extends Options {
  variant?: 'perf.black' | 'perf.green' | 'perf.orange';
}
/**
 * @param animationDuration - Optional Number indicating the animation duration in ms. Defaults to 200.
 * @param incrementDuration - Optional Number indicating the length of time between progress bar increments in ms. Defaults to 800.
 * @param isAnimating - Optional Boolean indicating if the progress bar is animating. Defaults to false.
 * @param minimum - Optional Number between 0 and 1 indicating the minimum value of the progress bar. Defaults to 0.08.
 * @param variant - Optional string indicating the color of progressing bar. Defaults to 'perf.green'
 */
export const AnimatedProgress = ({
  variant = 'perf.green',
  animationDuration = 200,
  incrementDuration = 800,
  isAnimating = false,
  minimum = 0.08,
}: Props) => {
  const { animationDuration: animDuration, progress } = useNProgress({
    animationDuration,
    incrementDuration,
    isAnimating,
    minimum,
  });

  return (
    <Container>
      <Bar
        variant={variant}
        animationDuration={animDuration}
        progress={progress}
      />
      <Bar
        variant="perf.gray"
        animationDuration={animDuration}
        progress={1 - progress}
      />
    </Container>
  );
};

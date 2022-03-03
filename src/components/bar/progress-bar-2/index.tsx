import React, { FC } from 'react';
import { useNProgress } from '@tanem/react-nprogress';

import Bar from './Bar';
import Container from './Container';
import { Options } from '@tanem/react-nprogress/dist/types';

export interface ProgressBar2Props extends Options {
  variant?: 'perf.black' | 'perf.green' | 'perf.orange';
}
const ProgressBar2: FC<ProgressBar2Props> = ({
  variant = 'perf.green',
  ...options
}) => {
  const { animationDuration, progress } = useNProgress(options);

  return (
    <Container>
      <Bar
        variant={variant}
        animationDuration={animationDuration}
        progress={progress}
      />
      <Bar
        variant="perf.gray"
        animationDuration={animationDuration}
        progress={1 - progress}
      />
    </Container>
  );
};

export default ProgressBar2;

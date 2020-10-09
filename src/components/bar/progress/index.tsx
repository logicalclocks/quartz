import React, { FC } from 'react';

// Utils
import getSize from '../getSize';
// Components
import Tooltip from '../../tooltip';
import Bar, { BarProps } from '../index';
// Types
import { BarSizes } from '../types';

export interface ProgressBarProps extends Omit<BarProps, 'value'> {
  completion: number;
  length?: BarSizes;
  tooltipValue?: string;
}

const ProgressBar: FC<ProgressBarProps> = ({
  completion,
  length = 'm',
  tooltipValue,
  ...props
}: ProgressBarProps) => (
  <Tooltip mainText={String(tooltipValue)} disabled={!tooltipValue}>
    <Bar value={completion} width={getSize(length)} {...props} />
  </Tooltip>
);

export default ProgressBar;

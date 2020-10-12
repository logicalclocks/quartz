import React, { FC } from 'react';

// Utils
import getSize from '../getSize';
import { parseDate, getFormattedDate, getProgress } from './utils';
// Components
import Tooltip from '../../tooltip';
import Bar, { BarProps } from '../index';
// Types
import { BarSizes } from '../types';

export interface FreshnessBarProps extends Omit<BarProps, 'value'> {
  time: string;
  length?: BarSizes;
}

const FreshnessBar: FC<FreshnessBarProps> = ({
  time,
  length = 'm',
  ...props
}: FreshnessBarProps) => {
  const date = parseDate(time);

  return (
    <Tooltip mainText={getFormattedDate(date)}>
      <Bar
        variant="freshness"
        value={getProgress(date)}
        width={getSize(length)}
        {...props}
      />
    </Tooltip>
  );
};

export default FreshnessBar;

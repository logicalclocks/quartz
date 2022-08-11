import { differenceInMilliseconds, format } from 'date-fns';
import React from 'react';
import * as R from 'ramda';

import Tooltip from '../tooltip';
import { Bar } from './Bar';

type BarSizes = 'sm' | 'md';

export interface Props {
  /** expiration date given as `Date`(e.g. via new Date(model.createdAt)) */
  expirationDate: Date;
  /** Size, short(sm) or medium (md) */
  size?: BarSizes;
}

export const FreshnessBar = ({
  expirationDate,
  size = 'md',
  ...props
}: Props) => {
  return (
    <Tooltip mainText={format(expirationDate, 'yyyy-MM-dd HH:mm')}>
      <Bar
        variant="freshness"
        value={getProgress(expirationDate)}
        width={getSize(size)}
        {...props}
      />
    </Tooltip>
  );
};

export default FreshnessBar;

const getSize = (size: BarSizes) => (size === 'md' ? '100px' : '60px');

const MILISECONDS_IN_YEARS = 31622437236;

export const getProgress = (expirationDate: Date) => {
  const partOfYearExpired =
    differenceInMilliseconds(new Date(), expirationDate) / MILISECONDS_IN_YEARS; // e.g. for half a year it'd be 0.5, for a bit more -- 0.6 or even 0.7
  const tillExpiration = 1 - partOfYearExpired; // time left till expiration, 0.5, 0.4, 0.3 respectively ^

  return R.clamp(0, 1, tillExpiration);
};

import React, { FC } from 'react';
import { Card, CardProps } from 'rebass';
// @ts-ignore
import { useTheme } from 'emotion-theming';

import PerformanceBar from '../performance-bar';

import * as s from './performance-card.styles';

interface Bar {
  type: 'black' | 'gray' | 'green' | 'orange';
  proportion: number;
}

export interface PerformanceCardProps extends Omit<CardProps, 'css'> {
  bars: Bar[];
  children: React.ReactNode;
}

const PerformanceCard: FC<PerformanceCardProps> = ({
  bars,
  children,
  ...props
}: PerformanceCardProps) => (
  <Card sx={s.Wrapper} {...props}>
    {children}
    <PerformanceBar bars={bars} />
  </Card>
);

export default PerformanceCard;

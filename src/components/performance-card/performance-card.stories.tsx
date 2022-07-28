import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Labeling from '../typography/labeling';

import PerformanceCard, { PerformanceCardProps } from '.';

export default {
  title: 'Quartz/PerformanceCard',
  component: PerformanceCard,
} as Meta;

const Template: Story<PerformanceCardProps> = (props) => (
  <PerformanceCard {...props}>
    <Labeling bold>Some content</Labeling>
  </PerformanceCard>
);

export const PerformanceCard1 = Template.bind({});

PerformanceCard1.args = {
  bars: [
    {
      variant: 'perf.gray',
      proportion: 0.8,
    },
    {
      variant: 'perf.green',
      proportion: 0.2,
    },
  ],
};

export const PerformanceCard2 = Template.bind({});

PerformanceCard2.args = {
  bars: [
    {
      variant: 'perf.orange',
      proportion: 1,
    },
  ],
};

export const PerformanceCard3 = Template.bind({});

PerformanceCard3.args = {
  bars: [
    {
      variant: 'perf.green',
      proportion: 0.7,
    },
    {
      variant: 'perf.gray',
      proportion: 0.15,
    },
    {
      variant: 'perf.black',
      proportion: 0.15,
    },
  ],
};

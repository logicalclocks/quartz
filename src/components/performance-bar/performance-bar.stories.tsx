// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import PerformanceBar, { PerformanceBarProps } from '.';

export default {
  title: 'Quartz/PerformanceBar',
  component: PerformanceBar,
} as Meta;

const Template: Story<PerformanceBarProps> = (props) => (
  <PerformanceBar {...props} />
);

export const Mix = Template.bind({});

Mix.args = {
  bars: [
    {
      variant: 'perf.black',
      proportion: 0.1,
    },
    {
      variant: 'perf.gray',
      proportion: 0.2,
    },
    {
      variant: 'perf.green',
      proportion: 0.5,
    },
    {
      variant: 'perf.orange',
      proportion: 0.2,
    },
  ],
};

export const Black = Template.bind({});

Black.args = {
  bars: [
    {
      variant: 'perf.black',
      proportion: 1,
    },
  ],
};

export const Gray = Template.bind({});

Gray.args = {
  bars: [
    {
      variant: 'perf.gray',
      proportion: 1,
    },
  ],
};

export const Green = Template.bind({});

Green.args = {
  bars: [
    {
      variant: 'perf.green',
      proportion: 1,
    },
  ],
};

export const Orange = Template.bind({});

Orange.args = {
  bars: [
    {
      variant: 'perf.orange',
      proportion: 1,
    },
  ],
};

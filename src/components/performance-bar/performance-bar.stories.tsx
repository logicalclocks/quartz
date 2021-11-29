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
      type: 'black',
      proportion: 0.1,
    },
    {
      type: 'gray',
      proportion: 0.2,
    },
    {
      type: 'green',
      proportion: 0.5,
    },
    {
      type: 'orange',
      proportion: 0.2,
    },
  ],
};

export const Black = Template.bind({});

Black.args = {
  bars: [
    {
      type: 'black',
      proportion: 1,
    },
  ],
};

export const Gray = Template.bind({});

Gray.args = {
  bars: [
    {
      type: 'gray',
      proportion: 1,
    },
  ],
};

export const Green = Template.bind({});

Green.args = {
  bars: [
    {
      type: 'green',
      proportion: 1,
    },
  ],
};

export const Orange = Template.bind({});

Orange.args = {
  bars: [
    {
      type: 'orange',
      proportion: 1,
    },
  ],
};

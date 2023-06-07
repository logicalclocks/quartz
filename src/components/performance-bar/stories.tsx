import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import PerformanceBar from '.';

export default {
  title: 'PerformanceBar',
  component: PerformanceBar,
} as Meta;

type Story = StoryObj<typeof PerformanceBar>;
export const Default: Story = {
  render: (props) => <PerformanceBar {...props} />,
};

export const Mix: Story = {
  args: {
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
  },
};

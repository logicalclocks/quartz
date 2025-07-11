import { StoryObj, Meta } from '@storybook/react';
import Labeling from '../typography/labeling';

import PerformanceCardComponent from '.';

const meta: Meta = {
  title: 'DataDisplay/Cards/PerformanceCard',
  component: PerformanceCardComponent,
};
export default meta;

type Story = StoryObj<typeof PerformanceCardComponent>;
export const PerformanceCard: Story = {
  args: {
    children: <Labeling bold>Some content</Labeling>,
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
  },
};

export const PerformanceCard2: Story = {
  args: {
    bars: [
      {
        variant: 'perf.orange',
        proportion: 1,
      },
    ],
  },
};

export const PerformanceCard3: Story = {
  args: {
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
  },
};

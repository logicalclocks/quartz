import { StoryObj, Meta } from '@storybook/react';
import Labeling from '../typography/labeling';

import PerformanceCard from '.';

const meta: Meta = {
  title: 'PerformanceCard',
  component: PerformanceCard,
};
export default meta;

type Story = StoryObj<typeof PerformanceCard>;
export const Default: Story = {
  args: {
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
  render: (props) => (
    <PerformanceCard {...props}>
      <Labeling bold>Some content</Labeling>
    </PerformanceCard>
  ),
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

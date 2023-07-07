import { StoryObj, Meta } from '@storybook/react';
import PerformanceBar from '.';

const meta: Meta = {
  title: 'PerformanceBar',
  component: PerformanceBar,
};
export default meta;

type Story = StoryObj<typeof PerformanceBar>;
export const Default: Story = {
  args: {
    bars: [
      {
        variant: 'perf.orange',
        proportion: 1,
      },
    ],
  },
  render: (props) => <PerformanceBar {...props} />,
};

export const Mix: Story = {
  ...Default,
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

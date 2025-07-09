import { StoryObj, Meta } from '@storybook/react';
import PerformanceBarComponent from '.';

const meta: Meta = {
  title: 'Feedback/Progress/PerformanceBar',
  component: PerformanceBarComponent,
};
export default meta;

type Story = StoryObj<typeof PerformanceBarComponent>;
export const PerformanceBar: Story = {
  args: {
    bars: [
      {
        variant: 'perf.orange',
        proportion: 1,
      },
    ],
  },
  render: (props) => <PerformanceBarComponent {...props} />,
};

export const Mix: Story = {
  ...PerformanceBar,
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

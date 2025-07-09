import { StoryObj, Meta } from '@storybook/react';
import DividerComponent from './index';

const meta: Meta<typeof DividerComponent> = {
  title: 'DataDisplay/Divider',
  component: DividerComponent,
  argTypes: {
    mt: {
      control: {
        type: 'text',
      },
      description: 'Margin top',
    },
    mb: {
      control: {
        type: 'text',
      },
      description: 'Margin bottom',
    },
    mr: {
      control: {
        type: 'text',
      },
      description: 'Margin right',
    },
    ml: {
      control: {
        type: 'text',
      },
      description: 'Margin left',
    },
    width: {
      control: {
        type: 'text',
        description: 'Divider width',
      },
    },
    legend: {
      control: {
        type: 'text',
      },
      description: 'Legend value',
    },
  },
};
export default meta;

type Story = StoryObj<typeof DividerComponent>;
export const Divider: Story = {
  render: (props) => (
    <div
      style={{
        width: '700px',
        height: '300px',
        padding: '20px',
        border: '1px solid grey',
      }}
    >
      <DividerComponent {...props} />
    </div>
  ),
};

export const WithLegend: Story = {
  ...Divider,
  args: {
    legend: 'Legend',
  },
};

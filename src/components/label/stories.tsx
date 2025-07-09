import { StoryObj, Meta } from '@storybook/react';

import LabelComponent from '.';
import { Button } from '../button';

const meta: Meta<typeof LabelComponent> = {
  title: 'Typography/Label',
  component: LabelComponent,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
      description: 'Label text',
    },
    children: {
      description: 'A component which needs the tooltip',
    },
    action: {
      description: 'Additional action (button, link, ...)',
    },
  },
};
export default meta;

type Story = StoryObj<typeof LabelComponent>;

export const Label: Story = {
  args: {
    text: 'Label',
    children: <input type="text" />,
  },
  render: (props) => <LabelComponent {...props} />,
};

export const WithAction: Story = {
  args: {
    text: 'Label',
    children: <input type="text" />,
    action: (
      <Button p="0 0 0 10px" intent="inline">
        reference
      </Button>
    ),
  },
  render: (props) => <LabelComponent {...props} />,
};

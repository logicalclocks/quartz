import { StoryObj, Meta } from '@storybook/react';

import Label from '.';
import { Button } from '../button';

const meta: Meta<typeof Label> = {
  title: 'Input/Label',
  component: Label,
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

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Label',
    children: <input type="text" />,
  },
  render: (props) => <Label {...props} />,
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
  render: (props) => <Label {...props} />,
};

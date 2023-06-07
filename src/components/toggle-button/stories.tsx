import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import ToggleButton from './index';

const meta: Meta<typeof ToggleButton> = {
  title: 'Buttons/Toggle',
  component: ToggleButton,
  argTypes: {
    onChange: {
      description: 'Change callback function',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    checked: {
      control: {
        type: 'boolean',
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof ToggleButton> = {
  args: {
    children: 'partition key only',
  },
  render: (props) => <ToggleButton {...props} />,
};

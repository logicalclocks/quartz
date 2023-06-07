import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Radio from './index';

const meta: Meta<typeof Radio> = {
  title: 'Radio',
  component: Radio,
  argTypes: {
    onChange: {
      description: 'Change callback function',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    addtionalText: {
      description: 'Array of strings',
    },
    label: {
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

export const Default: StoryObj<typeof Radio> = {
  args: {
    label: 'nullable',
  },
  render: (props) => <Radio {...props} />,
};

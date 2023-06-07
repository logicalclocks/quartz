import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import CodeInput from '.';

const meta: Meta<typeof CodeInput> = {
  title: 'CodeInput',

  argTypes: {
    onChange: {
      description: 'Input change callback function',
    },
    placeholder: {
      control: {
        type: 'text',
      },
      description: 'Input placeholder',
    },
    info: {
      control: {
        type: 'text',
      },
      description: 'Message text (validation error)',
    },
    label: {
      control: {
        type: 'text',
      },
    },
    labelAction: {
      description: 'Label action (React node)',
    },
    width: {
      control: {
        type: 'text',
      },
      description: 'Width of the input group (px, %, em)',
      defaultValue: { summary: '500px' },
    },
    height: {
      control: {
        type: 'text',
      },
      description: 'Required height of the input group (px, %, em)',
      defaultValue: { summary: '300px' },
    },
    mode: {
      control: {
        type: 'select',
        options: ['javascript', 'yaml', 'python'],
      },
      description: 'Input type',
      defaultValue: { summary: 'javascript' },
    },
    intent: {
      control: {
        type: 'select',
        options: ['default', 'error'],
      },
      description: 'Select intent (error border)',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof CodeInput> = {
  args: {
    label: 'Label',
    mode: 'javascript',
    value: 'const a = 100;\nconst b = 120;',
    tooltipInfo: 'some tooltip',
    onChange: action('Input change'),
  },
  render: (props) => <CodeInput {...props} />,
};

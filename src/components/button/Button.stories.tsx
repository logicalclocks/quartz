import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Button, { ButtonProps } from '.';

export default {
  title: 'Example/Buttons',
  component: Button,
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'ghost', 'inline'],
        default: 'primary',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      table: {
        type: {
          summary: 'On click callback function',
        },
      },
      type: {
        required: true,
      },
    },
    children: {
      control: {
        type: 'text',
      },
      type: {
        required: true,
      },
    },
    icon: {
      control: {
        type: 'select',
        options: [undefined, faCoffee],
        default: undefined,
      },
      type: {
        summary:
          'Put icon component from @fortawesome/free-solid-svg-icons package',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Buttons',
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (props) => <Button {...props} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  onClick: () => {},
};

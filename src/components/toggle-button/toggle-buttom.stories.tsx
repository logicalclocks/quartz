import React from 'react';
import { Story, Meta } from '@storybook/react';
import ToggleButton, { ToggleButtonProps } from './index';

export default {
  title: 'Quartz/Buttons/Toggle',
  component: ToggleButton,
} as Meta;

const Template: Story<ToggleButtonProps> = (props) => (
  <ToggleButton {...props} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'partition key only',
};

Default.argTypes = {
  onChange: {
    type: {
      required: true,
      summary: 'Change callback function',
    },
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
    type: {
      required: true,
    },
  },
  checked: {
    type: {
      required: true,
    },
  },
};

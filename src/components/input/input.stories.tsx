// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Input, { InputProps } from '.';

export default {
  title: 'Quartz/Input',
  component: Input,
} as Meta;

const argTypes = {
  onChange: {
    type: {
      required: true,
      summary: 'Input change callback function',
    },
  },
  placeholder: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Input placeholder',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  variant: {
    control: {
      type: 'select',
      options: ['primary', 'white'],
    },
    type: {
      required: false,
      summary: 'Input variant',
    },
  },
  info: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Message text (validation error)',
    },
  },
  label: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
    },
  },
  labelAction: {
    type: {
      required: false,
      summary: 'Label action (React node)',
    },
  },
  width: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Width of the input group (px, %, em)',
    },
    defaultValue: { summary: '180px' },
  },
  intent: {
    control: {
      type: 'select',
      options: ['default', 'error'],
    },
    type: {
      required: false,
      summary: 'Input intent (error border)',
    },
  },
  icon: {
    control: {
      type: 'select',
      options: [undefined, 'search', 'coffee'],
    },
    type: {
      required: false,
      summary: 'Left icon',
    },
  },
};

const Template: Story<InputProps> = (props) => (
  <Input icon="coffee" {...props} />
);

export const Default = Template.bind({});

Default.argTypes = argTypes;

Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  onChange: action('Input change'),
};

Default.argTypes = argTypes;

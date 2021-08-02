// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Input, { InputProps } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from 'rebass';
import { Labeling } from '../../index';
import CodeInput from '.';


export default {
  title: 'Quartz/CodeInput',
  component: CodeInput,
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
    defaultValue: { summary: '500px' },
  },
  height: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
      summary: 'Required height of the input group (px, %, em)',
    },
    defaultValue: { summary: '300px' },
  },
  mode: {
    control: {
      type: 'select',
      options: ['javascript', 'yaml'],
    },
    type: {
      required: false,
      summary: 'Input type',
    },
    defaultValue: { summary: 'javascript' },
  },
};

const Template: Story<InputProps> = (props) => (
  <CodeInput {...props}/>
);

export const Default = Template.bind({});

Default.argTypes = argTypes;

Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  onChange: action('Input change'),
};

Default.argTypes = argTypes;

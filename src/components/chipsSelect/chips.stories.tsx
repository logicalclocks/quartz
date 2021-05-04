import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Box } from 'rebass';

import Chips, { ChipsProps } from './index';

export default {
  title: 'Quartz/ChipsSelect',
  component: Chips,
} as Meta;

const options = ['integer', 'string', 'boolean', 'float', 'bigInt'];

const Template: Story<ChipsProps> = (props) => {
  const [value, setValue] = useState<string[]>(['number']);
  const [customOptions] = useState(options);

  const handleChange = (data: string[]) => {
    action('onChange')(data);
    setValue(data);
  };

  return (
    <Box width="600px">
      <Chips
        {...props}
        value={value}
        options={customOptions}
        onChange={handleChange}
      />
    </Box>
  );
};

export const Default = Template.bind({});

Default.args = {
  info: '',
  label: 'Label',
  placeholder: 'placeholder',
  noDataMessage: 'no options',
  disabled: false,
  type: 'editable',
  variant: 'primary',
  intent: 'default',
  isMulti: true,
};

Default.argTypes = {
  info: {
    type: { required: false, summary: 'Array of strings' },
    control: { type: 'array' },
  },
  value: {
    type: { required: true, summary: 'Array of strings' },
    control: { type: 'array' },
  },
  options: {
    type: { required: true, summary: 'string' },
    control: { type: 'array' },
  },
  label: {
    type: { required: true, summary: 'string' },
    control: { type: 'array' },
  },
  width: {
    type: { required: false, summary: 'string' },
    control: { type: 'array' },
  },
  placeholder: {
    type: { required: true, summary: 'string' },
    control: { type: 'array' },
  },
  noDataMessage: {
    type: { required: false, summary: 'string' },
    control: { type: 'array' },
  },
  disabled: {
    control: { type: 'boolean' },
    type: { required: false },
  },
  isMulti: {
    control: { type: 'boolean' },
    type: { required: true },
  },
  type: {
    type: { required: false },
    control: { type: 'select', options: ['base', 'editable', 'searchable'] },
    defaultValue: { summary: 'editable' },
  },
  variant: {
    type: { required: false },
    control: { type: 'select', options: ['primary', 'white'] },
    defaultValue: { summary: 'primary' },
  },
  intent: {
    type: { required: false },
    control: { type: 'select', options: ['default', 'error'] },
    defaultValue: { summary: 'default' },
  },
  labelAction: {
    type: { required: false, summary: 'React Component' },
    control: {},
  },
  onChange: {
    type: { required: true, summary: 'Change callback function' },
    control: {},
  },
};

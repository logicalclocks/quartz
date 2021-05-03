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
  const [value, setValue] = useState<string[]>(['chips', 'select']);
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
  editable: true,
  searchable: true,
  variant: 'primary',
  intent: 'default',
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
  editable: {
    control: { type: 'boolean' },
    type: { required: false },
  },
  searchable: {
    control: { type: 'boolean' },
    type: { required: false },
  },
  variant: {
    type: { required: false },
    control: { type: 'select', options: ['primary', 'white'] },
    defaultValue: { summary: 'primary' },
  },
  intent: {
    type: { required: false },
    control: { type: 'select', options: ['default', 'error'] },
    defaultValue: { summary: 'primary' },
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

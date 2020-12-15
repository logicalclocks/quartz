// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Select, { SelectProps } from './index';

export default {
  title: 'Quartz/Select',
  component: Select,
} as Meta;

const options = ['name', 'creation date', 'size', '# of rows', '# of features'];

const Template: Story<SelectProps> = (props) => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (data: string[]) => {
    action('onCahnge')(data);

    setValue(data);
  };

  return <Select {...props} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});

Default.args = {
  placeholder: 'choice',
  width: '300px',
  listWidth: '300px',
  variant: 'primary',
  isMulti: false,
  options,
  noDataMessage: 'no labels',
  bottomActionText: 'Add another label',
  bottomActionHandler: () => {
    console.log('add');
  },
};

Default.argTypes = {
  value: {
    type: { required: true, summary: 'Array of strings' },
  },
  options: {
    type: { required: true, summary: 'Array of strings' },
    control: { type: 'array' },
  },
  placeholder: {
    type: { required: true },
    control: { type: 'text' },
  },
  noDataMessage: {
    type: { required: false },
    control: { type: 'text' },
  },
  onChange: {
    type: { required: true, summary: 'Change callback function' },
  },
  label: {
    type: { required: true },
    control: { type: 'text' },
  },
  isMulti: {
    type: { required: false },
    control: { type: 'boolean' },
    defaultValue: { summary: 'false' },
  },
  disabled: {
    type: { required: false },
    control: { type: 'boolean' },
  },
  width: {
    type: { required: false },
    control: { type: 'text' },
    defaultValue: { summary: 'auto' },
  },
  labelAction: {
    type: {
      required: false,
      summary: 'React Component',
    },
    control: {},
  },
  listWidth: {
    type: { required: false },
    control: { type: 'text' },
    defaultValue: { summary: 'max-content' },
  },
  variant: {
    type: { required: false },
    control: { type: 'select', options: ['primary', 'white'] },
    defaultValue: { summary: 'primary' },
  },
};

// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Box } from 'rebass';
import Select, { SelectProps } from './index';
import { Popup, RadioGroup, Value } from '../../index';
import Labeling from '../typography/labeling';

export default {
  title: 'Quartz/Select',
  component: Select,
} as Meta;

const options = ['name', 'creation date', 'size', '# of rows', '# of features'];

const Template: Story<SelectProps> = (props) => {
  const [value, setValue] = useState<string[]>([]);
  const [customOptions, setOptions] = useState(options);

  const [selected, setSelected] = useState('all');

  const handleChange = (data: string[]) => {
    action('onChange')(data);

    setValue(data);
  };

  const handleChangeFilter = (data: string) => {
    setSelected(data);

    if (data === 'all') {
      setOptions(options);
    } else {
      setOptions(options.slice(3, 5));
    }
  };

  return (
    <Popup isOpen>
      <Box width="300px" height="60px" m="20px">
        <Select
          {...props}
          value={value}
          maxListHeight="initial"
          options={customOptions}
          onChange={handleChange}
          customFilter={
            <RadioGroup
              ml="10px"
              value={selected}
              flexDirection="row"
              onChange={handleChangeFilter}
              onClick={(e) => e.stopPropagation()}
              options={['all', 'matching feature only']}
            />
          }
        />
      </Box>
    </Popup>
  );
};

export const Default = Template.bind({});

Default.args = {
  placeholder: 'placeholder',
  width: '100%',
  label: 'Label',
  listWidth: '100%',
  variant: 'primary',
  hasPlaceholder: false,
  appendToBody: false,
  isMulti: false,
  noDataMessage: 'no labels',
  hasSearch: true,
  bottomActionText: 'Add another label',
  bottomActionHandler: () => {
    action('on bottom action')();
  },
  additionalTexts: ['text1', 'text2', 'text3', 'text4', 'text5'],
  additionalComponents: [
    <Value>text</Value>,
    <Labeling bold gray>
      text gray
    </Labeling>,
    null,
    <Value>text</Value>,
    <Value>text</Value>,
  ],
  deletabled: false,
};

Default.argTypes = {
  value: {
    type: { required: true, summary: 'Array of strings' },
  },
  options: {
    type: { required: true, summary: 'Array of strings' },
    control: { type: 'array' },
  },
  searchPlaceholder: {
    type: { required: false },
    control: { type: 'text' },
  },
  hasSearch: {
    type: { required: false },
    control: { type: 'boolean' },
    defaultValue: { summary: 'Has search input' },
  },
  additionalComponents: {
    type: { required: false, summary: 'Array of components(right)' },
    control: { type: 'array' },
  },
  additionalTexts: {
    type: { required: false, summary: 'Array of text(after option)' },
    control: { type: 'array' },
  },
  customFilter: {
    type: { required: false, summary: 'Custom filter' },
    control: { type: 'React.ReactNode' },
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
  deletabled: {
    type: { required: false },
    control: { type: 'boolean' },
    defaultValue: { summary: 'deletabled (need to select a value)' },
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
  intent: {
    control: {
      type: 'select',
      options: ['default', 'error'],
    },
    type: {
      required: false,
      summary: 'Select intent (error border)',
    },
  },
  disabled: {
    type: { required: false },
    control: { type: 'boolean' },
  },
  appendToBody: {
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

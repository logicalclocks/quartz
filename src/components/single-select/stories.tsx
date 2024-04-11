import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Box } from 'rebass';
import { SingleSelect, SingleSelectOption } from './index';
import { Value } from '../../index';
import Labeling from '../typography/labeling';

const meta: Meta<typeof SingleSelect> = {
  title: 'SingleSelect',
  component: SingleSelect,
  argTypes: {
    value: {
      description: 'Array of strings',
    },
    editable: {
      description: 'Allow to add new values',
      control: { type: 'boolean' },
    },
    options: {
      description: 'Array of strings',
      control: { type: 'array' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    noDataMessage: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    labelPosition: {
      control: {
        type: 'select',
        options: ['side', 'inline', 'outside'],
      },
    },
    isClearable: {
      control: { type: 'boolean' },
      defaultValue: { description: 'deletabled (need to select a value)' },
    },
    intent: {
      control: {
        type: 'select',
        options: ['default', 'error'],
      },
      description: 'Select intent (error border)',
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    width: {
      control: { type: 'text' },
      defaultValue: { description: 'auto' },
    },
    labelAction: {
      description: 'React Component',
      control: {},
    },
    listWidth: {
      control: { type: 'text' },
      defaultValue: { description: 'max-content' },
    },
    variant: {
      control: { type: 'select', options: ['primary', 'white'] },
      defaultValue: { description: 'primary' },
    },
  },
};
export default meta;

const customOptions = [
  {
    value: '1',
    label: 'One',
    additionalText: 'add_one',
    additionalComponent: <Value>text</Value>,
    isDisabled: true,
  },
  {
    value: '2',
    label: 'Two',
    additionalComponent: (
      <Labeling bold gray>
        text
      </Labeling>
    ),
  },
  { value: '3', label: 'Three', additionalText: 'add_three' },
  {
    value: '4',
    label: 'Four',
    additionalText: 'add_four',
    additionalComponent: <Value>text</Value>,
  },
  {
    value: '5',
    label: 'fiveeeeeeeeeeeeeeeeee',
    additionalText: 'add_five',
    isDisabled: true,
  },
];

export const Default: StoryObj<typeof SingleSelect> = {
  args: {
    placeholder: 'placeholder',
    editable: false,
    label: 'Label',
    variant: 'primary',
    labelPosition: 'outside',
    noDataMessage: 'no labels',
    isClearable: false,
    isDisabled: false,
  },
  render: (props) => {
    const [value, setValue] = useState<SingleSelectOption['value']>();

    const handleChange = (data: SingleSelectOption['value']) => {
      setValue(data);
    };
    return (
      <Box width="600px" height="300px">
        <SingleSelect
          {...props}
          value={value}
          options={customOptions}
          onChange={handleChange}
          width="100%"
        />
      </Box>
    );
  },
};

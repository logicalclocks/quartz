import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box } from '../../index';

import EditableSelect from './index';

const meta: Meta<typeof EditableSelect> = {
  title: 'EditableSelect',
  component: EditableSelect,
  argTypes: {
    value: {
      description: 'Array of strings',
      control: { type: 'array' },
    },
    options: {
      description: 'array of strings',
      control: { type: 'array' },
    },
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      description: 'string',
      control: { type: 'text' },
    },
    noDataMessage: {
      description: 'string',
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    isMulti: {
      control: { type: 'boolean' },
    },
    labelAction: {
      description: 'React Component',
    },
  },
};
export default meta;

const options = ['integer', 'string', 'boolean', 'float', 'bigInt'];

export const Default: StoryObj<typeof EditableSelect> = {
  args: {
    label: 'Label',
    labelAction: '(optional)',
    placeholder: 'placeholder',
    noDataMessage: 'no options',
    disabled: false,
    isMulti: true,
    value: ['boolean'],
    options,
  },
  render: ({ value: initialValue, options, ...props }) => {
    const [value, setValue] = useState<string[]>(initialValue);

    const handleChange = (data: string[]) => {
      action('onChange')(data);
      setValue(data);
    };

    return (
      <Box width="600px">
        <EditableSelect
          {...props}
          value={value}
          options={options}
          onChange={handleChange}
        />
      </Box>
    );
  },
};

import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Box } from 'rebass';
import Select from './index';
import { RadioGroup, Value } from '../../index';
import Labeling from '../typography/labeling';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  argTypes: {
    value: {
      description: 'Array of strings',
    },
    options: {
      description: 'Array of strings',
      control: { type: 'array' },
    },
    searchPlaceholder: {
      control: { type: 'text' },
    },
    hasSearch: {
      control: { type: 'boolean' },
      defaultValue: { description: 'Has search input' },
    },
    additionalComponents: {
      description: 'Array of components(right)',
      control: { type: 'array' },
    },
    additionalTexts: {
      description: 'Array of text(after option)',
      control: { type: 'array' },
    },
    customFilter: {
      description: 'Custom filter',
      control: { type: 'React.ReactNode' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    noDataMessage: {
      control: { type: 'text' },
    },
    onChange: {
      description: 'Change callback function',
    },
    label: {
      control: { type: 'text' },
    },
    isMulti: {
      control: { type: 'boolean' },
      defaultValue: { description: 'false' },
    },
    deletabled: {
      control: { type: 'boolean' },
      defaultValue: { description: 'deletabled (need to select a value)' },
    },
    info: {
      control: {
        type: 'text',
      },
      description: 'Message text (validation error)',
    },
    intent: {
      control: {
        type: 'select',
        options: ['default', 'error'],
      },
      description: 'Select intent (error border)',
    },
    disabled: {
      control: { type: 'boolean' },
    },
    appendToBody: {
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

const options = ['name', 'creation date', 'size', '# of rows', '# of features'];

export const Default: StoryObj<typeof Select> = {
  args: {
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
  },
  render: (props) => {
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
      <Box width="600px" height="600px">
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
    );
  },
};

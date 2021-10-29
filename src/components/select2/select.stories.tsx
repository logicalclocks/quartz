// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Box } from 'rebass';
import Select, { SelectProps } from './index';
import { Button, Popup, RadioGroup, Value } from '../../index';
import Labeling from '../typography/labeling';
import { SelectOpt } from './types';

export default {
  title: 'Quartz/Select2',
  component: Select,
} as Meta;

const options = [
  {
    key: 1,
    label: 'One',
    additionalText: 'add_one',
    additionalComponent: <Value>text</Value>,
  },
  {
    key: 2,
    label: 'Two',
    additionalComponent: (
      <Labeling bold gray>
        text
      </Labeling>
    ),
  },
  { key: 3, label: 'Three', additionalText: 'add_three' },
  {
    key: 4,
    label: 'Four',
    additionalText: 'add_four',
    additionalComponent: <Value>text</Value>,
  },
] as SelectOpt[];

const Template: Story<SelectProps> = (props) => {
  const [val, setValue] = useState<(string | number)[]>([]);
  const [customOptions, setOptions] = useState(options);

  const [selected, setSelected] = useState('all');

  const handleChange = (data: SelectOpt | SelectOpt[]) => {
    const asArray = Array.isArray(data) ? data : [data];
    action('onChange')(data);
    setValue(asArray.map((x: SelectOpt) => x.key));
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
      <Box height="60px" m="20px">
        <Select
          {...props}
          value={val}
          maxListHeight="initial"
          options={customOptions}
          onChange={handleChange}
          customFilter={
            // eslint-disable-next-line react/jsx-wrap-multilines
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
  value: '',
  placeholder: 'placeholder',
  label: 'Label',
  format: 'fit',
  color: 'primary',
  labelMode: 'default',
  appendToBody: true,
  isMulti: false,
  noDataMessage: 'no labels',
  hasSearch: true,
  bottomActionText: 'Add another label',
  bottomActionHandler: () => {
    action('on bottom action')();
  },
  info: 'Here goes some extra info',
  deletabled: false,
  labelAction: (
    <Button p="0 0 0 10px" intent="inline">
      reference
    </Button>
  ),
};

Default.argTypes = {
  value: {
    type: { required: true, summary: 'Current selection. Matches option.key' },
    control: { type: 'array' },
  },
  options: {
    type: { required: true, summary: 'Array of strings' },
    control: { type: 'array' },
  },
  searchPlaceholder: {
    type: {
      required: false,
      summary: 'Placeholder for the search bar, if applicable',
    },
    control: { type: 'text' },
  },
  info: {
    type: {
      required: false,
      summary: 'If present, shows an info icon with the text as tooltip',
    },
    control: { type: 'text' },
  },
  bottomActionText: {
    type: {
      required: false,
      summary:
        'text to be placed in the action button at the end of the dropdown, if applicable',
    },
    control: { type: 'text' },
  },
  bottomActionHandler: {
    type: {
      required: false,
      summary:
        'callback action for the button at the end of the dropdown, if applicable',
    },
    control: { type: 'function' },
  },
  hasSearch: {
    type: { required: false, summary: 'Adds a search bar inside the dropdown' },
    control: { type: 'boolean' },
  },
  customFilter: {
    type: {
      required: false,
      summary: 'Custom filter to be placed inside the dropdown',
    },
    control: { type: 'React.ReactNode' },
  },
  placeholder: {
    type: {
      required: true,
      summary: 'Text to be displayed when no selection is being made',
    },
    control: { type: 'text' },
  },
  noDataMessage: {
    type: {
      required: false,
      summary: 'Text to be displayed when there is no options available',
    },
    control: { type: 'text' },
  },
  onChange: {
    type: { required: true, summary: 'Change callback function' },
  },
  label: {
    type: { required: true, summary: 'Label of the component' },
    control: { type: 'text' },
  },
  isMulti: {
    type: { required: false, summary: 'Allow multiple selection' },
    control: { type: 'boolean' },
  },
  deletabled: {
    type: { required: false, summary: 'Allow current selection to be removed' },
    control: { type: 'boolean' },
  },
  message: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Message text (validation error)',
    },
  },
  state: {
    control: {
      type: 'select',
      options: ['default', 'error'],
    },
    type: {
      required: false,
      summary: 'Select state (error border)',
    },
  },
  format: {
    control: {
      type: 'select',
      options: ['fit', 'fill'],
    },
    type: {
      required: false,
      summary: 'Width behaviour of select and dropdown',
    },
  },
  labelMode: {
    control: {
      type: 'select',
      options: ['default', 'inline', 'none'],
    },
    type: {
      required: false,
      summary: 'Placement of the label',
    },
  },
  disabled: {
    type: { required: false, summary: 'Disables the component' },
    control: { type: 'boolean' },
  },
  appendToBody: {
    type: {
      required: false,
      summary:
        'Appends the dropdown directly to the body. Helps when inside popups',
    },
    control: { type: 'boolean' },
  },
  labelAction: {
    type: {
      required: false,
      summary: 'React Component to be placed next to the label',
    },
    control: {},
  },
  color: {
    type: { required: false, summary: 'color of the select' },
    control: { type: 'select', options: ['primary', 'white'] },
    defaultValue: { summary: 'primary' },
  },
};

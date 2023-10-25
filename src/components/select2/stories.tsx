import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Box } from 'rebass';
import Select from './index';
import { Button, RadioGroup, Value } from '../../index';
import Labeling from '../typography/labeling';
import { SelectOpt } from './types';

const meta: Meta<typeof Select> = {
  title: 'Select2',
  component: Select,
  argTypes: {
    value: {
      description: 'Current selection. Matches option.key',
      control: { type: 'array' },
    },
    options: {
      description: 'Array of strings',
      control: { type: 'array' },
    },
    searchPlaceholder: {
      description: 'Placeholder for the search bar, if applicable',
      control: { type: 'text' },
    },
    info: {
      description: 'If present, shows an info icon with the text as tooltip',
      control: { type: 'text' },
    },
    bottomActionText: {
      description:
        'text to be placed in the action button at the end of the dropdown, if applicable',
      control: { type: 'text' },
    },
    bottomActionHandler: {
      description:
        'callback action for the button at the end of the dropdown, if applicable',
      control: { type: 'function' },
    },
    hasSearch: {
      description: 'Adds a search bar inside the dropdown',
      control: { type: 'boolean' },
    },
    customFilter: {
      description: 'Custom filter to be placed inside the dropdown',
      control: { type: 'React.ReactNode' },
    },
    placeholder: {
      description: 'Text to be displayed when no selection is being made',
      control: { type: 'text' },
    },
    noDataMessage: {
      description: 'Text to be displayed when there is no options available',
      control: { type: 'text' },
    },
    onChange: {
      description: 'Change callback function',
    },
    label: {
      description: 'Label of the component',
      control: { type: 'text' },
    },
    isMulti: {
      description: 'Allow multiple selection',
      control: { type: 'boolean' },
    },
    deletabled: {
      description: 'Allow current selection to be removed',
      control: { type: 'boolean' },
    },
    message: {
      control: {
        type: 'text',
      },
      description: 'Message text (validation error)',
    },
    state: {
      control: {
        type: 'select',
        options: ['default', 'error'],
      },
      description: 'Select state (error border)',
    },
    format: {
      control: {
        type: 'select',
        options: ['fit', 'fill'],
      },
      description: 'Width behaviour of select and dropdown',
    },
    labelMode: {
      control: {
        type: 'select',
        options: ['default', 'inline', 'none'],
      },
      description: 'Placement of the label',
    },
    disabled: {
      description: 'Disables the component',
      control: { type: 'boolean' },
    },
    appendToBody: {
      description:
        'Appends the dropdown directly to the body. Helps when inside popups',
      control: { type: 'boolean' },
    },
    labelAction: {
      description: 'React Component to be placed next to the label',
      control: {},
    },
    color: {
      description: 'color of the select',
      control: { type: 'select', options: ['primary', 'white'] },
      defaultValue: { description: 'primary' },
    },
  },
};
export default meta;

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
  {
    key: 3,
    label: 'Three_Thats_loooong',
    additionalText: 'add_three_thats_veryyyyy_loooooong',
  },
  {
    key: 4,
    label: 'Four',
    additionalText: 'add_four_thats_veryyyyy_loooooong',
    additionalComponent: <Value>text</Value>,
  },
] as SelectOpt[];

export const Default: StoryObj<typeof Select> = {
  args: {
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
  },
  render: (props) => {
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
      <Box height="60px" m="20px">
        <Select
          {...props}
          width="200px"
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
    );
  },
};

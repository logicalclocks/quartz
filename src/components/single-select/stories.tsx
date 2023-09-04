import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Box } from 'rebass';
import { SingleSelect, SingleSelectOption } from './index';
import { RadioGroup, Value } from '../../index';
import Labeling from '../typography/labeling';

const meta: Meta<typeof SingleSelect> = {
  title: 'SingleSelect',
  component: SingleSelect,
  argTypes: {
    value: {
      description: 'Array of strings',
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
    labelPlacement: {
      control: {
        type: 'select',
        options: ['default', 'inverted'],
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
    disabled: {
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

const options = [
  {
    value: 1,
    label: 'One',
    additionalText: 'add_one',
    additionalComponent: <Value>text</Value>,
  },
  {
    value: 2,
    label: 'Two',
    additionalComponent: (
      <Labeling bold gray>
        text
      </Labeling>
    ),
  },
  { value: 3, label: 'Three', additionalText: 'add_three' },
  {
    value: 4,
    label: 'Four',
    additionalText: 'add_four',
    additionalComponent: <Value>text</Value>,
  },
];

export const Default: StoryObj<typeof SingleSelect> = {
  args: {
    placeholder: 'placeholder',
    // width: '100px',
    label: 'Label',
    variant: 'primary',
    labelPosition: 'outside',
    noDataMessage: 'no labels',
    isClearable: false,
  },
  render: (props) => {
    const [value, setValue] = useState<SingleSelectOption['value']>();
    const [customOptions, setOptions] = useState(options);

    const [selected, setSelected] = useState('all');

    const handleChange = (data: SingleSelectOption['value']) => {
      // action('onChange')(data);

      setValue(data);
    };

    const handleChangeFilter = (data: string) => {
      // setSelected(data);
      console.log(data);

      // if (data === 'all') {
      //   setOptions(options);
      // } else {
      //   setOptions(options.slice(3, 5));
      // }
    };

    return (
      <Box width="600px" height="300px">
        <SingleSelect
          {...props}
          value={value}
          options={customOptions}
          onChange={handleChange}
          customFilter={
            <RadioGroup
              ml="10px"
              value={selected}
              flexDirection="row"
              onChange={handleChangeFilter}
              onMouseDown={(e) => {
                e.stopPropagation();
                e.stopPropagation();
                console.log(e.isPropagationStopped());
              }}
              options={['all', 'matching feature only']}
            />
          }
          // customFilter={
          //   <Button onClick={console.log}>Hey</Button>
          // }
        />
      </Box>
    );
  },
};

import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import RadioGroup from './radio-group';

const meta: Meta<typeof RadioGroup> = {
  title: 'RadioGroup',
  component: RadioGroup,
  argTypes: {
    onChange: {
      description: 'Change callback function',
    },
    value: {
      control: {
        type: 'text',
      },
    },
    options: {
      description: 'Array of strings or Array of { key, text }',
    },
    flexDirection: {
      control: {
        type: 'select',
        options: ['row', 'column', null],
      },
      description: 'Items display',
    },
  },
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const GroupTemplate: Story = {
  render: (props) => {
    const [value, setValue] = useState<string | null>(null);

    return (
      <RadioGroup
        {...props}
        value={value}
        onChange={setValue}
        mr="auto"
        options={[
          {
            key: 'nullable',
            text: 'nullable',
            addtionalText: 'text1',
          },
          {
            key: 'required',
            text: 'REQUIRED',
            addtionalText: 'text2',
            disabled: true,
            tooltip: 'some tooltip',
          },
          { key: 'email', text: 'email' },
          { key: 'url', text: 'url' },
        ]}
      />
    );
  },
};

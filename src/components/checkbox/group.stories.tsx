import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CheckboxGroup from './checkbox-group';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Forms/Checkboxes/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    onChange: {},
    disabledUnselect: {
      control: {
        type: 'boolean',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    value: {},
  },
};
export default meta;

export const GroupTemplate: StoryObj<typeof CheckboxGroup> = {
  args: {
    label: 'Validation',
  },
  render: (props) => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <CheckboxGroup
        {...props}
        value={value}
        onChange={setValue}
        options={['nullable', 'required', 'email', 'url']}
      />
    );
  },
};

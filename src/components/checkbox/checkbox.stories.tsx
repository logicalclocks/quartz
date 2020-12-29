import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CheckboxGroup, { CheckboxGroupProps } from './checkbox-group';
import Checkbox, { CheckboxProps } from './index';

export default {
  title: 'Quartz/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (props) => <Checkbox {...props} />;
const GroupTemplate: Story<CheckboxGroupProps> = (props) => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <CheckboxGroup
      {...props}
      value={value}
      onChange={setValue}
      options={['nullable', 'required', 'email', 'url']}
    />
  );
};

export const Default = Template.bind({});
export const Group = GroupTemplate.bind({});

Group.args = {
  label: 'Validation',
};

Group.argTypes = {
  onChange: {
    type: {
      required: true,
      summary: 'Change callback function',
    },
  },
  disabledUnselect: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
      summary: 'Disable unselect choices',
    },
  },
  label: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
    },
  },
  value: {
    type: {
      summary: 'Array of strings',
      required: true,
    },
  },
  options: {
    type: {
      summary: 'Array of strings',
      required: true,
    },
  },
};

Default.args = {
  label: 'nullable',
};

Default.argTypes = {
  onChange: {
    type: {
      required: true,
      summary: 'Change callback function',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  label: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
    },
  },
  checked: {
    control: {
      type: 'boolean',
    },
    type: {
      required: true,
    },
  },
};

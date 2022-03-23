import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import RadioGroup, { RadioGroupProps } from './radio-group';
import Radio, { RadioProps } from './index';

export default {
  title: 'Quartz/Radio',
  component: Radio,
} as Meta;

const Template: Story<RadioProps> = (props) => <Radio {...props} />;
const GroupTemplate: Story<RadioGroupProps> = (props) => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <RadioGroup
      {...props}
      value={value}
      onChange={setValue}
      mr="auto"
      options={[
        { key: 'nullable', text: 'nullable', additionalText: 'text1' },
        { key: 'required', text: 'REQUIRED', additionalText: 'text2' },
        { key: 'email', text: 'email' },
        { key: 'url', text: 'url' },
      ]}
    />
  );
};

export const Default = Template.bind({});
export const Group = GroupTemplate.bind({});

Group.args = {
  // label: 'Validation',
};

Group.argTypes = {
  onChange: {
    type: {
      required: true,
      summary: 'Change callback function',
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
    control: {
      type: 'text',
    },
    type: {
      required: true,
    },
  },
  options: {
    type: {
      summary: 'Array of strings or Array of { key, text }',
      required: true,
    },
  },
  additionalTexts: {
    type: {
      summary: 'Array of strings',
      required: false,
    },
  },
  flexDirection: {
    control: {
      type: 'select',
      options: ['row', 'column', null],
    },
    type: {
      summary: 'Items display',
      required: false,
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
  additionalTexts: {
    type: {
      summary: 'Array of strings',
      required: false,
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

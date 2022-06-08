// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Input, { InputProps } from '.';
import { Box } from 'rebass';
import { GetIcon, IconName } from '../icon';

export default {
  title: 'Quartz/Input',
  component: Input,
} as Meta;

const rightIconMapping = {
  none: null,
  example: (
    <Box sx={{ position: 'absolute', right: '8px', top: '8px' }}>
      <GetIcon size="sm" icon={IconName.eye} />
    </Box>
  ),
};

const argTypes = {
  onChange: {
    type: {
      required: true,
      summary: 'Input change callback function',
    },
  },
  placeholder: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Input placeholder',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  variant: {
    control: {
      type: 'select',
      options: ['primary', 'white'],
    },
    type: {
      required: false,
      summary: 'Input variant',
    },
  },
  info: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Message text (validation error)',
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
  labelAction: {
    type: {
      required: false,
      summary: 'Label action (React node)',
    },
  },
  width: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Width of the input group (px, %, em)',
    },
    defaultValue: { summary: '180px' },
  },
  intent: {
    control: {
      type: 'select',
      options: ['default', 'error'],
    },
    type: {
      required: false,
      summary: 'Input intent (error border)',
    },
  },
  type: {
    control: {
      type: 'select',
      options: ['textarea', 'text', 'number'],
    },
    type: {
      required: false,
      summary: 'Input type',
    },
  },
  rows: {
    control: {
      type: 'number',
    },
    type: {
      required: false,
      summary: 'Textarea rows count',
    },
  },
  icon: {
    options: Object.values(IconName).filter((x) => typeof x === 'string'),
    mapping: IconName,
    control: {
      type: 'select',
    },
    type: {
      required: false,
      summary: 'Left icon. Receives IconName',
    },
  },
  rightIcon: {
    options: ['none', 'example'],
    mapping: rightIconMapping,
    control: {
      type: 'select',
    },
    type: {
      required: false,
      summary: `
        Right icon. 
        Receives JSX element. Wants an absolute position, as the parent is relative.
        Should not really be called rightIcon(or exist), but it is a long story :)`,
    },
  },
};

const Template: Story<InputProps> = (props) => {
  return <Input icon={IconName.glass} iconPaddingRight="40px" {...props} />;
};

export const Default = Template.bind({});

Default.argTypes = argTypes;

Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  onChange: action('Input change'),
  tooltipInfo: 'tooltip info',
};

Default.argTypes = argTypes;

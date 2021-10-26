// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Input, { InputProps } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from 'rebass';
import { IconButton, Labeling } from '../../index';
import { IconName } from '../icon/list';

export default {
  title: 'Quartz/Input',
  component: Input,
} as Meta;

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
    control: {
      type: 'select',
      options: [undefined, 'search', 'coffee'],
    },
    type: {
      required: false,
      summary: 'Left icon',
    },
  },
  rightIcon: {
    control: {
      type: 'select',
      options: [undefined, 'search', 'coffee'],
    },
    type: {
      required: false,
      summary: 'Right icon',
    },
  },
};

const Template: Story<InputProps> = (props) => (
  <Input
    icon="coffee"
    iconPaddingRight="40px"
    rightIcon={(
      <Box
        sx={{
          right: '10px',
          position: 'absolute',
          top: '16px',
          transform: 'translateY(-50%)',
          path: {
            fill: 'gray',
          },
          fontSize: '14px',
        }}
      >
        <FontAwesomeIcon icon="apple-alt" />
        <IconButton icon={IconName.plus} />
        <Labeling display="initial" gray>
          P
        </Labeling>
      </Box>
    )}
    {...props}
  />
);

export const Default = Template.bind({});

Default.argTypes = argTypes;

Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  onChange: action('Input change'),
};

Default.argTypes = argTypes;

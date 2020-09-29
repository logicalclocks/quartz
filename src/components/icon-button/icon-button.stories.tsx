import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEye as fasEye } from '@fortawesome/free-solid-svg-icons';

import IconButton, { IconButtonProps } from '.';

export default {
  title: 'Quartz/Buttons',
  component: IconButton,
} as Meta;

const Template: Story<IconButtonProps> = (props) => <IconButton {...props} />;

export const IconButtons = Template.bind({});

IconButtons.args = {
  icon: fasEye,
  intent: 'primary',
  tooltip: 'Tooltip',
  onClick: action('onClick'),
};

IconButtons.argTypes = {
  intent: {
    control: {
      type: 'select',
      options: ['primary', 'ghost', 'ghost-white'],
      default: 'primary',
    },
  },
  tooltip: {
    control: {
      type: 'text',
      default: 'Tooltip',
    },
    type: {
      required: true,
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  onClick: {
    table: {
      type: {
        summary: 'On click callback function',
      },
    },
    type: {
      required: true,
    },
  },
  icon: {
    control: {
      disable: true,
    },
    type: {
      required: true,
      summary:
        'Icon name, icon SVG, or array like ["far", "eye"] ["fas", "eye"]',
    },
  },
  iconOnHover: {
    control: {
      type: 'select',
      options: ['coffee', ['far', 'eye'], faEye],
      default: undefined,
    },
    type: {
      summary:
        'Icon name, icon SVG, or array like ["far", "eye"] ["fas", "eye"]',
    },
  },
};

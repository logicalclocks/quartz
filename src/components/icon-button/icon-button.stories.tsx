import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { IconButton, IconButtonProps } from '.';
import { IconName } from '../icon/list';

export default {
  title: 'Quartz/Buttons',
  component: IconButton,
} as Meta;

const Template: Story<IconButtonProps> = (props) => <IconButton {...props} />;

export const IconButtons = Template.bind({});

IconButtons.args = {
  icon: IconName.more,
  intent: 'primary',
  tooltip: 'Tooltip',
  onClick: action('onClick'),
  onClickIcon: action('onClickIcon'),
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
      required: false,
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
    control: { type: 'select' },
    options: ['more', 'card', 'birth', 'lock'],
    mapping: {
      download: IconName.more,
      card: IconName.card,
      birth: IconName.birth,
      lock: IconName.lock,
    },
  },
};

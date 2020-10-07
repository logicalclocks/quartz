// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Box } from 'rebass';
import { Story, Meta } from '@storybook/react/types-6-0';

import Dropdown, { DropdownProps } from './index';

export default {
  title: 'Quartz/Dropdown',
  component: Dropdown,
} as Meta;

export const Default: Story<DropdownProps> = (props) => (
  <Box width="300px">
    <Dropdown {...props} onClickOutside={action('outside')} />
  </Box>
);

Default.args = {
  items: [
    {
      value: 'project_1',
      metadata: {},
      onClick: action('onClick'),
    },
    {
      value: 'project_2',
      metadata: {},
      hasDivider: true,
      onClick: action('onClick'),
    },
    {
      value: 'Create New Project',
      icon: 'plus',
      metadata: {},
      onClick: action('onClick'),
    },
  ],
};

Default.argTypes = {
  items: {
    type: {
      required: true,
      summary: 'Array of Items',
    },
  },
  isOpen: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
    },
    defaultValue: {
      summary: 'left',
    },
  },
  onClickOutside: {
    type: {
      required: false,
      summary: 'Fires on clicking outside the dropdown',
    },
  },
};

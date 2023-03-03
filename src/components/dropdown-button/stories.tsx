import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box } from 'rebass';
import { action } from '@storybook/addon-actions';

import { DropdownButton, Props } from './DropdownButton';
import { IconName } from '../icon';
import { IconButton } from '../icon-button';

export default {
  title: 'Quartz/DropdownButton',
  component: DropdownButton,
  args: {
    renderButton: ({ onClick }: any) => (
      <IconButton icon={IconName.more} onClick={onClick} />
    ),
    items: [
      {
        value: 'project_1',
        metadata: {},
        onClick: action('onClick'),
        isLoading: true,
        disabled: true,
      },
      {
        value: 'project_2',
        metadata: {},
        hasDivider: true,
        onClick: action('onClick'),
      },
      {
        value: 'Create New Project',
        icon: IconName.plus,
        metadata: {},
        onClick: action('onClick'),
        isLoading: true,
      },
    ],
  },
} as Meta;

// Default
const Template: Story<Props> = (props) => (
  <Box width="700px" height="115px">
    <DropdownButton {...props} />
  </Box>
);

export const Default = Template.bind({});

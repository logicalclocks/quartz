import React from 'react';
import { Box } from 'rebass';
import { StoryObj, Meta } from '@storybook/react';
import { ListItem } from '../../..';

const meta: Meta<typeof ListItem> = {
  title: 'ListItem',
  component: ListItem,

  argTypes: {
    children: {
      description: 'React Node',
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'active'],
      },
      description: 'List item variants',
    },
    hasDivider: {
      control: {
        type: 'boolean',
      },
      description: 'Enable divider flag',
    },
  },
};
export default meta;

export const Item: StoryObj<typeof ListItem> = {
  args: {
    children: 'name',
  },
  render: (props) => (
    <Box width="300px">
      <ListItem {...props} />
    </Box>
  ),
};

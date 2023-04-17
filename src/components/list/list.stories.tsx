import React from 'react';
import { Box } from 'rebass';
import { Story, Meta } from '@storybook/react';

import ListItem, { ListItemProps } from './item';
import List, { ListProps } from './container';

export default {
  title: 'Quartz/List',
  component: List,
} as Meta;

export const Container: Story<ListProps> = (props) => (
  <Box width="300px">
    <List {...props} />
  </Box>
);

Container.args = {
  children: (
    <>
      <ListItem hasDivider>name</ListItem>
      <ListItem>creation date</ListItem>
      <ListItem>size</ListItem>
      <ListItem variant="active"># of rows</ListItem>
      <ListItem># of features</ListItem>
    </>
  ),
};

export const Item: Story<ListItemProps> = (props) => (
  <Box width="300px">
    <ListItem {...props} />
  </Box>
);

Item.args = {
  children: 'name',
};

Item.argTypes = {
  children: {
    type: {
      required: true,
      summary: 'React Node',
    },
  },
  variant: {
    control: {
      type: 'select',
      options: ['primary', 'active'],
    },
    type: {
      required: false,
      summary: 'List item variants',
    },
  },
  hasDivider: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
      summary: 'Enable divider flag',
    },
  },
};

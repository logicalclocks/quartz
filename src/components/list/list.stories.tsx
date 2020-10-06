import React from 'react';
import { Box } from 'rebass';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ListItemProps } from './item';
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
      <List.Item>name</List.Item>
      <List.Item>creation date</List.Item>
      <List.Item>size</List.Item>
      <List.Item variant="withDivider"># of rows</List.Item>
      <List.Item># of features</List.Item>
    </>
  ),
};

export const Item: Story<ListItemProps> = (props) => (
  <Box width="300px">
    <List.Item {...props} />
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
      options: ['primary', 'withDivider'],
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

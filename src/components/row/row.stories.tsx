import React from 'react';
import { Box } from 'rebass';
import { Story, Meta } from '@storybook/react/types-6-0';
import Row, { RowProps } from './container';
import RowGroup, { RowGroupProps } from './group';
import RowItem, { RowItemProps } from './item';
import Avatar from '../avatar';
import Value from '../typography/value';
import { Mode } from './container/types';
import { TableItemPosition } from './item/types';

export default {
  title: 'Quartz/Row',
  component: Row,
} as Meta;

export const Container: Story<RowProps> = (props) => (
  <Box width="700px">
    <Row {...props} />
  </Box>
);

export const Group: Story<RowGroupProps> = (props) => (
  <Box
    as="table"
    width="700px"
    sx={{ tableLayout: 'auto', borderCollapse: 'collapse', width: '100%' }}
  >
    <Box as="tbody">
      <RowGroup {...props} />
    </Box>
  </Box>
);

export const Item: Story<RowItemProps> = (props) => (
  <Box as="table" width="700px">
    <Box as="tbody">
      <Box as="tr">
        <RowItem {...props} />
      </Box>
    </Box>
  </Box>
);

Container.args = {
  mode: Mode.full,
  middleColumn: 2,
  groupComponents: [
    [Avatar, Avatar, Value, Value, Value],
    [Avatar, Avatar, Value, Value, Value],
  ],
  groupProps: [
    [
      { borderColor: 'green' },
      { borderColor: 'yellow' },
      { children: 'Text1', color: 'white', bg: 'primary' },
      { children: 'Text2', color: 'secondary', bg: 'primary' },
      { children: 'Text3', color: 'secondary', bg: 'primary' },
    ],
    [
      { borderColor: 'red' },
      { borderColor: 'yellow' },
      { children: 'Text4', color: 'secondary' },
      { children: 'Text5', color: 'secondary' },
      { children: 'Text6', color: 'secondary' },
    ],
  ],
};

Container.argTypes = {
  mode: {
    control: {
      type: 'select',
      options: [Mode.full, Mode.tiny],
    },
    type: {
      summary: 'Display mode',
    },
    defaultValue: { summary: Mode.full },
  },
  middleColumn: {
    control: {
      type: 'number',
    },
    type: {
      required: true,
    },
  },
  groupComponents: {
    control: {
      type: 'object',
    },
    type: {
      required: true,
      summary: 'Array of components for each group',
    },
  },
  groupProps: {
    control: {
      type: 'object',
    },
    type: {
      required: true,
      summary: 'Corresponding props for each component in the group',
    },
  },
};

Group.args = {
  mode: Mode.full,
  components: [Avatar, Avatar, Value, Value, Value],
  componentsProps: [
    { borderColor: 'green' },
    { borderColor: 'yellow' },
    { children: 'Text1', color: 'primary' },
    { children: 'Text2', color: 'secondary' },
    { children: 'Text3', color: 'secondary' },
  ],
  middleColumn: 2,
};

Group.argTypes = {
  mode: {
    control: {
      type: 'select',
      options: [Mode.full, Mode.tiny],
    },
    type: {
      summary: 'Display mode',
    },
    defaultValue: { summary: Mode.full },
  },
  components: {
    control: {
      type: 'object',
    },
    type: {
      required: true,
      summary: 'Array of components',
    },
  },
  componentsProps: {
    control: {
      type: 'object',
    },
    type: {
      required: true,
      summary: 'Corresponding props for each component in array',
    },
  },
  middleColumn: {
    control: {
      type: 'number',
    },
    type: {
      required: true,
    },
  },
};

Item.args = {
  mode: Mode.full,
  component: Avatar,
  componentProps: { borderColor: 'green' },
  position: TableItemPosition.right,
};

Item.argTypes = {
  mode: {
    control: {
      type: 'select',
      options: [Mode.full, Mode.tiny],
    },
    type: {
      summary: 'Display mode',
    },
    defaultValue: { summary: Mode.full },
  },
  component: {
    control: {
      type: 'object',
    },
    type: {
      required: true,
    },
  },
  componentProps: {
    control: {
      type: 'object',
    },
    type: {
      required: true,
    },
  },
  position: {
    control: {
      type: 'select',
      options: [TableItemPosition.left, TableItemPosition.right],
    },
    type: {
      required: true,
      summary: 'Text align',
    },
  },
};

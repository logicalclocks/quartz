import React from 'react';
import { Box } from 'rebass';
import { Story, Meta } from '@storybook/react/types-6-0';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import Row, { RowProps } from './container';
import RowGroup, { RowGroupProps } from './group';
import RowItem, { RowItemProps } from './item';
import User from '../user';
import Button from '../button';
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
  legend: ['some', 'some', 'some', 'some', 'some'],
  mode: Mode.full,
  middleColumn: 2,
  groupComponents: [
    [User, Button, Value, Value, Value],
    [User, Button, Value, Value, Value],
  ],
  groupProps: [
    [
      { name: 'Name' },
      {
        children: 'Button',
        width: '100%',
        onClick: action('onClick'),
      },
      { children: 'Text1', color: 'black' },
      { children: 'Text2', color: 'black' },
      { children: 'Text3', color: 'black' },
    ],
    [
      { name: 'Name' },
      { children: 'Button 2', onClick: action('onClick 2') },
      { children: 'Text4', color: 'black' },
      { children: 'Text5', color: 'black' },
      { children: 'Text6', color: 'black' },
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
  components: [User, Button, Value, Value, Value],
  componentsProps: [
    { name: 'Name' },
    { children: 'Button', onClick: action('onClick') },
    { children: 'Text1', color: 'black' },
    { children: 'Text2', color: 'black' },
    { children: 'Text3', color: 'black' },
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
  component: User,
  componentProps: { name: 'Name' },
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

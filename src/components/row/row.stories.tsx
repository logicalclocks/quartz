import React from 'react';
import { Box } from 'rebass';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import Row, { RowProps } from './container';
import RowGroup, { RowGroupProps } from './group';
import RowItem, { RowItemProps } from './item';
import { User } from '../user';
import { Button } from '../button';
import Value from '../typography/value';
import { Mode } from './container/types';
import { TableItemPosition } from './item/types';

export default {
  title: 'Quartz/Row',
  component: Row,
  args: {
    legend: ['some', 'some', 'some', 'some', 'some'],
    mode: Mode.full,
    middleColumn: 2,
    groupComponents: [
      [User, Button, Value, Value, Value],
      [User, Button, Value, Value, Value],
    ],
    groupProps: [
      [
        { firstName: 'Name' },
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
        { firstName: 'Name' },
        { children: 'Button 2', onClick: action('onClick 2') },
        { children: 'Text4', color: 'black' },
        { children: 'Text5', color: 'black' },
        { children: 'Text6', color: 'black' },
      ],
    ],
  },
} as Meta;

const Container: Story<RowProps> = (props) => (
  <Box width="700px">
    <Row {...props} />
  </Box>
);
export const Default = Container.bind({});

const groupArgs = {
  mode: Mode.full,
  components: [User, Button, Value, Value, Value],
  componentsProps: [
    { firstName: 'Name' },
    { children: 'Button', onClick: action('onClick') },
    { children: 'Text1', color: 'black' },
    { children: 'Text2', color: 'black' },
    { children: 'Text3', color: 'black' },
  ],
  middleColumn: 2,
};
export const Group: Story<RowGroupProps> = (props) => (
  <Box
    as="table"
    width="700px"
    sx={{ tableLayout: 'auto', borderCollapse: 'collapse', width: '100%' }}
  >
    <Box as="tbody">
      <RowGroup {...props} {...groupArgs} />
    </Box>
  </Box>
);

const itemArgs = {
  mode: Mode.full,
  component: User,
  componentProps: { firstName: 'Name' },
  position: TableItemPosition.right,
};
export const Item: Story<RowItemProps> = (props) => (
  <Box as="table" width="700px">
    <Box as="tbody">
      <Box as="tr">
        <RowItem {...props} {...itemArgs} />
      </Box>
    </Box>
  </Box>
);

import { Box } from 'rebass';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Row, { RowProps } from './container';
import RowGroup from './group';
import RowItem from './item';
import { User } from '../user';
import { Button } from '../button';
import Value from '../typography/value';
import { Mode } from './container/types';
import { TableItemPosition } from './item/types';

const args = {
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
};
const meta: Meta<typeof Row> = {
  title: 'Row',
  component: Row,
  args,
};
export default meta;

export const Container: StoryObj<RowProps> = {
  render: (props) => (
    <Box width="700px">
      <Row {...props} />
    </Box>
  ),
};

export const Group: StoryObj<typeof RowGroup> = {
  args: {
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
  },
  render: (props) => (
    <Box
      as="table"
      width="700px"
      sx={{ tableLayout: 'auto', borderCollapse: 'collapse', width: '100%' }}
    >
      <Box as="tbody">
        <RowGroup {...args} {...props} />
      </Box>
    </Box>
  ),
};

export const Item: StoryObj<typeof RowItem> = {
  args: {
    mode: Mode.full,
    component: User,
    componentProps: { firstName: 'Name' },
    position: TableItemPosition.right,
  },
  render: (props) => (
    <Box as="table" width="700px">
      <Box as="tbody">
        <Box as="tr">
          <RowItem {...args} {...props} />
        </Box>
      </Box>
    </Box>
  ),
};

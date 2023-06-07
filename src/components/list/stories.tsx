import { Box } from 'rebass';
import { StoryObj, Meta } from '@storybook/react';

import ListItem from './item';
import List from './container';

const meta: Meta<typeof List> = {
  title: 'List',
  component: List,
};
export default meta;

export const Container: StoryObj<typeof List> = {
  args: {
    children: (
      <>
        <ListItem hasDivider>name</ListItem>
        <ListItem>creation date</ListItem>
        <ListItem>size</ListItem>
        <ListItem variant="active"># of rows</ListItem>
        <ListItem># of features</ListItem>
      </>
    ),
  },
  render: (props) => (
    <Box width="300px">
      <List {...props} />
    </Box>
  ),
};

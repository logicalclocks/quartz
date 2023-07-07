import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'rebass';

import { IconButton, Label, List, ListItem } from '../../index';
import Subtitle from '../typography/subtitle';
import Header from './index';
import MenuButton from './menu-button';
import { User } from '../user';
import { GetIcon, IconName } from '../icon';
import { Default as NavigationStory } from '../navigation/stories';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  argTypes: {
    children: {
      description: 'Header left side content',
      type: {
        name: 'string',
        required: false,
      },
    },
    user: {
      description: 'User section component',
    },
    actions: {
      description: 'Array of actions (buttons, links, ...)',
    },
    logoAction: {
      description: 'Callback function for the right menu button',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Header> = {
  args: {
    user: (
      <>
        <User firstName="Anna" lastName="Lundström" />
        <Label>Anna Lundström</Label>
      </>
    ),
    actions: [
      <IconButton
        icon={IconName.table}
        intent="ghost-white"
        tooltip="message"
      />,
      <IconButton icon={IconName.edit} intent="ghost-white" tooltip="some" />,
    ],
    children: (
      <>
        <GetIcon icon={IconName.folder} />
        <Subtitle ml="16px">PROJECT ACME</Subtitle>
      </>
    ),
    menuAction: (
      <>
        <MenuButton />
        <List sx={{ position: 'absolute', right: '16px', top: '56px' }}>
          <ListItem>Account</ListItem>
          <ListItem>Log Out</ListItem>
        </List>
      </>
    ),
  },
  render: (props) => (
    <Box width="90vw" height="90vh">
      <Header {...props} />
      <NavigationStory />
    </Box>
  ),
};

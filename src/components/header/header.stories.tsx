import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box } from 'rebass';

// Components
import { IconButton, Label, List, ListItem } from '../../index';
import Subtitle from '../typography/subtitle';
import Header, { HeaderProps } from './index';
// Types
import MenuButton from './menu-button';
import User from '../user';
import { GetIcon, IconName } from '../icon';

import { Default as NavigationStory } from '../navigation/navigation.stories';

export default {
  title: 'Quartz/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (props) => (
  <Box width="90vw" height="90vh">
    <Header {...props} />
    <NavigationStory />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  user: (
    <>
      <User firstName="" />
      <Label>Anna Lundström</Label>
    </>
  ),
  actions: [
    <IconButton icon={IconName.table} intent="ghost-white" tooltip="message" />,
    <IconButton icon={IconName.edit} intent="ghost-white" tooltip="some" />,
  ],
  children: (
    <>
      <GetIcon icon={IconName.folder }/>
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
};

Default.argTypes = {
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
};

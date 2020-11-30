// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box } from 'rebass';

// Components
import Avatar from '../avatar';
import { IconButton, Label, List, ListItem } from '../../index';
import FolderIcon from '../icons/folder.icon';
import Subtitle from '../typography/subtitle';
import Header, { HeaderProps } from './index';
import Navigation from '../navigation/container';
// Types
import { TreeNode } from '../navigation/types';
import MenuButton from './menu-button';

export default {
  title: 'Quartz/Header',
  component: Header,
} as Meta;

const tree: TreeNode[] = [
  {
    title: 'Home',
    icon: ['far', 'copy'],
    children: [
      {
        title: 'Owerview 2',
      },
    ],
  },
  {
    title: 'Feature Groups',
    icon: ['far', 'copy'],
    children: [
      {
        title: 'Owerview',
        children: [
          {
            title: 'Feature List',
          },
          {
            title: 'Schematised Tags',
            onClick: action('Tags Click'),
            isActive: true,
          },
          {
            title: 'Running Code',
          },
          {
            title: 'API',
          },
        ],
      },
      {
        title: 'Data',
      },
      {
        title: 'Activity',
      },
    ],
  },
  {
    title: 'Training Datasets',
    icon: ['far', 'copy'],
    hasDivider: true,
  },
  { title: 'Source', icon: ['far', 'copy'] },
  { title: 'Jobs', icon: ['far', 'copy'] },
];

const Template: Story<HeaderProps> = (props) => (
  <Box width="90vw" height="90vh">
    <Header {...props} />
    <Navigation onNavigate={action('On Navigate')} tree={tree} />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  user: (
    <>
      <Avatar marginRight="12px" />
      <Label>Anna Lundström</Label>
    </>
  ),
  actions: [
    <IconButton icon="coffee" intent="ghost-white" tooltip="message" />,
    <IconButton icon="pen" intent="ghost-white" tooltip="some" />,
  ],
  children: (
    <>
      <FolderIcon />
      <Subtitle ml="16px">PROJECT ACME</Subtitle>
    </>
  ),
  menuAction: (
    <>
      <MenuButton />
      <Box sx={{ position: 'absolute', right: '16px', top: '56px' }}>
        <List>
          <ListItem>Account</ListItem>
          <ListItem>Log Out</ListItem>
        </List>
      </Box>
    </>
  ),
};

Default.argTypes = {
  children: {
    type: {
      summary: 'Header left side content',
      required: false,
    },
  },
  user: {
    type: {
      summary: 'User section component',
    },
  },
  actions: {
    type: {
      summary: 'Array of actions (buttons, links, ...)',
    },
  },
  onMenuClick: {
    type: {
      summary: 'Callback function for the right menu button',
    },
  },
};

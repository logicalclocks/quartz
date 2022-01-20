// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box } from 'rebass';

// Components
import { IconButton, Label, List, ListItem } from '../../index';
import Subtitle from '../typography/subtitle';
import Header, { HeaderProps } from './index';
import Navigation from '../navigation/container';
// Types
import { TreeNode } from '../navigation/types';
import MenuButton from './menu-button';
import User from '../user';
import { IconName } from '../icon/list';
import Icon from '../icon';

export default {
  title: 'Quartz/Header',
  component: Header,
} as Meta;

const tree: TreeNode[] = [
  {
    title: 'Home',
    icon: ['far', 'copy'],
    id: '321',
    children: [
      {
        id: '32',
        title: 'Owerview 2',
      },
    ],
  },
  {
    title: 'Feature Groups',
    icon: ['far', 'copy'],
    id: '32',
    children: [
      {
        title: 'Owerview',
        id: '32',
        children: [
          {
            id: '32',
            title: 'Feature List',
          },
          {
            title: 'Schematised Tags',
            onClick: action('Tags Click'),
            id: '32',
            isActive: true,
          },
          {
            title: 'Running Code',
            id: '32',
          },
          {
            id: '32',
            title: 'API',
          },
        ],
      },
      {
        title: 'Data',
        id: '32',
      },
      {
        title: 'Activity',
        id: '32',
      },
    ],
  },
  {
    title: 'Training Datasets',
    id: '32',
    icon: ['far', 'copy'],
    hasDivider: true,
  },
  { title: 'Source', id: '32', icon: ['far', 'copy'] },
  { title: 'Jobs', id: '32', icon: ['far', 'copy'] },
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
      <Icon icon={ IconName.folder }/>
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

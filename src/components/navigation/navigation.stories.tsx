import React from 'react';
import { Box } from 'rebass';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

// Components
import Navigation, { NavigationProps } from './container';
// Types
import { TreeNode } from './types';
import useNavigation from './useNavigation';
import { GetIcon, IconName } from '../icon';
import { Button } from '../button';

export default {
  title: 'Quartz/Navigation',
  component: Navigation,
} as Meta;

export const Footer = () => {
  const { isOpen } = useNavigation();

  if (isOpen) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '50px',
        }}
      >
        <GetIcon icon={IconName.hopworks} />
        <span>HFS</span>
        <span>V 2.0</span>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mx: '40px',
      }}
    >
      <GetIcon icon={IconName.hopworks} />
      <span>Hopsworks Feature Store version 2.0</span>
    </Box>
  );
};

const Template: Story<NavigationProps> = () => (
  <Box height="100vh">
    <Navigation onNavigate={action('On Navigate')} footer={<Footer />}>
      <Navigation.Category id="1" title="Home">
        <Navigation.Item id="2" title="Overview1" />
      </Navigation.Category>
      <Navigation.Category id="3" title="Feature Groups">
        <Navigation.Item id="4" title="Overview">
          <Navigation.Item id="5" title="Feature List" />
          <Navigation.Item
            id="6"
            title="Schematised Tags"
            isActive
            onClick={action('Navigate to')}
          />
          <Navigation.Item id="7" title="Running Code" />
          <Navigation.Item id="8" title="API" />
        </Navigation.Item>
        <Navigation.Item id="9" title="Data" />
        <Navigation.Item id="10" title="Activity" />
      </Navigation.Category>
      <Navigation.Item id="11" title="Training Datasets" hasDivider />
      <Navigation.Item id="12" title="Sources" />
      <Navigation.Item id="13" title="Jobs" />
    </Navigation>
  </Box>
);

export const TreeObject: Story<NavigationProps> = () => {
  const tree: TreeNode[] = [
    {
      title: 'Home',
      icon: <GetIcon icon={IconName.folder} />,
      id: '1',
      children: [
        {
          id: '32',
          title: 'Owerview 2',
        },
      ],
      secondaryTooltipText: 'Home',
    },
    {
      title: 'Feature Groups',
      icon: <GetIcon icon={IconName.folder} />,
      id: '2',
      disabled: true,
      secondaryTooltipText: 'Feature Groups',
      hideBack: true,
      children: [
        {
          title: 'Overview',
          id: '3',
          children: [
            {
              title: 'Feature List',
              id: '4',
              icon: <GetIcon icon={IconName.folder} />,
            },
            {
              title: 'Schematised Tags',
              id: '5',
              icon: <GetIcon icon={IconName.folder} />,
              onClick: action('Tags Click'),
              isActive: true,
            },
            {
              title: 'Running Code',
              id: '6',
            },
            {
              title: 'API',
              id: '7',
              disabled: true,
            },
          ],
        },
        {
          title: 'Data',
          icon: <GetIcon icon={IconName.folder} />,
          id: '8',
          sx: { color: 'red', backgroundColor: 'blueShade1' },
        },
        {
          title: 'Activity',
          icon: <GetIcon icon={IconName.folder} />,
          id: '9',
        },
      ],
    },
    {
      title: 'Training Datasets',
      id: '10',
      hasDivider: true,
    },
    { title: 'Source', id: '11' },
    { title: 'Jobs', id: '12' },
  ];

  return (
    <Box height="100vh">
      <Navigation
        onNavigate={action('On Navigate')}
        tree={tree}
        header="Header"
        footer={<Footer />}
      />
    </Box>
  );
};

export const Default = Template.bind({});

const argTypes = {
  children: {
    type: {
      required: false,
      summary: 'Navigation Components (Item, Category)',
    },
  },
  tree: {
    type: {
      required: false,
      summary: 'Navigation object representation',
    },
  },
  trackBy: {
    type: {
      required: false,
      summary: 'Key from object tree',
    },
    defaultValue: { summary: 'title' },
  },
  footer: {
    type: {
      required: false,
      summary:
        'Render props. Renders component in the bottom of the navigation ',
    },
  },
  onNavigate: {
    type: {
      required: false,
      summary:
        'Callback function which fires when user clicks a link (returns link object)',
    },
  },
};

TreeObject.argTypes = argTypes;
Default.argTypes = argTypes;

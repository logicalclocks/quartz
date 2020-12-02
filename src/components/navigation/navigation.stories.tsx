import React from 'react';
import { Box } from 'rebass';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Navigation, { NavigationProps } from './container';
// Types
import { TreeNode } from './types';
import useNavigation from './useNavigation';
// Sources
import sources from '../../sources/source_02rev.json';
import query from '../../sources/query-04.json';
import runjobs from '../../sources/runjobs.json';
import td from '../../sources/TD_01 (1).json';

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
        <FontAwesomeIcon icon="coffee" />
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
      <FontAwesomeIcon icon="coffee" />
      <span>Hopsworks Feature Store version 2.0</span>
    </Box>
  );
};

const Template: Story<NavigationProps> = () => (
  <Box height="100vh">
    <Navigation onNavigate={action('On Navigate')} footer={<Footer />}>
      <Navigation.Category title="Home" icon={query}>
        <Navigation.Item title="Overview1" />
      </Navigation.Category>
      <Navigation.Category title="Feature Groups" icon={query}>
        <Navigation.Item title="Overview">
          <Navigation.Item title="Feature List" />
          <Navigation.Item
            title="Schematised Tags"
            isActive
            onClick={action('Navigate to')}
          />
          <Navigation.Item title="Running Code" />
          <Navigation.Item title="API" />
        </Navigation.Item>
        <Navigation.Item title="Data" />
        <Navigation.Item title="Activity" />
      </Navigation.Category>
      <Navigation.Item title="Training Datasets" hasDivider icon={td} />
      <Navigation.Item title="Sources" icon={sources} />
      <Navigation.Item title="Jobs" icon={runjobs} />
    </Navigation>
  </Box>
);

export const TreeObject: Story<NavigationProps> = () => {
  const tree: TreeNode[] = [
    {
      title: 'Home',
      icon: td,
      children: [
        {
          title: 'Owerview 2',
        },
      ],
      tooltipText: 'Home',
    },
    {
      title: 'Feature Groups',
      icon: query,
      tooltipText: 'Feature Groups',
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
      icon: td,
      hasDivider: true,
    },
    { title: 'Source', icon: sources },
    { title: 'Jobs', icon: runjobs },
  ];

  return (
    <Box height="100vh">
      <Navigation
        onNavigate={action('On Navigate')}
        tree={tree}
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

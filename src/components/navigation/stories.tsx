import { Box } from 'rebass';
import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import NavigationComponent from './container';
import { TreeNode } from './types';
import useNavigation from './useNavigation';
import { GetIcon, IconName } from '../icon';

const meta: Meta<typeof NavigationComponent> = {
  title: 'Navigation/Navigations/Navigation',
  component: NavigationComponent,
  argTypes: {
    tree: {
      description: 'Navigation object representation',
    },
    trackBy: {
      description: 'Key from object tree',
      defaultValue: { description: 'title' },
    },
    footer: {
      description:
        'Render props. Renders component in the bottom of the navigation ',
    },
    onNavigate: {
      description:
        'Callback function which fires when user clicks a link (returns link object)',
    },
  },
};
export default meta;

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

type Story = StoryObj<typeof NavigationComponent>;

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
    ] as any,
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
            isSubItem: true,
          },
          {
            title: 'Schematised Tags',
            id: '5',
            icon: <GetIcon icon={IconName.folder} />,
            onClick: action('Tags Click'),
            isActive: true,
            isSubItem: true,
          },
          {
            title: 'Running Code',
            id: '6',
            isSubItem: true,
          },
          {
            title: 'API',
            id: '7',
            disabled: true,
            isSubItem: true,
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
] as any;

export const Navigation: Story = {
  args: {
    onNavigate: action('On Navigate'),
    tree,
    header: 'Header',
    footer: <Footer />,
  },
  render: (props) => (
    <Box height="100vh">
      <NavigationComponent {...props} />
    </Box>
  ),
};

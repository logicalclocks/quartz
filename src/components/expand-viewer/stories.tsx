import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'rebass';
import ExpandViewer from './index';

const meta: Meta<typeof ExpandViewer> = {
  title: 'ExpandViewer',
  component: ExpandViewer,
  argTypes: {
    NormalComponent: {
      control: {
        type: 'object',
      },
      description: 'The component to show normally',
    },
    BriefComponent: {
      control: {
        type: 'object',
      },
      description: 'The component to show when showing brief',
    },
    popupProps: {
      control: {
        type: 'object',
      },
      description:
        'Setting custom style for the popup when showing the expanded version',
      defaultValue: { width: '700px' },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof ExpandViewer> = {
  args: {
    title: 'Some title goes here',
    BriefComponent: () => (
      <Box height={200} width="100%" bg="primary" p={3}>
        show the brief with an expand button
      </Box>
    ),
    NormalComponent: () => (
      <Box height={400} width="100%" bg="primary" p={3}>
        show this as an expanded component in the popup
      </Box>
    ),
  },
  render: (props) => (
    <Box width="700px">
      <ExpandViewer {...props} />
    </Box>
  ),
};

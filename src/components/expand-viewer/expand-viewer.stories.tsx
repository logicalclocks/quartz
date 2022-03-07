import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box } from 'rebass';
import ExpandViewer, { ExpandViewerProps } from './index';

export default {
  title: 'Quartz/ExpandViewer',
  component: ExpandViewer,
} as Meta;

const argTypes = {
  NormalComponent: {
    control: {
      type: 'object',
    },
    type: {
      required: true,
      summary: 'The component to show normally',
    },
  },
  BriefComponent: {
    control: {
      type: 'object',
    },
    type: {
      required: true,
      summary: 'The component to show when showing brief',
    },
  },
  popupProps: {
    control: {
      type: 'object',
    },
    type: {
      required: false,
      summary:
        'Setting custom style for the popup when showing the expanded version',
    },
    defaultValue: { width: '700px' },
  },
};

// Default
const Template: Story<ExpandViewerProps> = (props) => (
  <Box width="700px">
    <ExpandViewer {...props} />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
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
};

Default.argTypes = argTypes;

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box } from 'rebass';
import StickySummary, { StickySummaryProps } from './index';
import Button from '../button';

export default {
  title: 'Quartz/StickySummary',
  component: StickySummary,
} as Meta;

const argTypes = {
  title: {
    control: {
      type: 'text',
    },
  },
  firstValue: {
    control: {
      type: 'text',
    },
  },
  secondValue: {
    control: {
      type: 'text',
    },
  },
  mainButton: {
    control: {
      type: 'object',
    },
    type: {
      required: true,
      summary: 'Component',
    },
  },
  secondaryButton: {
    control: {
      type: 'object',
    },
    type: {
      required: false,
      summary: 'Component',
    },
  },
  hasScrollOnScreen: {
    control: {
      type: 'boolean',
    },
  },
  errorsValue: {
    control: {
      type: 'text',
    },
  },
};

const Template: Story<StickySummaryProps> = (props) => (
  <Box width="700px">
    <StickySummary {...props} />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Title',
  firstValue: 'value 1',
  secondValue: 'value 2',
  mainButton: (
    <Button intent="primary" isLoading>
      main
    </Button>
  ),
  secondaryButton: <Button intent="secondary">secondary</Button>,
};

Default.argTypes = argTypes;

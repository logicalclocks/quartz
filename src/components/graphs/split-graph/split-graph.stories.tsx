import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Box } from 'rebass';
import SplitGraph, { SplitGraphProps } from './index';

export default {
  title: 'Quartz/SplitGraph',
  component: SplitGraph,
} as Meta;

const argTypes = {
  values: {
    control: {
      type: 'object',
    },
    type: {
      required: true,
      summary: 'Array of split graph values',
    },
  },
};

const Template: Story<SplitGraphProps> = (props) => (
  <Box width="700px">
    <SplitGraph {...props} />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  values: [
    { label: 'test', value: 230 },
    { label: 'atdsdsa', value: 830 },
    { label: 'lku56ytr', value: 1530 },
    { label: 'test', value: 103 },
    { label: 'atdsdsa', value: 120 },
    { label: 'lku56ytr', value: 320 },
    { label: 'atdsdsa', value: 120 },
    { label: 'lku56ytr', value: 320 },
    { label: 'lku56ytr', value: 1530 },
    { label: 'test', value: 103 },
    { label: 'atdsdsa', value: 120 },
    { label: 'lku56ytr', value: 320 },
    { label: 'atdsdsa', value: 120 },
    { label: 'lku56ytr', value: 320 },
  ],
};

Default.argTypes = argTypes;

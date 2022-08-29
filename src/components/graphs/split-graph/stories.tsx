import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Box, Flex } from 'rebass';
import SplitGraph, { SplitGraphProps } from './index';

export default {
  title: 'Quartz/SplitGraph',
  component: SplitGraph,
} as Meta;

const Template: Story<SplitGraphProps> = (props) => (
  <Box width="700px">
    <SplitGraph {...props} />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  withoutPercentage: true,
  labelProps: { width: '50px' },
  values: [
    { label: 'test', value: 230 },
    { label: 'atdsdsa', value: 830 },
    {
      label: 'lku56ytr',
      value: 1530,
    },
    {
      label: 'test',
      value: 103,
    },
    { label: 'atdsdsa', value: 120, trainSplit: true },
    { label: 'lku56ytr', value: 320 },
    { label: 'atdsdsa', value: 120 },
    { label: 'lku56ytr', value: 320 },
    { label: 'lku56ytr', value: 1530 },
    { label: 'test', value: 103 },
    { label: 'atdsdsa', value: 120 },
    { label: 'lku56ytr', value: 320 },
    { label: 'atdsdsa', value: 120 },
    { label: 'lku56ytr', value: 320 },
  ].map((x) => ({
    ...x,
    renderCustomComponent: ({ selected }) => (
      <Flex color={selected ? 'red' : 'blue'} fontSize="10px" flex="1">
        custom text
      </Flex>
    ),
  })),
};

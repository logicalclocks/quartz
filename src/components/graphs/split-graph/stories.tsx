import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box, Flex } from 'rebass';
import SplitGraph, { defaultGraphColors, SplitGraphProps } from './index';

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
  withoutPercentage: false,
  labelProps: { width: '50px' },
  // borderColors: ['#21B182', '#EB5757', 'white'],
  // graphColors: ['#E6F2EE', '#F8DEDE', '#EB5757'],
  // labelDirection: 'row',
  // alignGraphAndLabel: 'center',
  // widthLabelFlex: '80%',
  graphColors: defaultGraphColors,
  values: [
    { label: 'test', value: 230 },
    { label: 'atdsdsa', value: 830 },
    {
      label: 'lku56ytr',
      value: 1530,
    },
    { isGap: true, value: 320 },
    {
      label: 'test',
      value: 103,
    },
    { isGap: true, value: 320 },
    { label: 'atdsdsa', value: 120, trainSplit: true },
    { label: 'lku56ytr', value: 320 },
    { label: 'atdsdsa', value: 120 },
    { label: 'lku56ytr', value: 320 },
    { label: 'lku56ytr', value: 1530 },
    { label: 'test', value: 103 },
    { isGap: true, value: 120 },
    { label: 'atdsdsa', value: 120 },
    { label: 'lku56ytr', value: 320 },
    { label: 'atdsdsa', value: 120 },
    { label: 'lku56ytr', value: 320 },
  ].map((x) => ({
    ...x,
    renderCustomComponent: x.isGap
      ? ({ color, selected }) => (
          <Flex color={selected ? 'red' : color}>custom gap component</Flex>
        )
      : ({ selected }) => (
          <Flex color={selected ? 'red' : 'blue'} fontSize="10px" flex="1">
            custom text
          </Flex>
        ),
  })),
};

import { Meta, StoryObj } from '@storybook/react';
import { Box, Flex } from 'rebass';
import SplitGraph, { defaultGraphColors } from './index';

const meta: Meta<typeof SplitGraph> = {
  title: 'SplitGraph',
  component: SplitGraph,
  args: {
    withoutPercentage: false,
    labelProps: { width: '50px' },
    borderColors: ['#21B182', '#EB5757', 'white'],
    graphColors: defaultGraphColors,
    labelDirection: 'row',
    alignGraphAndLabel: 'center',
    widthLabelFlex: '80%',
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
      renderCustomComponent: ({ color, selected }: any) =>
        x.isGap ? (
          <Flex color={selected ? 'red' : color}>custom gap component</Flex>
        ) : (
          <Flex color={selected ? 'red' : 'blue'} fontSize="10px" flex="1">
            custom text
          </Flex>
        ),
    })),
  },
};
export default meta;

export const Default: StoryObj<typeof SplitGraph> = {
  render: (props) => (
    <Box width="700px">
      <SplitGraph {...props} />
    </Box>
  ),
};

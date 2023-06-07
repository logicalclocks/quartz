import { StoryObj } from '@storybook/react';
import React from 'react';
import { Box } from '../box';
import { Flex } from './index';

export default {
  title: 'Flex',
  component: Flex,
};

export const Default: StoryObj<typeof Flex> = {
  args: {
    gap: '20px',
  },
  render: (props) => (
    <Flex {...props}>
      <Box width="200px" height="200px" bg="red" />
      <Box width="200px" height="200px" bg="green" />
      <Box width="200px" height="200px" bg="blue" />
    </Flex>
  ),
};

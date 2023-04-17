import { Story } from '@storybook/react';
import React from 'react';
import { Box } from '../box';
import { Flex, FlexProps } from './index';

export default {
  title: 'Quartz/Flex',
  component: Flex,
  args: {
    gap: '20px',
  },
};

const Template: Story<FlexProps> = (props) => (
  <Flex {...props}>
    <Box width="200px" height="200px" bg="red" />
    <Box width="200px" height="200px" bg="green" />
    <Box width="200px" height="200px" bg="blue" />
  </Flex>
);

export const Default = Template.bind({});

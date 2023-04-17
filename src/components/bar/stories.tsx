import { Story } from '@storybook/react';
import React from 'react';
import { Flex } from '../flex';
import { Bar, Props } from './Bar';

export default {
  title: 'Quartz/Bar',
  component: Bar,
  args: {
    value: 50,
  },
};

export const Default: Story<Props> = (args) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="250px"
      height="150px"
      bg="antiquewhite"
    >
      <Bar {...args} />
    </Flex>
  );
};

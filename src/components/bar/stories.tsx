import { Meta, StoryObj } from '@storybook/react';
import { Flex } from '../flex';
import { Bar } from './Bar';

const meta: Meta<typeof Bar> = {
  title: 'Bar',
};
export default meta;

export const Default: StoryObj<typeof Bar> = {
  args: {
    value: 50,
  },
  render: (args) => {
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
  },
};

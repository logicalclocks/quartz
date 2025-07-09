import { Meta, StoryObj } from '@storybook/react';
import { Flex } from '../flex';
import { Bar as BarComponent } from './Bar';

const meta: Meta<typeof BarComponent> = {
  title: 'Feedback/Progress/Bar',
  component: BarComponent,
};
export default meta;

export const Bar: StoryObj<typeof BarComponent> = {
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
        <BarComponent {...args} />
      </Flex>
    );
  },
};

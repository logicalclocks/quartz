import { Meta, StoryObj } from '@storybook/react';
import { Flex } from 'rebass';
import Labeling from '../typography/labeling';
import { User } from './index';

const meta: Meta<typeof User> = {
  title: 'User',
  component: User,
  args: {
    firstName: 'Martin',
    lastName: 'Heidegger',
  },
};
export default meta;

type Story = StoryObj<typeof User>;
export const Default: Story = {
  render: (props) => <User {...props} />,
};

export const WithSecondaryText: Story = {
  ...Default,
  args: {
    secondaryText: 'you can add some stuff here',
  },
};

export const WithTitle = () => (
  <Flex alignItems="center">
    <Labeling mr={2}>hover your mouse on the user to see the title</Labeling>

    <User firstName="Martin" lastName="Heidegger" title="Philosopher" />
  </Flex>
);

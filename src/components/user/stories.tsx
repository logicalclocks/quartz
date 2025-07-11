import { Meta, StoryObj } from '@storybook/react';
import { Flex } from 'rebass';
import Labeling from '../typography/labeling';
import { User as UserComponent } from './index';

const meta: Meta<typeof UserComponent> = {
  title: 'Media and Icons/User',
  component: UserComponent,
  args: {
    firstName: 'Martin',
    lastName: 'Heidegger',
  },
};
export default meta;

type Story = StoryObj<typeof UserComponent>;
export const User: Story = {
  render: (props) => <UserComponent {...props} />,
};

export const WithSecondaryText: Story = {
  ...User,
  args: {
    secondaryText: 'you can add some stuff here',
  },
};

export const WithTitle = () => (
  <Flex alignItems="center">
    <Labeling mr={2}>hover your mouse on the user to see the title</Labeling>

    <UserComponent
      firstName="Martin"
      lastName="Heidegger"
      title="Philosopher"
    />
  </Flex>
);

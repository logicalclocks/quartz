import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Flex } from 'rebass';
import Labeling from '../typography/labeling';
import { User, UserProps } from './index';

export default {
  title: 'Quartz/User',
  component: User,
  args: {
    firstName: 'Martin',
    lastName: 'Heidegger',
  },
};

const Template: Story<UserProps> = (props) => <User {...props} />;

export const Default = Template.bind({});

export const WithSecondaryText = Template.bind({});
WithSecondaryText.args = {
  secondaryText: 'you can add some stuff here',
};

export const WithTitle = () => (
  <Flex alignItems="center">
    <Labeling mr={2}>hover your mouse on the user to see the title</Labeling>

    <User firstName="Martin" lastName="Heidegger" title="Philosopher" />
  </Flex>
);

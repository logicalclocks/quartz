import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Spinner, { SpinnerProps } from '.';

export default {
  title: 'Quartz/Spinner',
  component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = (props) => <Spinner {...props} />;

export const Default = Template.bind({});

Default.args = {
  color: 'labels.green',
  size: 20,
};

Default.argTypes = {
  color: {
    control: {
      type: 'text',
    },
  },
  size: {
    control: {
      type: 'number',
    },
  },
};

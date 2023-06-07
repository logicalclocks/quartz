import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Spinner from '.';

export default {
  title: 'Spinner',
  component: Spinner,
  argTypes: {
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
  },
} as Meta;

export const Default: StoryObj<typeof Spinner> = {
  args: {
    color: 'labels.green',
    size: 20,
  },
  render: (props) => <Spinner {...props} />,
};

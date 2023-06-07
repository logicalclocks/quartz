import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import InputInfo from '.';

const meta: Meta<typeof InputInfo> = {
  title: 'Input/Info',
  component: InputInfo,
  argTypes: {
    children: {
      description: 'Message text',
    },
    intent: {
      control: {
        type: 'select',
        options: ['error', 'default'],
      },
      description: 'Message intent',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof InputInfo> = {
  args: {
    intent: 'error',
    children: 'message',
  },
  render: (props) => <InputInfo {...props} />,
};

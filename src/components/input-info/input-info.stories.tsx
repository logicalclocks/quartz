import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import InputInfo, { InputInfoProps } from '.';

export default {
  title: 'Quartz/Input/Info',
  component: InputInfo,
} as Meta;

const argTypes = {
  children: {
    type: {
      required: true,
      summary: 'Message text',
    },
  },
  intent: {
    control: {
      type: 'select',
      options: ['error', 'default'],
    },
    type: {
      required: false,
      summary: 'Message intent',
    },
  },
};

const Template: Story<InputInfoProps> = (props) => <InputInfo {...props} />;

export const Default = Template.bind({});

Default.args = {
  intent: 'error',
  children: 'message',
};

Default.argTypes = argTypes;

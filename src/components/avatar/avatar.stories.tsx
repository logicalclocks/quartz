import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Avatar, { AvatarProps } from './index';

export default {
  title: 'Quartz/Avatar',
  component: Avatar,
} as Meta;

const argTypes = {
  src: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Link to image',
    },
  },
  borderColor: {
    control: {
      type: 'color',
    },
    type: {
      required: false,
      summary: 'Border color',
    },
  },
  size: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Size',
    },
    defaultValue: { summary: '32px' },
  },
};

const Template: Story<AvatarProps> = (props) => <Avatar {...props} />;

export const Default = Template.bind({});

Default.argTypes = argTypes;

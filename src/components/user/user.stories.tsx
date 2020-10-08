import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import User, { UserProps } from './index';

export default {
  title: 'Quartz/Badges',
  component: User,
} as Meta;

const Template: Story<UserProps> = (props) => <User {...props} />;

export const UserBadge = Template.bind({});

UserBadge.args = {
  name: 'Name',
};

UserBadge.argTypes = {
  photo: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
      summary: 'Link to image',
    },
  },
  name: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
      summary: 'User name',
    },
  },
  title: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Tooltip secondary text',
    },
  },
  isTooltipActive: {
    control: {
      type: 'boolean',
    },
    defaultValue: { summary: true },
  },
};

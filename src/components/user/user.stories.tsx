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
  firstName: 'FirstName',
  lastName: 'LastName',
};

UserBadge.argTypes = {
  firstName: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
      summary: 'First name',
    },
  },
  lastName: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Last name',
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
  secondaryText: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
      summary: 'Secondary text that extends the badge',
    },
  },
};

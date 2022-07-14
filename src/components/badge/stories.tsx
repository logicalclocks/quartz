import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Badge, Props } from './Badge';
import { IconName } from '../icon/list';

export default {
  title: 'Quartz/Badges/Default',
  component: Badge,
  args: {
    value: 'arizona',
    mode: 'default',
    variant: 'default',
    loading: false,
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['download', 'card', 'birth', 'lock'],
      mapping: {
        download: IconName.download,
        card: IconName.card,
        birth: IconName.birth,
        lock: IconName.lock,
      },
    },
    variant: {
      control: { type: 'select' },
      options: [
        'light',
        'default',
        'fail',
        'warning',
        'success',
        'label',
        'notice',
      ],
    },
    mode: {
      control: { type: 'select' },
      options: ['default', 'bordered'],
    },
  },
};

const Template: Story<Props> = (props) => <Badge {...props} />;

export const Default = Template.bind({});

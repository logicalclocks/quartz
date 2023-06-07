import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge } from './Badge';
import { IconName } from '../icon/list';

const meta: Meta<typeof Badge> = {
  title: 'Badges',
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
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = { render: (props) => <Badge {...props} /> };

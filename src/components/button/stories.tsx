import { action } from '@storybook/addon-actions';
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Button } from './Button';
import { IconName } from '../icon';

export default {
  title: 'Quartz/Buttons',
  component: Button,
  args: {
    children: 'Button',
    onClick: action('onClick'),
  },
  argTypes: {
    intent: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'ghost', 'inline', 'alert'],
    },
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
  },
} as Meta;

export const Default: StoryObj<typeof Button> = {
  render: (props) => <Button {...props} />,
};

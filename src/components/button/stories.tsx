import { action } from '@storybook/addon-actions';
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, Props } from './Button';
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

const Template: Story<Props> = (props) => <Button {...props} />;

export const Default = Template.bind({});

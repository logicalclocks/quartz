import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import { Button } from './Button';
import { IconName } from '../icon';

const meta: Meta = {
  title: 'Buttons',
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
};
export default meta;

export const Default: StoryObj<typeof Button> = {
  render: (props) => <Button {...props} />,
};

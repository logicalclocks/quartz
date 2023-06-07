import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '.';
import { IconName } from '../icon/list';

const meta: Meta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: ['primary', 'ghost', 'ghost-white'],
        default: 'primary',
      },
    },
    tooltip: {
      control: {
        type: 'text',
        default: 'Tooltip',
        required: false,
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      table: {
        description: 'On click callback function',
      },
    },
    icon: {
      control: { type: 'select' },
      options: ['more', 'card', 'birth', 'lock'],
      mapping: {
        download: IconName.more,
        card: IconName.card,
        birth: IconName.birth,
        lock: IconName.lock,
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof IconButton> = {
  args: {
    icon: IconName.more,
    intent: 'primary',
    tooltip: 'Tooltip',
    onClick: action('onClick'),
    onClickIcon: action('onClickIcon'),
  },
  render: (props) => <IconButton {...props} />,
};

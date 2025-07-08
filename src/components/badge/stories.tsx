import { Meta, StoryObj } from '@storybook/react';
import { Badge as BadgeComponent } from './Badge';
import { IconName } from '../icon/list';

const meta: Meta<typeof BadgeComponent> = {
  title: 'DataDisplay/Badge/Badge',
  component: BadgeComponent,
  args: {
    value: 'arizona',
    mode: 'default',
    variant: 'default',
    loading: false,
    icon: IconName.download,
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

type Story = StoryObj<typeof BadgeComponent>;

export const Badge: Story = { render: (props) => <BadgeComponent {...props} /> };
export const Default: Story = { render: (props) => <Badge {...props} /> };

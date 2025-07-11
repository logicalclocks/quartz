import { Meta, StoryObj } from '@storybook/react';
import { Badge as BadgeComponent } from './Badge';
import { IconName } from '../icon/list';
import { Flex } from '../flex';

const meta: Meta<typeof BadgeComponent> = {
  title: 'DataDisplay/Badge/Badge',
  component: BadgeComponent,
  args: {
    value: 'arizona',
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
  },
};
export default meta;

type Story = StoryObj<typeof BadgeComponent>;

export const Badge: Story = {
  render: (props) => (
    <Flex justifyContent="center">
      <BadgeComponent {...props} />
    </Flex>
  ),
};

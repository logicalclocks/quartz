import { StoryObj, Meta } from '@storybook/react';
import CompactButtonComponent from '.';
import { GetIcon, IconName } from '../icon';

const meta: Meta<typeof CompactButtonComponent> = {
  title: 'Forms/Buttons/CompactButton',
  component: CompactButtonComponent,
  argTypes: {
    isActive: {
      control: { type: 'boolean' },
    },
    newTab: {
      control: { type: 'boolean' },
    },
    mode: {
      control: {
        type: 'select',
        options: ['default', 'highlight', undefined],
      },
    },
    indicator: {
      control: {
        type: 'select',
        options: ['vertical', 'horizontal', undefined],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: [undefined, <GetIcon icon={IconName.plus} />],
      },
      description: 'Put icon component from IconName',
    },
  },
};
export default meta;

export const CompactButtonTemplate: StoryObj<typeof CompactButtonComponent> = {
  args: {
    mode: 'default',
    href: '/test',
  },
  render: (props) => (
    <CompactButtonComponent {...props}>1</CompactButtonComponent>
  ),
};

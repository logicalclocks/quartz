import { StoryObj, Meta } from '@storybook/react';
import { Button } from '../button';
import TooltipComponent from './index';

const meta: Meta<typeof TooltipComponent> = {
  title: 'Overlay/Tooltip',
  component: TooltipComponent,
  argTypes: {
    mainText: {
      control: { type: 'text' },
      description: 'Tooltip text',
    },
    secondaryText: {
      control: {
        type: 'text',
        default: 'secondary',
      },
      description: 'Gray colored text',
    },
    disabled: {
      control: {
        type: 'boolean',
        default: 'tooltip',
      },
    },
    visibleDefault: {
      control: {
        type: 'boolean',
      },
    },
    delayed: {
      control: {
        type: 'boolean',
        default: true,
      },
    },
    position: {
      control: {
        type: 'select',
      },
      default: 'bottom',
      options: ['bottom', 'right', 'top', 'left'],
      description: 'Tooltip position according to the wrapped component',
    },
  },
};
export default meta;

export const Tooltip: StoryObj<typeof TooltipComponent> = {
  args: {
    mainText: 'tooltip',
    secondaryText: 'secondary',
    position: 'left',
    children: <Button intent="ghost">Button with tooltip</Button>,
  },
};

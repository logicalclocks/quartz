import { StoryObj, Meta } from '@storybook/react';
import { Button } from '../button';
import Tooltip from './index';

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltips',
  component: Tooltip,
  argTypes: {
    mainText: {
      control: {
        type: 'text',
        default: 'tooltip',
      },
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
        default: 'bottom',
        options: ['bottom', 'right', 'top', 'left'],
      },
      description: 'Tooltip position according to the wrapped component',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Tooltip> = {
  args: {
    mainText: 'tooltip',
    secondaryText: 'secondary',
  },
  render: (props) => (
    <Tooltip {...props}>
      <Button intent="ghost">Button with tooltip</Button>
    </Tooltip>
  ),
};

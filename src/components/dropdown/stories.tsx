import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import DropdownComponent from './index';
import { IconName } from '../icon';

const meta: Meta<typeof DropdownComponent> = {
  title: 'Forms/Dropdowns/Dropdown',
  component: DropdownComponent,
  argTypes: {
    items: { description: 'Array of Items' },
    isOpen: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'left' },
    },
    onClickOutside: {
      description: 'Fires on clicking outside the dropdown',
    },
  },
};
export default meta;

export const Dropdown: StoryObj<typeof DropdownComponent> = {
  args: {
    onClickOutside: action('outside'),
    items: [
      {
        value: 'project_1',
        metadata: {},
        onClick: action('onClick'),
        tooltipProps: { mainText: 'tooltip', secondaryText: 'tooltip' },
      },
      {
        value: 'project_2',
        metadata: {},
        hasDivider: true,
        onClick: action('onClick'),
      },
      {
        value: 'Create New Project',
        icon: IconName.plus,
        metadata: {},
        onClick: action('onClick'),
      },
    ],
  },
};

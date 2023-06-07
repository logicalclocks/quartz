import { action } from '@storybook/addon-actions';
import { Box } from 'rebass';
import { StoryObj, Meta } from '@storybook/react';

import Dropdown from './index';
import { IconName } from '../icon';

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown',
  argTypes: {
    items: {
      description: 'Array of Items',
    },
    isOpen: {
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: 'left',
      },
    },
    onClickOutside: {
      description: 'Fires on clicking outside the dropdown',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Dropdown> = {
  args: {
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
  render: (props) => (
    <Box width="300px">
      <Dropdown {...props} onClickOutside={action('outside')} />
    </Box>
  ),
};

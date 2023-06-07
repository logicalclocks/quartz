import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'rebass';
import { action } from '@storybook/addon-actions';

import { DropdownButton } from './DropdownButton';
import { IconName } from '../icon';
import { IconButton } from '../icon-button';

export default {
  title: 'DropdownButton',
  component: DropdownButton,
  args: {
    renderButton: ({ onClick }: any) => (
      <IconButton icon={IconName.more} onClick={onClick} />
    ),
    items: [
      {
        value: 'project_1',
        metadata: {},
        onClick: action('onClick'),
        isLoading: true,
        disabled: true,
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
        isLoading: true,
      },
    ],
  },
} as Meta<typeof DropdownButton>;

export const Default: StoryObj<typeof DropdownButton> = {
  render: (props) => (
    <Box width="700px" height="115px">
      <DropdownButton {...props} />
    </Box>
  ),
};

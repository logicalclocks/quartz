import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'rebass';
import { action } from '@storybook/addon-actions';

import { DropdownButton as DropdownButtonComponent } from './DropdownButton';
import { IconName } from '../icon';
import { IconButton } from '../icon-button';
import { DropdownButton2 as DropdownButton2Component } from './DropdownButton2';

const meta: Meta<typeof DropdownButtonComponent> = {
  title: 'Forms/Dropdowns/DropdownButton',
  component: DropdownButtonComponent,
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
};
export default meta;

export const DropdownButton: StoryObj<typeof DropdownButtonComponent> = {};

export const DropdownButton2: StoryObj<typeof DropdownButton2Component> = {
  render: (props) => (
    <Box width="700px" height="115px">
      <DropdownButton2Component {...props} />
    </Box>
  ),
};

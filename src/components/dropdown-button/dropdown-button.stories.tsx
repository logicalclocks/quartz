import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box } from 'rebass';
import { action } from '@storybook/addon-actions';

import DropdownButton, { DropdownButtonProps } from './index';
import { IconName } from '../icon';
import IconButton from '../icon-button';

export default {
  title: 'Quartz/DropdownButton',
  component: DropdownButton,
} as Meta;

const argTypes = {
  alignLeft: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
      summary: 'choose to open dropdown on left',
    },
    defaultValue: false,
  },
  items: {
    control: {
      type: 'object',
    },
    type: {
      required: true,
      summary: 'dropdown items',
    },
  },
  containerOpenSx: {
    control: {
      type: 'object',
    },
    type: {
      required: false,
      summary: 'Setting custom style for container when dropdown is open',
    },
    defaultValue: undefined,
  },
  renderButton: {
    control: {
      type: 'object',
    },
    type: {
      required: true,
      summary:
        'Rendering custom component as dropdown button which accepts onClick and isOpen as renderProps',
    },
    defaultValue: undefined,
  },
};

// Default
const Template: Story<DropdownButtonProps> = (props) => (
  <Box width="700px" height="200px">
    <DropdownButton
      {...props}
      items={[
        {
          value: 'project_1',
          metadata: {},
          onClick: action('onClick'),
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
      ]}
      renderButton={({ onClick }) => (
        <IconButton icon={IconName.more} onClick={onClick} />
      )}
    />
  </Box>
);

export const Default = Template.bind({});

Default.args = {};

Default.argTypes = argTypes;

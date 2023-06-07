import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import CompactButton from '.';
import { GetIcon, IconName } from '../icon';

const meta: Meta<typeof CompactButton> = {
  title: 'CompactButton',
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

export const CompactButtonTemplate: StoryObj<typeof CompactButton> = {
  args: {
    mode: 'default',
    href: '/test',
  },
  render: (props) => <CompactButton {...props}>1</CompactButton>,
};

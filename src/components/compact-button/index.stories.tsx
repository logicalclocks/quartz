import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import CompactButton, { CompactButtonProps } from '.';

export default {
  title: 'Quartz/CompactButton',
  component: CompactButton,
} as Meta;

export const CompactButtonTemplate: Story<CompactButtonProps> = (props) => (
  <CompactButton {...props}>1</CompactButton>
);

CompactButtonTemplate.args = {
  mode: 'default',
  href: '/test',
};

CompactButtonTemplate.argTypes = {
  isActive: {
    control: { type: 'boolean' },
    type: { required: false },
  },
  newTab: {
    control: { type: 'boolean' },
    type: { required: false },
  },
  mode: {
    control: {
      type: 'select',
      options: ['default', 'highlight', undefined],
    },
    type: { required: false },
  },
  indicator: {
    control: {
      type: 'select',
      options: ['vertical', 'horizontal', undefined],
    },
    type: { required: false },
  },
  icon: {
    control: {
      type: 'select',
      options: [undefined, faPlus],
    },
    type: {
      summary: 'Take icons from @fortawesome/free-solid-svg-icons',
    },
  },
};

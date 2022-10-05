import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from '../button';

import Tooltip, { TooltipProps } from './index';

export default {
  title: 'Quartz/Tooltips',
  component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (props) => (
  <Tooltip {...props}>
    <Button intent="ghost">Button with tooltip</Button>
  </Tooltip>
);

export const Default = Template.bind({});

const argTypes = {
  mainText: {
    control: {
      type: 'text',
      default: 'tooltip',
    },
    type: {
      required: true,
      summary: 'Tooltip text',
    },
  },
  secondaryText: {
    control: {
      type: 'text',
      default: 'secondary',
    },
    type: {
      required: false,
      summary: 'Gray colored text',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
      default: 'tooltip',
    },
    type: {
      required: false,
    },
  },
  visibleDefault: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
    },
  },
  delayed: {
    control: {
      type: 'boolean',
      default: true,
    },
    type: {
      required: false,
    },
  },
  position: {
    control: {
      type: 'select',
      default: 'bottom',
      options: ['bottom', 'right', 'top', 'left'],
    },
    type: {
      required: false,
      summary: 'Tooltip position according to the wrapped component',
    },
  },
};

Default.args = {
  mainText: 'tooltip',
  secondaryText: 'secondary',
};

Default.argTypes = argTypes;

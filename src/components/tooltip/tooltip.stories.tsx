// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '../button';

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
export const WithComponentInside = Template.bind({});

const argTypes = {
  mainText: {
    control: {
      type: 'text',
      default: 'tooltip',
    },
    type: {
      required: true,
      summary: 'Accepts text, React component (link,button, ...)',
    },
  },
  secondaryText: {
    control: {
      type: 'text',
      default: 'secondary',
    },
    type: {
      required: false,
      summary:
        'Text gray colored. Accepts string, React component (link,button, ...)',
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
};

Default.args = {
  mainText: 'tooltip',
  secondaryText: 'secondary',
};

WithComponentInside.args = {
  mainText: 'tooltip',
  secondaryText: (
    <Button intent="inline" padding="0" onClick={action('Button from tooltip')}>
      inline button
    </Button>
  ),
};

Default.argTypes = argTypes;
WithComponentInside.argTypes = argTypes;

// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Button, { QuartzButtonProps } from '.';
import { IconName } from '../..';

export default {
  title: 'Quartz/Buttons',
  component: Button,
} as Meta;

const Template: Story<QuartzButtonProps> = (props) => <Button {...props} />;

export const Default = Template.bind({});

Default.args = {
  intent: 'primary',
  children: 'Button',
  isLoading: false,
  loadingOnly: false,
  onClick: action('onClick'),
};

Default.argTypes = {
  intent: {
    control: {
      type: 'select',
      options: ['primary', 'secondary', 'ghost', 'inline', 'alert'],
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  isLoading: {
    control: {
      type: 'boolean',
    },
  },
  loadingOnly: {
    control: {
      type: 'boolean',
    },
  },
  onClick: {
    table: {
      type: {
        summary: 'On click callback function',
      },
    },
    type: {
      required: true,
    },
  },
  children: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
    },
  },
  icon: {
    control: {
      type: 'select',
      options: [undefined, IconName.upload],
    },
    type: {
      summary:
        'Put icon component from @fortawesome/free-solid-svg-icons package',
    },
  },
};

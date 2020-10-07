import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import TextValueBadge, { TextValueBadgeProps } from './text-value-badge';

export default {
  title: 'Quartz/Badges',
  component: TextValueBadge,
} as Meta;

const Template: Story<TextValueBadgeProps> = (props) => (
  <TextValueBadge {...props} />
);

export const TextValue = Template.bind({});

TextValue.args = {
  text: 'features',
  value: 128,
};

TextValue.argTypes = {
  text: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
    },
  },
  value: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
    },
  },
  variant: {
    control: {
      type: 'select',
      options: ['white', 'gray'],
    },
    type: {
      required: false,
    },
  },
};

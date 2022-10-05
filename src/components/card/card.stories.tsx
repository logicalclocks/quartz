import { action } from '@storybook/addon-actions';
import React from 'react';
import { Story, Meta, ArgTypes } from '@storybook/react/types-6-0';

import Card, { CardProps } from '.';
import { Button } from '../button';
import CardSecondary, { CardSecondaryProps } from './card-secondary';

export default {
  title: 'Quartz/Cards',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (props) => <Card {...props} />;

const TemplateSecondary: Story<CardSecondaryProps> = (props) => (
  <CardSecondary {...props} />
);

export const Default = Template.bind({});

export const Secondary = TemplateSecondary.bind({});

Default.args = {
  title: 'Title',
  width: '830px',
  children: '',
  height: '270px',
  actions: (
    <Button variant="inline" pr="0" onClick={action('Card action')}>
      naked button
    </Button>
  ),
};

Secondary.args = {
  title: 'Title',
  width: '830px',
  height: '270px',
  children: 'content',
};

const argTypes = {
  children: {
    type: {
      name: 'string',
      required: true,
    },
    control: {
      type: 'object',
    },
    description: 'Card content',
  },
  title: {
    type: {
      name: 'string',
      required: false,
    },
    description: 'Card title',
    control: {
      type: 'text',
    },
  },
  height: {
    control: {
      type: 'text',
    },

    description: 'Card height (string or number px, %)',
  },

  width: {
    control: {
      type: 'text',
    },
    description: 'Card width (string or number px, %)',
  },
} as ArgTypes;

Default.argTypes = {
  ...argTypes,
  actions: {
    control: {
      type: 'text',
    },
    description: 'Any Components to show in the right side',
  },
  withoutShadow: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};

Secondary.argTypes = argTypes;

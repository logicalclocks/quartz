import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Box } from 'rebass';
import Callout, { ICalloutProps, CalloutTypes } from './index';
import Button from '../button';

export default {
  title: 'Quartz/Callout',
  component: Callout,
} as Meta;

const argTypes = {
  type: {
    control: {
      type: 'select',
      options: CalloutTypes,
    },
    type: {
      required: true,
      summary: 'valid, error, warning, neutral',
    },
  },
  content: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
      summary: 'string',
    },
  },
  cta: {
    control: {
      type: 'object',
    },
    type: {
      required: false,
      summary: 'component',
    },
  },
};

export const Default: Story<ICalloutProps> = (props) => (
  <Box width="700px">
    <Callout {...props} />
  </Box>
);

Default.args = {
  type: CalloutTypes.valid,
  content: 'lorem ipsum',
  cta: (
    <Button intent="secondary" onClick={action('onClick')}>
      Secondary
    </Button>
  ),
};

Default.argTypes = argTypes;

export const WithoutCTA: Story<ICalloutProps> = (props) => (
  <Box width="700px">
    <Callout {...props} />
  </Box>
);

WithoutCTA.args = {
  type: CalloutTypes.valid,
  content: 'lorem ipsum',
};

WithoutCTA.argTypes = argTypes;

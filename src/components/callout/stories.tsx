import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box } from 'rebass';
import Callout, { CalloutTypes } from './index';
import { Button } from '../button';

const meta: Meta<typeof Callout> = {
  title: 'Callout',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: CalloutTypes,
      },
    },
    content: {
      control: {
        type: 'text',
      },
    },
    cta: {
      control: {
        type: 'object',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Callout>;

const Template: Story = {
  render: (props) => (
    <Box width="700px">
      <Callout {...props} />
    </Box>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    type: CalloutTypes.valid,
    content: 'lorem ipsum',
    cta: (
      <Button intent="secondary" onClick={action('onClick')}>
        Secondary
      </Button>
    ),
  },
};

export const WithoutCTA: Story = {
  ...Template,
  args: {
    type: CalloutTypes.valid,
    content: 'lorem ipsum',
  },
};

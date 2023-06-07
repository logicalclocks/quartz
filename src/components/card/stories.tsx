import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import Card from '.';
import { Button } from '../button';
import CardSecondary from './card-secondary';
import { Flex } from '../flex';

const meta: Meta<typeof Card> = {
  title: 'Cards',
  component: Card,

  argTypes: {
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
  },
};
export default meta;

export const Template: StoryObj<typeof Card> = {
  args: {
    title: 'Title',
    width: '830px',
    maxHeight: '170px',
    actions: (
      <Button variant="inline" pr="0" onClick={action('Card action')}>
        naked button
      </Button>
    ),
    children: <Flex height="270px">Hello world!</Flex>,
    expandable: true,
  },
  render: (props) => <Card {...props} />,
};

export const TemplateSecondary: StoryObj<typeof CardSecondary> = {
  args: {
    title: 'Title',
    width: '830px',
    height: '270px',
    children: 'content',
  },
  render: (props) => <CardSecondary {...props} />,
};

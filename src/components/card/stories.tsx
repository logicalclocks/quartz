import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import CardComponent from '.';
import { Button } from '../button';
import { Flex } from '../flex';

const meta: Meta<typeof CardComponent> = {
  title: 'DataDisplay/Cards/Card',
  component: CardComponent,

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

export const Card: StoryObj<typeof CardComponent> = {
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
};

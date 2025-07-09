import type { Meta, StoryObj } from '@storybook/react';

import CardSecondaryComponent from './card-secondary';

const meta = {
  title: 'DataDisplay/Cards/CardSecondary',
  component: CardSecondaryComponent,
  argTypes: {
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
    contentProps: {},
  },
} satisfies Meta<typeof CardSecondaryComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardSecondary: Story = {
  args: {
    title: 'Secondary Card',
    children: 'Secondary Card content',
  },
};

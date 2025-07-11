import type { Meta, StoryObj } from '@storybook/react';

import CalloutWithButtonComponent from './index';
import { CalloutTypes } from '../callout';

const meta = {
  title: 'Feedback/Callouts/CalloutWithButton',
  component: CalloutWithButtonComponent,
} satisfies Meta<typeof CalloutWithButtonComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'test',
    type: CalloutTypes.valid,
    onClick: () => {},
    buttonContent: 'button',
  },
};

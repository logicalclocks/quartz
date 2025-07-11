import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box } from 'rebass';
import CalloutComponent, { CalloutTypes } from './index';
import { Button } from '../button';

const meta: Meta<typeof CalloutComponent> = {
  title: 'Feedback/Callouts/Callout',
  component: CalloutComponent,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: Object.values(CalloutTypes),
    },
    content: {
      control: { type: 'text' },
    },
    cta: {
      control: { type: 'object' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof CalloutComponent>;

const template: Partial<Story> = {
  render: (props) => (
    <Box width="700px">
      <CalloutComponent {...props} />
    </Box>
  ),
};

export const Valid: Story = {
  ...template,
  args: {
    type: CalloutTypes.valid,
    content: 'lorem ipsum',
  },
};
export const Warning: Story = {
  ...template,
  args: {
    type: CalloutTypes.warning,
    content: 'lorem ipsum',
  },
};

export const Error: Story = {
  ...template,
  args: {
    type: CalloutTypes.error,
    content: 'lorem ipsum',
  },
};
export const Neutral: Story = {
  ...template,
  args: {
    type: CalloutTypes.neutral,
    content: 'lorem ipsum',
  },
};

export const CalloutWithCTA: Story = {
  ...template,
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

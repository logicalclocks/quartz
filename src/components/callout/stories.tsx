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

type Story = StoryObj<typeof CalloutComponent>;

const Template: Story = {
  render: (props) => (
    <Box width="700px">
      <CalloutComponent {...props} />
    </Box>
  ),
};

export const Callout: Story = {
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

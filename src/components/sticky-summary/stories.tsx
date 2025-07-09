import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'rebass';
import StickySummaryComponent from './index';
import { Button } from '../button';

const meta: Meta<typeof StickySummaryComponent> = {
  title: 'DataDisplay/StickySummary',
  component: StickySummaryComponent,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    firstValue: {
      control: {
        type: 'text',
      },
    },
    secondValue: {
      control: {
        type: 'text',
      },
    },
    mainButton: {
      control: {
        type: 'object',
      },
      description: 'Component',
    },
    secondaryButton: {
      control: {
        type: 'object',
      },
      description: 'Component',
    },
    hasScrollOnScreen: {
      control: {
        type: 'boolean',
      },
    },
    errorsValue: {
      control: {
        type: 'text',
      },
    },
  },
};
export default meta;

export const StickySummary: StoryObj<typeof StickySummaryComponent> = {
  args: {
    title: 'Title',
    firstValue: 'value 1',
    secondValue: 'value 2',
    mainButton: (
      <Button intent="primary" isLoading>
        main
      </Button>
    ),
    secondaryButton: <Button intent="secondary">secondary</Button>,
    ternaryButton: <Button intent="secondary">ternary</Button>,
  },
  render: (props) => (
    <Box width="800px" pt="20px">
      <StickySummaryComponent {...props} />
    </Box>
  ),
};

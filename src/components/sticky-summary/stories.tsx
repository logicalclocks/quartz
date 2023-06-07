import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'rebass';
import Stickydescription from './index';
import { Button } from '../button';

const meta: Meta<typeof Stickydescription> = {
  title: 'Stickydescription',
  component: Stickydescription,
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

export const Default: StoryObj<typeof Stickydescription> = {
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
  },
  render: (props) => (
    <Box width="700px">
      <Stickydescription {...props} />
    </Box>
  ),
};

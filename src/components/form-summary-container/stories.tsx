import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'rebass';
import FormSummaryContainer from './index';

const meta: Meta<typeof FormSummaryContainer> = {
  title: 'FormSummaryContainer',
  component: FormSummaryContainer,
  argTypes: {
    hasScrollOnScreen: {
      control: {
        type: 'boolean',
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof FormSummaryContainer> = {
  args: {
    hasScrollOnScreen: false,
  },
  render: (props) => (
    <Box width="700px">
      <FormSummaryContainer {...props}>
        the content goes here
      </FormSummaryContainer>
    </Box>
  ),
};

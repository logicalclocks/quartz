import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'rebass';
import FormSummaryContainerComponent from './index';

const meta: Meta<typeof FormSummaryContainerComponent> = {
  title: 'Layout/FormSummaryContainer',
  component: FormSummaryContainerComponent,
  argTypes: {
    hasScrollOnScreen: {
      control: {
        type: 'boolean',
      },
    },
  },
};
export default meta;

export const FormSummaryContainer: StoryObj<
  typeof FormSummaryContainerComponent
> = {
  args: {
    hasScrollOnScreen: false,
  },
  render: (props) => (
    <Box width="700px">
      <FormSummaryContainerComponent {...props}>
        the content goes here
      </FormSummaryContainerComponent>
    </Box>
  ),
};

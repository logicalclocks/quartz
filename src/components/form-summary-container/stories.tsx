import { StoryObj, Meta } from '@storybook/react';
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
    mt: '20px',
    maxWidth: '900px',
    children: 'the content goes here',
  },
};

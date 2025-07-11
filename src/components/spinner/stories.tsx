import { StoryObj, Meta } from '@storybook/react';
import SpinnerComponent from '.';

const meta: Meta = {
  title: 'Feedback/Spinner',
  component: SpinnerComponent,
  argTypes: {
    color: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'number',
      },
    },
  },
};
export default meta;

export const Spinner: StoryObj<typeof SpinnerComponent> = {
  args: {
    color: 'labels.green',
    size: 20,
  },
};

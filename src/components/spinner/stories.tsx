import { StoryObj, Meta } from '@storybook/react';
import Spinner from '.';

const meta: Meta = {
  title: 'Spinner',
  component: Spinner,
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

export const Default: StoryObj<typeof Spinner> = {
  args: {
    color: 'labels.green',
    size: 20,
  },
  render: (props) => <Spinner {...props} />,
};

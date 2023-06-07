import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './index';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',

  argTypes: {
    onChange: {},
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    checked: {
      control: {
        type: 'boolean',
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Checkbox> = {
  args: {
    label: 'nullable',
  },
  render: (props) => <Checkbox {...props} />,
};

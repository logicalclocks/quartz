import { Meta, StoryObj } from '@storybook/react';
import CheckboxComponent from './index';

const meta: Meta<typeof CheckboxComponent> = {
  title: 'Forms/Checkboxes/Checkbox',
  component: CheckboxComponent,

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

export const Checkbox: StoryObj<typeof CheckboxComponent> = {
  args: {
    label: 'nullable',
  },
  render: (props) => <CheckboxComponent {...props} />,
};

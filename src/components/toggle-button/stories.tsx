import { StoryObj, Meta } from '@storybook/react';
import ToggleButtonComponent from './index';

const meta: Meta<typeof ToggleButtonComponent> = {
  title: 'Forms/ToggleButton',
  component: ToggleButtonComponent,
  argTypes: {
    onChange: {
      description: 'Change callback function',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    children: {
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

export const ToggleButton: StoryObj<typeof ToggleButtonComponent> = {
  args: {
    children: 'partition key only',
  },
  render: (props) => <ToggleButtonComponent {...props} />,
};

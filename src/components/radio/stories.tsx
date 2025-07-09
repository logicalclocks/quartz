import { StoryObj, Meta } from '@storybook/react';
import RadioComponent from './index';

const meta: Meta<typeof RadioComponent> = {
  title: 'Forms/Radios/Radio',
  component: RadioComponent,
  argTypes: {
    onChange: {
      description: 'Change callback function',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    addtionalText: {
      description: 'Array of strings',
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

export const Radio: StoryObj<typeof RadioComponent> = {
  args: {
    label: 'nullable',
  },
  render: (props) => <RadioComponent {...props} />,
};

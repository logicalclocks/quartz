import { StoryObj, Meta } from '@storybook/react';

import InputInfoComponent from '.';

const meta: Meta<typeof InputInfoComponent> = {
  title: 'Forms/Inputs/InputInfo',
  component: InputInfoComponent,
  argTypes: {
    children: {
      description: 'Message text',
    },
    intent: {
      control: {
        type: 'select',
        options: ['error', 'default'],
      },
      description: 'Message intent',
    },
  },
};
export default meta;

export const InputInfo: StoryObj<typeof InputInfoComponent> = {
  args: {
    intent: 'error',
    children: 'message',
  },
  render: (props) => <InputInfoComponent {...props} />,
};

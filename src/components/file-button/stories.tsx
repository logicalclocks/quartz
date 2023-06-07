import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import FileButton from './index';

const meta: Meta<typeof FileButton> = {
  title: 'Buttons',
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    modeNFiles: {
      control: {
        type: 'boolean',
      },
    },
    validExtensions: {
      control: {
        type: 'array',
        description: 'array of valid file extensions',
      },
    },
    onClick: {
      table: {
        description: 'On click callback function',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
};
export default meta;

export const FileButtonTemplate: StoryObj<typeof FileButton> = {
  args: {
    children: 'Upload new file',
    modeNFiles: false,
    validExtensions: ['.py', '.ipynb'],
    onClick: action('onClick'),
  },
  render: (props) => <FileButton {...props} />,
};

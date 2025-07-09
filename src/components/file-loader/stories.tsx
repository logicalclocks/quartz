import { StoryObj, Meta } from '@storybook/react';

import FileLoaderComponent from '.';

const meta: Meta<typeof FileLoaderComponent> = {
  title: 'Feedback/Progress/FileLoader',
  component: FileLoaderComponent,

  argTypes: {
    fileName: {
      control: {
        type: 'text',
      },
      description: 'File name',
    },
    isLoading: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
    located: {
      control: {
        type: 'text',
      },
      description: 'Upload destination',
    },
    percentage: {
      description: 'Uploading progress',
      control: {
        type: 'number',
        min: 0,
        max: 100,
      },
    },
    disabled: {
      control: {
        type: 'select',
        options: [false, true],
      },
    },
    removeHandler: {
      table: {
        type: {
          description: 'On click callback function',
        },
      },
    },
  },
};
export default meta;

export const FileLoader: StoryObj<typeof FileLoaderComponent> = {
  args: {
    fileName: 'TestFile.pdf',
    located: '/files/jars',
    percentage: 0,
  },

  render: (props) => <FileLoaderComponent {...props} />,
};

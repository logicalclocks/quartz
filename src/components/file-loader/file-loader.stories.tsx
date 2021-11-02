// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import FileLoader, { QuartzFileLoaderProps } from '.';

export default {
  title: 'Quartz/FileLoader',
  component: FileLoader,
} as Meta;

const Template: Story<QuartzFileLoaderProps> = (props) => (
  <FileLoader {...props} />
);

export const Loader = Template.bind({});

Loader.args = {
  fileName: 'TestFile.pdf',
  located: '/files/jars',
  totalChunks: 23,
  uploadedChunks: 3,
};

Loader.argTypes = {
  fileName: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
      summary: 'File name',
    },
  },
  isLoading: {
    type: {
      required: true,
    },
    control: {
      type: 'select',
      options: [true, false],
    },
  },
  located: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
      summary: 'Upload destination',
    },
  },
  disabled: {
    type: {
      required: false,
    },
    control: {
      type: 'select',
      options: [false, true],
    },
  },
  onClick: {
    table: {
      type: {
        summary: 'On click callback function',
      },
    },
    type: {
      required: true,
    },
  },
  totalChunk: {
    type: {
      required: false,
      summary: 'Total number of chunks',
    },
    control: {
      type: 'number',
    },
  },
  uploadedChunk: {
    type: {
      required: false,
      summary: 'Uploaded number of chunks',
    },
    control: {
      type: 'number',
    },
  },
};

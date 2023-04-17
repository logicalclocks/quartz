import React from 'react';
import { Story, Meta } from '@storybook/react';

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
  percentage: 0,
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
  percentage: {
    type: {
      required: false,
      summary: 'Uploading progress',
    },
    control: {
      type: 'number',
      min: 0,
      max: 100,
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
  removeHandler: {
    table: {
      type: {
        summary: 'On click callback function',
      },
    },
    type: {
      required: true,
    },
  },
};

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
  children: 'uploading to /files/jars',
};

Loader.argTypes = {
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
  isLoading: {
    type: {
      required: true,
    },
    control: {
      type: 'select',
      options: [true, false],
    },
  },
  children: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
      summary: 'Upload destination',
    },
  },
  fileName: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
      summary: 'File name',
    },
  },
};

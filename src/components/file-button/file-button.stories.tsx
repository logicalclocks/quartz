// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import FileButton, { QuartzFileButtonProps } from './index';

export default {
  title: 'Quartz/Buttons',
  component: FileButton,
} as Meta;

const FileButtonTemplate: Story<QuartzFileButtonProps> = (props) => (
  <FileButton {...props} />
);

export const File = FileButtonTemplate.bind({});

File.args = {
  intent: 'secondary',
  children: 'Upload new file',
  mode: 'oneFile',
  onClick: action('onClick'),
};

File.argTypes = {
  intent: {
    control: {
      type: 'select',
      options: ['secondary'],
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  mode: {
    control: {
      type: 'select',
      options: ['oneFile', 'nFiles'],
    },
  },
  destination: {
    control: {
      type: 'text',
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
  children: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
    },
  },
};

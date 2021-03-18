// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import FileButton, { QuartzFileButtonProps } from '.';

export default {
  title: 'Quartz/Buttons',
  component: FileButton,
} as Meta;

const Template: Story<QuartzFileButtonProps> = (props) => (
  <FileButton {...props} />
);

export const File = Template.bind({});

File.args = {
  intent: 'secondary',
  children: 'Button',
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
  icon: {
    control: {
      type: 'select',
      options: [undefined, faCoffee],
    },
    type: {
      summary:
        'Put icon component from @fortawesome/free-solid-svg-icons package',
    },
  },
};

// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import FileSystemExplorer, { FileSystemExplorerProps } from '.';
import Button from '../button';

export default {
  title: 'Quartz/FileSystemExplorer',
  component: FileSystemExplorer,
} as Meta;

const Template: Story<FileSystemExplorerProps> = (props) => (
  <FileSystemExplorer {...props} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'Title',
  width: '830px',
  children: '',
  height: '270px',
  actions: (
    <React.Fragment>
      <Button variant="inline" pr="0" onClick={action('Card action')}>
        Go directly to Jupyter notebook directory
      </Button>
    </React.Fragment>
  ),
};

Default.argTypes = {
  children: {
    control: {
      type: 'text',
    },
    type: {
      summary: 'Card content',
      required: true,
    },
  },
  title: {
    control: {
      type: 'text',
    },

    type: {
      summary: 'Card title',
    },
  },
  actions: {
    control: {
      type: 'text',
    },

    type: {
      summary: 'Any Components to show in the right side',
    },
  },
  height: {
    control: {
      type: 'text',
    },

    type: {
      summary: 'Card height (string or number px, %)',
    },
  },

  width: {
    control: {
      type: 'text',
    },

    type: {
      summary: 'Card width (string or number px, %)',
    },
  },
};

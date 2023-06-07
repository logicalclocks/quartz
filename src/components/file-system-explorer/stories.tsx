import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import FileSystemExplorer from '.';
import { Button } from '../button';
// Data
import testData from './test-data';

const meta: Meta<typeof FileSystemExplorer> = {
  title: 'FileSystemExplorer',
  component: FileSystemExplorer,
  argTypes: {
    title: {
      type: { name: 'string', required: false },
      description: 'Card title',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: {
          summary: 'Select a file',
        },
      },
    },
    mode: {
      type: { name: 'string', required: false },
      defaultValue: 'oneFile',
      description:
        'There are three modes to pick, "oneFile" for selecting just one file, "nFiles" for selecting many files and "oneFolder" for selecting one Folder',
      options: ['oneFile', 'nFiles', 'oneFolder'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: {
          summary: 'oneFile',
        },
      },
    },
    shortcutActions: {
      control: {
        type: 'select',
      },
      description: 'Shortcut: label and destination',
      options: ['GoToJupyter', 'Italic'],
      mapping: {
        GoToJupyter: (
          <Button
            padding="0"
            variant="inline"
            onClick={action('Shortcut action')}
          >
            {'->'}Go directly to Jupyter notebook directory
          </Button>
        ),
        Italic: (
          <Button
            padding="0"
            variant="inline"
            onClick={action('Shortcut action')}
          >
            <i>{'->'}Go directly to Jupyter notebook directory</i>
          </Button>
        ),
      },
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },

    data: {
      type: { name: 'string', required: true },
      control: {
        type: 'array',
      },
    },

    disableDownload: {
      type: { name: 'boolean', required: false },
      description: 'Disables downloading of files',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },

    validExtensions: {
      type: { name: 'string', required: false },
      description: 'Array of valid extensions of files to see and download.',
      defaultValue: [],
      control: {
        type: 'object',
      },
      table: {
        defaultValue: { summary: undefined },
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof FileSystemExplorer> = {
  args: {
    data: testData,
    shortcutActions: (
      <Button padding="0" variant="inline" onClick={action('Shortcut action')}>
        {'->'}Go directly to Jupyter notebook directory
      </Button>
    ),
    width: '830px',
    height: '100%',
  },
  render: (props) => <FileSystemExplorer {...props} />,
};

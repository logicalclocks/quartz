import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import FileExplorerFolder from '.';

export default {
  title: 'FileSystemExplorer/Folder',
  component: FileExplorerFolder,
  args: {
    name: 'folder',
    id: 5,
    isActive: false,
    selected: false,
    index: 3,
    setActiveFile: true,
    setActiveFolder: true,
    activeFolder: 0,
    selectPathListValue: 'path',
    handleLoadMore: (path: string, columnIndex: number) => {
      console.log('path', path);
      console.log('column index', columnIndex);
    },
    itemInfo: { attributes: { path: 'item info' } },
  },
} as Meta;

export const Default: StoryObj<typeof FileExplorerFolder> = {
  args: {
    name: 'Folder',
  },
  render: (props) => <FileExplorerFolder {...props} />,
};

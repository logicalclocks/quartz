import React from 'react';
import { Story, Meta } from '@storybook/react';

import FileExplorerFolder, { QuartzFileExplorerFolderProps } from '.';

export default {
  title: 'Quartz/FileSystemExplorer/Folder',
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

const Template: Story<QuartzFileExplorerFolderProps> = (props) => (
  <FileExplorerFolder {...props} />
);

export const Folder = Template.bind({});

Folder.args = {
  name: 'Folder',
};

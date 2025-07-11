import { StoryObj, Meta } from '@storybook/react';

import FolderExplorerComponent from '.';

const meta: Meta = {
  title: 'Miscellaneous/FileSystemExplorer/FolderExplorer',
  component: FolderExplorerComponent,
  args: {
    name: 'Folder',
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
export default meta;

export const Folder: StoryObj<typeof FolderExplorerComponent> = {};

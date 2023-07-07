import { Story, Meta } from '@storybook/react';

import FileItemExplorer, {
  Props as QuartzFileExplorerProps,
} from './FileItemExplorer';

const meta: Meta = {
  title: 'FileSystemExplorer/File',
  component: FileItemExplorer,
  args: {
    itemInfo: { attributes: { name: 'file-name' } },
    isActive: true,
    mode: 'oneFile',
    selected: false,
  },
};
export default meta;

export const File: Story<QuartzFileExplorerProps> = (props) => (
  <FileItemExplorer {...props} />
);

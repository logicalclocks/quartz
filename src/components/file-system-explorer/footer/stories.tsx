import { StoryObj, Meta } from '@storybook/react';

import FooterFileExplorer from './index';

export default {
  title: 'FileSystemExplorer/Footer',
  component: FooterFileExplorer,
  args: {
    value: 'pick a file',
    onClose: (key: any) => {
      console.log('onClose', key);
    },
    handleSelectFile: (activeFile: any, isDownload: boolean) => {
      console.log('active file', activeFile);
      console.log('is download', isDownload);
    },
    fileListValue: [],
    rootDir: '',
  },
} as Meta;

export const Default: StoryObj<typeof FooterFileExplorer> = {
  render: (props) => <FooterFileExplorer {...props} />,
};

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import FooterFileExplorer, { Props } from './index';

export default {
  title: 'Quartz/FileSystemExplorer/Footer',
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

const Template: Story<Props> = (props) => <FooterFileExplorer {...props} />;

export const Default = Template.bind({});

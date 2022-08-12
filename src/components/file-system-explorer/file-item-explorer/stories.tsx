import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import FileItemExplorer, {
  Props as QuartzFileExplorerProps,
} from './FileItemExplorer';

export default {
  title: 'Quartz/FileSystemExplorer/File',
  component: FileItemExplorer,
  args: {
    itemInfo: { attributes: { name: 'file-name' } },
    isActive: true,
    mode: 'oneFile',
    selected: false,
  },
} as Meta;

const Template: Story<QuartzFileExplorerProps> = (props) => (
  <FileItemExplorer {...props} />
);

export const File = Template.bind({});

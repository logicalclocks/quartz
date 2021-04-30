// // eslint-disable-next-line import/no-extraneous-dependencies
// import React from 'react';
// import { Story, Meta } from '@storybook/react/types-6-0';
//
// import FileExplorer, { QuartzFileExplorerProps } from '.';
//
// export default {
//   title: 'Quartz/FileSystemExplorer/File',
//   component: FileExplorer,
// } as Meta;
//
// const Template: Story<QuartzFileExplorerProps> = (props) => (
//   <FileExplorer {...props} />
// );
//
// export const File = Template.bind({});
//
// File.args = {
//   name: 'File',
// };
//
// File.argTypes = {
//   name: {
//     control: {
//       type: 'text',
//     },
//   },
//   isActive: {
//     control: {
//       type: 'boolean',
//     },
//   },
//   mode: {
//     control: {
//       type: 'select',
//       options: ['oneFile', 'nFiles'],
//       summary: 'Mode: one file or n-files',
//     },
//   },
//   selected: {
//     control: {
//       type: 'boolean',
//     },
//   },
//   onClick: {
//     table: {
//       type: {
//         summary: 'On click callback function',
//       },
//     },
//     type: {
//       required: true,
//     },
//   },
// };

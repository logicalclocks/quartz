// import React from 'react';
// import { Story, Meta } from '@storybook/react/types-6-0';
// import FooterFileExplorer from './index';
// import Button from '../../button';
//
// import fileExplorerFooter, { FileExplorerFooterProps } from '.';
//
// export default {
//   title: 'Quartz/FileSystemExplorer/Footer',
//   component: fileExplorerFooter,
// } as Meta;
//
// const Template: Story<FileExplorerFooterProps> = (props) => (
//   <FooterFileExplorer {...props} />
// );
//
// export const Default = Template.bind({});
//
// Default.args = {
//   value: 'pick a file',
//   mainButton: <Button intent="primary">Select</Button>,
//   secondaryButton: <Button variant="file-secondary">Back</Button>,
// };
//
// Default.argTypes = {
//   value: {
//     control: {
//       type: 'text',
//     },
//   },
//   mainButton: {
//     control: {
//       type: 'object',
//     },
//     type: {
//       summary: 'Component',
//     },
//   },
//   secondaryButton: {
//     control: {
//       type: 'object',
//     },
//     type: {
//       summary: 'Component',
//     },
//     intent: {
//       control: {
//         type: 'select',
//         options: ['secondary'],
//       },
//     },
//   },
// };

import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';

import { Value } from '../../../index';
import UploadButton from '../../file-button';

import FileExplorerInfoStyle from './file-explorer-info.styles';

export interface FileExplorerInfoProps extends Omit<BoxProps, 'css'> {
  children?: Array[any];
  activeFile?: object;
}

const FileExplorerInfo: FC<FileExplorerInfoProps> = ({
  children,
  activeFile,
}: FileExplorerInfoProps) => {
  return (
    <Box
      sx={{
        ...FileExplorerInfoStyle,
      }}
    >
      {console.log('activeFile in info: ', activeFile)}
      {/*{activeFile && (*/}
      {/*  <Value>{activeFile.title}</Value>*/}
      {/*  <Value>{activeFile.size}</Value>*/}
      {/*  <Value>{activeFile.creation}</Value>*/}
      {/*  <Value>{activeFile.last_update}</Value>*/}
      {/*  <Value>{activeFile.author}</Value>*/}
      {/*)}*/}
      {children}
      <UploadButton children="Download file" />
    </Box>
  );
};

export default FileExplorerInfo;

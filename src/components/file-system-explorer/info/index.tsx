import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';

import { Value } from '../../../index';
import UploadButton from '../../file-button';

import { FileExplorerInfoStyle, blockInfo } from './file-explorer-info.styles';
import Labeling from '../../typography/labeling';

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
      <Box
        sx={{
          ...blockInfo,
        }}
      >
        <Value as="h4">{activeFile.name}</Value>
        <Labeling gray>
          size <span>{activeFile.size}</span>
        </Labeling>
        <Labeling gray>
          creation <span>{activeFile.creation}</span>
        </Labeling>
        <Labeling gray>
          last update <span>{activeFile.last_update}</span>
        </Labeling>
        <Labeling gray>
          author <span>{activeFile.author}</span>
        </Labeling>
      </Box>

      {children}
      <UploadButton children="Download file" />
    </Box>
  );
};

export default FileExplorerInfo;

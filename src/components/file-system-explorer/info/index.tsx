import React, { FC } from 'react';
import { Box, BoxProps, Flex } from 'rebass';

import { Value } from '../../../index';
import UploadButton from '../../file-button';

import {
  FileExplorerInfoStyle,
  blockInfoStyles,
  contentInfoStyles,
} from './file-explorer-info.styles';
import Labeling from '../../typography/labeling';

export interface FileExplorerInfoProps extends Omit<BoxProps, 'css'> {
  children?: string[];
  activeFile?: { [key: string]: string };
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
          ...blockInfoStyles,
        }}
      >
        <Value as="h2" marginBottom="32px" textAlign="center">
          {activeFile?.name}
        </Value>
        <Flex
          sx={{
            '> div > div': {
              height: '30px',
            },
          }}
        >
          <Box
            sx={{
              ...contentInfoStyles(true),
            }}
          >
            <Labeling gray>size</Labeling>
            <Labeling gray>creation</Labeling>
            <Labeling gray>last update</Labeling>
            <Labeling gray>author</Labeling>
          </Box>
          <Box
            sx={{
              ...contentInfoStyles(false),
            }}
          >
            <Labeling>{activeFile?.size}</Labeling>
            <Labeling>{activeFile?.creation}</Labeling>
            <Labeling>{activeFile?.last_update}</Labeling>
            <Labeling>{activeFile?.author}</Labeling>
          </Box>
        </Flex>
      </Box>
      {children}
      <UploadButton children="Download file" />
    </Box>
  );
};

export default FileExplorerInfo;

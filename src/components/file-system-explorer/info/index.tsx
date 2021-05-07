import React, { FC } from 'react';
import { Box, BoxProps, Flex } from 'rebass';

import { Value } from '../../../index';

import {
  FileExplorerInfoStyle,
  blockInfoStyles,
  contentInfoStyles,
} from './file-explorer-info.styles';
import Labeling from '../../typography/labeling';
import { ActiveFile } from '../index';
import { formatSizeUnits } from '../../../utils/getFormatSizeUnit';

export interface FileExplorerInfoProps extends Omit<BoxProps, 'css'> {
  children?: string[];
  activeFile?: ActiveFile | null;
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
          {activeFile?.attributes.name}
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
            {console.log('activeFile: ', activeFile)}
            <Labeling>{formatSizeUnits(activeFile?.attributes.size)}</Labeling>
            <Labeling>{activeFile?.attributes.accessTime}</Labeling>
            <Labeling>{activeFile?.attributes.modificationTime}</Labeling>
            <Labeling>{activeFile?.attributes.owner}</Labeling>
          </Box>
        </Flex>
      </Box>
      {children}
    </Box>
  );
};

export default FileExplorerInfo;
